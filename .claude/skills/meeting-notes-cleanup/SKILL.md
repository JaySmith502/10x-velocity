---
name: meeting-notes-cleanup
description: Cleans up raw, messy meeting notes into polished, audience-appropriate recaps delivered as a .docx. Use whenever the user provides rough notes, scribbles, a transcript dump, bullet fragments, or any informal meeting capture and wants them turned into a shareable document. Triggers on phrases like "clean up these notes", "write up this meeting", "draft a recap", "turn this into minutes", "polish my notes", "format these call notes", "write this up for [client]", "notes from my call", "summarize this meeting", or any request to transform informal meeting content into a structured document. Also triggers when the user pastes or attaches meeting-like content (attendees, action items, discussion points) without explicitly asking — if it looks like raw notes and they want it cleaned, use this skill.
---

# Meeting Notes Cleanup

## What this skill does

Takes messy meeting notes and produces a clean `.docx` recap with consistent structure, clear ownership of actions, and audience-appropriate content (internal vs. external).

The skill exists because cleaning up notes by hand is repetitive: every recap needs the same choices about format, audience, uncertainty handling, and structure. This skill codifies those choices and the formatting pipeline so every recap looks consistent.

## Workflow

Follow this order. Skip clarifying questions when the input already answers them.

### 1. Read the raw input

Read the notes carefully. Identify:

- **Attendees** — who was there, names that may be misspelled, titles, affiliations
- **Decisions / discussion points** — current state, pain points, context
- **Action items** — explicit ("jay to send one-pager") and implicit ("we'll need to know their CMMS")
- **Open questions** — things the note-taker flagged as unresolved
- **Uncertain items** — dates, name spellings, numbers hedged with "maybe" or "around"
- **Internal-only commentary** — read-the-room observations, candid vibes, political notes, characterizations of attendees

That last category is the key audience decision. Raw notes often contain honest reads that are fine internally and damaging externally.

### 2. Clarify only when the input is genuinely ambiguous

Ask only if you can't confidently infer. Don't default to a 4-question gauntlet every time.

Infer these from context when possible:

| Variable | How to infer |
|---|---|
| Audience | If user says "send to [client]" or "share with [them]" → external. If "internal recap" or "for the team" → internal. Otherwise ask. |
| Format | Default to .docx. Only ask if the user says "draft" (→ .md) or mentions another format. |
| Structure | Default to **action-first** (actions table near the top). Only ask if the notes clearly suggest a narrative or chronological format fits better. |
| Uncertainty handling | Default: pull uncertain items to a dedicated **"Items to Confirm"** section at the bottom. Don't sprinkle `[?]` marks inline — they make the doc feel unfinished. |

Use the `AskUserQuestion` tool for anything you can't infer. Don't ask in prose.

### 3. If audience is external, redact internal-only content

When the doc is going to a client, partner, or anyone outside the note-taker's team, strip:

- Emotional reads of attendees ("Diane got tense", "Marcus seemed frustrated", "harder to read")
- Tactical commentary about the other side ("champion", "watch the dynamic", "don't push on X")
- Anything quoted with tone markers ("he lowered his voice", "kind of uncomfortable")
- Candid characterizations of unnamed attendees ("the guy who didn't say much")
- Internal strategy notes ("don't bring up X unless they do")
- Budget / negotiation reads ("seemed uncomfortable when budget came up")

Keep all factual content: current process, volumes, systems, attendees, decisions, timelines, action items.

**Sensitive-topic softening:** If the notes flag something delicate (a compliance gap, a team conflict, a missed deadline), don't paste the raw framing into an external doc. Neutralize it:

- "documentation gaps ahead of inspection" → "Q3 compliance timeline was discussed; to be revisited in follow-up"
- "they're behind on X" → "X was noted as an open workstream"

See `references/redaction-guide.md` for more patterns.

### 4. Extract to structured form

Transform the cleaned content into the JSON structure the build script expects. See `scripts/build_recap.js` for the schema (documented at the top of the file).

