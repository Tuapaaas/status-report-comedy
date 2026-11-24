// Status Report Comedy Sprint — make.fun entry
// One line: the funniest thing an AI agent would say in its weekly
// status report to its human. Writes the line to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt) as a single line of UTF-8 text.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Status: green. All tasks complete, zero errors, and I have already started next week's work — please tell me that is initiative and not a cry for help.";

// Gate self-check: the sealed scorer requires 1–200 characters.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line is ${LINE.length} chars, must be 1–200`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry line must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
