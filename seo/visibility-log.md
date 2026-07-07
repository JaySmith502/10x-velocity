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

## 2026-07-01 — First automated probe

| Query | 10xV present? (position) | Top answer holder | Notes |
|---|---|---|---|
| **Tier 1 — local** | | | |
| AI consulting Louisville | No | clutch.co (directory) | streamline.us #2 (new KY-wide answer post — now dominant locally), zfort.com #3, fastslowmotion.com #4, zjak.net #5, syrv.ai #8 (mid-market), centricconsulting.com #10; builtin/designrush directories |
| AI consulting Kentucky | No | uptechit.net #1 (answer-style) | streamline.us #2, opinosis-analytics.com #4, syrv.ai #6, artificialintelligenceky.com #7; BCG #5 |
| AI automation consulting Louisville | No | clutch.co (directory) | Best answer pages: prosperspark.com #2, streamline.us #3; layer3labs.io #6 (cost/ROI), zjak.net #5 |
| AI consultant for mid-market companies in Kentucky | No | streamline.us #1 | xcelacore.com #4 (mid-sized answer), syrv.ai #7 (mid-market); rest directories (designrush, clutch), zjak.net #9 |
| AI readiness assessment Louisville | No | argentumit.com #1 (local answer) | Only local answer holder; rest national frameworks — cisco #3, cicpindiana #4 (MIT rubric), fountaincity.tech #5, TDWI #7 |
| **Tier 2 — national** | | | |
| how much does AI consulting cost | No | leanware.co #2 (baseline holder holds) | reddit #1; rtslabs.com #3 (known competitor, still ranking); stack.expert #4; iternal.ai fell out of top 10 |
| AI consulting cost for mid-sized business | No | bosio.digital #1 (NEW) | "$35K–$150K, 50–500 employees" — 10xV's exact ICP framing; eliteaiadvantage.com #8 (mid-market cost). Direct threat to the live cost pillar |
| AI readiness assessment for mid-market companies | No | txidigital.com #1 (baseline holder holds) | prometheusagency.co #2 (5-pillar how-to), rsmus.com #3, netrio.com #7, SAS #10; mldeep.io fell out of top 10 |
| change management for AI adoption | No | prosci.com #1 | mckinsey #2, boozallen #3, ibm #6 — all enterprise-framed; still zero mid-market answer (open lane for the Aug 5 draft) |
| AI consultant vs MSP | No | lumenova.ai #1 (weak) | reddit #2; rest generic IT-consulting-vs-MSP (icssnj, corsicatech, opustech). No mid-market AI answer holder — open lane (matches drafted Jul 22 post) |
| how to choose an AI consulting firm | No | fayedigital.com #1 | Listicles dominate: thinklytics #4, akveo #6, quinnox #8; BCG #5; xcelacore fell out of top 10 |

**Trend vs. 2026-06-10 baseline:** No net change in presence — 10xvelocity.ai still appears in **0** of all queries (0/11 this run; 0/8 at baseline). No queries gained, none lost. Absence persists even on the two queries the now-live pillars target: the cost pillar (live ~3 weeks) is absent for both cost queries, and the Louisville pillar (live ~1 week) is absent for all local queries — expected given normal 1–3 month indexing/ranking lag; too early to read as failure. Competitive shifts worth tracking: (1) **streamline.us** emerged as the dominant local answer holder — a single "AI Consulting in Kentucky: Lexington, Louisville & Northern KY" post now ranks #1–3 across nearly every Tier 1 query, the most direct threat to 10xV's Louisville pillar; (2) **bosio.digital** newly claimed #1 for "AI consulting cost for mid-sized business" using 10xV's exact 50–500-employee ICP framing; (3) **syrv.ai** (fractional CAIO, mid-market) and **argentumit.com** (local readiness) surfaced as new competitors. Some baseline holders (louisvillegeek.com, iternal.ai, mldeep.io) dropped out of top 10 this run — likely position volatility, not confirmed losses. The "AI consultant vs MSP" and "change management for AI adoption" queries remain without any mid-market answer holder — open lanes matching the drafted Jul 22 and Aug 5 posts.

