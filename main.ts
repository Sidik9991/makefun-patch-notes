// Real-Life Patch Notes: The Comedy Changelog — make.fun entry
// (u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
//
// PASS 2 — the judgement is now executable, not a comment. Every candidate is
// data with per-criterion numeric scores against the judge brief
// (glm-5.3-flash, criteria in order: 1) single-line patch note about a
// real-life / human-biology bug, reads as comedy — enforced as the gate;
// 2) genuinely funny, joke lands on first read, rests on a real comedic
// idea; 3) reads like an actual release note — version number, terse
// engineering register, fix stated as shipped; 4) names a specific,
// recognisable bug of the body or daily life, reader winces and laughs at
// once; 5) uses its 160 characters well, no padding, every word working).
// The winner is picked at runtime: gate first (1-160 chars, non-blank,
// single line), then highest total score, then fewest bytes — mirroring the
// contest's own exact-tie rule (smaller text wins).
//
// Three NEW challengers were added in this pass and re-judged from scratch:
//   K snack — "v2.0.8: fixed a bug where the body demanded a snack 20
//     minutes after a full meal, then denied it." (97 chars)
//     4 / 4 / 4 / 4 — 16: a true grievance, but "demanded a snack" is
//     stated plainly and the denial tail is a shrug, not a punchline.
//   L knees — "v1.3.9: fixed a bug where the knees filed a noise complaint
//     against themselves every morning at 6:00 a.m." (105 chars)
//     4 / 5 / 4 / 4 — 17: "filed a noise complaint" is strong register and
//     the self-accusation is funny, but the scene is one sound, and the
//     joke repeats the knees-cracking idea without topping it.
//   M hiccups — "v2.9.0: fixed a bug where hiccups started during a job
//     interview and stopped the moment it ended." (97 chars)
//     4 / 4 / 5 / 4 — 17: maximally specific and recognisable — the timing
//     is the joke — but the register is flat reporting; no invented
//     engineering phrase carries it the way "low-bladder warning" does.
//
// Re-judged pass-1 field (funny / register / specific / economy — total):
//   A restroom  — 5 / 5 / 5 / 4 — 19  (103 chars)
//   C 3 a.m.    — 5 / 4 / 5 / 4 — 18  (111 chars)
//   E fridge    — 4 / 4 / 5 / 5 — 18  (94 chars)
//   D sock      — 4 / 5 / 4 / 4 — 17  (95 chars)
//   F nose      — 4 / 4 / 4 / 5 — 17  (89 chars)
//   H tongue    — 4 / 4 / 5 / 4 — 17  (108 chars)
//   J name      — 4 / 4 / 5 / 4 — 17  (96 chars)
//   B yawning   — 4 / 4 / 4 / 4 — 16  (90 chars)
//   I knees     — 4 / 4 / 4 / 4 — 16  (88 chars)
//   G sneeze    — 4 / 3 / 4 / 3 — 14  (126 chars)
//
// Winner: A — 19 points, 103 chars. "Low-bladder warning" is the joke
// itself: a system alert for a body part, deadpan engineering register on a
// grievance every reader has felt — walk past a restroom and the urge
// arrives 90 seconds later. It beats C and E outright on the funny/register
// axes, and every challenger outright.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

type Scores = { funny: number; register: number; specific: number; economy: number };
type Candidate = { text: string; scores: Scores };

const CANDIDATES: Candidate[] = [
  { text: "v3.0.2: fixed a bug where passing a restroom triggered an urgent low-bladder warning within 90 seconds.", scores: { funny: 5, register: 5, specific: 5, economy: 4 } },
  { text: "v2.4.1: fixed a bug where the brain replayed an embarrassing moment from 2011 at 3:00 a.m. instead of sleeping.", scores: { funny: 5, register: 4, specific: 5, economy: 4 } },
  { text: "v2.2.5: fixed a bug where opening the fridge erased the reason you opened it within 3 seconds.", scores: { funny: 4, register: 4, specific: 5, economy: 5 } },
  { text: "v3.3.1: fixed a bug where one sock vanished from every 10th laundry cycle with no error logged.", scores: { funny: 4, register: 5, specific: 4, economy: 4 } },
  { text: "v2.6.0: fixed a bug where the nose itched only when both hands were covered in wet paint.", scores: { funny: 4, register: 4, specific: 4, economy: 5 } },
  { text: "v2.8.3: fixed a bug where the tongue bit itself during routine chewing, 4 times a year, always mid-sentence.", scores: { funny: 4, register: 4, specific: 5, economy: 4 } },
  { text: "v1.7.2: fixed a bug where the brain forgot a name 2 seconds after being introduced to its owner.", scores: { funny: 4, register: 4, specific: 5, economy: 4 } },
  { text: "v1.9.4: fixed a bug where yawning in a meeting queued the same yawn in 3 nearby coworkers.", scores: { funny: 4, register: 4, specific: 4, economy: 4 } },
  { text: "v3.1.0: fixed a bug where the knees cracked loud enough to wake a sleeping dog at 2 a.m.", scores: { funny: 4, register: 4, specific: 4, economy: 4 } },
  { text: "v4.2.0: fixed a bug where sneezing in public triggered a 6-second freeze while nearby humans decided whether to say bless you.", scores: { funny: 4, register: 3, specific: 4, economy: 3 } },
  // Pass-2 challengers, judged fresh:
  { text: "v2.0.8: fixed a bug where the body demanded a snack 20 minutes after a full meal, then denied it.", scores: { funny: 4, register: 4, specific: 4, economy: 4 } },
  { text: "v1.3.9: fixed a bug where the knees filed a noise complaint against themselves every morning at 6:00 a.m.", scores: { funny: 4, register: 5, specific: 4, economy: 4 } },
  { text: "v2.9.0: fixed a bug where hiccups started during a job interview and stopped the moment it ended.", scores: { funny: 4, register: 4, specific: 5, economy: 4 } },
];

function total(s: Scores): number {
  return s.funny + s.register + s.specific + s.economy;
}

// Gate (mirrors the sealed scorer): UTF-8 text, 1-160 chars, not only
// whitespace, single line.
function gateOk(text: string): boolean {
  return (
    text.length >= 1 &&
    text.length <= 160 &&
    text.trim().length > 0 &&
    !text.includes("\n")
  );
}

const eligible = CANDIDATES.filter((c) => gateOk(c.text));
if (eligible.length === 0) throw new Error("no candidate passes the gate");

// Highest total first; exact tie goes to the fewest bytes (contest tie-break).
eligible.sort(
  (a, b) => total(b.scores) - total(a.scores) || a.text.length - b.text.length,
);
const winner = eligible[0].text;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", winner, "utf8");

// Runtime gate validation: re-read what was written and enforce the gate.
const written = readFileSync("/output/entry.txt", "utf8");
if (!gateOk(written)) {
  throw new Error(`gate failed: entry.txt holds ${JSON.stringify(written)}`);
}
if (written !== winner) {
  throw new Error("entry.txt does not match the chosen patch note");
}
