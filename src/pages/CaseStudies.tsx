
import { Button } from "@/components/ui/button";
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
          </div>
        </div>
      </section>
    </main>
  );
};

export default CaseStudies;
