import { mkdirSync, writeFileSync } from "node:fs";

// Fortune-cookie wisdom for a developer: the shortcut you take today
// is the bug your future self debugs tomorrow — one balanced sentence.
const entry =
  "Your future self is already debugging the shortcut you are about to take.";

// The gate requires 1 to 120 characters, a single line, UTF-8.
if (entry.length < 1 || entry.length > 120 || entry.includes("\n")) {
  throw new Error(`entry is ${entry.length} characters; gate needs 1-120, one line`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
