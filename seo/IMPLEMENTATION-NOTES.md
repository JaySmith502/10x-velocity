# AEO Implementation Notes — June 10, 2026

What changed in this engagement, why, and what to do at deploy time. Strategy: `seo/AEO-STRATEGY.md`. Evidence: `seo/COMPETITOR-RESEARCH.md`.

## Files changed

| File | Change |
|---|---|
| `index.html` | Real meta description (was placeholder `"10x velocity"`); **static identity JSON-LD** (Organization + ProfessionalService + WebSite) so JS-blind AI crawlers (GPTBot, ClaudeBot, PerplexityBot) receive identity, pricing range, services, and geography |
| `src/schemas/organization.ts` | Enriched `BUSINESS_DATA` (telephone, priceRange); added `SERVICE_CATALOG`; added `identityGraph()` — the canonical identity @graph with areaServed, VOSB award, hasOfferCatalog |
| `src/pages/Index.tsx` | Helmet now uses shared `identityGraph()` instead of an inline, thinner copy |
| `src/pages/Services.tsx` | FAQ expanded 4 → 10 with buyer-intent answers (cost with real package prices, AI consultant vs MSP, location/VOSB, nonprofits, client results, data prerequisites). Visible accordion and FAQPage schema render from the same `faqs` array, so they can't drift. Hero copy de-clichéd |
| `src/schemas/article.ts` | NEW — `blogPostingJsonLd()` (BlogPosting schema with datePublished/dateModified), `postPath()`, `toIsoDate()` |
| `src/data/blogPosts.ts` | Interface gains `slug`, `dateModified`, `draft`; five new posts added (1 live, 4 drafts — see `seo/CONTENT-BACKLOG.md`) |
| `src/data/articleContent.ts` | NEW — full bodies for the five AEO articles, keyed by slug |
| `src/components/blog/BlogPost.tsx` | Slug routing (numeric ids still resolve), BlogPosting + breadcrumb schema, visible publish/updated dates, draft → noindex, renders article bodies |
| `src/pages/Blog.tsx` | Hides drafts from index; links use slugs; meta description de-clichéd |
| `public/sitemap.xml` | `lastmod` on changed pages; cost-pillar URL added |
| `public/llms.txt` | Regenerated — was stale (old copy, chat-widget junk). Now: identity, published pricing, services, GovBrokers numbers, key URLs |
| `seo/` | NEW — strategy, competitor research, content brief template, backlog/calendar, visibility log, these notes |

## Deploy checklist

1. Review the new Services FAQ answers and the live cost pillar (`/blog/what-ai-consulting-costs-mid-market`) — they publish package prices and name the GovBrokers numbers (50% proposal processing, 35% win rate, 60% deadlines, 250% leads, 40% follow-ups, 30% admin — sourced from `src/pages/case-studies/GovBrokers.tsx`).
2. Commit + push (no push credentials in the agent session — owner does git).
3. After deploy: confirm `https://10xvelocity.ai/llms.txt`, view-source the homepage for the static JSON-LD, validate at validator.schema.org and Google's Rich Results Test.
4. Verify Google Search Console is set up for the domain and the sitemap is submitted.
5. Publish calendar: flip `draft: true` flags per `seo/CONTENT-BACKLOG.md` (next: Louisville pillar, June 24).

## Open items (deliberate, not forgotten)

- **Prerendering (P1).** Page *bodies* are still invisible to JS-blind AI crawlers; only the static head + llms.txt reach them. The durable fix is build-time prerendering of the ~25 static routes (Vite SSR script or `vite-react-ssg`); needs an entry refactor and regression testing. See strategy doc §7.
- **Pricing framing** is packages-only by owner decision (no market-rate ranges). If the cost pillar underperforms for "how much does AI consulting cost," the strongest lever is adding cited market ranges (RTS Labs, Iternal, MLDeep publish theirs — see competitor research).
- **Legacy posts 1–5**: 2024 dates, generic content, fictional-sounding authors. Recommend refresh-or-prune next quarter (negative freshness/E-E-A-T signal).
- **Off-site competitive standing**: Google Business Profile + Clutch listing (Z-JAK's badge source) are unclaimed leverage.
- Monthly AEO probe runs automatically (1st of month) and appends to `seo/visibility-log.md`.
