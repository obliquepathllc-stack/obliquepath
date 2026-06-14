#!/usr/bin/env node
/**
 * GSC Autopilot — obliquepath.dev
 *
 * Usage:
 *   node tools/gsc-autopilot.js              # report only
 *   node tools/gsc-autopilot.js --fix        # rewrite meta for low-CTR pages
 *   node tools/gsc-autopilot.js --generate   # draft new posts for striking-distance keywords
 *   node tools/gsc-autopilot.js --all        # everything
 *
 * Env required (in .env.local or Vercel):
 *   GSC_SERVICE_ACCOUNT_JSON_B64   base64 of the service account JSON key
 *   GSC_SITE_URL                   e.g. sc-domain:obliquepath.dev
 *   Z_AI_API_KEY                   for AI-generated content (optional)
 */

require("dotenv").config({ path: require("path").join(__dirname, "..", ".env.local") });

const { google } = require("googleapis");
const fs = require("fs");
const path = require("path");

const SITE_URL = process.env.GSC_SITE_URL;
const JSON_B64 = process.env.GSC_SERVICE_ACCOUNT_JSON_B64;

if (!JSON_B64) {
  console.error("❌  GSC_SERVICE_ACCOUNT_JSON_B64 not found in .env.local");
  console.error("    Follow the setup guide to create a service account key.");
  process.exit(1);
}
if (!SITE_URL) {
  console.error("❌  GSC_SITE_URL not found in .env.local (e.g. sc-domain:obliquepath.dev)");
  process.exit(1);
}

const OUTPUT_DIR = path.join(__dirname, "..", ".tmp");
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

// ── Auth ──────────────────────────────────────────────────────────────────────

function getAuth() {
  const keyJson = JSON.parse(Buffer.from(JSON_B64, "base64").toString("utf8"));
  return new google.auth.GoogleAuth({
    credentials: keyJson,
    scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
  });
}

// ── GSC Queries ───────────────────────────────────────────────────────────────

async function fetchSearchAnalytics(auth, { dimensions, rowLimit = 1000, startDate, endDate }) {
  const sc = google.searchconsole({ version: "v1", auth });
  const today = new Date();
  const end = endDate ?? today.toISOString().slice(0, 10);
  const start = startDate ?? new Date(today - 90 * 86400000).toISOString().slice(0, 10);

  const res = await sc.searchanalytics.query({
    siteUrl: SITE_URL,
    requestBody: {
      startDate: start,
      endDate: end,
      dimensions,
      rowLimit,
    },
  });
  return res.data.rows ?? [];
}

// ── Analysis ─────────────────────────────────────────────────────────────────

function analyzeKeywords(rows) {
  const strikingDistance = rows
    .filter((r) => r.position >= 5 && r.position <= 20 && r.impressions >= 30)
    .sort((a, b) => b.impressions - a.impressions);

  const quickWins = rows
    .filter((r) => r.clicks > 0 && r.position >= 10 && r.position <= 15)
    .sort((a, b) => b.clicks - a.clicks);

  const lowCtr = rows
    .filter((r) => r.impressions >= 100 && r.ctr < 0.03 && r.position <= 15)
    .sort((a, b) => b.impressions - a.impressions);

  return { strikingDistance, quickWins, lowCtr };
}

function analyzePages(rows) {
  const lowCtrPages = rows
    .filter((r) => r.impressions >= 50 && r.ctr < 0.02)
    .sort((a, b) => b.impressions - a.impressions);

  const topPages = rows
    .filter((r) => r.clicks > 0)
    .sort((a, b) => b.clicks - a.clicks)
    .slice(0, 10);

  return { lowCtrPages, topPages };
}

// ── Report ────────────────────────────────────────────────────────────────────

function formatRow(r, dims) {
  const keys = r.keys ?? [];
  const label = dims.map((d, i) => `${d}: ${keys[i] ?? "?"}`).join(" | ");
  return `  ${label.padEnd(80)} clicks:${String(r.clicks).padStart(5)}  imp:${String(r.impressions).padStart(6)}  ctr:${(r.ctr * 100).toFixed(1).padStart(5)}%  pos:${r.position.toFixed(1).padStart(5)}`;
}