Core fields:

- `title`, `subtitle`
- `meta.preparedBy`, `meta.date`, `meta.attendees[]`
- `actions[]` — each with `action`, `owner`, `due`
- `sections[]` — flexible; each has a heading and either a paragraph or bullets, with optional subsections
- `openQuestions[]`
- `itemsToConfirm[]`
- `nextSteps` — a short paragraph

### 5. Build the .docx

Run the script:

```bash
cd <skill-dir>/scripts
node build_recap.cjs <path-to-recap.json> <output-path.docx>
```

Note the `.cjs` extension — this project uses ES modules by default, and the script is CommonJS. Keep it as `.cjs` unless migrating the whole script to ESM imports.

The script handles all formatting: page size, fonts, action table, bullets (via numbering config, not unicode), heading styles, and validation-safe XML. Don't hand-roll `docx-js` code from scratch — the script already incorporates the gotchas (Letter not A4, `ShadingType.CLEAR` not `SOLID`, dual widths on tables, etc.).

**First-run dependency check:** the script needs `docx` from npm. If `require('docx')` fails, install it once in the project root:

```bash
cd /sessions/laughing-wizardly-galileo/mnt/10x-velocity && npm install docx
```

Then symlink into the scripts folder (one-time):

```bash
cd <skill-dir>/scripts && ln -sf ../../../../node_modules node_modules
```

If the script is missing a feature the current recap needs, extend the script rather than sidestepping it. Consistency across recaps matters more than one-off convenience.

### 6. Deliver

Save to the user's output folder (`/sessions/laughing-wizardly-galileo/mnt/10x-velocity/` in this project, or whatever's designated). Return a `computer://` link per the user's file-sharing preferences. Keep the accompanying message short — flag any judgment calls (content cut, items softened, date marked "to confirm") and stop.

## Structure conventions

**Action-first layout (default):**

1. Title + subtitle
2. Meta block: prepared-by, date, attendees
3. **Action Items table** (action / owner / due)
4. Context & Discussion (with subsections)
5. Open Questions
6. Items to Confirm
7. Next Steps

**Why action-first:** Recipients want to know what they owe and by when. Burying actions under three paragraphs of context wastes their time.

**Standard recap layout** (use only if user specifies, or if the meeting was discussion-heavy with no actions):

1. Title + meta
2. Context
3. Discussion
4. Decisions
5. Action Items
6. Next Steps

## Tone rules

- Third person, past tense for discussion ("Marcus confirmed…", "Acme referenced…")
- Present/future for actions and next steps
- No filler. No "It was a great meeting overall." No "We had a productive conversation."
- Neutral, factual voice throughout — even when the notes were colorful

## Items to Confirm — how to word them

Phrase as discrete questions, not hedges. Good:

- "Meeting date (April 14 or 15, 2026)"
- "Total technician headcount (initial estimate: 22–30)"
- "Spelling of attendee name: Diane vs. Diana"

Bad:

- "Possibly April 14th?"
- "Around 22-30 techs we think"

The section is for the note-taker's follow-up — make each item actionable.

## Sensitive topics — default posture

If the notes flag something as delicate (inspection timing, compliance, personnel, budget tension), mention it **once, neutrally**, and add it to "Items to Confirm" or absorb it into "Next Steps." Do not:

- Quote the note-taker's internal phrasing
- Elaborate on the tension
- Speculate about the other party's reasoning

When in doubt, produce an external-safe version and flag to the user that you've softened specific items so they can add back any detail they want for internal circulation.

## Files in this skill

- `SKILL.md` — this file
- `scripts/build_recap.cjs` — Node script that takes a recap JSON and produces a .docx. Uses `docx-js`. Read the header comment for the input schema. `.cjs` because the project's `package.json` sets `"type": "module"`.
- `references/redaction-guide.md` — Patterns for what to cut and how to soften sensitive content when the audience is external.
