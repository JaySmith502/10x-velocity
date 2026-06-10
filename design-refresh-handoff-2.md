# Handoff 2: 10x Velocity Design Refresh — T6 mid quality-fix-loop

**Date:** 2026-06-10 · **Repo:** `C:\Users\smith\Documents\1 Projects\10x-velocity` (path contains a space — always quote)
**Branch:** `design-refresh` (from `main` @ `84f8e59`) · **Do NOT push** unless the user says so.
**Supersedes:** `design-refresh-handoff.md` in the repo root (first handoff — still useful for T1-T4 history; this doc is current truth).

## Governing process

`superpowers:subagent-driven-development` — fresh implementer subagent per task → spec-compliance review → code-quality review → fix loops until approved. One implementer at a time. Prompt templates: `C:\Users\smith\.claude\plugins\cache\superpowers-marketplace\superpowers\4.0.3\skills\subagent-driven-development\{implementer,spec-reviewer,code-quality-reviewer}-prompt.md`. Re-invoke the skill at session start.

## Task status

- **T1-T3** ✓ (theme tokens, nav CTA, blur orbs removed) — see first handoff.
- **T4** ✓ color discipline + serif body. Commits `8c219cd` + fixes `09aa84d`, `26e88be`. Spec + quality approved.
- **T5** ✓ Home redesign (`src/pages/Index.tsx`). Commits `996155f`, `2d41102`, `b6c5c87`, `a7690d3`. Spec + quality approved. **Two user decisions shaped it (see Key Decisions).**
- **T6** ⟳ Case Studies redesign (`src/pages/CaseStudies.tsx`). Commits `dcb1ce2` (main), `eaa49d9` (full-bleed gradient + CTA fixes, spec re-review ✅). **Quality review returned approve-with-fixes; fix dispatch was IN FLIGHT when session ended** — 3 fixes: (1) remove dead `relative` on hero card Links ~67/108, (2) hero stat dividers → sentinel `w-px bg-border self-stretch` + `gap-3` instead of `border-l`/`gap-0` ~85/126, (3) CTA blockquote is implementer-invented prose styled as testimonial AND duplicated verbatim in GovBrokers hero card body ~101 → replace blockquote with verified stat callout ("250% more inbound leads. 50% faster proposals. Six months. — GovBrokers engagement", keep border-l-4 visual, drop `<blockquote>` element) and rewrite the duplicated hero-card sentence.
- **T7** ☐ Services redesign (`src/pages/Services.tsx`) — spec = `page_plans` services entry in `design-audit/audit-plan.json` (8 changes). Mockup `design-audit/after/services.html`. Includes the icon-circle demotions deliberately excluded from T4.
- **Final** ☐ whole-branch code review subagent → re-screenshot pages at 1440px, compare vs `design-audit/after/*.png` + before shots, SendUserFile → `superpowers:finishing-a-development-branch` (user decides merge/push).

## IMMEDIATE NEXT STEP

1. `git log --oneline -5` — check whether the T6 quality-fix commit landed after `eaa49d9` (a background implementer was finishing it). If not landed, dispatch a fresh implementer with the 3 fixes above.
2. When landed: verify lint/build, then dispatch quality re-reviewer to confirm the 3 fixes (fresh subagent; give it the 3-item list + commit SHA).
3. Mark T6 complete, screenshot `/case-studies` (desktop+mobile) and SendUserFile, then dispatch T7 implementer.

## ⚠️ KEY DECISIONS THIS SESSION (binding for T7 + final)

1. **Verified-numbers rule (user decision):** mockup metric numbers are partly INVENTED (e.g., GovBrokers "85% / $240K / 6 weeks / 3 FTE" — none exist in real data). Every displayed number/claim MUST trace verbatim to the canonical case-study files (`src/pages/case-studies/*.tsx` `results` arrays). Mockups are layout reference ONLY. Real GovBrokers numbers: 250% inbound leads · 50% proposal time · 35% win rate · 60% fewer missed deadlines · over six months. No invented quotes/testimonials either (caught once in T6).
2. **Home Featured Result = Innes & Young** (user decision, deviates from mockup): hero keeps GovBrokers proof; Featured section shows Innes & Young (400% leads / 75% reporting / 3× monitoring / 0 new hires) to avoid hero-vs-featured duplication. Case Studies page features BOTH as hero cards with differentiated copy — keep them differentiated.
3. **Lint baseline corrected to 32 problems (25 errors, 7 warnings)** — the "31" in the first handoff was off by one; the 32nd is pre-existing `require()` in `tailwind.config.ts:87` (predates branch @ `84f8e59`). Gate: zero NEW issues; `npm run build` must pass. No test framework.

## Notes for the final review (carried from T4-T6 reviews)

- OnboardingForm.tsx step pips: muted halo around cyan pip reads awkwardly (pre-existing pattern; reviewer suggested removing halo) — surface to user, don't fix unasked.
- `font-body` not yet applied to LexiFile/DataCleaning/Prototypes/PowerAutomate prose — backlog gap, not a defect.
- CaseStudies.tsx is ~320 lines of repeated card JSX — a `GridCard` component is the natural refactor; flagged as suggestion only (simplicity-first, works as is).
- Pre-existing container indentation oddity at `Index.tsx:88` — left alone deliberately.

## Conventions

- Commits: focused, end with `Co-Authored-By: WOZCODE <contact@withwoz.com>`. No push. `46c20a2` is the user's own unrelated commit — leave alone.
- Implementer model: sonnet for mechanical, default for design-heavy (T7 is design-heavy). Reviews: default/capable model.
- Dev server: http://localhost:8080 (was running; restart `npm run dev`). Screenshots: `npx playwright screenshot --viewport-size="1440,900" --full-page --wait-for-timeout=3500 <url> <out.png>` (mobile: 390,844). Verification shots go in `design-audit/verify/`.
- Brand guardrails for implementer prompts: cyan = sharp accent (2-3 moments/page: CTA, eyebrow, active state; metric rows are Case Studies' designated cyan moment); purple `accent-secondary` = second rhythm (industry badges); NO blur orbs / gradient text / glassmorphism / identical card grids; light mode primary; `font-body` (Source Serif 4) for interior prose.
- Track with TaskCreate/TaskUpdate (this session: T4✓ T5✓ T6 in_progress, T7 + Final pending — recreate in new session).
- Subagent IDs from this session will not be resumable in a new session — dispatch fresh subagents with full context per the templates.

## Key artifacts

- Spec: `design-audit/audit-plan.json` (`result.global_changes` + `result.page_plans`)
- Mockups (layout only — numbers unreliable): `design-audit/after/{home,case-studies,services}.html` + `.png`
- Before shots: `design-audit/before/*.png` · This session's verify shots: `design-audit/verify/*.png`

## Suggested skills

- `superpowers:subagent-driven-development` — invoke at session start; governing process.
- `superpowers:requesting-code-review` — template for the final whole-branch review.
- `superpowers:finishing-a-development-branch` — after all tasks + final review.
- `frontend-design:frontend-design` — context for T7 design-quality bar.

## Open questions for the user

- None blocking. All decisions to date are recorded above. Merge/push decision comes at the end.
