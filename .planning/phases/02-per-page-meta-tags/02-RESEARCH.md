# Phase 2: Per-Page Meta Tags - Research

**Researched:** 2026-02-10
**Domain:** SEO per-page metadata, canonical URLs, heading structure, React Helmet usage
**Confidence:** HIGH

## Summary

Phase 2 adds unique title tags, meta descriptions, and canonical link tags to every page in the 10x Velocity React SPA, and fixes a duplicate H1 issue caused by an n8n chat widget. The site has 30 page components plus 5 dynamic blog posts (35 unique URLs total, excluding the 404 page). Currently only 2 of these pages have React Helmet (Index.tsx and IndustryTools.tsx, set up in Phase 1). All other pages fall back to the generic `index.html` title "10x Velocity | AI & Automation Consulting" and the useless 2-word description "10x velocity."

The standard approach is: (1) add `<Helmet>` blocks with unique title, meta description, and canonical link to each of the 28 remaining static page components, (2) add dynamic `<Helmet>` to the BlogPost component using post data from `src/data/blogPosts.ts`, (3) add canonical tags to the 2 pages that already have Helmet, and (4) fix the duplicate H1 injected by the n8n chat widget by overriding its `<h1>` to a non-heading element via CSS.

**Primary recommendation:** Work through pages in batches grouped by route type (services, case studies, etc.) to maintain consistency in title/description patterns. Add canonical tags to all pages using `https://10xvelocity.ai` (without www -- confirmed via 301 redirect). Fix the n8n chat widget H1 via CSS override targeting `.chat-layout .chat-header h1`.

## Critical Discovery: Domain Mismatch

**The sitemap.xml and robots.txt from Phase 1 use `www.10xvelocity.ai`, but the actual canonical domain is `10xvelocity.ai` (without www).** Confirmed via HTTP redirect test:

```
$ curl -sI "https://www.10xvelocity.ai"
HTTP/1.1 301 Moved Permanently
Location: https://10xvelocity.ai/
```

This means:
- Phase 2 canonical tags MUST use `https://10xvelocity.ai/...` (without www)
- The Phase 1 sitemap.xml and robots.txt should be corrected as part of Phase 2 (or flagged for correction)
- All canonical URLs in Phase 2 use `https://10xvelocity.ai` as the base

**Confidence:** HIGH -- verified with actual HTTP request to Netlify

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| react-helmet | 6.1.0 | Per-page `<title>`, `<meta>`, `<link rel="canonical">` management | Already installed and proven in Phase 1; no new dependencies |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| N/A | - | No additional libraries needed | - |

**Installation:**
```bash
# No new packages needed. react-helmet@6.1.0 already installed.
```

## Architecture Patterns

### Pattern 1: Standard Page Helmet Block
**What:** Every page component gets a `<Helmet>` block as the first child element containing title, meta description, and canonical link.
**When to use:** All 30 static page components.
**Example:**
```typescript
// Source: Extending the proven pattern from src/pages/IndustryTools.tsx
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - AI Business Transformation | 10x Velocity</title>
        <meta
          name="description"
          content="10x Velocity uses AI to unlock human potential, not replace it. Learn about our human-centered approach to automation in Louisville, KY."
        />
        <link rel="canonical" href="https://10xvelocity.ai/about" />
      </Helmet>
      {/* existing page JSX unchanged */}
    </>
  );
};
```

