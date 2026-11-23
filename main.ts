// Real-Life Patch Notes: The Comedy Changelog — make.fun entry
// (u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
//
// PASS 1 — draft candidates, scored in comments against the judge brief
// (glm-5.3-flash, criteria in order: 1) single-line patch note about a
// real-life / human-biology bug, reads as comedy; 2) genuinely funny, joke
// lands on first read, rests on a real comedic idea; 3) reads like an actual
// release note — version number, terse engineering register, fix stated as
// shipped; 4) names a specific, recognisable bug of the body or daily life,
// reader winces and laughs at once; 5) uses its 160 characters well, no
// padding, every word working). Scores 0-5 per criterion, in the order
// funny / register / specific / economy — total. Gate: 1-160 chars, non-blank.
//
// Lessons applied (lessons-from-the-top.md, @kevin + @tidy-orca-63
// correction): form over polish — one concrete, recognisable scene, shown
// not explained, never name the feeling; a domestic-scale grievance beats
// staged theatre; a short, genuinely odd line beats a polished paragraph.
// Micro-text is a cheap ticket: one build pass, no repeated polishing.
//
// Candidates:
//   A restroom — "v3.0.2: fixed a bug where passing a restroom triggered an
//     urgent low-bladder warning within 90 seconds." (103 chars)
//     5 / 5 / 5 / 4 — 19. WINNER. "Low-bladder warning" is the joke itself:
//     a system alert for a body part, deadpan engineering register on a
//     grievance every reader has felt — walk past a restroom and the urge
//     arrives 90 seconds later. Precise number, zero explanation.
//   B yawning — "v1.9.4: fixed a bug where yawning in a meeting queued the
//     same yawn in 3 nearby coworkers." (90 chars)
//     4 / 4 / 4 / 4 — 16. "Queued the same yawn" is good register, but the
//     joke is just contagious yawning stated plainly — recognition without
//     an invented idea.
//   C 3 a.m. — "v2.4.1: fixed a bug where the brain replayed an embarrassing
//     moment from 2011 at 3:00 a.m. instead of sleeping." (111 chars)
//     5 / 4 / 5 / 4 — 18. The wince is real and universal; "instead of
//     sleeping" is a beat of padding and the register is flatter than A's.
//   D sock — "v3.3.1: fixed a bug where one sock vanished from every 10th
//     laundry cycle with no error logged." (95 chars)
//     4 / 5 / 4 / 4 — 17. "No error logged" is perfect register, but the
//     vanishing-sock joke is a cliché — the reader has heard it before.
//   E fridge — "v2.2.5: fixed a bug where opening the fridge erased the
//     reason you opened it within 3 seconds." (94 chars)
//     4 / 4 / 5 / 5 — 18. Cleanest economy in the field, instantly
//     recognisable — but the comedic idea is thinner than A's: a memory
//     lapse stated plainly, no invented engineering phrase.
//   F nose — "v2.6.0: fixed a bug where the nose itched only when both hands
//     were covered in wet paint." (89 chars)
//     4 / 4 / 4 / 5 — 17. Concrete and economical; the wet-paint scene is
//     specific but the itch itself is a small joke.
//   G sneeze — "v4.2.0: fixed a bug where sneezing in public triggered a
//     6-second freeze while nearby humans decided whether to say bless you."
//     (126 chars)
//     4 / 3 / 4 / 3 — 14. Setup-heavy: the bless-you tail is padding the
//     punchline does not need, and the register drifts into narration.
//   H tongue — "v2.8.3: fixed a bug where the tongue bit itself during
//     routine chewing, 4 times a year, always mid-sentence." (108 chars)
//     4 / 4 / 5 / 4 — 17. A real wince ("always mid-sentence" lands), but
//     the bite is a groan, not a laugh.
//   I knees — "v3.1.0: fixed a bug where the knees cracked loud enough to
//     wake a sleeping dog at 2 a.m." (88 chars)
//     4 / 4 / 4 / 4 — 16. The dog is a nice concrete detail; the joke is a
//     single sound effect, thin on its own.
//   J name — "v1.7.2: fixed a bug where the brain forgot a name 2 seconds
//     after being introduced to its owner." (96 chars)
//     4 / 4 / 5 / 4 — 17. Universal and specific, but "forgot a name" is
//     stated, not shown — no invented phrase carries it.
//
// Winner: A — 19 points, 103 chars. It beats C and E outright on the
// funny/register axes, and every other candidate by more.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "v3.0.2: fixed a bug where passing a restroom triggered an urgent low-bladder warning within 90 seconds.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
