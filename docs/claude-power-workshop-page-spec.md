# Claude Power Workshop — Landing Page Spec

> **For Claude Code**: Build this as `src/pages/ClaudePowerWorkshop.tsx` with a route at `/claude-power-workshop`. Follow the existing page patterns (Helmet for SEO, lazy loading, RootLayout via App.tsx). Use the site's existing design system — Tailwind, shadcn/ui components, CSS variables. The interest form should use react-hook-form + zod validation. Form submissions should POST to a webhook URL (use a placeholder `WORKSHOP_FORM_WEBHOOK` constant for now). Match the visual tone of the existing site — warm, professional, confident.

---

## Page Structure & Copy

### 1. HERO SECTION

**Headline:**
Stop Chatting with AI. Start Building with It.

**Subheadline:**
A full-day, hands-on workshop where business leaders build real tools with Claude — custom skills, automated workflows, and interactive dashboards — not just learn about them.

**CTA Button:**
Reserve Your Seat *(scrolls to interest form)*

**Secondary text (small, below CTA):**
Small group format · Limited to 20 participants · ~9 AM – 4 PM

---

### 2. PROBLEM SECTION

**Section headline:**
You're Using AI Like It's 2023

**Body copy (3 cards or alternating blocks):**

**Card 1 — "Copy-paste prompting"**
You type a question, get an answer, copy it somewhere else. That's not a workflow — it's a workaround.

**Card 2 — "One-off conversations"**
Every chat starts from scratch. No memory, no structure, no compounding value. You're rebuilding context every single time.

**Card 3 — "No idea what's possible"**
You've seen the demos. You know AI can do more. But nobody's shown you how to make it do more *for your business*, with *your data*.

---

### 3. WHAT YOU'LL BUILD SECTION

**Section headline:**
Leave with Tools You'll Use Monday Morning

**Items (icon + title + description — use a grid layout):**

**Custom AI Skill**
Build a slash-command skill tailored to your actual workflows. Session prep, client communication, reporting — whatever you repeat weekly, you'll automate it.

**Multi-Step Workflow Chain**
Connect multiple skills into a single workflow. Paste messy meeting notes, get structured action items AND a polished client recap email in seconds.

**Interactive Dashboard**
Upload your own spreadsheet. Build a filterable, sortable, visual dashboard — the kind you'd normally pay a developer to create.

**Pre-Built Skill Library**
Walk out with a library of ready-to-use skills installed on your machine. Brainstorming, analysis, content creation — ready to go.

---

### 4. THE DAY — SCHEDULE SECTION

**Section headline:**
The Day

**Subtitle:**
Six hours of building. No slides about "the future of AI."

| Time | Session | Description |
|------|---------|-------------|
| 9:00 | Connect & Explore | Hook Claude up to real data sources. See what's actually possible when AI meets your files. |
| 9:45 | Prompt Engineering That Matters | The difference between a useless response and a great one. Context, specificity, iteration — with live examples from your world. |
| 10:30 | Artifacts & Pre-Built Skills | Deep-dive into Claude's creative engine. Install and use pre-built skills on a real problem you're facing right now. |
| 11:30 | Guided Skill Build | Build a session notes processor and client recap email chain, step-by-step. Your first real AI tool. |
| 1:00 | Build Your Own Skill | Create a skill for your specific role. Marketing briefs, client onboarding, reporting templates — you pick it, you build it. |
| 1:45 | Dashboard Build | Upload your data. Build an interactive dashboard you'll actually use. The highlight of the day. |
| 3:00 | Q&A & Open Workshop | Extended hands-on time. Get unstuck. Go deeper. Build more. |
| 3:30 | Wrap-Up & Next Steps | Recap what you built. Get resources for continuing on your own. |

*Lunch break 12:15–1:00. Morning and afternoon breaks included.*

---

### 5. WHO IT'S FOR SECTION

**Section headline:**
Built for Leaders, Not Developers

**Body:**
This workshop is designed for business owners, operators, consultants, and team leads who are technically curious but don't write code. You don't need programming experience. You need a laptop and a willingness to build.

**"This is for you if..." list (use check icons):**
- You use AI but know you're barely scratching the surface
- You run a team and want to multiply everyone's output
- You're tired of generic AI tips and want to build real tools
- You make decisions with spreadsheets and wish they could do more
- You're a consultant or coach who wants to bring AI skills to your clients

---

### 6. BEFORE YOU ARRIVE — PRE-REQS

**Section headline:**
What to Bring

