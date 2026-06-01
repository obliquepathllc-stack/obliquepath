#!/usr/bin/env node
/**
 * Fal.ai asset generation — obliquepath.dev
 * Generates 2 videos + 4 blog images
 *
 * Usage:  node scripts/generate-assets.mjs
 *
 * Output: scripts/output/hero.mp4, workflow.mp4, blog-1..4.jpg
 *
 * After running:
 *   1. Upload files to Cloudinary (drag & drop in Media Library)
 *   2. Paste CDN URLs into .env.local:
 *      NEXT_PUBLIC_HERO_VIDEO_URL=https://res.cloudinary.com/...
 *      NEXT_PUBLIC_WORKFLOW_VIDEO_URL=https://res.cloudinary.com/...
 *      NEXT_PUBLIC_BLOG_IMG_1=https://res.cloudinary.com/...
 *      NEXT_PUBLIC_BLOG_IMG_2=https://res.cloudinary.com/...
 *      NEXT_PUBLIC_BLOG_IMG_3=https://res.cloudinary.com/...
 *      NEXT_PUBLIC_BLOG_IMG_4=https://res.cloudinary.com/...
 *   3. Add same vars to Vercel → Settings → Environment Variables
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { fal } from "@fal-ai/client";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, "output");

// Load .env.local
const envPath = path.join(__dirname, "..", ".env.local");
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const [k, ...v] = t.split("=");
    if (k && v.length) process.env[k.trim()] = v.join("=").trim();
  }
}

const API_KEY = process.env.FAL_AI_API_KEY;
if (!API_KEY) { console.error("❌  FAL_AI_API_KEY not found in .env.local"); process.exit(1); }

fal.config({ credentials: API_KEY });
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

// ── ASSET DEFINITIONS ─────────────────────────────────────────────────────────

const VIDEO_MODEL = "fal-ai/kling-video/v1.6/standard/text-to-video";

const VIDEOS = [
  {
    name: "hero",
    model: VIDEO_MODEL,
    input: {
      prompt: "Cinematic slow aerial push over a city at night, empty quiet streets below, warm amber office building lights in the distance, muted blue-gray color grade, soft atmospheric haze, premium film look, shallow depth of field, no people visible",
      duration: "5",
      aspect_ratio: "16:9",
    },
  },
  {
    name: "workflow",
    model: VIDEO_MODEL,
    input: {
      prompt: "Cinematic close-up of a smartphone face-up on a dark desk at night, notifications arrive one by one on the screen, a form submission alert then an AI call notification then a CRM update then an email transcript, each appearing and settling, soft warm glow from the phone screen, dark ambient background, no human hands, premium minimal aesthetic",
      duration: "5",
      aspect_ratio: "9:16",
    },
  },
];

const IMAGES = [
  {
    name: "blog-1",
    prompt: "Cinematic overhead shot of a smartphone face-up on a dark desk, screen glowing with unread notification badges, warm ambient light, nobody visible, premium minimal aesthetic, muted tones, photorealistic",
  },
  {
    name: "blog-2",
    prompt: "Flat lay of a cluttered office desk at night, sticky notes open laptop coffee going cold, warm desk lamp glow, no hands, calm cinematic framing, muted color palette, photorealistic",
  },
  {
    name: "blog-3",
    prompt: "Cinematic macro photograph of tangled cable knots on a dark surface, shallow depth of field, muted tones, one cable neatly separate from the rest, premium still life aesthetic, photorealistic",
  },
  {
    name: "blog-4",
    prompt: "Cinematic close-up of a clean minimal workspace, a single keyboard, soft ambient light, a notification appearing on a dark screen, calm and premium, no faces, no robots, photorealistic",
  },
];

// ── HELPERS ───────────────────────────────────────────────────────────────────

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download failed: ${res.status}`);
  fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
  const kb = Math.round(fs.statSync(dest).size / 1024);
  console.log(`  ✓ saved → ${path.basename(dest)} (${kb} KB)`);
}

// ── GENERATE ──────────────────────────────────────────────────────────────────

async function generateVideo(video) {
  console.log(`\n🎬  ${video.name} — ${video.model}`);
  const result = await fal.subscribe(video.model, {
    input: video.input,
    logs: false,
    onQueueUpdate: (update) => {
      process.stdout.write(`  status: ${update.status}          \r`);
    },
  });
  console.log(`  status: COMPLETED                    `);
  const videoUrl = result.data?.video?.url ?? result.data?.video_url ?? result.video?.url;
  if (!videoUrl) { console.error("  result:", JSON.stringify(result, null, 2)); throw new Error("No video URL"); }
  await download(videoUrl, path.join(OUTPUT_DIR, `${video.name}.mp4`));
}

async function generateImage(image) {
  console.log(`\n🖼   ${image.name}`);
  const result = await fal.subscribe("fal-ai/flux/dev", {
    input: {
      prompt: image.prompt,
      image_size: "landscape_16_9",
      num_inference_steps: 28,
      num_images: 1,
    },
    logs: false,
    onQueueUpdate: (update) => {
      process.stdout.write(`  status: ${update.status}          \r`);
    },
  });
  console.log(`  status: COMPLETED                    `);
  const imageUrl = result.data?.images?.[0]?.url ?? result.images?.[0]?.url;
  if (!imageUrl) { console.error("  result:", JSON.stringify(result, null, 2)); throw new Error("No image URL"); }
  await download(imageUrl, path.join(OUTPUT_DIR, `${image.name}.jpg`));
}

// ── MAIN ──────────────────────────────────────────────────────────────────────

async function main() {
  console.log("🚀  Oblique Path — Fal.ai asset generation");
  console.log(`    Output: ${OUTPUT_DIR}\n`);

  for (const v of VIDEOS) await generateVideo(v);
  for (const i of IMAGES) await generateImage(i);

  console.log("\n✅  Done! Upload scripts/output/ files to Cloudinary, then paste URLs into .env.local");
}

main().catch((e) => { console.error("\n❌ ", e.message); process.exit(1); });