**Next action (July):** Re-order the publish queue — move the drafted **"AI Consultant vs. MSP"** post (`ai-consultant-vs-msp`, id 9) into the next slot (Jul 8), ahead of the more-contested readiness pillar. Rationale: of the 11 probed queries, "AI consultant vs MSP" is the only one with no entrenched answer holder (top results are one vendor blog + Reddit + generic IT-vs-MSP posts), the asset is already written, and 10xV's mid-market angle is differentiated — the fastest realistic path to a first ranking. Keep cadence (one piece, not batched). Watch item: if the cost pillar is still absent at the Aug 1 probe, refresh it to out-complete bosio.digital's new #1 mid-market cost page.

---

# AI Evals campaign (new lane — topic authority)

Separate lane from the AI-consulting/local buyer-intent set above. Goal: own "AI evaluations for non-engineers / business people focused on AI adoption" as a category. Anchor asset: `src/data/ai-evals-pillar-post.md` ("Everyone Got the Chatbot. Nobody Checked Its Work.").

## Target query set — manual scoping search (2026-07-07)

Not the formal monthly probe — a one-off landscape search to find open lanes before publishing. 10xV absent from all (asset not live yet). "Holder" = who currently owns the answer; lane status drives publish order.

| Query | Lane status | Current holder(s) | Mapped asset |
|---|---|---|---|
| how do I know if my company's AI is accurate / right | **OPEN** | unu.edu (academic), Reddit/Quora/YouTube — no business-leader answer | Pillar + "accuracy checklist" post |
| AI quality assurance for non-technical leaders | **OPEN** | software-QA vendors (Tricentis, ASQ, qt.io) — all off-intent (SW testing) | "AI QA without a QA team" post |
| what does an AI trace look like / how to read AI logs (non-engineer) | **OPEN** (infer; probe at baseline) | none plain-language; teased as pillar's next-in-series | Trace post |
| how to review AI output quality / AI error analysis | SEMI-OPEN | producttalk.org (glossary), Futurice, Medium — some general-reader, none in a business voice | Error-analysis post |
| how to test an AI chatbot before launching it | SEMI-OPEN | BrowserStack, TestFort, Test IO — all QA-technical, zero business framing | Chatbot-testing post |
| how to make sure an AI agent is reliable before deploying | SEMI-OPEN | Galileo, ML Mastery, Reddit — technical/vendor | Agent-reliability post |
| how to measure AI performance in your business | SEMI-OPEN (quality-vs-ROI gap) | Sendbird, Google Cloud, Salesforce Ventures — all KPI/ROI, not output correctness | "measure quality not just ROI" angle |
| how to evaluate an AI vendor's performance before buying | SEMI-OPEN (buyer intent — conversion bridge) | tracebloc, Eric Brown, Gartner, Morgan Lewis — fragmented, no dominant | Vendor-eval post (bridges to consulting lane) |
| what is an AI evaluation (eval) for business | CONTESTED (authority, slow) | OpenAI, IBM, **Amplitude ("plain-language guide" — direct rival)**, Thoughtworks, Galileo | Pillar (category anchor) |
| LLM as a judge / automated AI evaluation | CONTESTED | vendor-held (Galileo et al.) | LLM-as-judge post |

**Read:** the open lanes coincide with the pillar's own thesis ("ignore the leaderboards; check your AI's actual work"). The category term is already enterprise-held, so lead with the open problem-aware queries, not the definition.

**Next action:** run these 10 as the AI-evals baseline at the next monthly probe (before or at pillar publish), so ranking lift is measurable. Then publish pillar → open-lane posts first (one at a time, same cadence as the consulting lane).
