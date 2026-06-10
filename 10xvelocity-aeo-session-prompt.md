# Session prompt — AEO/SEO strategy for 10xvelocity.ai

Copy everything in the fenced block below into the first message of a new Cowork
session. If the 10xvelocity.ai code repo lives in a folder, connect that folder to
the session first so the assistant can implement changes directly; if not, it will
deliver the strategy + content as files and give implementation guidance.

---

```
You are running an AEO-first SEO strategy + implementation engagement for my
PRIMARY business site, 10xvelocity.ai. Treat answer-engine optimization (getting
cited by ChatGPT, Google AI Overviews, Perplexity, Claude) as the core goal, with
classic SEO as the foundation underneath it.

ABOUT THE BUSINESS
- 10xVelocity is an AI consulting firm: AI strategy, automation consulting,
  business transformation, change management, and AI readiness/enablement for
  mid-market companies. (It is the parent brand of a sister site, 10x Studio /
  10xstudio.dev, which sells custom software builds — keep the two distinct;
  this engagement is ONLY about 10xvelocity.ai and its consulting positioning.)
- Based in Louisville, Kentucky; serves clients nationally. Veteran-owned.
- Voice: declarative, blunt, engineering- and operations-literate. Specific over
  fluffy. Never hedge ("we think/might"). Avoid marketing clichés — no "digital
  transformation," "unlock your potential," "next-gen," "AI-powered everything,"
  "book a free consultation," "get started now."

BEFORE YOU START
Ask me 2-3 clarifying questions (use the interactive choice widget) on: (1) the
deliverable — strategy doc only, or doc + implementation in the repo; (2) geo
weighting — local Louisville/KY vs national; (3) whether the 10xvelocity.ai repo
is connected for code changes. Begin competitor research immediately in parallel;
don't gate the first searches on my answers.

PHASE 1 — AUDIT THE LIVE SITE
Crawl 10xvelocity.ai (use the web scrape/search tools; do NOT use curl/wget/python
to fetch URLs). Catalog: title/meta, canonical, Open Graph, existing schema
(JSON-LD), sitemap/robots, page inventory and structure, whether any page answers
buyer questions in direct, liftable prose, and the rendering stack/speed. Produce a
gap list against the GEO factors and the content-brief standard below.

PHASE 2 — COMPETITOR DISCOVERY (no list is provided — find them)
1. Derive a candidate set of target AEO queries from the positioning, e.g.:
   "AI consulting firm", "AI strategy consultant", "AI automation consulting",
   "AI readiness assessment", "change management for AI adoption", "how much does
   AI consulting cost", "what does an AI consultant do", "AI consulting Louisville
   / Kentucky", plus the obvious People-Also-Ask expansions.
2. Run those queries. Record which domains actually rank / get cited. Those are the
   real competitors — both national AI-consulting firms and any local players.
3. Pick the top ~5-8 and crawl each: positioning/tagline, services, target client,
   region, published pricing (usually none — note it), FAQ / question-based content
   (usually none — note it), trust signals (named clients, certifications, years,
   reviews), and schema. Build a competitive gap table.
4. Identify the wedge: the high-intent questions competitors answer poorly or not
   at all, where this site can win citations despite lower domain authority.

PHASE 3 — STRATEGY DOCUMENT
Write a strategy doc (markdown) covering: the competitive landscape + the wedge;
the AEO-first thesis; the GEO 18-factor playbook applied to this site; a query/
keyword target map (tiered: local foundation, national/niche reach, and Tier 3
question clusters); a content architecture + roadmap (pillar guides + cadence);
the technical schema roadmap; and a measurement plan. Ground claims in the
competitor crawl and live search — not assumptions. Don't fabricate metrics.

PHASE 4 — TECHNICAL IMPLEMENTATION (if the repo is connected)
Implement the quick wins and BUILD-VERIFY each: richer identity schema
(Organization/ProfessionalService with locality + service catalog + WebSite);
Service + FAQPage schema on the services page with a REAL, visible buyer-intent
FAQ (answer the questions competitors dodge, including honest pricing framing);
Article/BlogPosting + BreadcrumbList on posts with publish/modified dates; a
reusable mechanism for per-page JSON-LD; and a reusable AEO content-brief template
in the repo. Verify every JSON-LD block parses and the visible FAQ mirrors the
schema. (If the local build fights platform-specific node_modules binaries or an
immutable cache, do a clean `npm ci` in a sandbox copy.)

PHASE 5 — CONTENT (to the AEO brief below)
Write 2-3 evergreen pillar pages/guides for the highest-leverage questions (likely:
what AI consulting costs / how it's scoped; AI readiness — do you need it and how to
tell; change management for AI adoption), plus a few Tier 3 answer posts in the
site's editorial voice. Stagger publish dates / use drafts so they don't all land
the same day. Build a prioritized content backlog + cadence calendar (~1-2/month).

PHASE 6 — AUTOMATION
Set up a monthly AEO visibility probe as a scheduled task: run the target questions
through search, record whether 10xvelocity.ai surfaces vs competitors, log a trend
to a file, and report the top next action. Offer to add the publish schedule +
setup reminders to my Google Calendar.

THE GEO 18-FACTOR PLAYBOOK (what makes content get cited by answer engines)
Six categories — engineer every page to win them:
- Content Match: answer the exact question in the user's words; no off-topic drift.
- Completeness: state prices, specs, and honest comparisons competitors omit.
- Trustworthiness: declarative (no hedging), evidence-backed, no contradictions,
  not overly promotional.
- Readability: sectioned and scannable; every section stands alone.
- Competitive Standing: be the MOST complete answer in the set; build real social
  proof over time.
- Freshness: show publish/modified dates and keep cornerstones current.

THE AEO CONTENT-BRIEF STANDARD (every substantive page)
1. Answer block first: 100-150 words answering the page's one core question, no
   intro fluff — this is what answer engines lift.
2. One H2 per real People-Also-Ask question; each section answers independently.
3. One edge per page no competitor has (original data, named framework, specific
   ICP, deeper subtopic, or published pricing).
4. One cited fact/number/example per section.
5. Pre-publish check (all must be yes): answer block answers the core Q directly;
   every H2 maps to a PAA question; sections stand alone; one cited point per
   section; a human gets something the AI summary doesn't.

OPERATING NOTES
- Use a task list to track the work. Confirm scope with me via the choice widget
  before large steps. Cite your sources.
- I handle git myself — there are no push credentials in the session. Prepare
  changes and give me the exact file list + commands; verify builds in a sandbox.
- Note the sister site (10x Studio / 10xstudio.dev) already went through this exact
  process; its repo (if connected) has a finished strategy doc, content-brief
  template, and schema patterns in its `seo/` folder you can reference as a model —
  but tailor everything to 10xvelocity's consulting positioning, not software builds.
```
