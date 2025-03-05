
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  return (
    <main className="flex-1">
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 heading-gradient">
            Case Studies
          </h1>
          <p className="text-lg text-velocity-muted mb-12">
            Discover how we've helped businesses achieve transformative results through AI-powered automation.
          </p>
          <div className="grid gap-8">
            <Link 
              to="/case-studies/innes-young"
              className="glass-card p-8 hover:bg-white/10 transition-all cursor-pointer animate-fade-up"
            >
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
        </div>
      </section>
    </main>
  );
};

export default CaseStudies;
