# 10x Velocity — AEO-First Search Strategy

**Date:** June 10, 2026 · **Scope:** 10xvelocity.ai only (10x Studio / 10xstudio.dev is out of scope)
**Goal:** Get 10xvelocity.ai cited by answer engines (ChatGPT, Google AI Overviews, Perplexity, Claude) for the questions mid-market buyers actually ask about AI consulting — with classic SEO as the foundation underneath.

---

## 1. Executive Summary

Mid-market executives no longer start vendor research with ten blue links. They ask ChatGPT "how much does AI consulting cost" and Perplexity "AI consulting firms in Louisville." Answer engines cite the most complete, declarative, scannable answer in the candidate set — not the highest-authority domain. The pages winning citations for our target queries today (iternal.ai's cost pillar, mldeep.io's readiness framework) are low-to-mid authority sites that engineered pages for citation. That is the game 10xvelocity.ai can win.

Three facts drive this strategy:

1. **The site is currently invisible to AI crawlers.** It's a client-rendered React SPA. GPTBot, ClaudeBot, and PerplexityBot do not execute JavaScript. They see an empty `<div id="root">`, a placeholder meta description (`"10x velocity"`), and zero schema — every Helmet tag and JSON-LD block the site ships is injected client-side and never reaches them. Fixing the static HTML payload is priority zero. Everything else is built on top of it.
2. **The competitive intersection is empty.** Across 10 competitors crawled (13 pages), nobody combines honest mid-market pricing + answer-first formatting + quantified proof + Louisville geography + nonprofit relevance. National players price for enterprise; local players publish no pricing, no proof, and (in Z-JAK's case) explicitly cap at 150 employees. The 50–500 employee buyer — ours — has no page written for them anywhere.
3. **The site already has the raw material competitors lack.** Real case-study numbers (85% faster processing, $240K/yr saved, 6-week implementation), published productized pricing ($129–$999 + $49/mo), VOSB verification, and a Louisville address. None of it is currently packaged in the format answer engines cite.

The plan: fix the rendering/static-payload problem, enrich identity schema, expand the FAQ to answer the questions competitors dodge (starting with cost), publish 3 pillar pages + Tier 3 answer posts at 1–2/month, and probe answer-engine visibility monthly.

---

## 2. Current State: Site + Repo Audit

### What's already in place (stronger than expected)

| Asset | State | Evidence |
|---|---|---|
| Per-page meta | react-helmet on all 34 pages: unique title, description, canonical, OG, Twitter | `src/pages/*.tsx` |
| Identity schema | Organization + ProfessionalService + WebSite `@graph` on homepage | `src/pages/Index.tsx`, `src/schemas/organization.ts` |
| FAQ schema | FAQPage on `/services` with visible accordion (4 questions) | `src/pages/Services.tsx` |
| Breadcrumbs | Reusable `breadcrumbJsonLd()` util + visible breadcrumb component | `src/schemas/breadcrumbs.ts` |
| Crawl infra | `robots.txt` (allow all + sitemap pointer), `sitemap.xml` (25 routes), Netlify `_redirects` | `public/` |
| llms.txt | Exists | `public/llms.txt` |
| Proof | 9 case studies with hard numbers (50–400% improvements); homepage leads with GovBrokers 85% / $240K / 6 wk | `src/pages/case-studies/` |
| Pricing | `/packages` publishes real numbers: $129, $499, $999, $49/mo | `src/pages/Packages.tsx` |

### Gap list (ranked by severity)

| # | Gap | Why it matters for AEO | Severity |
|---|---|---|---|
| 1 | **Client-rendered SPA; AI crawlers see nothing.** Static `index.html` has placeholder description (`"10x velocity"`), no JSON-LD, empty body. All Helmet/schema work is invisible to GPTBot/ClaudeBot/PerplexityBot, which don't render JS. Google renders JS, so classic SEO partially survives — AEO does not. | The entire citation surface is dark to the engines we're targeting | **P0** |
| 2 | **llms.txt is stale and polluted.** References retired homepage copy ("cutting-edge solutions"), includes chat-widget transcripts and form-field junk, omits packages/pricing, case-study numbers, and most services. For JS-blind AI crawlers it's currently the *primary* content surface — and it's wrong. | Wrong answers get cached into AI training/retrieval | **P0** |
| 3 | **No page answers a buyer-intent question.** No cost/pricing explainer, no readiness framework, no change-management content. The 4 services FAQs are generic ("What services do you offer?") and dodge cost entirely — same failure as every local competitor. | Nothing to cite for the queries that matter | **P0** |
| 4 | **Blog is a liability.** Numeric URLs (`/blog/1`), dates stuck in April–May 2024, several posts thin/empty, **no BlogPosting schema, no dates in schema** (`BlogPost.tsx` has no JSON-LD at all). | Fails Freshness and Trust factors; numeric slugs waste the URL signal | **P1** |
| 5 | **Identity schema is thin.** Missing: telephone ((502) 804-2559 appears in llms.txt but not schema), `geo`, `areaServed`, `hasOfferCatalog` (service catalog), `foundingDate`, veteran-owned designation (VOSB badge is in the footer image but nowhere machine-readable), `priceRange`. `sameAs` lists only LinkedIn. | Local-pack and entity-graph signals left on the table | **P1** |
| 6 | sitemap.xml has no `lastmod` | Freshness signal absent; engines can't prioritize recrawl | **P2** |
| 7 | `/packages` pricing isn't framed as an answer. The numbers exist but the page never asks or answers "how much does AI consulting cost?" — the single highest-volume buyer question. | The site's biggest differentiator is unfindable | **P1** |

---

## 3. Competitive Landscape and the Wedge

Ten competitors crawled June 10, 2026 — the domains that actually rank/get cited for our target queries (not a guessed list).

### Summary gap table

| Competitor | Lane | Pricing published | Answer-first content | Quantified proof | Serves 50–500 mid-market | Louisville |
|---|---|---|---|---|---|---|
| RTS Labs | National enterprise | Yes ($10K–$500K+, self-contradicting) | FAQ present, answers vague | Strong (WEX, CarMax; "6 weeks → 4 days") | No — enterprise | No |
| Iternal | National enterprise/gov | Yes — most explicit ($100–$1,200/hr; $50K/$150K tiers) | **Best in class** (answer-first H2s, FAQ, cited stats, June 2026) | Weak — no named clients | Fractional CAIO nod only | No |
| MLDeep | National mid-market data | Partial ($15K diagnostic) | Excellent (rubric table, 5-Q FAQ, Apr 2026) | None — zero clients | SaaS/engineering orgs only | No |
| Xcelacore | National SMB generalist | No | Question-titled blogs, no numbers, agency-bylined | Moderate, unquantified | Diluted (AI is 1 of 9 services) | No |
| TXI | National enterprise product | No | None | Strong | No | No |
| AI Consulting Network | Pivoted to CRE only | No | None | Vivid but niche | Abandoned | No |
| Louisville Geek | **Louisville** MSP | No | **None** — descriptive prose, Sept 2025 | No AI clients/numbers | Generic SMB | Yes |
| Z-JAK | **Louisville** MSP | No | ~10-Q FAQ, direct but salesy | Anonymous testimonials, no numbers | **Explicitly 5–150 employees** | Yes |
| UPTech IT | Central KY MSP | No | 7-Q FAQ, fresh (June 2026), keyword-stuffed | None | SMB | **No — Lexington; cedes Louisville** |
| Centric | National w/ Louisville office | No | None on local page | Strong brand, not localized | Enterprise-leaning | Office only |

### The wedge

**Be the most complete, declarative, number-bearing answer for AI consulting questions asked by 50–500 employee companies — and own the Louisville/Kentucky versions of those questions outright.**

Specifically, the empty intersections (evidence in `seo/COMPETITOR-RESEARCH.md`):

1. **Honest mid-market pricing.** Only two competitors publish numbers, both enterprise-anchored; RTS Labs' cost table contradicts its own prose ($10–15K vs $7–35K for the same assessment). No local competitor publishes a single dollar figure. A narrow, honest cost table scoped to 50–500 employee companies has no competition.
2. **AI readiness without a data team.** MLDeep's framework — the current best answer — assumes dbt, IaC, and eval harnesses. The services firm or nonprofit running QuickBooks + a CRM + SharePoint has no framework written for it.
3. **Change management / adoption mechanics.** Systematically neglected: Iternal sells a book, RTS gives it one FAQ line, locals offer "training" as a bullet. Everyone cites the MIT/RAND pilot-failure stats; nobody operationalizes the fix.
4. **Louisville.** Louisville Geek wins on domain age with a page that answers nothing. Z-JAK caps at 150 employees. UPTech serves Lexington. Centric's local page is a brochure. "AI consulting in Louisville: who does it, what it costs, how to choose" — written fairly, naming competitors — would be the most complete answer in existence on day one.
5. **Nonprofits.** Zero competitors have a sentence of nonprofit AI guidance. 10x Velocity already serves them.

The format playbook to beat the two strong citation pages (Iternal, MLDeep): answer-first bolded definition under every question H2, a real pricing/rubric table, dated bylined authorship, FAQ blocks with self-contained answers, and named clients with one hard number each. Across all 13 competitor pages crawled, only Iternal and MLDeep put a number in the first 50 words — and neither serves mid-market Louisville.

---

## 4. The GEO 18-Factor Playbook, Applied

Six categories. Every substantive page gets engineered against all six.

**Content Match** — One page per question, in the buyer's words. H1s and H2s phrased as the literal query ("How much does AI consulting cost?"), not marketing abstractions ("Investment options"). No drift: the cost page doesn't pitch services; the readiness page doesn't sell the assessment until the answer is complete.

**Completeness** — State the prices. The site already publishes $129–$999 packages; extend that honesty to consulting engagements (assessment range, pilot range, advisory retainer range, what moves the price). Honest comparisons: when an MSP Copilot rollout is the right call instead of us; when a national firm is. Competitors omit all of this — that omission is the opening.

**Trustworthiness** — Declarative sentences, no hedging ("An AI readiness assessment for a 100-person company costs $X–$Y", not "costs can vary"). Every claim either comes from our case studies or carries a citation. No contradictions — RTS Labs' self-contradicting cost table is the cautionary example. Veteran-owned (VOSB), real address, real phone, named author with date on every post.

**Readability** — Answer block (100–150 words) at the top of every page. One H2 per real People-Also-Ask question. Every section answers independently — answer engines lift sections, not pages. Tables for anything numeric (engines cite tables disproportionately — both currently-winning competitor pages are built around one).

**Competitive Standing** — Be the most complete answer in the set, verified against the actual SERP/citation set before publishing (the pre-publish check in the content brief). Accumulate reviews/social proof over time: Google Business Profile, Clutch listing (Z-JAK's "Top MSP Kentucky" badge comes from there), LinkedIn activity.

**Freshness** — Visible publish + modified dates on every post, `datePublished`/`dateModified` in schema, `lastmod` in sitemap. Cornerstone pages re-reviewed quarterly; competitor cost pages aging out (RTS: Jan 2025) is how we pass them.

---

## 5. Query Target Map

### Tier 1 — Local foundation (win first; weakest competition)

| Query | Current best answer | Target asset |
|---|---|---|
| AI consulting Louisville / Louisville KY | Louisville Geek (no questions, no pricing, no proof) | Louisville buyer's guide pillar |
| AI consulting Kentucky / for Kentucky businesses | UPTech (Central KY, no proof) | Louisville pillar + service pages |
| AI automation consulting Louisville | Same incumbents | Louisville pillar |
| AI consultant for mid-market companies in Kentucky | **Nobody** (Z-JAK caps at 150 employees) | Louisville pillar, mid-market section |
| Louisville AI consultant vs national firm | **Nobody** | Tier 3 post |
| AI readiness assessment Louisville | **Nobody** | Readiness pillar, local section |
| AI for nonprofits Kentucky | **Nobody** | Nonprofit readiness post |

### Tier 2 — National / niche reach (winnable on completeness despite lower DA)

| Query | Current best answer | Its weakness | Target asset |
|---|---|---|---|
| how much does AI consulting cost (mid-market variants) | iternal.ai | $10K–$5M range is useless; enterprise lens; no client proof | Cost pillar |
| AI consulting cost for small/mid-sized business | theaiconsultingnetwork.com (stale, pivoted to CRE) | Orphaned asset, vulnerable | Cost pillar |
| what should an AI readiness assessment cost | MLDeep ($15K, data-eng only) | Single number, engineering lens | Cost pillar + readiness pillar |
| AI readiness assessment (no data team / mid-market) | MLDeep | Assumes SaaS engineering org | Readiness pillar |
| change management for AI adoption | Prosci/McKinsey (enterprise theory) | Nothing actionable for 50–500 segment | Change-management pillar |
| why do AI pilots fail | Everyone cites MIT/RAND; nobody operationalizes | Generic | Change-management pillar |
| how to choose an AI consulting firm | Xcelacore vetting checklist | Agency-written, no numbers | Tier 3 post |

### Tier 3 — Question clusters (PAA expansions; one post each, brief-standard)

Cost cluster: AI consulting retainer vs project pricing · hidden costs of AI implementation · how much does Copilot implementation cost for a 100-person company · what does an AI consultant do.
Readiness cluster: signs your company is not ready for AI · AI readiness checklist for nonprofits · do I need an AI readiness assessment or can I run my own.
Adoption cluster: how to get employees to actually use AI tools · will AI replace my employees · how to introduce AI without scaring your team.
Choosing cluster: AI consultant vs MSP — what's the difference (directly reframes both Louisville incumbents) · questions to ask before signing an AI consultant · Louisville AI consultant vs national firm.

---

## 6. Content Architecture and Roadmap

### Architecture

- **Pillars** live at descriptive top-level blog slugs (`/blog/ai-consulting-cost-mid-market`, not `/blog/6`). Each pillar links down to its Tier 3 cluster posts; each cluster post links up. Services pages link to the relevant pillar.
- **Every substantive page follows the AEO content brief** (`seo/CONTENT-BRIEF-TEMPLATE.md`): answer block first; one H2 per PAA question; one edge per page; one cited fact per section; pre-publish check.
- **The edge per pillar:** Cost pillar — a real price table scoped to 50–500 employee companies (nobody publishes one). Readiness pillar — a named, scored framework calibrated to companies without data teams (the "Velocity Readiness Score"), rubric table included. Change-management pillar — adoption mechanics with our case-study numbers attached.

### Pillar slate (Phase 5 of this engagement)

1. **What AI Consulting Costs for Mid-Market Companies (50–500 Employees)** — the wedge page. Honest table: readiness assessment, pilot/first automation, monthly advisory; what moves the price; worked example from a real engagement; how our $129–$999 packages map to entry points. Targets the largest gap in the set.
2. **AI Readiness Without a Data Team: How to Tell If Your Company Is Ready** — named scored framework, rubric table, "signs you should wait" thresholds, DIY one-week self-assessment (out-completes MLDeep for non-engineering orgs), nonprofit variant section.
3. **Change Management for AI Adoption: Why Pilots Fail and What Fixes Them** — the systematically neglected category. Operationalize the failure stats: champions, usage metrics, policy rollout, incentive design; GovBrokers/case-study evidence.

Plus the Louisville buyer's guide (Tier 1 anchor) as pillar 4 or the first Tier 3 wave, and 2–3 Tier 3 posts from the clusters above.

### Cadence

1–2 substantive pieces/month, staggered publish dates (no batch-dumping — freshness signals should accrue continuously). Quarterly: re-verify cornerstone facts, bump `dateModified`, re-run the competitive set. Backlog and calendar: `seo/CONTENT-BACKLOG.md`.

---

## 7. Technical Roadmap

### P0 — Static payload (this engagement)

1. **Fix `index.html`:** real meta description, static Organization/ProfessionalService/WebSite JSON-LD (AI crawlers must get identity without executing JS).
2. **Regenerate `llms.txt`:** accurate, current, complete — positioning, services, pricing, case-study numbers, contact, geography. This is the highest-leverage file on the site for JS-blind crawlers; treat it as a first-class content artifact (llms.txt adoption is an emerging convention proposed at llmstxt.org, already consumed by several AI crawlers).
3. **Enrich identity schema** (`src/schemas/organization.ts`): telephone, geo, areaServed (Louisville + US), `hasOfferCatalog` from the live service list, foundingDate, priceRange, VOSB credential via `NonprofitType`-adjacent properties (`award`/`hasCredential`), expanded `sameAs`.
4. **Expand the services FAQ** to the questions competitors dodge — cost included, honestly framed — with visible accordion mirroring FAQPage schema 1:1.
5. **BlogPosting + BreadcrumbList schema on posts** with `datePublished`/`dateModified`; visible dates on the page.
6. **Reusable per-page JSON-LD mechanism** (`src/schemas/` extended) + **AEO content-brief template** in repo.
7. **sitemap `lastmod`** on all entries.

### P1 — Rendering (decision required; not a quick win)

The durable fix for AI-crawler invisibility is serving rendered HTML. Options, in increasing order of effort: (a) **Netlify prerendering** for bot user-agents — lowest touch, but the feature is legacy/limited; (b) **build-time prerendering** of the ~25 static routes via a Vite SSR script or `vite-react-ssg` — right answer for a marketing site with no dynamic data, requires entry refactor (StaticRouter, hydration) and careful handling of browser-only components (WebGL mesh, chat widget); (c) framework migration (Astro/Next) — out of scope. Recommendation: (b), scheduled as its own work item with regression testing. Until then, P0 items 1–2 are the mitigation: identity, pricing, and proof reach AI crawlers via static head + llms.txt even though page bodies don't.

### P2 — Hygiene

Slugged blog URLs (`/blog/:slug`) with redirects from numeric IDs; refresh or prune the five 2024-dated starter posts (thin content under a 2024 date is a negative freshness signal); image alt audit; Google Business Profile + Clutch listing (competitive-standing factors that live off-site).

---

## 8. Measurement Plan

No fabricated baselines — the site has no current answer-engine visibility to measure against, so month one establishes the baseline.

**Monthly AEO visibility probe** (automated, scheduled task): run the Tier 1 + Tier 2 query set through live search; record for each query whether 10xvelocity.ai appears/is cited, and which competitor holds the answer; append to `seo/visibility-log.md` (date, query, result, holder); report the single highest-leverage next action. Trend over months is the primary KPI.

**Supporting signals** (check monthly, manually or via GSC once connected): Google Search Console impressions/clicks on question queries (verify GSC is set up — `llms.txt` and sitemap exist but search-console status is unknown); branded search volume; referral traffic with `utm` or referer from chatgpt.com/perplexity.ai; contact-form submissions mentioning "found you via ChatGPT/AI" (add the question to the contact flow).

**Success criteria, 6 months:** cited or linked for ≥3 Tier 1 local queries and ≥1 Tier 2 national question; all P0 technical items live; 6+ brief-standard pieces published on cadence.

---

## 9. Sources

- Live crawl of 10xvelocity.ai (Firecrawl, June 10, 2026) — homepage render, sitemap, robots, llms.txt
- Repo audit — `index.html`, `src/pages/*`, `src/schemas/*`, `src/data/blogPosts.ts`, `public/`
- Competitor crawl (13 pages / 10 domains, June 10, 2026): rtslabs.com, iternal.ai, theaiconsultingnetwork.com, xcelacore.com, mldeep.io, txidigital.com, louisvillegeek.com, zjak.net, uptechit.net, centricconsulting.com — full findings in `seo/COMPETITOR-RESEARCH.md`
- SERP observation for target queries (Firecrawl search, June 10, 2026): "AI consulting firm for mid-market companies", "how much does AI consulting cost", "AI consulting Louisville Kentucky", "AI readiness assessment for mid-market companies", "what does an AI consultant do", "change management for AI adoption", "AI strategy consultant for small business", "how to choose an AI consulting firm"
