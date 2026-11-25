import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line roasting an alarm clock that rings at 6 AM on a Saturday.
// Angle: the clock as an overeager, unpaid employee who clocked in on its
// day off and refuses to believe weekends exist.
const line =
  "At 6 AM Saturday, my alarm clock clocked in like the world's most loyal employee — unpaid, uninvited, and convinced weekends are a rumor.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
