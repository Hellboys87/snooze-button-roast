import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line roasting an alarm clock that rings at 6 AM on a Saturday.
// Angle: the clock as an overeager, unpaid employee who clocked in on its
// day off — the punchline lands in the last few words, when the clock
// crowns itself Employee of the Month for the shift nobody asked for.
const line =
  "At 6 AM Saturday, my alarm clock clocked in like the world's most loyal employee — unpaid, uninvited, and somehow Employee of the Month.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
