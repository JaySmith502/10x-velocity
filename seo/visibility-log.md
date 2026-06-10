# AEO Visibility Log

Monthly probe of whether 10xvelocity.ai surfaces for its target queries. Automated via the "monthly-aeo-visibility-probe" scheduled task (1st of each month, 9:00 AM). Method: live web search per query, top ~10 results recorded. No fabricated positions — "no data" means the search wasn't run or failed.

## 2026-06-10 — Baseline (engagement kickoff)

| Query | 10xV present? (position) | Top answer holder | Notes |
|---|---|---|---|
| AI consulting Louisville Kentucky | No | louisvillegeek.com | Then clutch.co, builtin.com directories; zjak.net #4, uptechit.net #5, centricconsulting.com #6 |
| how much does AI consulting cost | No | leanware.co | rtslabs.com #3, iternal.ai #10 — both AEO-built cost pages |
| AI consulting firm for mid-market companies | No | cygnet.one / neurons-lab.com | Listicles dominate; xcelacore.com #7 |
| AI readiness assessment for mid-market companies | No | txidigital.com | rsmus.com #2, mldeep.io #6 (rubric framework) |
| what does an AI consultant do | No | refontelearning.com | nmsconsulting.com #6 has answer-first format |
| change management for AI adoption | No | mckinsey.com | prosci.com #2; all enterprise-framed, zero mid-market answers |
| AI strategy consultant for small business | No | (mixed) | bridgeviewit.com, mqlflow.com; no dominant answer |
| how to choose an AI consulting firm | No | virtido.com | spr.com #3; xcelacore vetting checklist ranks via related posts |
| AI consulting Louisville (Tier 1 probe set) | no data | — | Not run at baseline; first automated run Jul 1 covers full Tier 1 set |

**Baseline note:** 10xvelocity.ai appeared in zero of the eight queries probed. Expected — the answer-engine-facing surface (static schema, llms.txt, cost pillar, buyer-intent FAQ) ships with this engagement. First automated comparison: July 1, 2026.

**Next action (June):** Publish drafted Louisville pillar on June 24 (flip `draft: true` in `src/data/blogPosts.ts`); deploy the schema/FAQ/llms.txt changes to production so the July 1 probe measures the new surface.
