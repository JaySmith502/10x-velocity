# AEO Content Backlog & Publish Calendar

Cadence: 1–2 substantive pieces/month, staggered — never batch-publish. To publish a drafted post: open `src/data/blogPosts.ts`, remove `draft: true` from the entry, confirm `date` matches the actual publish date, and add the URL to `public/sitemap.xml` with `lastmod`. Every new piece follows `seo/CONTENT-BRIEF-TEMPLATE.md`.

## Written and scheduled (in repo now)

| Publish date | Piece | Slug | Tier | Status |
|---|---|---|---|---|
| **Jun 10, 2026** | What AI Consulting Costs for a Mid-Market Company | `what-ai-consulting-costs-mid-market` | 2 (pillar) | **Live** (in sitemap) |
| Jun 24, 2026 | AI Consulting in Louisville: Who Does It, What It Costs, and How to Choose | `ai-consulting-louisville` | 1 (pillar) | Draft — flip `draft: true` |
| Jul 8, 2026 | Is Your Company Ready for AI? A Readiness Check for Teams Without a Data Team | `ai-readiness-without-data-team` | 2 (pillar) | Draft |
| Jul 22, 2026 | AI Consultant vs. MSP: Which Do You Actually Need? | `ai-consultant-vs-msp` | 3 | Draft |
| Aug 5, 2026 | Change Management for AI Adoption: Why Pilots Fail and What Fixes Them | `change-management-ai-adoption` | 2 (pillar) | Draft |
| **Jul 7, 2026** | Everyone Got the Chatbot. Nobody Checked Its Work. (AI evals pillar — new topic-authority lane) | `ai-evaluation-for-business` | Evals | **Live** (in sitemap) |

## Prioritized backlog (write next, in order)

| Priority | Piece (core question) | Tier | Why it wins (evidence in seo/COMPETITOR-RESEARCH.md) |
|---|---|---|---|
| 1 | How much does Microsoft Copilot implementation cost for a 100-person company? | 3 | All three local MSPs sell it; none publishes a price or licensing math. Zero competition. |
| 2 | Will AI replace my employees? (mid-market answer) | 3 | Only Z-JAK answers, in two sentences. Pairs with change-management pillar. |
| 3 | Signs your company is NOT ready for AI | 3 | Only Xcelacore touches it, with no thresholds. Cluster post under readiness pillar. |
| 4 | AI readiness checklist for nonprofits (under $20M budget) | 1/3 | Completely unserved by all 10 competitors crawled. Native audience fit. |
| 5 | Questions to ask before signing an AI consultant (with red-flag thresholds) | 3 | Closest competitor is Xcelacore's agency-written checklist with no numbers. |
| 6 | AI consulting retainer vs. project pricing | 3 | Nobody frames it for mid-market. Cluster post under cost pillar. |
| 7 | Louisville AI consultant vs. national firm — honest comparison | 1/3 | UPTech argues it for Central KY only; nobody does it even-handedly. |
| 8 | AI automation for Kentucky logistics (UPS Worldport metro angle) | 1 | Vertical × local: zero direct competition. First of a local-vertical series (healthcare, manufacturing next). |

## AI Evals cluster (topic-authority lane — write in this order)

Separate lane from the consulting backlog above. Pillar is **live** (`ai-evaluation-for-business`). Publish supporting posts open-lanes-first, one at a time (never batch). Each links **up** to the pillar; add a **down**-link from the pillar to each as it goes live (see Standing rules). Full landscape + lane status in `seo/visibility-log.md` (AI Evals campaign section).

| Order | Piece (working title) | Proposed slug | Target query | Lane |
|---|---|---|---|---|
| 1 | What an AI "Trace" Actually Looks Like | `what-an-ai-trace-looks-like` | what does an AI trace look like | OPEN (teased as pillar's next-in-series) |
| 2 | How Do You Know If Your AI Is Accurate? A Manager's Checklist | `how-to-know-if-your-ai-is-accurate` | how do I know if my AI is accurate | OPEN |
| 3 | AI Quality Control Without a QA Team | `ai-quality-control-without-qa-team` | AI QA for non-technical leaders | OPEN |
| 4 | Error Analysis: The Highest-Return Hour in AI | `ai-error-analysis` | how to review AI output quality | Semi-open |
| 5 | Writing Down What "Good" Means | `define-what-good-ai-looks-like` | how to define AI quality criteria | Semi-open |
| 6 | Letting One AI Grade Another (and When Not to Trust It) | `llm-as-a-judge-explained` | LLM as a judge | Contested |
| 7 (opt) | Agents Don't Get the Same Forgiveness | `ai-agent-reliability` | make an AI agent reliable before deploying | Semi-open |
| 8 (opt) | How to Judge an AI Vendor's Actual Performance (Not the Demo) | `evaluate-ai-vendor-performance` | evaluate an AI vendor before buying | Semi-open (bridges to consulting lane) |

Each piece follows `CONTENT-BRIEF-TEMPLATE.md`; Jay byline; a number in the first 50 words.

## Legacy scaffold posts (hidden 2026-07-07 — rewrite before re-publishing)

Posts id 1-5 in `src/data/blogPosts.ts` are Lovable-scaffold stubs: no real body (1-2 have partial generic-listicle sample JSX in `BlogPost.tsx`; 3-5 are excerpt-only) and fabricated bylines. Set `draft: true` and removed from `public/sitemap.xml` on 2026-07-07 so they stop diluting the AEO authority surface. Do NOT un-draft as-is. To revive any topic: rewrite as a full article per `CONTENT-BRIEF-TEMPLATE.md` with a real (Jay) byline and internal links, then add back to the sitemap. Candidate topics: (1) AI streamlining operations, (2) AI + human collaboration / future of work, (3) healthcare cost-savings case study, (4) nonprofits + AI, (5) ROI of AI implementation.

## Quarterly cornerstone maintenance

Each quarter (Sep 2026, Dec 2026, …): re-verify facts in the three pillars + Louisville guide against competitors' current pages, update copy, set `dateModified` in `src/data/blogPosts.ts`, and bump `lastmod` in the sitemap. Freshness is a ranked GEO factor — competitor cost pages aging out (RTS Labs: Jan 2025) is how we pass them.

## Standing rules

- One edge per piece no competitor has (data, framework, pricing, ICP, or depth).
- A number in the first 50 words of every answer block.
- Internal links (apply automatically to every post, new and existing — never wait to be asked): cluster post ↔ pillar ↔ relevant service/case-study page. Hub-and-spoke: each cluster post links up to its pillar; each pillar gets a down-link added to every cluster post as that post goes live.
- Voice: declarative; banned phrases per `seo/CONTENT-BRIEF-TEMPLATE.md` §5.
