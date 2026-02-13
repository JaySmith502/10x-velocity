# External Integrations

**Analysis Date:** 2026-02-10

## APIs & External Services

**AI Chat Widget (Needle AI):**
- Purpose: Embedded AI chatbot with custom knowledge base on the Smart Bots page
- SDK/Client: CDN script loaded in `index.html` (`https://cdn.needle-ai.com/widget/v2/main.js`)
- Custom element: `<needle-embedded-widget>` with `client-key` and `collection-id` attributes
- Auth: `VITE_NEEDLE_CLIENT_KEY` and `VITE_NEEDLE_COLLECTION_ID` env vars in `.env.local`
- Implementation: `src/pages/SmartBots.tsx` renders the widget; shows dev placeholder in development mode (CORS blocks localhost)
- Type declarations: `src/vite-env.d.ts` and inline `declare module "react"` in `src/pages/SmartBots.tsx`

**CRM / Lead Capture (GoHighLevel / LeadConnector):**
- Purpose: Contact forms and lead capture popups
- Integration method: Embedded iframes from `https://api.leadconnectorhq.com/widget/form/`
- External script: `https://link.msgsndr.com/js/form_embed.js` loaded dynamically in `src/components/ui/ContactPopup.tsx`
- Form instances:
  - Contact page form (`oF3UAG9Kp3vwDm8QCJ1i`): `src/pages/Contact.tsx` line 43
  - Contact popup form (`mYtM8nnkSBtAzcDroeEO`): `src/components/ui/ContactPopup.tsx` line 114
- PostMessage listener: Listens for `form_submitted` and `form_closed` events from `https://api.leadconnectorhq.com` origin
- Booking widget link: `https://level.10xvelocity.ai/widget/bookings/jay-smith-10xvelocity` (used in `src/pages/Blog.tsx` and `src/pages/LunchAndLearn.tsx`)

**Workflow Automation (n8n via HiPrag):**
- Purpose: Voice demo onboarding form processing
- Integration method: Embedded iframe from `https://n8n.services.hiprag.com/form/b29820a7-4580-4504-82f4-18671da724e6`
- Implementation: `src/pages/OnboardingForm.tsx` line 54
- Additional n8n chat widget snippet (not actively embedded in React): `public/lovable-uploads/snippet.html` with webhook URL `https://n8n.services.hiprag.com/webhook/d23d604c-050d-4791-8293-8a2c330a91a2`

**Background Jobs (Trigger.dev):**
- Purpose: Background task execution
- SDK: `@trigger.dev/sdk` ^3.3.17
- Config: `trigger.config.ts` with project ID `proj_daasglpjvdsunblagfyg`
- Tasks directory: `src/trigger/`
- Current tasks: Only a placeholder `hello-world` task in `src/trigger/example.ts`
- Retry config: Max 3 attempts with exponential backoff (1s-10s, factor 2, randomized)

**Event Registration (Eventbrite):**
- Purpose: Event registration for Lunch & Learn events
- Integration method: External links (not embedded)
- URL: `https://www.eventbrite.com/e/1302953963379?aff=oddtdtcreator`
- Implementation: `src/pages/LunchAndLearn.tsx` via `DiscoveryButton` component (lines 39, 139)

**Lovable Platform (GPTEngineer):**
- Purpose: AI-assisted development platform that originally scaffolded this project
- Integration method: Script tag in `index.html` (`https://cdn.gpteng.co/gptengineer.js`)
- Dev tooling: `lovable-tagger` ^1.1.3 Vite plugin active only in development mode
- Assets: Images uploaded via Lovable stored in `public/lovable-uploads/`

## Data Storage

**Databases:**
- None. This is a purely static SPA with no database.

**File Storage:**
- Local filesystem via `public/` directory
- Image assets in `public/lovable-uploads/` (committed to repo)
- Static data: Blog posts defined in-memory in `src/data/blogPosts.ts`
- Static data: Industry tools defined in-memory in `src/data/industryTools.ts`

**Caching:**
- None. TanStack React Query is configured (`src/App.tsx` line 41) but no queries are actively used.

## Authentication & Identity

**Auth Provider:**
- None. No user authentication system exists. This is a public marketing site.

## Monitoring & Observability

**Error Tracking:**
- None. No error tracking service (Sentry, Bugsnag, etc.) is integrated.

**Logs:**
- `console.error` used for Needle widget configuration warnings (`src/pages/SmartBots.tsx` line 24)
- Trigger.dev `logger` used in background tasks (`src/trigger/example.ts`)
- No structured logging framework.

**Analytics:**
- None detected in source code or `index.html`. No Google Analytics, Plausible, or similar.

## CI/CD & Deployment

**Hosting:**
- Netlify (static site hosting)
- SPA redirect rule: `public/_redirects` contains `/* /index.html 200`

**CI Pipeline:**
- Not detected. No `.github/workflows/`, `netlify.toml`, or CI config files found.
- Lovable platform may handle deployments via auto-commits.

## Environment Configuration

**Required env vars:**
- `VITE_NEEDLE_CLIENT_KEY` - Needle AI widget authentication key
- `VITE_NEEDLE_COLLECTION_ID` - Needle AI knowledge base collection ID

**Env var location:**
- `.env.local` (gitignored, local only)
- Accessed via `import.meta.env.VITE_*` (Vite convention)

**Secrets location:**
- GoHighLevel form IDs are hardcoded in source (not secret, public-facing form URLs)
- n8n webhook/form URLs are hardcoded in source
- Trigger.dev project ID is hardcoded in `trigger.config.ts`
- Needle AI credentials are in `.env.local`

## Webhooks & Callbacks

**Incoming:**
- None. This is a client-side SPA with no server endpoints.

**Outgoing:**
- GoHighLevel form submissions via iframe postMessage (`src/components/ui/ContactPopup.tsx`)
- n8n form submission via iframe (`src/pages/OnboardingForm.tsx`)
- n8n chat webhook (in `public/lovable-uploads/snippet.html`, not actively used in React app): `https://n8n.services.hiprag.com/webhook/d23d604c-050d-4791-8293-8a2c330a91a2`

## SEO & Metadata

**Implementation:**
- `react-helmet` ^6.1.0 used for dynamic document head management
- Used in: `src/pages/IndustryTools.tsx`
- Static meta tags in `index.html`: title, description, author, og:image
- `public/og-image.png` for Open Graph sharing
- `public/llms.txt` - LLM-readable site content summary

---

*Integration audit: 2026-02-10*
