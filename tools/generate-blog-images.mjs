#!/usr/bin/env node
/**
 * Generate Fal.ai blog images using fal-ai/gpt-image-1/text-to-image.
 * Switched from flux-pro/v1.1-ultra after finding it still garbles any
 * UI/text content. gpt-image-1 renders legible, correct text and lets
 * prompts depict an actual on-topic product/dashboard mockup instead of
 * generic objects (books, hallways) that don't relate to the post.
 *
 * Usage:
 *   node tools/generate-blog-images.mjs
 *   node tools/generate-blog-images.mjs --slug property-management-automation-guide
 *
 * Output: .tmp/blog-images-v3.json with { slug: url } map
 * After running: update image fields in lib/blog-posts.ts
 */

import { readFileSync, mkdirSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUTPUT_DIR = join(ROOT, ".tmp");
mkdirSync(OUTPUT_DIR, { recursive: true });

const envPath = join(ROOT, ".env.local");
const envRaw = readFileSync(envPath, "utf8");
const env = {};
for (const line of envRaw.split("\n")) {
  const match = line.match(/^([^#=]+)=(.*)$/);
  if (match) env[match[1].trim()] = match[2].trim();
}

const FAL_KEY = env.FAL_AI_API_KEY;
if (!FAL_KEY) {
  console.error("❌  FAL_AI_API_KEY not found in .env.local");
  process.exit(1);
}

const STYLE = "photorealistic, premium SaaS product photography, shallow depth of field, soft natural daylight, clean modern desk, legible correct on-screen text and UI labels, no spelling errors";

const posts = [
  {
    slug: "property-management-automation-guide",
    prompt: `A tablet on a wooden desk displaying a property management app screen titled "Rental Lease" with a green "Signed" checkmark badge, a row of small house-unit icons, and a rent due summary, a labeled "KEYS" keychain tag and house keys resting beside it, a residential apartment building visible softly out of focus through a window behind, ${STYLE}`,
  },
  {
    slug: "recruiting-agency-automation",
    prompt: `A laptop screen on a desk showing a recruiting pipeline dashboard titled "Candidate Pipeline" with columns labeled "Sourced", "Interview", "Offer", and "Placed", each with small candidate profile cards, a stack of resume papers (cover page blank, no body text) beside the laptop, warm office light, ${STYLE}`,
  },
  {
    slug: "hvac-dispatch-software",
    prompt: `A tablet mounted in an HVAC service van showing a dispatch map app titled "Today's Jobs" with technician location pins and a job card reading "Job #214 — Assigned", an HVAC tool bag visible on the van seat, dashboard and windshield in soft focus, daylight, ${STYLE}`,
  },
  {
    slug: "law-firm-intake-automation",
    prompt: `A tablet on a mahogany desk showing a legal intake dashboard titled "New Matter Intake" with a practice-area routing label "Family Law" and a green "Retainer Signed" status badge, a closed leather portfolio and fountain pen beside it, a small brass scale-of-justice figurine softly out of focus, warm lamp light, ${STYLE}`,
  },
  {
    slug: "real-estate-lead-automation",
    prompt: `A tablet on a desk showing a real estate CRM dashboard titled "Lead Pipeline" with a new lead card marked "Responded — 2 min" and a small house listing thumbnail, a house key resting beside the tablet, a model townhouse softly out of focus in the background, golden hour light, ${STYLE}`,
  },
  {
    slug: "ai-chatbot-small-business",
    prompt: `A laptop screen on a desk showing a website chat widget open in the corner with a short clean exchange — visitor message "Do you serve small businesses?" and a reply bubble "Yes! Let's find the right fit." — with a "Book a Call" button below, warm ambient room light, ${STYLE}`,
  },
  {
    slug: "insurance-broker-automation",
    prompt: `A tablet on a desk showing an insurance broker dashboard titled "Policy Renewals" with a policy card marked "Renewal Due — Reminder Sent" and a small umbrella icon, a closed leather folder and calculator beside it, warm desk lamp light, ${STYLE}`,
  },
  {
    slug: "healthcare-staffing-automation-guide",
    prompt: `A tablet on a coordinator's desk showing a healthcare staffing dashboard titled "Today's Shifts" with a shift card marked "Confirmed" and a small nurse badge icon, a stethoscope resting beside the tablet, soft clinical daylight, ${STYLE}`,
  },
  {
    slug: "healthcare-timesheet-invoice-automation",
    prompt: `A tablet on a desk showing a timesheet approval app titled "Timesheets" with an entry marked "Approved — Invoice Generated" and a small dollar-amount summary, a sealed envelope and pen resting beside it, warm desk lamp light, ${STYLE}`,
  },
  {
    slug: "ai-for-healthcare-staffing-workflows",
    prompt: `A tablet on a desk showing a workflow automation diagram titled "Staffing Workflow" with five connected nodes labeled "Request", "Match", "Confirm", "Shift", "Invoice" linked by arrows, clean hospital corridor softly out of focus in the background, ${STYLE}`,
  },
  {
    slug: "automate-invoice-follow-up",
    prompt: `A tablet on a desk showing an invoicing dashboard titled "Invoices" with one row marked "Paid" in green and one marked "Reminder Sent" in amber, a sealed envelope resting beside the tablet, warm desk lamp light, ${STYLE}`,
  },
  {
    slug: "ai-voice-agent-small-business",
    prompt: `A smartphone on a desk showing an active call screen titled "AI Agent — Calling Lead" with a live transcript line "Hi, I'm calling about your inquiry..." and a waveform animation, soft screen glow in a dim room, ${STYLE}`,
  },
  {
    slug: "cost-of-manual-scheduling",
    prompt: `A split-composition desk scene: a messy paper wall calendar with crossed-out dates and a coffee cup on the left, a clean tablet showing a scheduling app titled "This Week — Auto-Filled" on the right, warm desk lamp light, ${STYLE}`,
  },
  {
    slug: "business-automation-windsor-ontario",
    prompt: `A tablet on a small business owner's desk showing a dashboard titled "Automated Tasks — 14 This Week" with a simple bar chart, a window behind showing a soft-focus view of a mid-size Canadian downtown at dusk with warm building lights, ${STYLE}`,
  },
  {
    slug: "custom-software-vs-saas",
    prompt: `Two tablets side by side on a desk, the left screen titled "Off-the-Shelf SaaS" showing a generic locked feature list, the right screen titled "Custom Built" showing a tailored dashboard matching a business logo mark, warm office light, ${STYLE}`,
  },
  {
    slug: "what-is-business-automation",
    prompt: `A tablet on a desk showing a simple automation flow diagram titled "If This, Then That" with three connected boxes — "New Lead", "Send Welcome Email", "Notify Team" — linked by arrows, clean minimal UI, soft daylight, ${STYLE}`,
  },
  {
    slug: "business-automation-cost-breakdown",
    prompt: `A tablet on a desk showing a cost breakdown dashboard titled "Project Estimate" with line items "Discovery", "Build", "Support" and a total at the bottom, a calculator resting beside it, warm pooled light, ${STYLE}`,
  },
  {
    slug: "signs-business-ready-for-automation",
    prompt: `A tablet on a desk showing a readiness assessment checklist titled "Are You Ready?" with several items checked in green and one unchecked in gray, warm desk lamp light, clean minimal UI, ${STYLE}`,
  },
  {
    slug: "crm-automation-small-business",
    prompt: `A tablet on a tidy desk showing a CRM pipeline dashboard titled "Deals" with columns "New", "Contacted", "Won" and small contact cards with avatar circles, a small potted plant beside it, warm ambient light, ${STYLE}`,
  },
  {
    slug: "how-to-choose-automation-agency",
    prompt: `A tablet on a desk showing an agency comparison checklist titled "Evaluating Partners" with two columns of green checkmarks and red X marks side by side, warm office light, clean minimal UI, ${STYLE}`,
  },
  {
    slug: "healthcare-staffing-automation-roi",
    prompt: `A tablet on a desk showing an ROI dashboard titled "Savings This Quarter" with a green upward trend line chart and a dollar total, a stethoscope softly out of focus in the background, warm light, ${STYLE}`,
  },
  {
    slug: "best-business-automation-tools-2026",
    prompt: `A tablet on a desk showing a software comparison grid titled "Top Tools 2026" with four small app icons and star ratings beneath each, clean minimal UI, soft overhead light, ${STYLE}`,
  },
];

const args = process.argv.slice(2);
const slugFilter = args.includes("--slug") ? args[args.indexOf("--slug") + 1] : null;
const toGenerate = slugFilter ? posts.filter((p) => p.slug === slugFilter) : posts;

if (toGenerate.length === 0) {
  console.error(`❌  No post found with slug: ${slugFilter}`);
  process.exit(1);
}

const OUTPUT_FILE = join(OUTPUT_DIR, "blog-images-v3.json");
let results = {};
try {
  results = JSON.parse(readFileSync(OUTPUT_FILE, "utf8"));
} catch {
  // fresh start
}

async function generateImage(slug, prompt) {
  console.log(`\n🎨  Generating: ${slug}`);

  const res = await fetch("https://fal.run/fal-ai/gpt-image-1/text-to-image", {
    method: "POST",
    headers: {
      Authorization: `Key ${FAL_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
      image_size: "1536x1024",
      quality: "high",
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Fal.ai error ${res.status}: ${text}`);
  }

  const data = await res.json();
  const url = data?.images?.[0]?.url;
  if (!url) throw new Error(`No image URL in response: ${JSON.stringify(data)}`);
  return url;
}

async function main() {
  console.log(`\n🖼️   Generating ${toGenerate.length} blog image(s) via Fal.ai gpt-image-1\n`);

  let generated = 0, skipped = 0, failed = 0;

  for (const post of toGenerate) {
    if (results[post.slug] && !slugFilter) {
      console.log(`⏭️   Skipping ${post.slug} (already generated)`);
      skipped++;
      continue;
    }

    const MAX_RETRIES = 3;
    let lastErr;
    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
      try {
        const url = await generateImage(post.slug, post.prompt);
        results[post.slug] = url;
        console.log(`    ✅  ${url}`);
        writeFileSync(OUTPUT_FILE, JSON.stringify(results, null, 2));
        generated++;
        lastErr = null;
        break;
      } catch (err) {
        lastErr = err;
        console.warn(`    ⚠️   Attempt ${attempt} failed: ${err.message}`);
        if (attempt < MAX_RETRIES) await new Promise((r) => setTimeout(r, attempt * 5000));
      }
    }
    if (lastErr) {
      console.error(`    ❌  Failed after ${MAX_RETRIES} attempts: ${lastErr.message}`);
      failed++;
    }

    if (toGenerate.indexOf(post) < toGenerate.length - 1) {
      await new Promise((r) => setTimeout(r, 2000));
    }
  }

  console.log(`\n📊  Results: Generated: ${generated} | Skipped: ${skipped} | Failed: ${failed}`);
  console.log(`📄  Saved to: ${OUTPUT_FILE}`);
}

main().catch((err) => {
  console.error("\n❌ ", err.message);
  process.exit(1);
});