### Pattern 2: Dynamic Blog Post Helmet
**What:** The BlogPost component uses the blog post data object to dynamically generate title, description, and canonical URL.
**When to use:** The `src/components/blog/BlogPost.tsx` component that renders `/blog/:id`.
**Example:**
```typescript
import { Helmet } from "react-helmet";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === parseInt(id || "0"));

  if (!post) return <NotFound />;

  return (
    <main className="flex-1">
      <Helmet>
        <title>{post.title} | 10x Velocity Blog</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://10xvelocity.ai/blog/${post.id}`} />
      </Helmet>
      {/* existing article JSX */}
    </main>
  );
};
```

### Pattern 3: CSS Fix for n8n Chat Widget H1
**What:** The n8n chat widget renders its `title` config value inside an `<h1>` element at `.chat-layout .chat-header h1`. This creates a duplicate H1 on every page. The fix changes the visual display to match a non-heading role using CSS, or hides it from accessibility if the widget's own code renders it.
**When to use:** Global CSS (src/index.css or equivalent).
**Example:**
```css
/* Fix duplicate H1 from n8n chat widget */
.chat-layout .chat-header h1 {
  font-size: inherit;
  font-weight: inherit;
  margin: 0;
  /* Alternatively, if the widget is inside a shadow DOM,
     the CSS may need to target differently */
}
```

**Important caveat:** The n8n chat widget on the live site appears to be injected by the Lovable/GPTEngineer platform script (`cdn.gpteng.co/gptengineer.js`), NOT by the React source code. The `public/lovable-uploads/snippet.html` file contains the n8n chat configuration but is not loaded by the React app. The widget injection happens externally. This means:
1. The CSS override approach targets the widget's rendered DOM regardless of injection method
2. If the widget uses Shadow DOM, external CSS will NOT penetrate -- would need to be handled differently
3. The most reliable approach is to check whether the n8n chat renders in light DOM or shadow DOM on the live site

### Anti-Patterns to Avoid
- **Putting all Helmet blocks in a single shared component:** Each page should own its own metadata. A centralized "SEO component" that takes route-based config adds indirection and makes per-page customization harder.
- **Using `window.location.pathname` for canonical URLs:** Use hardcoded canonical URLs per page. Dynamic construction risks including query params, hash fragments, or trailing slashes inconsistently.
- **Titles longer than 60 characters:** Google truncates titles beyond ~580-600px (roughly 50-60 characters). Keep titles concise. If a page needs more context, use the description.
- **Keyword-stuffing titles:** Each title should read naturally. One primary keyword per title is sufficient.
- **Using www in canonical URLs:** The site's canonical domain is `https://10xvelocity.ai` (without www). Using www will create a redirect chain and could confuse crawlers.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Per-page meta tags | Manual `document.title` manipulation | react-helmet `<Helmet>` blocks | Handles cleanup on unmount, declarative, proven in Phase 1 |
| Canonical URL construction | Dynamic URL builder from `window.location` | Hardcoded canonical hrefs per page | Avoids query param leaks, hash fragment issues, trailing slash inconsistency |
| Chat widget H1 fix | Modifying n8n chat source or forking the widget | CSS override targeting `.chat-layout .chat-header h1` | The widget is externally loaded; we can only affect its rendered output via CSS |

**Key insight:** The canonical URL for each page is known at development time (they are the same URLs listed in the sitemap). Hardcode them rather than constructing them dynamically.

## Common Pitfalls

### Pitfall 1: Title/Description Truncation
**What goes wrong:** Titles over 60 characters get cut off in Google SERPs with "..." making them look unprofessional and losing keywords.
**Why it happens:** Developers write descriptive titles without checking character count.
**How to avoid:** Enforce the 60-character limit for titles. For descriptions, aim for 150-160 characters. Measure each one.
**Warning signs:** Google Search Console showing truncated titles in Performance reports.

### Pitfall 2: Duplicate Titles Across Similar Pages
**What goes wrong:** Multiple case study pages or service pages end up with nearly identical titles (e.g., "Case Study | 10x Velocity" on every case study).
**Why it happens:** Batch editing with copy-paste leads to lazy differentiation.
**How to avoid:** Each title must include the unique identifier of the page content (client name for case studies, service name for services). Example: "Innes & Young AI PR Case Study | 10x Velocity" not "Case Study | 10x Velocity".
**Warning signs:** Google Search Console showing "Duplicate title tags" issues.

### Pitfall 3: Canonical URL Trailing Slash Inconsistency
**What goes wrong:** Some canonical URLs have trailing slashes, others do not. This splits link equity.
**Why it happens:** Inconsistent construction or copy-paste errors.
**How to avoid:** Use consistent format: NO trailing slash on canonical URLs (e.g., `https://10xvelocity.ai/about` not `https://10xvelocity.ai/about/`). The only exception is the root URL which is `https://10xvelocity.ai/`.
**Warning signs:** Google indexing both `/about` and `/about/` as separate pages.

