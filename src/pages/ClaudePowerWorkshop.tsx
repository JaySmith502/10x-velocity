import { Helmet } from "react-helmet";
import { helmetJsonLdProp } from "react-schemaorg";
import { breadcrumbJsonLd } from "@/schemas/breadcrumbs";
import { VisualBreadcrumb } from "@/components/VisualBreadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  Zap,
  Layers,
  BarChart3,
  Library,
  Download,
  Chrome,
  FileSpreadsheet,
} from "lucide-react";

const ClaudePowerWorkshop = () => {
  const scrollToForm = () => {
    document.getElementById("interest-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet
        script={[
          helmetJsonLdProp<any>({
            "@context": "https://schema.org",
            "@type": "EducationEvent",
            name: "Claude Power Workshop",
            description:
              "A full-day, hands-on Claude Desktop workshop for business leaders. Build custom AI skills, automated workflows, and dashboards from your own data. Limited to 20 participants.",
            eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
            organizer: {
              "@type": "Organization",
              name: "10x Velocity",
              url: "https://10xvelocity.ai",
            },
            performer: {
              "@type": "Person",
              name: "Jay Smith",
            },
          }),
          helmetJsonLdProp<any>({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Claude Power Workshop", path: "/claude-power-workshop" },
          ]),
        ]}
      >
        <title>Claude Power Workshop | Build AI Tools in One Day | 10x Velocity</title>
        <meta
          name="description"
          content="A full-day, hands-on Claude Desktop workshop for business leaders. Build custom AI skills, automated workflows, and dashboards from your own data. Limited to 20 participants."
        />
        <link rel="canonical" href="https://10xvelocity.ai/claude-power-workshop" />
        <meta property="og:title" content="Claude Power Workshop — From AI User to AI Builder in One Day" />
        <meta
          property="og:description"
          content="Stop chatting with AI. Start building with it. A hands-on workshop where you build real tools with Claude — skills, workflows, and dashboards."
        />
        <meta property="og:url" content="https://10xvelocity.ai/claude-power-workshop" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://10xvelocity.ai/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main className="flex-1">
        <VisualBreadcrumb
          items={[
            { name: "Home", path: "/" },
            { name: "Claude Power Workshop", path: "/claude-power-workshop" },
          ]}
        />

        {/* ─── 1. HERO ─── */}
        <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            {/* Claude Code bot symbol */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-foreground mb-8 animate-fade-up shadow-lg">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M8 16L18 22L8 28" stroke="hsl(var(--accent))" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="22" y1="30" x2="36" y2="30" stroke="hsl(var(--accent))" strokeWidth="3.5" strokeLinecap="round" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up tracking-tight">
              Stop Chatting with AI.{" "}
              <span className="text-accent">Start Building with It.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto animate-fade-up">
              A full-day, hands-on workshop where business leaders build real tools with Claude
              — custom skills, automated workflows, and interactive dashboards — not just learn
              about them.
            </p>
            <Button
              size="lg"
              onClick={scrollToForm}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 animate-fade-up"
            >
              Reserve Your Seat <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-sm text-muted-foreground mt-5 animate-fade-up">
              Small group format &middot; Limited to 20 participants &middot; ~9 AM – 4 PM
            </p>
          </div>
        </section>

        {/* ─── 2. PROBLEM ─── */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            You're Using AI Like It's 2023
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-14 max-w-5xl mx-auto">
            {problems.map((problem, i) => (
              <div
                key={i}
                className="bg-surface border border-border rounded-xl p-8 relative overflow-hidden group hover:border-accent/40 transition-colors duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="text-lg font-bold mb-3 text-foreground">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{problem.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 3. WHAT YOU'LL BUILD ─── */}
        <section className="bg-muted/50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Leave with Tools You'll Use Monday Morning
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14 max-w-6xl mx-auto">
              {buildItems.map((item, i) => (
                <div key={i} className="bg-surface border border-border rounded-xl p-7 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 4. THE DAY — SCHEDULE ─── */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">The Day</h2>
          <p className="text-muted-foreground text-center text-lg mb-14 max-w-xl mx-auto">
            Six hours of building. No slides about "the future of AI."
          </p>
          <div className="max-w-3xl mx-auto space-y-0">
            {schedule.map((slot, i) => (
              <div
                key={i}
                className="flex gap-6 py-5 border-b border-border last:border-b-0 group"
              >
                <span className="text-accent font-mono font-semibold text-sm pt-1 w-14 shrink-0">
                  {slot.time}
                </span>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{slot.session}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{slot.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center mt-8 italic">
            Lunch break 12:15–1:00. Morning and afternoon breaks included.
          </p>
        </section>

        {/* ─── 5. WHO IT'S FOR ─── */}
        <section className="bg-muted/50 py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Built for Leaders, Not Developers
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              This workshop is designed for business owners, operators, consultants, and team
              leads who are technically curious but don't write code. You don't need programming
              experience. You need a laptop and a willingness to build.
            </p>
            <div className="bg-surface border border-border rounded-xl p-8 md:p-10">
              <p className="font-semibold text-foreground mb-5">This is for you if…</p>
              <ul className="space-y-4">
                {audience.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ─── 6. PRE-REQS ─── */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What to Bring</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {prereqs.map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-surface border border-border rounded-xl p-6">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center mt-8 max-w-xl mx-auto italic">
            We'll send setup instructions one week before the workshop. If anything gives you
            trouble, we'll hop on a quick call and get you sorted.
          </p>
        </section>

        {/* ─── 7. INSTRUCTOR ─── */}
        <section className="bg-muted/50 py-20">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Your Instructor</h2>
            <div className="bg-surface border border-border rounded-xl p-8 md:p-10">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6 text-accent font-bold text-2xl">
                JS
              </div>
              <h3 className="text-2xl font-bold mb-4">Jay Smith</h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Jay spent 15+ years in enterprise operations — manufacturing, logistics, and
                large-scale process optimization — before going all-in on AI. He doesn't teach
                theory. He builds tools that work and shows you how to do the same. Jay runs AI
                workshops and consulting through 10x Velocity, helping business leaders and their
                teams stop using AI like a search engine and start using it like a co-builder.
              </p>
            </div>
          </div>
        </section>

        {/* ─── 8. RESERVE CTA ─── */}
        <section id="interest-form" className="container mx-auto px-4 py-20 scroll-mt-24">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Reserve Your Seat
            </h2>
            <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
              Workshops are limited to 20 participants. Reach out and we'll send you upcoming
              dates and details.
            </p>
            <Button
              size="lg"
              onClick={scrollToForm}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6"
            >
              Reserve Your Seat <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>

        {/* ─── 9. FAQ ─── */}
        <section className="bg-muted/50 py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Common Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-base font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ─── 10. FINAL CTA ─── */}
        <section className="container mx-auto px-4 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Stop Learning About AI.{" "}
            <span className="text-accent">Start Building With It.</span>
          </h2>
          <Button
            size="lg"
            onClick={scrollToForm}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6"
          >
            Reserve Your Seat <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </section>
      </main>
    </>
  );
};

export default ClaudePowerWorkshop;

/* ─── Static Data ─── */

const problems = [
  {
    title: "Copy-paste prompting",
    body: "You type a question, get an answer, copy it somewhere else. That's not a workflow — it's a workaround.",
  },
  {
    title: "One-off conversations",
    body: "Every chat starts from scratch. No memory, no structure, no compounding value. You're rebuilding context every single time.",
  },
  {
    title: "No idea what's possible",
    body: "You've seen the demos. You know AI can do more. But nobody's shown you how to make it do more for your business, with your data.",
  },
];

const buildItems = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Custom AI Skill",
    description:
      "Build a slash-command skill tailored to your actual workflows. Session prep, client communication, reporting — whatever you repeat weekly, you'll automate it.",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Multi-Step Workflow Chain",
    description:
      "Connect multiple skills into a single workflow. Paste messy meeting notes, get structured action items AND a polished client recap email in seconds.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Interactive Dashboard",
    description:
      "Upload your own spreadsheet. Build a filterable, sortable, visual dashboard — the kind you'd normally pay a developer to create.",
  },
  {
    icon: <Library className="w-6 h-6" />,
    title: "Pre-Built Skill Library",
    description:
      "Walk out with a library of ready-to-use skills installed on your machine. Brainstorming, analysis, content creation — ready to go.",
  },
];

const schedule = [
  {
    time: "9:00",
    session: "Connect & Explore",
    description:
      "Hook Claude up to real data sources. See what's actually possible when AI meets your files.",
  },
  {
    time: "9:45",
    session: "Prompt Engineering That Matters",
    description:
      "The difference between a useless response and a great one. Context, specificity, iteration — with live examples from your world.",
  },
  {
    time: "10:30",
    session: "Artifacts & Pre-Built Skills",
    description:
      "Deep-dive into Claude's creative engine. Install and use pre-built skills on a real problem you're facing right now.",
  },
  {
    time: "11:30",
    session: "Guided Skill Build",
    description:
      "Build a session notes processor and client recap email chain, step-by-step. Your first real AI tool.",
  },
  {
    time: "1:00",
    session: "Build Your Own Skill",
    description:
      "Create a skill for your specific role. Marketing briefs, client onboarding, reporting templates — you pick it, you build it.",
  },
  {
    time: "1:45",
    session: "Dashboard Build",
    description:
      "Upload your data. Build an interactive dashboard you'll actually use. The highlight of the day.",
  },
  {
    time: "3:00",
    session: "Q&A & Open Workshop",
    description: "Extended hands-on time. Get unstuck. Go deeper. Build more.",
  },
  {
    time: "3:30",
    session: "Wrap-Up & Next Steps",
    description:
      "Recap what you built. Get resources for continuing on your own.",
  },
];

const audience = [
  "You use AI but know you're barely scratching the surface",
  "You run a team and want to multiply everyone's output",
  "You're tired of generic AI tips and want to build real tools",
  "You make decisions with spreadsheets and wish they could do more",
  "You're a consultant or coach who wants to bring AI skills to your clients",
];

const prereqs = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Claude Pro subscription",
    description: "$20/mo, active and signed in before you arrive",
  },
  {
    icon: <Download className="w-5 h-5" />,
    title: "Claude Desktop app",
    description: "Installed and working on your laptop",
  },
  {
    icon: <Chrome className="w-5 h-5" />,
    title: "Laptop with Chrome",
    description: "For the full experience",
  },
  {
    icon: <FileSpreadsheet className="w-5 h-5" />,
    title: "A business spreadsheet",
    description:
      "Metrics, project tracker, client data — whatever you wish you could do more with",
  },
];

const faqs = [
  {
    question: "Do I need to know how to code?",
    answer:
      "No. This workshop is built for business leaders, not developers. If you can use a spreadsheet and type a sentence, you have all the technical skill you need.",
  },
  {
    question: "Why Claude and not ChatGPT?",
    answer:
      "Claude's desktop app, skill system, and artifact engine let you build persistent, reusable tools — not just have conversations. This workshop teaches you to build. Claude is the best platform for that right now.",
  },
  {
    question: "What if I already use AI daily?",
    answer:
      "Good — you'll get more out of it. Most daily AI users are still copy-pasting from chat windows. This workshop shows you how to build tools that compound in value over time.",
  },
  {
    question: "What's the time commitment?",
    answer:
      "One full day, roughly 9 AM to 4 PM, with breaks and lunch included. Everything you build is yours to keep and use immediately.",
  },
  {
    question: "Can I bring my team?",
    answer:
      "Absolutely. Teams get the most value because you'll build tools specific to your shared workflows. Ask us about group pricing.",
  },
  {
    question: "What's your refund policy?",
    answer:
      "If you don't leave with tools you'll actually use in your business, we'll refund you. No questions asked.",
  },
];