async function runReport(auth) {
  console.log("\n📊  Fetching GSC data for", SITE_URL, "(last 90 days)...\n");

  const [kwRows, pageRows] = await Promise.all([
    fetchSearchAnalytics(auth, { dimensions: ["query"] }),
    fetchSearchAnalytics(auth, { dimensions: ["page"] }),
  ]);

  const { strikingDistance, quickWins, lowCtr: lowCtrKw } = analyzeKeywords(kwRows);
  const { lowCtrPages, topPages } = analyzePages(pageRows);

  let report = `# GSC Report — obliquepath.dev\nGenerated: ${new Date().toISOString()}\n\n`;

  report += `## Overview\n`;
  report += `- Total keywords tracked: ${kwRows.length}\n`;
  report += `- Total pages tracked: ${pageRows.length}\n`;
  report += `- Total clicks (90d): ${kwRows.reduce((s, r) => s + r.clicks, 0)}\n`;
  report += `- Total impressions (90d): ${kwRows.reduce((s, r) => s + r.impressions, 0)}\n\n`;

  report += `## 🎯 Striking Distance Keywords (pos 5-20, 30+ impressions)\n`;
  report += `These keywords are almost ranking — a content push can get them to top 5.\n\n`;
  if (strikingDistance.length === 0) {
    report += "  None yet — keep building content.\n";
  } else {
    strikingDistance.slice(0, 20).forEach((r) => { report += formatRow(r, ["query"]) + "\n"; });
  }

  report += `\n## ⚡ Quick Wins (clicks > 0, pos 10-15)\n`;
  report += `These pages are getting traffic but could rank higher with better content.\n\n`;
  if (quickWins.length === 0) {
    report += "  None yet.\n";
  } else {
    quickWins.slice(0, 10).forEach((r) => { report += formatRow(r, ["query"]) + "\n"; });
  }

  report += `\n## 📉 Low CTR Keywords (100+ impressions, <3% CTR, pos ≤15)\n`;
  report += `High impressions but nobody clicks — meta title/description needs rewriting.\n\n`;
  if (lowCtrKw.length === 0) {
    report += "  None — CTR is healthy.\n";
  } else {
    lowCtrKw.slice(0, 10).forEach((r) => { report += formatRow(r, ["query"]) + "\n"; });
  }

  report += `\n## 📄 Top Pages by Clicks\n\n`;
  topPages.forEach((r) => { report += formatRow(r, ["page"]) + "\n"; });

  report += `\n## 📄 Low CTR Pages (50+ impressions, <2% CTR)\n`;
  report += `These pages show up in search but aren't getting clicked.\n\n`;
  if (lowCtrPages.length === 0) {
    report += "  None — page CTR is healthy.\n";
  } else {
    lowCtrPages.slice(0, 15).forEach((r) => { report += formatRow(r, ["page"]) + "\n"; });
  }

  const outPath = path.join(OUTPUT_DIR, "seo-report.md");
  fs.writeFileSync(outPath, report);
  console.log(report);
  console.log(`\n✅  Report saved to ${outPath}`);

  return { strikingDistance, quickWins, lowCtrKw, lowCtrPages, topPages };
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);
  const mode = {
    report: args.length === 0 || args.includes("--report"),
    fix: args.includes("--fix") || args.includes("--all"),
    generate: args.includes("--generate") || args.includes("--all"),
  };

  let auth;
  try {
    auth = await getAuth().getClient();
  } catch (err) {
    console.error("❌  Auth failed:", err.message);
    console.error("    Make sure the service account has been added to GSC with Restricted access.");
    process.exit(1);
  }

  const data = await runReport(auth);

  if (mode.fix) {
    console.log("\n🔧  --fix mode: meta rewriting coming soon (needs Z_AI_API_KEY)");
  }
  if (mode.generate) {
    console.log("\n✍️   --generate mode: post drafting coming soon (needs Z_AI_API_KEY)");
    if (data.strikingDistance.length > 0) {
      console.log("  Top striking-distance targets to write content for:");
      data.strikingDistance.slice(0, 5).forEach((r) => {
        console.log(`  → "${r.keys[0]}" (pos ${r.position.toFixed(1)}, ${r.impressions} impressions)`);
      });
    }
  }
}

main().catch((err) => {
  console.error("\n❌ ", err.message);
  process.exit(1);
});
