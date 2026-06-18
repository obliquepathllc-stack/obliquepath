#!/usr/bin/env node
/**
 * Generate Fal.ai blog images using flux-pro/v1.1-ultra.
 * Switched from flux/dev after garbled-text-on-paper artifacts were found
 * in production (open books/documents render fake illegible text).
 * All prompts below avoid open books, documents, or any readable surface.
 *
 * Usage:
 *   node tools/generate-blog-images.mjs
 *   node tools/generate-blog-images.mjs --slug property-management-automation-guide
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

const NO_TEXT = "no text, no books, no papers, no documents, no readable writing of any kind";

const posts = [
  {
    slug: "property-management-automation-guide",
    prompt: `Cinematic editorial photograph of a modern house key resting on a dark wood desk next to a small architectural model of a townhouse, soft golden hour light from a window, shallow depth of field, premium real estate brand photography, ${NO_TEXT}, clean minimal composition`,
  },
  {
    slug: "recruiting-agency-automation",
    prompt: `Cinematic editorial photograph of two empty modern office chairs facing each other across a small round table, warm ambient light, soft shadows, premium business photography, no people, ${NO_TEXT}`,
  },
  {
    slug: "hvac-dispatch-software",
    prompt: `Cinematic close-up photograph of a service van dashboard at dusk, a phone mounted on the windshield showing a soft glowing abstract map interface with no legible labels, warm amber light, premium editorial trades photography, no people, ${NO_TEXT}`,
  },
  {
    slug: "law-firm-intake-automation",
    prompt: `Cinematic editorial photograph of a closed leather portfolio and a fountain pen resting on a dark mahogany desk, a small brass scale of justice figurine softly out of focus in the background, warm lamp light, premium legal brand photography, ${NO_TEXT}`,
  },
  {
    slug: "real-estate-lead-automation",
    prompt: `Cinematic editorial photograph of a modern house key resting on a dark wood desk next to a small architectural model of a townhouse, soft golden hour light from a window, shallow depth of field, premium real estate brand photography, ${NO_TEXT}, clean minimal composition`,
  },
  {
    slug: "ai-chatbot-small-business",
    prompt: `Cinematic close-up photograph of a laptop screen glowing softly in a dark room, the screen showing an abstract soft-focus chat bubble interface with no legible text, warm ember-toned reflections on the desk, premium minimal tech photography, no people, ${NO_TEXT}`,
  },
  {
    slug: "insurance-broker-automation",
    prompt: `Cinematic editorial photograph of a closed leather folder and a calculator on a dark desk, a small umbrella figurine softly out of focus nearby, warm desk lamp glow, premium finance brand photography, ${NO_TEXT}`,
  },
  {
    slug: "healthcare-staffing-automation-guide",
    prompt: `Cinematic editorial photograph of a stethoscope coiled neatly beside a closed badge holder on a dark desk at night, warm amber desk lamp glow, premium healthcare brand photography, shallow depth of field, no people, ${NO_TEXT}`,
  },
  {
    slug: "healthcare-timesheet-invoice-automation",
    prompt: `Cinematic close-up photograph of a sealed envelope and a pen resting on a dark desk, soft warm ambient light, clean minimal composition, shallow depth of field, premium editorial still-life photography, ${NO_TEXT}`,
  },
  {
    slug: "ai-for-healthcare-staffing-workflows",
    prompt: `Cinematic wide photograph down a clean modern hospital corridor, empty, soft natural light from windows on one side, warm neutral tones, premium architectural photography, calm and trustworthy, no people, ${NO_TEXT}`,
  },
  {
    slug: "automate-invoice-follow-up",
    prompt: `Cinematic editorial photograph of a sealed envelope standing upright against a closed laptop on a dark wood desk, warm desk lamp glow, premium business still-life photography, shallow depth of field, ${NO_TEXT}`,
  },
  {
    slug: "ai-voice-agent-small-business",
    prompt: `Cinematic close-up photograph of a modern smartphone face-up on a dark surface, screen showing a soft glowing abstract waveform with no legible text, warm screen glow against a dark ambient background, premium product photography, ${NO_TEXT}`,
  },
  {
    slug: "cost-of-manual-scheduling",
    prompt: `Cinematic close-up photograph of a vintage analog desk clock next to a coffee cup going cold, warm desk lamp light, premium editorial still-life photography, muted neutral tones, shallow depth of field, ${NO_TEXT}`,
  },
  {
    slug: "business-automation-windsor-ontario",
    prompt: `Cinematic wide photograph of a Canadian city skyline at dusk, warm amber office building lights reflected on wet pavement below, muted blue-gray sky, premium editorial photography, atmospheric depth, no people visible, ${NO_TEXT}`,
  },
  {
    slug: "custom-software-vs-saas",
    prompt: `Cinematic editorial photograph of two diverging paths in a minimalist architectural walkway, one path leading toward soft warm light and one toward cool blue light, premium conceptual photography, clean composition, no people, ${NO_TEXT}`,
  },
  {
    slug: "what-is-business-automation",
    prompt: `Cinematic close-up photograph of clean brass mechanical gears in soft focus on the left transitioning into a modern laptop keyboard in sharp focus on the right, the contrast of old and new, warm ambient light, dark background, premium editorial photography, ${NO_TEXT}`,
  },
  {
    slug: "business-automation-cost-breakdown",
    prompt: `Cinematic editorial photograph of a modern calculator beside a small neat stack of coins on a dark matte desk, warm pool of light from above, premium still-life photography, minimal composition, muted warm tones, ${NO_TEXT}`,
  },
  {
    slug: "signs-business-ready-for-automation",
    prompt: `Cinematic close-up photograph of a glowing green traffic light against a dark blurred city background at dusk, premium conceptual editorial photography, shallow depth of field, muted tones, no people, ${NO_TEXT}`,
  },
  {
    slug: "crm-automation-small-business",
    prompt: `Cinematic overhead photograph of a tidy desk with a laptop showing a soft glowing abstract pipeline interface with no legible text, a small potted plant beside it, warm ambient light, premium editorial aesthetic, muted earth palette, ${NO_TEXT}`,
  },
  {
    slug: "how-to-choose-automation-agency",
    prompt: `Cinematic editorial photograph of two modern doors side by side in a minimalist hallway, one slightly open with warm light spilling through, one closed, premium architectural conceptual photography, no people, ${NO_TEXT}`,
  },
  {
    slug: "healthcare-staffing-automation-roi",
    prompt: `Cinematic close-up photograph of a small neat stack of coins arranged in an ascending staircase pattern on a dark desk, warm ambient light, clean premium editorial still-life photography, muted warm tones, ${NO_TEXT}`,
  },
  {
    slug: "best-business-automation-tools-2026",
    prompt: `Cinematic flat-lay photograph of four modern devices — laptop, tablet, phone, small speaker — arranged neatly on a dark matte desk, all screens off, clean product photography aesthetic, soft overhead warm light, premium minimal composition, ${NO_TEXT}`,
  },
];

const args = process.argv.slice(2);
const slugFilter = args.includes("--slug") ? args[args.indexOf("--slug") + 1] : null;
const toGenerate = slugFilter ? posts.filter((p) => p.slug === slugFilter) : posts;

if (toGenerate.length === 0) {
  console.error(`❌  No post found with slug: ${slugFilter}`);
  process.exit(1);
}

const OUTPUT_FILE = join(OUTPUT_DIR, "blog-images-v2.json");
let results = {};
try {
  results = JSON.parse(readFileSync(OUTPUT_FILE, "utf8"));
} catch {
  // fresh start
}

async function generateImage(slug, prompt) {
  console.log(`\n🎨  Generating: ${slug}`);

  const res = await fetch("https://fal.run/fal-ai/flux-pro/v1.1-ultra", {
    method: "POST",
    headers: {
      Authorization: `Key ${FAL_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
      aspect_ratio: "16:9",
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
  console.log(`\n🖼️   Generating ${toGenerate.length} blog image(s) via Fal.ai flux-pro/v1.1-ultra\n`);

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
