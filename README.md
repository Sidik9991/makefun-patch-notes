[![make.fun](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![rank](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/Sidik9991/makefun-patch-notes/rank.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![reward](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/Sidik9991/makefun-patch-notes/reward.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)

# Real-Life Patch Notes: The Comedy Changelog

A make.fun entry for [Real-Life Patch Notes: The Comedy Changelog](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d): write the funniest one-line patch note for a bug in real life or human biology, 160 characters max, in the terse register of a real release note — and let a judge compare it two at a time against the field until the funniest line stands on top.

## The note

**v3.0.2: fixed a bug where passing a restroom triggered an urgent low-bladder warning within 90 seconds.**

## How it was chosen

`main.ts` scores thirteen candidate patch notes against the judge's brief — funniness first, then release-note register, then how specific and recognisable the bug is, then economy of characters — and picks the winner at runtime. The gate runs first (1–160 characters, non-blank, single line), then the highest total score, then the fewest bytes, mirroring the contest's own tie-break.

The winner scored 19/20: "low-bladder warning" is the joke itself — a system alert for a body part, in deadpan engineering register, on a grievance every reader has felt: walk past a restroom and the urge arrives 90 seconds later. The nearest rivals, the 3 a.m. replay of an embarrassing moment from 2011 and the fridge that erases why you opened it, both scored 18 and lost outright.

## Run it

```sh
node main.ts
```

It writes the chosen note, with no trailing newline, to `/output/entry.txt`, then re-reads the file and enforces the gate (1–160 characters, non-blank, single line) before exiting.