**Items (simple list with icons):**
- **Claude Pro subscription** — $20/mo, active and signed in before you arrive
- **Claude Desktop app** — Installed and working on your laptop
- **Laptop with Chrome** — For the full experience
- **A business spreadsheet** — Metrics, project tracker, client data — whatever you wish you could do more with

*We'll send setup instructions one week before the workshop. If anything gives you trouble, we'll hop on a quick call and get you sorted.*

---

### 7. INSTRUCTOR SECTION

**Section headline:**
Your Instructor

**Name:** Jay Smith

**Bio:**
Jay spent 15+ years in enterprise operations — manufacturing, logistics, and large-scale process optimization — before going all-in on AI. He doesn't teach theory. He builds tools that work and shows you how to do the same. Jay runs AI workshops and consulting through 10x Velocity, helping business leaders and their teams stop using AI like a search engine and start using it like a co-builder.

**Tone note:** Keep this short, no-BS. Jay's credibility comes from ops experience + hands-on AI building, not credentials or certifications.

---

### 8. INTEREST FORM SECTION

**Section headline:**
Reserve Your Seat

**Subtitle:**
Workshops are limited to 20 participants. Drop your info below and we'll reach out with upcoming dates and details.

**Form fields:**
- First Name *(required)*
- Last Name *(required)*
- Email *(required, validate format)*
- Company / Organization *(required)*
- Role / Title *(optional)*
- Team Size — dropdown: "Just me", "2-5", "6-10", "11-20", "20+" *(required)*
- How did you hear about this? — dropdown: "Referral", "EOS / ENRG", "LinkedIn", "Search", "Other" *(optional)*
- Anything else we should know? — textarea *(optional)*

**Submit button text:** I'm Interested

**Post-submit message:**
"Got it — we'll be in touch within 48 hours with upcoming dates and next steps."

**Zod schema notes:**
- Email: z.string().email()
- First/Last name: z.string().min(1)
- Company: z.string().min(1)
- Team Size: z.enum(["Just me", "2-5", "6-10", "11-20", "20+"])
- Optional fields: z.string().optional()

---

### 9. FAQ SECTION (ACCORDION)

**Section headline:**
Common Questions

**Q: Do I need to know how to code?**
A: No. This workshop is built for business leaders, not developers. If you can use a spreadsheet and type a sentence, you have all the technical skill you need.

**Q: Why Claude and not ChatGPT?**
A: Claude's desktop app, skill system, and artifact engine let you build persistent, reusable tools — not just have conversations. This workshop teaches you to build. Claude is the best platform for that right now.

**Q: What if I already use AI daily?**
A: Good — you'll get more out of it. Most daily AI users are still copy-pasting from chat windows. This workshop shows you how to build tools that compound in value over time.

**Q: What's the time commitment?**
A: One full day, roughly 9 AM to 4 PM, with breaks and lunch included. Everything you build is yours to keep and use immediately.

**Q: Can I bring my team?**
A: Absolutely. Teams get the most value because you'll build tools specific to your shared workflows. Ask us about group pricing.

**Q: What's your refund policy?**
A: If you don't leave with tools you'll actually use in your business, we'll refund you. No questions asked.

---

### 10. FINAL CTA SECTION

**Headline:**
Stop Learning About AI. Start Building With It.

**CTA Button:**
Reserve Your Seat *(scrolls to interest form)*

---

## SEO Metadata

```
Title: Claude Power Workshop | Build AI Tools in One Day | 10x Velocity
Description: A full-day, hands-on Claude Desktop workshop for business leaders. Build custom AI skills, automated workflows, and dashboards from your own data. Limited to 20 participants.
Canonical: https://10xvelocity.ai/claude-power-workshop
OG Title: Claude Power Workshop — From AI User to AI Builder in One Day
OG Description: Stop chatting with AI. Start building with it. A hands-on workshop where you build real tools with Claude — skills, workflows, and dashboards.
OG Image: (will need a dedicated image)
```

## Schema.org JSON-LD

Use `EducationEvent` type:
- name: "Claude Power Workshop"
- description: (from SEO description above)
- provider: 10x Velocity organization reference
- eventAttendanceMode: OfflineEventAttendanceMode
- organizer: Jay Smith / 10x Velocity
- offers: leave price out for now (dynamic based on group)

---

## Design Notes

- Hero should feel bold and confident — this isn't a webinar landing page
- The "Problem" section should create slight tension without being preachy
- Schedule section should feel clean and scannable, not cluttered
- Interest form should be prominent but not feel like a hard sell
- Use the site's existing accent color for CTAs and schedule time markers
- Consider a subtle background treatment (GradientMesh?) behind the hero
- Mobile: stack everything, keep the form simple and thumb-friendly
