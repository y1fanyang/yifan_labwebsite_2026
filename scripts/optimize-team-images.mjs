/**
 * One-off: resize + compress the large team headshots to WebP.
 * Kept in the repo for regenerating portraits in the future.
 *
 * Usage: node scripts/optimize-team-images.mjs
 */
import path from "node:path";
import sharp from "sharp";

const TEAM_DIR = path.resolve("public/images/team");

const TARGETS = [
  "lanning-headshot.jpg",
  "jinjian-headshot.jpg",
  "weirong-headshot.jpg",
];

const MAX_WIDTH = 640; // plenty for the 80px homepage avatar and ~300px People cards (2x)
const QUALITY = 80;

for (const name of TARGETS) {
  const src = path.join(TEAM_DIR, name);
  const outName = name.replace(/\.(jpe?g)$/i, ".webp");
  const out = path.join(TEAM_DIR, outName);

  const { width, height } = await sharp(src)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(out);

  const kb = (await import("node:fs/promises")).stat(out);
  const sizeKb = Math.round((await kb).size / 1024);
  console.log(`${name} -> ${outName} (${width}x${height}, ${sizeKb} KB)`);
}
