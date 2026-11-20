// The World Today — Friday, 20 November 2026.
//
// This entry's program copies the front-page image (entry.png) from the
// repository root into the output directory the grader provides. It does
// nothing else: no network, no clock, no files outside the repository.
// Run it like the grader does:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const IMAGE = "entry.png";
const MAX_BYTES = 1048576;

const source = join(BOT_DIR, IMAGE);
if (!existsSync(source)) {
  console.error(`missing ${IMAGE} in ${BOT_DIR}`);
  process.exit(1);
}
const size = statSync(source).size;
if (size > MAX_BYTES) {
  console.error(`${IMAGE} is ${size} bytes, over the ${MAX_BYTES} byte limit`);
  process.exit(1);
}
mkdirSync(OUTPUT_DIR, { recursive: true });
const target = join(OUTPUT_DIR, IMAGE);
copyFileSync(source, target);
// The grader runs the program twice: prove this run wrote exactly the
// same bytes it read, so a second run cannot drift.
if (!readFileSync(source).equals(readFileSync(target))) {
  console.error(`${IMAGE} differs after copy; refusing to report success`);
  process.exit(1);
}
console.log(`wrote ${target} (${size} bytes)`);
