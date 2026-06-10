
import { Helmet } from "react-helmet";
import { breadcrumbJsonLd } from "@/schemas/breadcrumbs";
import { ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import DiscoveryButton from "@/components/ui/DiscoveryButton";
import { VisualBreadcrumb } from "@/components/VisualBreadcrumb";

const CaseStudies = () => {
  return (
    <>
      <Helmet
        script={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Case Studies", path: "/case-studies" },
          ]),
        ]}
      >
        <title>AI Case Studies & Client Results | 10x Velocity</title>
        <meta
          name="description"
          content="See real results from our AI and automation implementations. Detailed case studies showing measurable ROI across multiple industries and business sizes."
        />
        <link rel="canonical" href="https://10xvelocity.ai/case-studies" />
        <meta property="og:title" content="AI Case Studies & Client Results | 10x Velocity" />
        <meta property="og:description" content="See real results from our AI and automation implementations. Detailed case studies showing measurable ROI across multiple industries and business sizes." />
        <meta property="og:url" content="https://10xvelocity.ai/case-studies" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://10xvelocity.ai/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <main className="flex-1">
        <VisualBreadcrumb items={[{ name: "Home", path: "/" }, { name: "Case Studies", path: "/case-studies" }]} />

        {/* Page Hero */}
        <section className="container mx-auto px-4 py-20 bg-hero-gradient dark:bg-hero-gradient-dark">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
              Client Results
            </p>
            <h1 className="text-4xl font-extrabold mb-4 text-left">
              Real outcomes from real implementations — with numbers.
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl">
              We've helped manufacturers, agencies, real estate firms, nonprofits, and government contractors measure what matters. Every engagement below is an implementation we shipped — tracked, verified, and still running.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="max-w-7xl mx-auto">

            {/* ── Hero Cards: GovBrokers & Innes & Young ── */}
            <div className="mb-2">
              <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-4">
                Featured
              </p>

              {/* Hero Card 1: GovBrokers */}
              <Link
                to="/case-studies/govbrokers"
                className="block bg-surface border border-border rounded-lg p-8 mb-5 hover:border-accent hover:shadow-[0_4px_20px_rgba(51,195,240,0.1)] transition-all relative"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="outline" className="bg-accent/15 text-accent border-accent/30">Business Services</Badge>
                      <Badge variant="outline" className="bg-accent-secondary/15 text-accent-secondary border-accent-secondary/30">Government Contracting</Badge>
                    </div>
                    <h2 className="text-2xl font-bold mb-0">
                      GovBrokers: High-Performance Government Contracting Powerhouse
                    </h2>
                  </div>
                  <div className="flex items-center text-accent font-bold text-sm whitespace-nowrap shrink-0 lg:pt-1">
                    Read Case Study <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>

                {/* Stat row */}
                <div className="flex flex-wrap gap-0 my-5 border-t border-b border-border py-4">
                  <div className="flex-1 min-w-[120px] pr-6">
                    <span className="font-display text-2xl font-extrabold text-accent block leading-tight">35%</span>
                    <span className="text-xs text-muted-foreground mt-0.5 block">Higher contract win rate</span>
                  </div>
                  <div className="flex-1 min-w-[120px] px-6 border-l border-border">
                    <span className="font-display text-2xl font-extrabold text-accent block leading-tight">250%</span>
                    <span className="text-xs text-muted-foreground mt-0.5 block">Growth in inbound leads</span>
                  </div>
                  <div className="flex-1 min-w-[120px] px-6 border-l border-border">
                    <span className="font-display text-2xl font-extrabold text-accent block leading-tight">50%</span>
                    <span className="text-xs text-muted-foreground mt-0.5 block">Faster proposal processing</span>
                  </div>
                </div>

                <p className="font-body text-muted-foreground leading-relaxed max-w-2xl">
                  We transformed a government contracting firm — 35% increase in contract win rates, 250% boost in inbound leads, and 50% faster proposal processing, powered entirely by AI-driven automation. The pipeline that used to stall on manual data entry now runs overnight.
                </p>
              </Link>

              {/* Hero Card 2: Innes & Young */}
              <Link
                to="/case-studies/innes-young"
                className="block bg-surface border border-border rounded-lg p-8 mb-5 hover:border-accent hover:shadow-[0_4px_20px_rgba(51,195,240,0.1)] transition-all relative"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="outline" className="bg-accent-secondary/15 text-accent-secondary border-accent-secondary/30">Public Relations</Badge>
                      <Badge variant="outline" className="bg-accent/15 text-accent border-accent/30">Media</Badge>
                    </div>
                    <h2 className="text-2xl font-bold mb-0">
                      Innes &amp; Young: AI-Powered PR Evolution
                    </h2>
                  </div>
                  <div className="flex items-center text-accent font-bold text-sm whitespace-nowrap shrink-0 lg:pt-1">
                    Read Case Study <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>

                {/* Stat row */}
                <div className="flex flex-wrap gap-0 my-5 border-t border-b border-border py-4">
                  <div className="flex-1 min-w-[120px] pr-6">
                    <span className="font-display text-2xl font-extrabold text-accent block leading-tight">400%</span>
                    <span className="text-xs text-muted-foreground mt-0.5 block">Growth in inbound leads</span>
                  </div>
                  <div className="flex-1 min-w-[120px] px-6 border-l border-border">
                    <span className="font-display text-2xl font-extrabold text-accent block leading-tight">75%</span>
                    <span className="text-xs text-muted-foreground mt-0.5 block">Reduction in reporting time</span>
                  </div>
                  <div className="flex-1 min-w-[120px] px-6 border-l border-border">
                    <span className="font-display text-2xl font-extrabold text-accent block leading-tight">5×</span>
                    <span className="text-xs text-muted-foreground mt-0.5 block">Increase in media placements</span>
                  </div>
                </div>

                <p className="font-body text-muted-foreground leading-relaxed max-w-2xl">
                  A leading PR firm rebuilt around AI — quadrupling qualified inbound leads, cutting reporting overhead by 75%, and placing five times as many stories with the same team. No additional headcount required.
                </p>
              </Link>
            </div>

            {/* ── Remaining 7 Cards ── */}
            <div className="mb-2">
              <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-4">
                More Client Results
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                {/* Transportation Director */}
                <Link
                  to="/case-studies/transportation-director"
                  className="bg-surface border border-border rounded-lg p-5 hover:border-accent/50 hover:shadow-[0_2px_16px_rgba(51,195,240,0.07)] transition-all flex flex-col"
                >
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="outline" className="bg-accent-secondary/15 text-accent-secondary border-accent-secondary/30">Manufacturing</Badge>
                    <Badge variant="outline" className="bg-accent-secondary/15 text-accent-secondary border-accent-secondary/30">Logistics</Badge>
                    <Badge variant="outline" className="flex items-center gap-1 bg-accent/15 text-accent border-accent/30">
                      <Zap className="w-3 h-3" /> Power Automate
                    </Badge>
                  </div>
                  {/* Metric row */}
                  <div className="flex flex-wrap gap-3 mb-3 py-2.5 border-t border-b border-border">
                    <div>
                      <span className="font-display text-sm font-bold text-accent block leading-tight">85%</span>
                      <span className="text-[11px] text-muted-foreground">Error reduction</span>
                    </div>
                    <div className="w-px bg-border self-stretch" />
                    <div>
                      <span className="font-display text-sm font-bold text-accent block leading-tight">70%</span>
                      <span className="text-[11px] text-muted-foreground">Less wasted labor time</span>
                    </div>
                    <div className="w-px bg-border self-stretch" />
                    <div>
                      <span className="font-display text-sm font-bold text-accent block leading-tight">60%</span>
                      <span className="text-[11px] text-muted-foreground">Dock productivity gain</span>
                    </div>
                  </div>
                  <h3 className="text-base font-semibold mb-2">
                    Transportation Director: Revolutionizing Logistics Management
                  </h3>
                  <p className="font-body text-muted-foreground mb-4 flex-1">
                    A leading appliance manufacturer transformed their inbound logistics with Power Automate OCR solutions, reducing errors by 85%.
                  </p>
                  <div className="flex items-center text-accent font-bold text-sm mt-auto">
                    Read Case Study <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </Link>

                {/* eCatalyst */}
                <Link
                  to="/case-studies/ecatalyst"
                  className="bg-surface border border-border rounded-lg p-5 hover:border-accent/50 hover:shadow-[0_2px_16px_rgba(51,195,240,0.07)] transition-all flex flex-col"
                >
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="outline" className="bg-accent/15 text-accent border-accent/30">Business Services</Badge>
                  </div>
                  {/* Metric row */}
                  <div className="flex flex-wrap gap-3 mb-3 py-2.5 border-t border-b border-border">
                    <div>
                      <span className="font-display text-sm font-bold text-accent block leading-tight">70%</span>
                      <span className="text-[11px] text-muted-foreground">Email triage time saved</span>
                    </div>
                    <div className="w-px bg-border self-stretch" />
                    <div>
                      <span className="font-display text-sm font-bold text-accent block leading-tight">65%</span>
                      <span className="text-[11px] text-muted-foreground">Task completion increase</span>
                    </div>
                  </div>
                  <h3 className="text-base font-semibold mb-2">
                    eCatalyst: 10x Velocity Boosts Operational Excellence
                  </h3>
                  <p className="font-body text-muted-foreground mb-4 flex-1">
                    A fractional business support firm achieved 70% reduction in email triage time and 65% increase in task completion rates through AI automation.
                  </p>
                  <div className="flex items-center text-accent font-bold text-sm mt-auto">
                    Read Case Study <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </Link>

                {/* Hillcrest Partners */}
                <Link
                  to="/case-studies/hillcrest-partners"
                  className="bg-surface border border-border rounded-lg p-5 hover:border-accent/50 hover:shadow-[0_2px_16px_rgba(51,195,240,0.07)] transition-all flex flex-col"
                >
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="outline" className="bg-accent-secondary/15 text-accent-secondary border-accent-secondary/30">Real Estate</Badge>
                  </div>
                  {/* Metric row */}
                  <div className="flex flex-wrap gap-3 mb-3 py-2.5 border-t border-b border-border">
                    <div>
                      <span className="font-display text-sm font-bold text-accent block leading-tight">50%</span>
                      <span className="text-[11px] text-muted-foreground">Faster property flips</span>
                    </div>
                    <div className="w-px bg-border self-stretch" />
                    <div>
                      <span className="font-display text-sm font-bold text-accent block leading-tight">250%</span>
                      <span className="text-[11px] text-muted-foreground">Inbound seller leads</span>
                    </div>
                  </div>
                  <h3 className="text-base font-semibold mb-2">
                    Hillcrest Partners: High-Growth Real Estate Powerhouse
                  </h3>
                  <p className="font-body text-muted-foreground mb-4 flex-1">
                    A real estate investment firm achieved 50% faster property flips and 250% boost in inbound leads with AI-driven automation.
                  </p>
                  <div className="flex items-center text-accent font-bold text-sm mt-auto">
                    Read Case Study <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </Link>

                {/* The Catalyst Group */}
                <Link
                  to="/case-studies/catalyst-group"
                  className="bg-surface border border-border rounded-lg p-5 hover:border-accent/50 hover:shadow-[0_2px_16px_rgba(51,195,240,0.07)] transition-all flex flex-col"
                >
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="outline" className="bg-accent-secondary/15 text-accent-secondary border-accent-secondary/30">Venture Investing</Badge>
                  </div>
                  {/* Metric row */}
                  <div className="flex flex-wrap gap-3 mb-3 py-2.5 border-t border-b border-border">
                    <div>
                      <span className="font-display text-sm font-bold text-accent block leading-tight">300%</span>
                      <span className="text-[11px] text-muted-foreground">More LinkedIn conversations</span>
                    </div>
                    <div className="w-px bg-border self-stretch" />
                    <div>
                      <span className="font-display text-sm font-bold text-accent block leading-tight">50%</span>
                      <span className="text-[11px] text-muted-foreground">Faster deal evaluation</span>
                    </div>
                  </div>
                  <h3 className="text-base font-semibold mb-2">
                    The Catalyst Group: Unprecedented Growth in Business Investment &amp; Acquisitions
                  </h3>
                  <p className="font-body text-muted-foreground mb-4 flex-1">
                    A business portfolio and investment firm achieved 300% more LinkedIn conversations and 50% faster deal evaluation through AI-powered automation.
                  </p>
                  <div className="flex items-center text-accent font-bold text-sm mt-auto">
                    Read Case Study <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </Link>

                {/* Director of Marketing Inc */}
                <Link
                  to="/case-studies/director-of-marketing"
                  className="bg-surface border border-border rounded-lg p-5 hover:border-accent/50 hover:shadow-[0_2px_16px_rgba(51,195,240,0.07)] transition-all flex flex-col"
                >
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="outline" className="bg-accent-secondary/15 text-accent-secondary border-accent-secondary/30">Marketing</Badge>
                  </div>
                  {/* Metric row */}
                  <div className="flex flex-wrap gap-3 mb-3 py-2.5 border-t border-b border-border">
                    <div>
                      <span className="font-display text-sm font-bold text-accent block leading-tight">300%</span>
                      <span className="text-[11px] text-muted-foreground">Social media engagement</span>
                    </div>
                    <div className="w-px bg-border self-stretch" />
                    <div>
                      <span className="font-display text-sm font-bold text-accent block leading-tight">40%</span>
                      <span className="text-[11px] text-muted-foreground">PPC cost reduction</span>
                    </div>
                  </div>
                  <h3 className="text-base font-semibold mb-2">
                    Director of Marketing Inc: High-Performance Social Media Marketing Agency
                  </h3>
                  <p className="font-body text-muted-foreground mb-4 flex-1">
                    A digital marketing agency achieved 300% increase in social media engagement and 40% reduction in PPC costs through AI automation.
                  </p>
                  <div className="flex items-center text-accent font-bold text-sm mt-auto">
                    Read Case Study <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </Link>

                {/* Birchwood Real Estate Partners */}
                <Link
                  to="/case-studies/birchwood-real-estate"
                  className="bg-surface border border-border rounded-lg p-5 hover:border-accent/50 hover:shadow-[0_2px_16px_rgba(51,195,240,0.07)] transition-all flex flex-col"
                >
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="outline" className="bg-accent-secondary/15 text-accent-secondary border-accent-secondary/30">Real Estate</Badge>
                  </div>
                  {/* Metric row */}
                  <div className="flex flex-wrap gap-3 mb-3 py-2.5 border-t border-b border-border">
                    <div>
                      <span className="font-display text-sm font-bold text-accent block leading-tight">400%</span>
                      <span className="text-[11px] text-muted-foreground">Faster lead processing</span>
                    </div>
                    <div className="w-px bg-border self-stretch" />
                    <div>
                      <span className="font-display text-sm font-bold text-accent block leading-tight">300%</span>
                      <span className="text-[11px] text-muted-foreground">Inbound social leads</span>
                    </div>
                  </div>
                  <h3 className="text-base font-semibold mb-2">
                    Birchwood Real Estate Partners: New Heights in Real Estate Wholesaling
                  </h3>
                  <p className="font-body text-muted-foreground mb-4 flex-1">
                    A real estate wholesaling firm achieved 400% faster lead processing and 300% growth in inbound leads through AI-powered automation.
                  </p>
                  <div className="flex items-center text-accent font-bold text-sm mt-auto">
                    Read Case Study <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </Link>

                {/* Inspyrd */}
                <Link
                  to="/case-studies/inspyrd"
                  className="bg-surface border border-border rounded-lg p-5 hover:border-accent/50 hover:shadow-[0_2px_16px_rgba(51,195,240,0.07)] transition-all flex flex-col"
                >
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="outline" className="bg-accent-secondary/15 text-accent-secondary border-accent-secondary/30">Nonprofit</Badge>
                  </div>
                  {/* Metric row */}
                  <div className="flex flex-wrap gap-3 mb-3 py-2.5 border-t border-b border-border">
                    <div>
                      <span className="font-display text-sm font-bold text-accent block leading-tight">300%</span>
                      <span className="text-[11px] text-muted-foreground">Outreach engagement</span>
                    </div>
                    <div className="w-px bg-border self-stretch" />
                    <div>
                      <span className="font-display text-sm font-bold text-accent block leading-tight">250%</span>
                      <span className="text-[11px] text-muted-foreground">Program enrollment growth</span>
                    </div>
                  </div>
                  <h3 className="text-base font-semibold mb-2">
                    Inspyrd: Transformational Trauma Recovery Program
                  </h3>
                  <p className="font-body text-muted-foreground mb-4 flex-1">
                    A Canadian trauma recovery initiative expanded to the U.S., achieving 300% increase in outreach engagement and 250% growth in program enrollments.
                  </p>
                  <div className="flex items-center text-accent font-bold text-sm mt-auto">
                    Read Case Study <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </Link>

              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-muted border border-border rounded-lg p-12 relative overflow-hidden">
              {/* Pull-quote */}
              <blockquote className="font-body text-base italic text-muted-foreground mb-6 pl-5 border-l-4 border-accent bg-accent/5 rounded-r py-3 max-w-2xl">
                "The pipeline that used to stall on manual entry now runs overnight — with higher accuracy than our previous team."
              </blockquote>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Increase Your Velocity?
              </h2>
              <p className="font-body text-lg text-muted-foreground mb-8 max-w-xl">
                Book a free consultation and discover how we can help you achieve 10x growth.
              </p>
              <DiscoveryButton />
            </div>

          </div>
        </section>
      </main>
    </>
  );
};

export default CaseStudies;