### Pitfall 4: Blog Post Descriptions Over 160 Characters
**What goes wrong:** Using the full blog post excerpt as the meta description exceeds the optimal 150-160 character range.
**Why it happens:** Blog excerpts are written for the page, not for SERP display.
**How to avoid:** Check each blog post excerpt length. If over 160 characters, truncate or rewrite for the description specifically. Current blog post excerpts range from ~100 to ~170 characters, so most are fine.
**Warning signs:** Google truncating descriptions or auto-generating its own.

### Pitfall 5: Forgetting to Update Existing Helmet Pages
**What goes wrong:** The 2 pages already with Helmet (Index.tsx, IndustryTools.tsx) don't get canonical tags added because they're skipped as "already done."
**Why it happens:** Phase 2 adds canonical tags to ALL pages, including the ones that already have title/description from Phase 1.
**How to avoid:** Explicitly include Index.tsx and IndustryTools.tsx in the canonical tag task.
**Warning signs:** These 2 pages missing canonical tags while all others have them.

## Complete Page Inventory

### Pages WITH React Helmet (from Phase 1)
| Route | File | Current Title | Current Description | Needs in Phase 2 |
|-------|------|---------------|---------------------|-------------------|
| `/` | `src/pages/Index.tsx` | "AI & Automation Consulting \| 10x Velocity" | "10x Velocity helps businesses automate workflows and leverage AI to save time and cut costs. Based in Louisville, KY." | Add canonical tag |
| `/industry-tools` | `src/pages/IndustryTools.tsx` | "AI & Automation Tool Explorer by Industry \| 10x Velocity" | "Discover curated AI and automation tools for your industry. Browse tools for home services, legal, insurance, real estate, accounting, and healthcare." | Add canonical tag |

### Pages WITHOUT React Helmet (need title + description + canonical)
| Route | File | Current H1 Text | Notes |
|-------|------|-----------------|-------|
| `/about` | `src/pages/About.tsx` | "About Us" | |
| `/services` | `src/pages/Services.tsx` | "Our Services" | |
| `/services/data-cleaning` | `src/pages/services/DataCleaning.tsx` | "Data Cleaning Services" | |
| `/services/phone-voice-agents` | `src/pages/services/PhoneVoiceAgents.tsx` | "Supercharge Your Customer Calls with AI-Powered Voice Agents" | |
| `/services/ai-workshops` | `src/pages/services/AIWorkshops.tsx` | "Empower Your Team with Hands-On AI Workshops" | |
| `/services/smart-bots` | `src/pages/SmartBots.tsx` | "Smart Bots with Custom Knowledge" | Contains Needle AI widget embed |
| `/lexi-file` | `src/pages/LexiFile.tsx` | "Lexi-File(TM)" | |
| `/power-automate` | `src/pages/PowerAutomate.tsx` | "Microsoft Power Automate Expertise" | |
| `/prototypes` | `src/pages/Prototypes.tsx` | "Rapid Prototype Sprint -- From Idea to Interactive Proof in 10 Days" | |
| `/programs/ai-guide-certification` | `src/pages/AIGuideCertification.tsx` | "AI Guide Certification" | |
| `/case-studies` | `src/pages/CaseStudies.tsx` | "Case Studies" | |
| `/case-studies/innes-young` | `src/pages/case-studies/InnesYoung.tsx` | "Innes & Young: AI-Powered PR Evolution" | |
| `/case-studies/ecatalyst` | `src/pages/case-studies/ECatalyst.tsx` | "eCatalyst: 10x Velocity Boosts Operational Excellence" | |
| `/case-studies/hillcrest-partners` | `src/pages/case-studies/HillcrestPartners.tsx` | "10x Velocity Transforms Hillcrest Partners into a High-Growth Real Estate Powerhouse" | |
| `/case-studies/catalyst-group` | `src/pages/case-studies/CatalystGroup.tsx` | "10x Velocity Propels The Catalyst Group to Unprecedented Growth in Business Investment & Acquisitions" | |
| `/case-studies/director-of-marketing` | `src/pages/case-studies/DirectorOfMarketing.tsx` | "10x Velocity Transforms Director of Marketing Inc (DMI) into a High-Performance Social Media Marketing Agency" | |
| `/case-studies/birchwood-real-estate` | `src/pages/case-studies/BirchwoodRealEstate.tsx` | "10x Velocity Drives Birchwood Real Estate Partners to New Heights in Real Estate Wholesaling" | |
| `/case-studies/govbrokers` | `src/pages/case-studies/GovBrokers.tsx` | "10x Velocity Transforms GovBrokers into a High-Performance Government Contracting Powerhouse" | |
| `/case-studies/inspyrd` | `src/pages/case-studies/Inspyrd.tsx` | "10x Velocity Empowers Inspyrd to Launch a Transformational Trauma Recovery Program in the U.S." | |
| `/case-studies/transportation-director` | `src/pages/case-studies/TransportationDirector.tsx` | "Transportation Director: Revolutionizing Logistics Management" | |
| `/savings-calculator` | `src/pages/SavingsCalculator.tsx` | "Automation Savings Calculator" | |
| `/events/lunch-and-learn` | `src/pages/LunchAndLearn.tsx` | "AI as Your Performance Enhancer" | |
| `/demo` | `src/pages/OnboardingForm.tsx` | "Get A Demo For Your Business Now" | Contains n8n form iframe |
| `/blog` | `src/pages/Blog.tsx` | "10x Velocity Blog" | |
| `/blog/:id` | `src/components/blog/BlogPost.tsx` | `{post.title}` (dynamic) | 5 blog posts (IDs 1-5) |
| `/contact` | `src/pages/Contact.tsx` | "Get in Touch" | |
| `/privacy-policy` | `src/pages/PrivacyPolicy.tsx` | "Privacy Policy" | |
| `/terms-of-service` | `src/pages/TermsOfService.tsx` | "Terms of Service" | |

