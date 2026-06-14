#!/usr/bin/env node
/**
 * Generate Fal.ai blog images for all 15 blog posts.
 *
 * Usage:
 *   node tools/generate-blog-images.mjs
 *   node tools/generate-blog-images.mjs --slug healthcare-staffing-automation-guide
 *
 * Output: .tmp/blog-images.json with { slug: url } map
 * After running: update image fields in lib/blog-posts.ts
 */

import { readFileSync, mkdirSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUTPUT_DIR = join(ROOT, ".tmp");
mkdirSync(OUTPUT_DIR, { recursive: true });

// Load env
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

const posts = [
  {
    slug: "healthcare-staffing-automation-guide",
    prompt:
      "Cinematic overhead flat-lay of a healthcare coordinator's desk at night: a clipboard with shift schedules, a laptop with a dashboard, a cold coffee, warm amber desk lamp. Dark matte surface, premium editorial aesthetic, muted tones, no people, no text visible",
  },
  {
    slug: "healthcare-timesheet-invoice-automation",
    prompt:
      "Cinematic close-up of a printed timesheet on a dark desk with a pen resting across it, soft warm ambient light, clean minimal composition, shallow depth of field, premium editorial still-life aesthetic, muted earth tones, no people",
  },
  {
    slug: "ai-for-healthcare-staffing-workflows",
    prompt:
      "Cinematic perspective shot down a clean modern hospital corridor, empty, soft natural light from windows on one side, warm neutral tones, premium architectural photography aesthetic, calm and trustworthy, no people",
  },
  {
    slug: "automate-invoice-follow-up",
    prompt:
      "Cinematic flat-lay of scattered invoices and a single open laptop showing a clean dashboard on a dark wood desk, warm desk lamp glow, one envelope sealed and ready, premium business editorial aesthetic, muted warm palette, no people",
  },
  {
    slug: "ai-voice-agent-small-business",
    prompt:
      "Cinematic close-up of a modern smartphone face-up on a dark surface, screen showing an incoming call notification with a subtle waveform, soft warm screen glow against a dark ambient background, premium product photography aesthetic, no people",
  },
  {
    slug: "cost-of-manual-scheduling",
    prompt:
      "Cinematic close-up of an open paper calendar on a dark desk with circled dates and handwritten notes, a coffee cup to the side going cold, warm desk lamp, premium editorial still-life aesthetic, muted neutral tones, no people",
  },
  {
    slug: "business-automation-windsor-ontario",
    prompt:
      "Cinematic wide shot of a Canadian city at dusk, warm amber office building lights reflected on wet pavement below, muted blue-gray sky, premium editorial photography, atmospheric depth, no people visible",
  },
  {
    slug: "custom-software-vs-saas",
    prompt:
      "Cinematic flat-lay of two printed roadmap documents on a dark desk, one neatly organized and one with handwritten annotations, a pen between them, warm focused light, premium business editorial aesthetic, muted tones, no people",
  },
  {
    slug: "what-is-business-automation",
    prompt:
      "Cinematic close-up of clean mechanical gears in soft focus on the left and a modern laptop keyboard in sharp focus on the right, the contrast of old and new, warm ambient light, dark background, premium editorial photography, no people",
  },
  {
    slug: "business-automation-cost-breakdown",
    prompt:
      "Cinematic flat-lay of a calculator, a neat notepad with handwritten numbers, and a pen on a dark matte desk, warm pool of light from above, premium editorial still-life, minimal composition, muted warm tones, no people",
  },
  {
    slug: "signs-business-ready-for-automation",
    prompt:
      "Cinematic close-up of a printed checklist on a dark desk surface, seven boxes checked and three empty, a pen resting diagonally, warm focused desk lamp, clean minimal composition, premium editorial aesthetic, muted tones, no people",
  },
  {
    slug: "crm-automation-small-business",
    prompt:
      "Cinematic overhead shot of a tidy desk with a CRM pipeline open on a laptop screen, sticky notes with names arranged in columns beside it, warm ambient light, premium editorial aesthetic, muted earth palette, no people",
  },
  {
    slug: "how-to-choose-automation-agency",
    prompt:
      "Cinematic overhead flat-lay of two printed proposals side by side on a dark desk, one with a signature at the bottom and one without, a pen positioned between them, warm desk lamp, premium editorial aesthetic, muted tones, no people",
  },
  {
    slug: "healthcare-staffing-automation-roi",
    prompt:
      "Cinematic close-up of a printed financial chart on paper showing an upward trend, on a dark desk surface with a pen pointing to a number, warm ambient light, clean premium editorial aesthetic, muted warm tones, no people",
  },
  {
    slug: "best-business-automation-tools-2026",
    prompt:
      "Cinematic flat-lay of four modern devices — laptop, tablet, phone, small speaker — arranged neatly on a dark matte desk, all screens off, clean product photography aesthetic, soft overhead warm light, premium minimal composition, no people",
  },
];

// Filter by slug if --slug arg provided
const args = process.argv.slice(2);
const slugFilter = args.includes("--slug") ? args[args.indexOf("--slug") + 1] : null;
const toGenerate = slugFilter ? posts.filter((p) => p.slug === slugFilter) : posts;

if (toGenerate.length === 0) {
  console.error(`❌  No post found with slug: ${slugFilter}`);
  process.exit(1);
}

const OUTPUT_FILE = join(OUTPUT_DIR, "blog-images.json");
let results = {};
try {
  results = JSON.parse(readFileSync(OUTPUT_FILE, "utf8"));
} catch {
  // fresh start
}

async function generateImage(slug, prompt) {
  console.log(`\n🎨  Generating: ${slug}`);
  console.log(`    Prompt: ${prompt.slice(0, 80)}...`);

  const res = await fetch("https://fal.run/fal-ai/flux/dev", {
    method: "POST",
    headers: {
      Authorization: `Key ${FAL_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
      image_size: "landscape_16_9",
      num_inference_steps: 28,
      guidance_scale: 3.5,
      num_images: 1,
      enable_safety_checker: true,
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
  console.log(`\n🖼️   Generating ${toGenerate.length} blog image(s) via Fal.ai flux/dev\n`);

  let generated = 0;
  let skipped = 0;
  let failed = 0;

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

    // Rate limit: 1 per 3 seconds
    if (toGenerate.indexOf(post) < toGenerate.length - 1) {
      await new Promise((r) => setTimeout(r, 3000));
    }
  }

  console.log(`\n📊  Results:`);
  console.log(`    Generated: ${generated}`);
  console.log(`    Skipped:   ${skipped}`);
  console.log(`    Failed:    ${failed}`);
  console.log(`\n📄  Image URLs saved to: ${OUTPUT_FILE}`);

  console.log("\n📋  Copy these into lib/blog-posts.ts:\n");
  for (const [slug, url] of Object.entries(results)) {
    console.log(`  slug: "${slug}"`);
    console.log(`  image: "${url}"`);
    console.log();
  }
}

main().catch((err) => {
  console.error("\n❌ ", err.message);
  process.exit(1);
});
