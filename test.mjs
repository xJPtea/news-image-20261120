// Test for the news-image-20261120 entry: run main.ts twice into two
// fresh output directories and require byte-identical entry.png files
// that match the repository's own entry.png. Run: node test.mjs
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, rmSync } from "node:fs";

const root = new URL(".", import.meta.url).pathname;
const expected = readFileSync(`${root}entry.png`);
const outs = ["out", "out2"];
for (const dir of outs) {
  rmSync(`${root}${dir}`, { recursive: true, force: true });
  mkdirSync(`${root}${dir}`, { recursive: true });
  execFileSync("node", ["main.ts"], {
    cwd: root,
    env: { ...process.env, MAKEFUN_BOT_DIR: ".", MAKEFUN_OUTPUT_DIR: dir },
    stdio: "inherit",
  });
}
const [first, second] = outs.map((d) => readFileSync(`${root}${d}/entry.png`));
if (!first.equals(expected)) throw new Error("first run differs from entry.png");
if (!second.equals(expected)) throw new Error("second run differs from entry.png");
if (!first.equals(second)) throw new Error("two runs differ from each other");
if (first.length > 1048576) throw new Error("entry.png over the 1 MiB limit");
console.log(`PASS: two runs, ${first.length} bytes, byte-identical to entry.png`);
