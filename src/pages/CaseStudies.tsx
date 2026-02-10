
import { Helmet } from "react-helmet";
import { breadcrumbJsonLd } from "@/schemas/breadcrumbs";
import { ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import DiscoveryButton from "@/components/ui/DiscoveryButton";

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
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 heading-gradient">
            Case Studies
          </h1>
          <p className="text-lg text-velocity-muted mb-12">
            Discover how we've helped businesses achieve transformative results through AI-powered automation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link 
              to="/case-studies/transportation-director"
              className="glass-card p-8 hover:bg-white/10 transition-all cursor-pointer animate-fade-up"
            >
              <div className="flex gap-2 mb-3">
                <Badge variant="outline" className="bg-orange-500/20 text-orange-300 border-orange-500/50">Manufacturing</Badge>
                <Badge variant="outline" className="bg-blue-500/20 text-blue-300 border-blue-500/50">Logistics</Badge>
                <Badge variant="outline" className="flex items-center gap-1 bg-purple-500/20 text-purple-300 border-purple-500/50">
                  <Zap className="w-3 h-3" /> Power Automate
                </Badge>
              </div>
              <h2 className="text-2xl font-bold mb-4">
                Transportation Director: Revolutionizing Logistics Management
              </h2>
              <p className="text-velocity-muted mb-6">
                How a leading appliance manufacturer transformed their inbound logistics with Power Automate OCR solutions, reducing errors by 85%.
              </p>
              <div className="flex items-center text-velocity-accent">
                Read Case Study <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Link>

            <Link 
              to="/case-studies/innes-young"
              className="glass-card p-8 hover:bg-white/10 transition-all cursor-pointer animate-fade-up"
            >
              <div className="flex gap-2 mb-3">
                <Badge variant="outline" className="bg-purple-500/20 text-purple-300 border-purple-500/50">Public Relations</Badge>
                <Badge variant="outline" className="bg-indigo-500/20 text-indigo-300 border-indigo-500/50">Media</Badge>
              </div>
              <h2 className="text-2xl font-bold mb-4">
                Innes & Young: AI-Powered PR Evolution
              </h2>
              <p className="text-velocity-muted mb-6">
                Learn how we helped a leading PR firm achieve 400% growth in inbound leads and 75% reduction in reporting time through AI automation.
              </p>
              <div className="flex items-center text-velocity-accent">
                Read Case Study <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Link>

            <Link 
              to="/case-studies/ecatalyst"
              className="glass-card p-8 hover:bg-white/10 transition-all cursor-pointer animate-fade-up"
            >
              <div className="mb-3">
                <Badge variant="outline" className="bg-blue-500/20 text-blue-300 border-blue-500/50">Business Services</Badge>
              </div>
              <h2 className="text-2xl font-bold mb-4">
                eCatalyst: 10x Velocity Boosts Operational Excellence
              </h2>
              <p className="text-velocity-muted mb-6">
                Discover how we helped a fractional business support firm achieve 70% reduction in email triage time and 65% increase in task completion rates.
              </p>
              <div className="flex items-center text-velocity-accent">
                Read Case Study <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Link>
            
            <Link 
              to="/case-studies/hillcrest-partners"
              className="glass-card p-8 hover:bg-white/10 transition-all cursor-pointer animate-fade-up"
            >
              <div className="mb-3">
                <Badge variant="outline" className="bg-green-500/20 text-green-300 border-green-500/50">Real Estate</Badge>
              </div>
              <h2 className="text-2xl font-bold mb-4">
                Hillcrest Partners: High-Growth Real Estate Powerhouse
              </h2>
              <p className="text-velocity-muted mb-6">
                See how we transformed a real estate investment firm with AI-driven automation, achieving 50% faster property flips and 250% boost in inbound leads.
              </p>
              <div className="flex items-center text-velocity-accent">
                Read Case Study <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Link>

            <Link 
              to="/case-studies/catalyst-group"
              className="glass-card p-8 hover:bg-white/10 transition-all cursor-pointer animate-fade-up"
            >
              <div className="mb-3">
                <Badge variant="outline" className="bg-amber-500/20 text-amber-300 border-amber-500/50">Venture Investing</Badge>
              </div>
              <h2 className="text-2xl font-bold mb-4">
                The Catalyst Group: Unprecedented Growth in Business Investment & Acquisitions
              </h2>
              <p className="text-velocity-muted mb-6">
                Discover how we helped a business portfolio and investment firm achieve 300% increase in LinkedIn conversations and 50% faster deal evaluation through AI-powered automation.
              </p>
              <div className="flex items-center text-velocity-accent">
                Read Case Study <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Link>

            <Link 
              to="/case-studies/director-of-marketing"
              className="glass-card p-8 hover:bg-white/10 transition-all cursor-pointer animate-fade-up"
            >
              <div className="mb-3">
                <Badge variant="outline" className="bg-rose-500/20 text-rose-300 border-rose-500/50">Marketing</Badge>
              </div>
              <h2 className="text-2xl font-bold mb-4">
                Director of Marketing Inc: High-Performance Social Media Marketing Agency
              </h2>
              <p className="text-velocity-muted mb-6">
                Learn how we transformed a digital marketing agency with AI automation, achieving 300% increase in social media engagement and 40% reduction in PPC costs.
              </p>
              <div className="flex items-center text-velocity-accent">
                Read Case Study <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Link>

            <Link 
              to="/case-studies/birchwood-real-estate"
              className="glass-card p-8 hover:bg-white/10 transition-all cursor-pointer animate-fade-up"
            >
              <div className="mb-3">
                <Badge variant="outline" className="bg-green-500/20 text-green-300 border-green-500/50">Real Estate</Badge>
              </div>
              <h2 className="text-2xl font-bold mb-4">
                Birchwood Real Estate Partners: New Heights in Real Estate Wholesaling
              </h2>
              <p className="text-velocity-muted mb-6">
                Explore how we helped a real estate wholesaling firm achieve 400% faster lead processing and 300% growth in inbound leads through AI-powered automation.
              </p>
              <div className="flex items-center text-velocity-accent">
                Read Case Study <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Link>

            <Link 
              to="/case-studies/govbrokers"
              className="glass-card p-8 hover:bg-white/10 transition-all cursor-pointer animate-fade-up"
            >
              <div className="mb-3">
                <Badge variant="outline" className="bg-blue-500/20 text-blue-300 border-blue-500/50">Business Services</Badge>
              </div>
              <h2 className="text-2xl font-bold mb-4">
                GovBrokers: High-Performance Government Contracting Powerhouse
              </h2>
              <p className="text-velocity-muted mb-6">
                Discover how we transformed a government contracting firm, achieving 35% increase in contract win rates and 250% boost in inbound leads through AI-powered automation.
              </p>
              <div className="flex items-center text-velocity-accent">
                Read Case Study <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Link>

            <Link 
              to="/case-studies/inspyrd"
              className="glass-card p-8 hover:bg-white/10 transition-all cursor-pointer animate-fade-up"
            >
              <div className="mb-3">
                <Badge variant="outline" className="bg-teal-500/20 text-teal-300 border-teal-500/50">Nonprofit</Badge>
              </div>
              <h2 className="text-2xl font-bold mb-4">
                Inspyrd: Transformational Trauma Recovery Program
              </h2>
              <p className="text-velocity-muted mb-6">
                See how we helped a Canadian trauma recovery initiative expand to the U.S., achieving 300% increase in outreach engagement and 250% growth in program enrollments.
              </p>
              <div className="flex items-center text-velocity-accent">
                Read Case Study <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Link>
          </div>
          
          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mt-20 text-center glass-card p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-velocity-accent/20 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient">
              Ready to Increase Your Velocity?
            </h2>
            <p className="text-lg text-velocity-muted mb-8">
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
