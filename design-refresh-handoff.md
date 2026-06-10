# Handoff: 10x Velocity Design Refresh — Subagent-Driven Execution (mid-flight)

**Date:** 2026-06-10 · **Repo:** `C:\Users\smith\Documents\1 Projects\10x-velocity` (path contains a space — always quote)
**Branch:** `design-refresh` (branched from `main` @ `84f8e59`) · **Do NOT push** unless the user says so.

## What this session did

1. Ran a multi-agent **design audit workflow** against the brand brief in project `CLAUDE.md` (Design Context section). 35 findings → synthesized plan (8 global changes + per-page plans for home / case-studies / services).
2. Captured **before** screenshots and built **after** HTML mockups; user reviewed side-by-side comparisons and said: **"These look great let's roll with all changes."**
3. Began executing via **superpowers:subagent-driven-development**: fresh implementer subagent per task, then spec-compliance review, then code-quality review, fix loops until approved. Tasks T1–T3 are complete and approved; T4 is mid fix-loop.

## Key artifacts (don't duplicate — read these)

- **Full audit plan (THE spec for remaining tasks):** `design-audit/audit-plan.json` (in repo workspace; copy of workflow output). Contains `global_changes[]` and `page_plans[]` for home, case-studies, services with exact change text.
- **Target mockups:** `design-audit/after/{home,case-studies,services}.html` (+ .png) — visual reference for T5–T7.
- **Before screenshots:** `design-audit/before/*.png` · Comparisons: `design-audit/compare/*.png`
- **Skill prompt templates:** `C:\Users\smith\.claude\plugins\cache\superpowers-marketplace\superpowers\4.0.3\skills\subagent-driven-development\{implementer,spec-reviewer,code-quality-reviewer}-prompt.md`

## Branch state (oldest → newest)

- `01deb9c` T1 theme tokens (warm card/surface/border/input, radius 0.625rem) + `f0d9ca0` popover fix — **approved**
- `e99e83c` + `3ca271a` + `b30c462` T2 nav CTA cyan, MobileMenu /demo removal + DiscoveryButton onClick prop, Packages & Pricing links (Header dropdown, Footer, MobileMenu) — **approved**
- `9b53996` T3 all 30 blur orbs removed site-wide, heroes got radial-gradient — **approved**
- `8c219cd` T4 color discipline + serif body + gradient extracted to `bg-hero-gradient`/`dark:bg-hero-gradient-dark` tokens in tailwind.config.ts — **spec review found 5 misses, fix loop OPEN (see below)**
- `46c20a2` "Added aeo audit" — **user's own commit** (AEO session prompt doc + settings), unrelated to refresh; leave alone.

## IMMEDIATE NEXT STEP — T4 fix loop (open)

Spec reviewer found 5 missed demotions in commit `8c219cd`. Dispatch a fix (resume implementer agent `a011e29caf49d10c7` via SendMessage, or fresh subagent):

- `src/pages/PowerAutomate.tsx:92` — `<Check className="... text-accent ...">` checklist icon → `text-muted-foreground`
- `src/pages/PowerAutomate.tsx:126` — feature card `<h3 ... text-accent>` → `text-foreground`
- `src/pages/PowerAutomate.tsx:131` — `<ArrowRight ... text-accent>` list icon → `text-muted-foreground`
- `src/pages/Prototypes.tsx:71` — `<ArrowRight ... text-accent>` list icon → `text-muted-foreground`
- `src/pages/Prototypes.tsx:125` — `<p className="text-sm text-accent">{step.timeline}</p>` → `text-muted-foreground`

(Line numbers as of `8c219cd`.) Then spec re-review (agent `a9cebc296dd1999a3` has context), then code-quality review for T4 (not yet run), then mark T4 complete.

## Remaining tasks (specs = `page_plans` in design-audit/audit-plan.json)

- **T5: Home page redesign** (`src/pages/Index.tsx`) — proof-led hero headline, hero max-w-2xl, trust-bar fixes + industry labels, vertical rhythm (pb-28/36 hero, py-4 logo bar), mobile 2x2 metric stat tiles, CTA subtext rewrite, nonprofit eyebrow purple. Mockup: `design-audit/after/home.html`.
- **T6: Case Studies redesign** (`src/pages/CaseStudies.tsx`) — 2 featured hero cards (GovBrokers, Innes & Young) above 7-card grid, metric stat rows on all 9 cards, two-token badge system (cyan tech / purple industry), bg-muted CTA + pull-quote, left-aligned hero w/ eyebrow, serif body. Optionally add `bg-hero-gradient` to its hero (flagged by T3 quality review as the one hero without it). Mockup: `design-audit/after/case-studies.html`.
- **T7: Services redesign** (`src/pages/Services.tsx`) — 3 featured 2-col cards + 5 lighter grid cards, section eyebrows ('What We Do', 'Common Questions', 'Get Started'), left-aligned hero, full-bleed bg-muted CTA (orbs already gone), serif body, font-display on h2/h3, demote icon circles (Services was excluded from T4 on purpose). Mockup: `design-audit/after/services.html`.
- **Final:** whole-branch code review subagent, then visual verification: re-screenshot pages at 1440px and compare against `design-audit/after/*.png` + the before shots; send comparisons to user via SendUserFile. Then **superpowers:finishing-a-development-branch** (user decides merge/push — never push unprompted).

## Process conventions (keep these)

- One implementer at a time (no parallel implementers). Implementer model: sonnet for mechanical, default for design-heavy (T5–T7 lean design-heavy).
- Every commit: focused message ending `Co-Authored-By: WOZCODE <contact@withwoz.com>`. No push.
- Verification gate per task: `npm run lint` — **31-problem pre-existing baseline** (24 errors, 7 warnings), zero NEW issues allowed; `npm run build` must pass. No test framework exists.
- Track tasks with TaskCreate/TaskUpdate (this session's list: T1✓ T2✓ T3✓ T4 in_progress, T5/T6/T7 pending).
- Dev server may still be running on `http://localhost:8080` (background task from this session; restart with `npm run dev` if needed). Playwright works: `npx playwright screenshot --viewport-size="1440,900" --full-page --wait-for-timeout=3500 <url> <out.png>`.
- Brand guardrails for implementers: cyan = sharp accent (2-3 moments/page), purple `accent-secondary` = second rhythm, no blur orbs / gradient text / glassmorphism / identical card grids; light mode primary; `font-body` (Source Serif 4) for interior prose warmth.

## Suggested skills

- `superpowers:subagent-driven-development` — re-invoke at session start; this is the governing process.
- `superpowers:requesting-code-review` — template for the final whole-branch review.
- `superpowers:finishing-a-development-branch` — after all tasks + final review pass.
- `frontend-design:frontend-design` — context for T5–T7 design-quality bars (avoid AI-slop, intentionality).

## Open questions for the user

- None blocking. User already approved all changes. Merge/push decision comes at the end (finishing-a-development-branch).