### Excluded from Meta Tags (should NOT get Helmet)
| Route | File | Reason |
|-------|------|--------|
| `*` (catch-all) | `src/pages/NotFound.tsx` | 404 page -- should not be indexed, no canonical needed |

**Total pages needing Helmet work:** 30 (28 new + 2 existing needing canonical)

## H1 Duplicate Issue - Investigation Results

### Finding: n8n Chat Widget Injects an H1

The SEO audit identified "Chat widget adds an extra H1 'Hi there!' on every page." Investigation reveals:

1. **Source:** The n8n chat widget (`@n8n/chat` npm package) loaded via CDN (`cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js`)
2. **Configuration:** Found in `public/lovable-uploads/snippet.html` with `title: 'Hi there! [wave emoji]'`
3. **DOM Structure:** The widget renders the title inside `.chat-layout .chat-header h1` (confirmed via CSS analysis of the widget's stylesheet)
4. **Injection Method:** The widget is NOT loaded by the React source code. It appears to be injected by the Lovable/GPTEngineer platform script (`cdn.gpteng.co/gptengineer.js`) loaded in `index.html`
5. **Impact:** Every page gets a second H1 element from the chat widget, violating the one-H1-per-page best practice

### Fix Options

**Option A: CSS Override (Recommended)**
Add CSS to `src/index.css` that changes the widget's H1 to behave like a non-heading element:
```css
/* Demote n8n chat widget H1 to non-heading role */
.chat-layout .chat-header h1 {
  font-size: inherit;
  font-weight: inherit;
  margin: 0;
  display: inline;
}
```
- **Pros:** No external changes needed, works regardless of injection method, easy to verify
- **Cons:** The H1 element still exists in DOM; only visual change. However, the main SEO concern (multiple H1s) is about the HTML element itself. CSS cannot change the element type.
- **Confidence:** MEDIUM -- CSS changes appearance but not DOM structure; crawlers may still see two H1s

**Option B: JavaScript DOM Manipulation (More Thorough)**
After the widget loads, find the H1 and change it to a different element:
```typescript
// In a useEffect or MutationObserver
const chatH1 = document.querySelector('.chat-layout .chat-header h1');
if (chatH1) {
  const span = document.createElement('span');
  span.innerHTML = chatH1.innerHTML;
  span.className = chatH1.className;
  chatH1.parentNode?.replaceChild(span, chatH1);
}
```
- **Pros:** Actually removes the H1 element from DOM
- **Cons:** Timing-dependent (widget must be loaded first), fragile if widget updates, requires MutationObserver for reliable timing
- **Confidence:** MEDIUM -- works but timing and shadow DOM concerns

**Option C: Remove/Configure the Widget (Most Effective)**
If the chat widget is loaded by the Lovable/GPTEngineer script, the solution may be to:
1. Remove the `gptengineer.js` script from `index.html` (but this may break Lovable integration)
2. Or configure the widget to not use an H1 for its title
- **Pros:** Eliminates the root cause
- **Cons:** May break Lovable auto-commit functionality; the script comment says "IMPORTANT: DO NOT REMOVE THIS SCRIPT TAG"
- **Confidence:** LOW -- unknown side effects of removing the script

**Option D: Targeted CSS to Hide Widget H1 from Crawlers**
Since Google renders pages with JavaScript enabled, a CSS-only approach may not fool crawlers. However, using `role="presentation"` via JS on the widget's H1 would signal to accessibility tools and potentially to crawlers that it is not a structural heading:
```javascript
const chatH1 = document.querySelector('.chat-layout .chat-header h1');
if (chatH1) chatH1.setAttribute('role', 'presentation');
```
- **Pros:** Semantic fix, tells assistive tech and crawlers it is not a real heading
- **Cons:** Still requires timing/MutationObserver
- **Confidence:** MEDIUM

**Recommendation:** Use Option B (JS DOM replacement) wrapped in a MutationObserver for reliability. This is the cleanest approach that actually removes the duplicate H1 from the DOM. Pair it with Option A (CSS) as a fallback for visual consistency while the JS runs.

## SEO Best Practices for This Site

### Title Tag Conventions
- **Format:** `[Page-Specific Keyword Phrase] | 10x Velocity`
- **Separator:** Use pipe `|` (already established in existing titles) or hyphen `-`. The site already uses `|` so maintain consistency.
- **Length:** Under 60 characters (Google displays ~580-600px, roughly 50-60 chars)
- **Brand position:** Brand name LAST (e.g., "AI Workshops | 10x Velocity" not "10x Velocity | AI Workshops") to prioritize keywords
- **Exception:** Homepage can lead with brand: "AI & Automation Consulting | 10x Velocity" (already set)
- **Uniqueness:** Every page must have a different title -- no two pages share the same title

### Meta Description Conventions
- **Length:** 150-160 characters (Google truncates beyond this)
- **Content:** Include a clear value proposition and call-to-action hint
- **Keywords:** Include 1-2 relevant keywords naturally
- **No quotes:** Avoid double quotes as Google may truncate at them
- **Uniqueness:** Every page must have a different description

### Canonical URL Rules
- **Base domain:** `https://10xvelocity.ai` (NO www -- confirmed via 301 redirect)
- **No trailing slash:** `/about` not `/about/` (exception: root `/` is `https://10xvelocity.ai/`)
- **Self-referencing:** Each page's canonical points to itself
- **Protocol:** Always `https://`
- **Format:** `<link rel="canonical" href="https://10xvelocity.ai/[path]" />`

## Code Examples

### Example 1: Static Page with Full Phase 2 Helmet
```typescript
// Pattern for every static page
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - AI Business Transformation | 10x Velocity</title>
        <meta
          name="description"
          content="10x Velocity uses AI to amplify human potential, not replace it. Learn our human-centered approach to automation consulting in Louisville, KY."
        />
        <link rel="canonical" href="https://10xvelocity.ai/about" />
      </Helmet>
      <main className="min-h-screen bg-velocity-dark">
        {/* existing page JSX unchanged */}
      </main>
    </>
  );
};
```

### Example 2: Adding Canonical to Existing Helmet Page
```typescript
// For Index.tsx and IndustryTools.tsx -- just add the canonical line
<Helmet>
  <title>AI & Automation Consulting | 10x Velocity</title>
  <meta
    name="description"
    content="10x Velocity helps businesses automate workflows and leverage AI to save time and cut costs. Based in Louisville, KY."
  />
  <link rel="canonical" href="https://10xvelocity.ai/" />
</Helmet>
```

### Example 3: Dynamic Blog Post Helmet
```typescript
// BlogPost.tsx -- uses post data for dynamic metadata
<Helmet>
  <title>{post.title} | 10x Velocity Blog</title>
  <meta name="description" content={post.excerpt} />
  <link rel="canonical" href={`https://10xvelocity.ai/blog/${post.id}`} />
</Helmet>
```

### Example 4: Case Study Title Pattern
```typescript
// Case studies should include client name for uniqueness
<Helmet>
  <title>Innes & Young AI PR Case Study | 10x Velocity</title>
  <meta
    name="description"
    content="See how 10x Velocity helped Innes & Young evolve their PR agency with AI-powered media monitoring and content generation."
  />
  <link rel="canonical" href="https://10xvelocity.ai/case-studies/innes-young" />
</Helmet>
```

### Example 5: Chat Widget H1 Fix (JS + CSS)
```css
/* src/index.css -- CSS fallback */
.chat-layout .chat-header h1 {
  font-size: inherit;
  font-weight: inherit;
}
```

```typescript
// In RootLayout.tsx or App.tsx -- JS DOM fix with MutationObserver
import { useEffect } from "react";

const useChatWidgetH1Fix = () => {
  useEffect(() => {
    const fixChatH1 = () => {
      const chatH1 = document.querySelector('.chat-layout .chat-header h1');
      if (chatH1) {
        const span = document.createElement('span');
        span.innerHTML = chatH1.innerHTML;
        span.className = chatH1.className;
        // Copy inline styles if any
        span.setAttribute('style', chatH1.getAttribute('style') || '');
        chatH1.parentNode?.replaceChild(span, chatH1);
        return true;
      }
      return false;
    };

    // Try immediately
    if (fixChatH1()) return;

    // Watch for the widget to be added
    const observer = new MutationObserver(() => {
      if (fixChatH1()) observer.disconnect();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);
};
```

## Recommended Plan Structure

Based on the research, the two plans should be structured as:

### Plan 02-01: Page-by-Page Title, Description, and Canonical Tags
**Scope:** Add `<Helmet>` with title, meta description, and canonical link to all 28 pages that lack it, plus add canonical to the 2 pages that already have Helmet.
**Batching strategy:**
- Task 1: Top-level pages (About, Services, CaseStudies, Blog, Contact, SavingsCalculator) -- 6 pages
- Task 2: Service sub-pages (DataCleaning, PhoneVoiceAgents, AIWorkshops, SmartBots) -- 4 pages
- Task 3: Product/program pages (LexiFile, PowerAutomate, Prototypes, AIGuideCertification, LunchAndLearn, OnboardingForm) -- 6 pages
- Task 4: Case study pages (9 individual case studies) -- 9 pages
- Task 5: Remaining pages (BlogPost dynamic, PrivacyPolicy, TermsOfService) + add canonical to Index.tsx and IndustryTools.tsx -- 5 pages

**Total:** 30 pages across 5 tasks

### Plan 02-02: Canonical Tags Consistency + H1 Fix
**Scope:** Fix the n8n chat widget duplicate H1, and correct the www/non-www domain mismatch in sitemap.xml and robots.txt.
**Tasks:**
- Task 1: Fix sitemap.xml and robots.txt to use `https://10xvelocity.ai` (without www)
- Task 2: Fix duplicate H1 from n8n chat widget (CSS + JS approach)

**Note:** If Plan 02-01 already handles canonical tags on all pages, Plan 02-02 focuses on the H1 fix and the sitemap/robots domain correction. This keeps the plans cleanly separated.

**Alternative structure:** Merge the canonical tag work from Plan 02-01 and Plan 02-02 into a single plan, and make Plan 02-02 purely about the H1 fix + domain correction. This is simpler because canonical tags are just one line added alongside the title/description.

## Blog Post Data Summary

For the dynamic BlogPost component, here are the 5 posts with relevant metadata:

| ID | Title | Excerpt Length | Excerpt Under 160 Chars? |
|----|-------|---------------|--------------------------|
| 1 | "10 Ways AI Can Streamline Your Business Operations" | ~147 chars | Yes |
| 2 | "The Future of Work: AI and Human Collaboration" | ~138 chars | Yes |
| 3 | "Case Study: How We Helped a Healthcare Provider Save $2M Annually" | ~150 chars | Yes |
| 4 | "Nonprofits and AI: Maximizing Impact with Limited Resources" | ~163 chars | Close -- may need trim |
| 5 | "The ROI of AI Implementation: What to Expect" | ~149 chars | Yes |

All blog post titles are under 60 characters when combined with " | 10x Velocity Blog" suffix.

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Single title in index.html for all pages | Per-page react-helmet title tags | Standard since React Helmet v5+ | Critical for SEO -- each page needs unique title |
| No canonical tags | Self-referencing canonical on every page | Always recommended; Google officially recommends | Prevents duplicate content, consolidates link equity |
| Multiple H1s acceptable | One H1 per page recommended | Ongoing SEO best practice | Google says multiple H1s are OK but single H1 is cleaner for SEO signals |
| `|` as title separator | `-` now preferred by some SEO tools | 2024-2025 shift | Minor impact; consistency matters more than choice |

## Open Questions

1. **n8n Chat Widget Shadow DOM**
   - What we know: The widget is injected by the Lovable/GPTEngineer script, not by the React source code. Its CSS uses `.chat-layout .chat-header h1`.
   - What's unclear: Whether the widget renders in Shadow DOM or light DOM on the live site. If Shadow DOM, external CSS and JS `querySelector` will not work.
   - Recommendation: Test the JS MutationObserver approach on the dev server first. If the widget is not loaded in dev mode (it appears to only work on the live site), document this as requiring post-deployment verification. The CSS-based approach at minimum will work if it is light DOM.

2. **GPTEngineer Script Side Effects**
   - What we know: `index.html` loads `https://cdn.gpteng.co/gptengineer.js` with a comment "DO NOT REMOVE THIS SCRIPT TAG OR THIS VERY COMMENT!"
   - What's unclear: What this script does beyond widget injection. Removing it would be the cleanest fix for the H1 issue but may break Lovable platform features.
   - Recommendation: Do NOT remove this script. Use the CSS/JS approach to fix the H1 symptom instead.

3. **Sitemap Domain Correction Ownership**
   - What we know: Phase 1 created sitemap.xml and robots.txt using `www.10xvelocity.ai`, but the canonical domain is `10xvelocity.ai` (without www)
   - What's unclear: Whether correcting this falls under Phase 2 scope or should be a separate fix
   - Recommendation: Include domain correction in Phase 2 Plan 02-02 since canonical URLs are Phase 2's domain. It is a 2-minute find-and-replace task.

## Sources

### Primary (HIGH confidence)
- Codebase audit: `src/App.tsx` (30 routes), `src/pages/*.tsx`, `src/pages/case-studies/*.tsx`, `src/pages/services/*.tsx`, `src/components/blog/BlogPost.tsx`, `src/data/blogPosts.ts`
- `index.html` -- default title: "10x Velocity | AI & Automation Consulting", default description: "10x velocity"
- Phase 1 research and summaries: `.planning/phases/01-foundation-crawlability/01-RESEARCH.md`, `01-01-SUMMARY.md`, `01-02-SUMMARY.md`
- HTTP redirect test: `curl -sI https://www.10xvelocity.ai` -- confirms 301 redirect to `https://10xvelocity.ai/`
- n8n chat widget CSS: `cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css` -- confirms `.chat-layout .chat-header h1` selector

### Secondary (MEDIUM confidence)
- [Search Engine Land: Title Tag Length 2025](https://searchengineland.com/title-tag-length-388468) -- 50-60 char recommendation, 600px display limit
- [Zyppy: Meta Title Tag Length Data](https://zyppy.com/title-tags/meta-title-tag-length/) -- Google uses full title for ranking even if truncated
- [SEO Audit Report](seo_audit_020926/FULL-AUDIT-REPORT.md) -- original findings about duplicate H1, missing titles/descriptions
- WebFetch of live site `https://10xvelocity.ai` -- confirmed n8n chat widget active on production

### Tertiary (LOW confidence)
- n8n chat widget Shadow DOM behavior -- could not verify definitively whether light DOM or shadow DOM on live site

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- react-helmet already installed and proven in Phase 1
- Architecture (Helmet patterns): HIGH -- extending proven patterns from IndustryTools.tsx and Index.tsx
- Page inventory: HIGH -- extracted directly from App.tsx and verified against source files
- Canonical URL domain: HIGH -- confirmed via HTTP request that www redirects to non-www
- H1 fix approach: MEDIUM -- CSS/JS approach is sound but live site testing needed (external widget injection)
- SEO best practices: HIGH -- verified with multiple current sources

**Research date:** 2026-02-10
**Valid until:** 2026-04-10 (stable domain; patterns are well-established)
