import React from "react";
import { Helmet } from "react-helmet";
import { helmetJsonLdProp } from "react-schemaorg";
import { breadcrumbJsonLd } from "@/schemas/breadcrumbs";
import { Link } from "react-router-dom";
import { BookOpen, Search, PenLine, CheckCircle2, Check, ArrowRight } from "lucide-react";
import DiscoveryButton from "@/components/ui/DiscoveryButton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { VisualBreadcrumb } from "@/components/VisualBreadcrumb";

const AITestBenchReview = () => {
  return (
    <>
      <Helmet
        script={[
          helmetJsonLdProp<any>({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "The AI Test Bench Review",
            description: "A two-week, fixed-fee performance review of your AI. We read what your AI actually did, find the failure patterns, and leave you with a quality standard your team owns.",
            provider: { "@type": "Organization", "@id": "https://10xvelocity.ai/#organization" },
            areaServed: { "@type": "Country", name: "US" },
            serviceType: "AI Evaluation",
          }),
          breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: "AI Test Bench Review", path: "/services/ai-test-bench-review" }]),
        ]}
      >
        <title>The AI Test Bench Review | 10x Velocity</title>
        <meta
          name="description"
          content="Your AI works around the clock. Nobody reviews its work. The AI Test Bench Review: two weeks, fixed fee. We find the failure patterns and leave you a quality standard your team owns."
        />
        <link rel="canonical" href="https://10xvelocity.ai/services/ai-test-bench-review" />
        <meta property="og:title" content="The AI Test Bench Review | 10x Velocity" />
        <meta property="og:description" content="Your AI works around the clock. Nobody reviews its work. Two weeks, fixed fee. We find the failure patterns and leave you a quality standard your team owns." />
        <meta property="og:url" content="https://10xvelocity.ai/services/ai-test-bench-review" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://10xvelocity.ai/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
      <VisualBreadcrumb items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: "AI Test Bench Review", path: "/services/ai-test-bench-review" }]} />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-hero-gradient dark:bg-hero-gradient-dark" />
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your AI works around the clock. Nobody reviews its work.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            The AI Test Bench Review: two weeks, fixed fee. We read what your AI actually did,
            find the failure patterns, and leave you with a quality standard your team owns.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <DiscoveryButton />
            <Link to="/blog/ai-evaluation-for-business" className="text-accent hover:underline inline-flex items-center gap-1">
              Read the thinking <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* The uncomfortable math */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-surface border border-border rounded-lg p-8 animate-fade-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">The uncomfortable math</h2>
            <p className="text-muted-foreground mb-6">
              Most organizations measured AI adoption and stopped there. Usage went in the board deck;
              performance went unexamined. That was survivable when AI only answered questions.
              It stops being survivable when AI starts <em>acting</em> - booking, updating, routing, sending.
            </p>
            <p className="text-lg font-semibold">
              A wrong answer is annoying. A wrong action is an incident.
            </p>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="container mx-auto px-4 py-12 bg-gradient-to-b from-transparent to-black/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">What we do</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            The method is a performance review, run on your AI instead of a person.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {method.map((step, index) => (
              <div
                key={step.title}
                className="bg-surface border border-border rounded-lg p-6 flex flex-col animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">What you walk away with</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {deliverables.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-surface border border-border rounded-lg p-5">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-muted-foreground" />
                </div>
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for + The fee */}
      <section className="container mx-auto px-4 py-12 bg-gradient-to-b from-transparent to-black/20">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface border border-border rounded-lg p-8 animate-fade-up">
            <h2 className="text-2xl font-bold mb-4">Who it's for</h2>
            <p className="text-muted-foreground">
              Mid-market companies, nonprofits, and public-sector teams deploying AI in workflows that
              touch customers, constituents, or money. If your AI only writes first drafts nobody sends,
              you don't need this yet.
            </p>
          </div>
          <div className="bg-surface border border-border rounded-lg p-8 animate-fade-up">
            <h2 className="text-2xl font-bold mb-4">The fee</h2>
            <p className="text-muted-foreground mb-3">
              A fixed fee, scoped on our first call. Two weeks. No retainer creep. Government and
              nonprofit engagements are procurement-friendly and scoped individually.
            </p>
            <p className="font-semibold">Fixed. Two weeks. No surprises.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center bg-surface border border-border rounded-lg p-12 relative overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Go read ten of your AI's interactions end to end.
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            You'll find something. Everyone finds something. Book a short call and we'll review the rest.
          </p>
          <DiscoveryButton />
          <p className="mt-6 text-muted-foreground">
            Or learn more about our <Link to="/services" className="text-accent hover:underline">other services</Link>.
          </p>
        </div>
      </section>
    </div>
    </>
  );
};

// The four moves of the review
const method = [
  {
    title: "Read",
    icon: BookOpen,
    description: "50-100 real interactions from your highest-stakes system, end to end. The actual record - every step, every tool it touched. Not the dashboard about it.",
  },
  {
    title: "Find",
    icon: Search,
    description: "Failures cluster. We code every interaction and rank the patterns by business risk.",
  },
  {
    title: "Define",
    icon: PenLine,
    description: "What 'good' means for your business, written in plain language your team can enforce - because if you can't articulate the standard, no tool can check it.",
  },
  {
    title: "Verify",
    icon: CheckCircle2,
    description: "An automated first-pass check, built on open-source tooling you own, graded against human judgment before anyone trusts it.",
  },
];

const deliverables = [
  "Findings report with real examples",
  "Plain-language quality rubric",
  "A working automated check",
  "A boardroom-ready summary",
  "A review cadence that runs after we're gone",
];

const faqs = [
  {
    question: "Will this disrupt our team?",
    answer: "Two hours of their time total, plus log access. We do the reading.",
  },
  {
    question: "Our AI is a vendor product - can you still review it?",
    answer: "Usually, yes. And if your vendor can't produce interaction records, that finding alone is worth the engagement.",
  },
  {
    question: "What tooling do you use?",
    answer: "Open source (Arize Phoenix or equivalent), installed on your side. You keep everything when we leave.",
  },
];

export default AITestBenchReview;
