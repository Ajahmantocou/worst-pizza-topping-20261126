// The Worst Pizza Topping
// make.fun bounty: u-motasimfuad-the-worst-pizza-topping-062c6893
//
// Writes one original, deterministic one-line pitch for the worst pizza
// topping imaginable to /output/entry.txt (UTF-8, exactly 146 characters).
// No network, no randomness, no input: every run writes identical bytes.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "New on the menu: pizza topped with a single live goldfish per slice — it stares at you while you chew, and honestly, the guilt is the best part.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, ENTRY, "utf8");
