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
    slug: "property-management-automation-guide",
    prompt:
      "Cinematic overhead flat-lay of a property manager's dark wood desk at night: a printed lease agreement, a set of keys, a small house keychain, warm amber desk lamp glow, premium editorial real-estate aesthetic, muted tones, no people, no text visible",
  },
  {
    slug: "recruiting-agency-automation",
    prompt:
      "Cinematic close-up of a clean desk with a stack of resumes neatly fanned out and a laptop showing a soft glowing pipeline interface, warm ambient light, premium editorial business aesthetic, muted earth tones, no people, no readable text",
  },
  {
    slug: "hvac-dispatch-software",
    prompt:
      "Cinematic close-up of a service van dashboard at dusk with a phone mounted showing a soft glowing map pin, warm amber light through the windshield, premium editorial trades aesthetic, muted tones, no people visible",
  },
  {
    slug: "law-firm-intake-automation",
    prompt:
      "Cinematic flat-lay of a leather-bound legal document and a fountain pen on a dark mahogany desk, soft warm lamp light, a small brass scale of justice figurine softly out of focus in the background, premium editorial legal aesthetic, muted tones, no people",
  },
  {
    slug: "real-estate-lead-automation",
    prompt:
      "Cinematic shot of a modern house key resting on a printed property listing sheet on a dark desk, warm golden hour light through a window, premium real estate editorial aesthetic, muted warm tones, no people, no readable text",
  },
  {
    slug: "ai-chatbot-small-business",
    prompt:
      "Cinematic close-up of a laptop screen glowing softly in a dark room with a subtle chat bubble interface light, warm ambient ember tones reflecting off the desk, premium minimal tech editorial aesthetic, no people, no readable text",
  },
  {
    slug: "insurance-broker-automation",
    prompt:
      "Cinematic flat-lay of an insurance policy folder and a calculator on a dark desk, a small umbrella figurine softly out of focus nearby, warm desk lamp glow, premium editorial finance aesthetic, muted tones, no people, no readable text",
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
