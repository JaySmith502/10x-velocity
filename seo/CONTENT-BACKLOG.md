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

## Quarterly cornerstone maintenance

Each quarter (Sep 2026, Dec 2026, …): re-verify facts in the three pillars + Louisville guide against competitors' current pages, update copy, set `dateModified` in `src/data/blogPosts.ts`, and bump `lastmod` in the sitemap. Freshness is a ranked GEO factor — competitor cost pages aging out (RTS Labs: Jan 2025) is how we pass them.

## Standing rules

- One edge per piece no competitor has (data, framework, pricing, ICP, or depth).
- A number in the first 50 words of every answer block.
- Internal links: cluster post ↔ pillar ↔ relevant service page.
- Voice: declarative; banned phrases per `seo/CONTENT-BRIEF-TEMPLATE.md` §5.
