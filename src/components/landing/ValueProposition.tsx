
import { ArrowRight } from "lucide-react";

const ValueProposition = () => {
  return (
    <section className="bg-gradient-to-b from-black/20 to-transparent py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient">
            Solving Capacity Challenges
          </h2>
          <p className="text-lg text-velocity-muted">
            Whether you're a growing business or a nonprofit organization, 
            we help you break through capacity barriers with intelligent automation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="glass-card p-8 animate-fade-up">
            <h3 className="text-xl font-semibold mb-4 text-velocity-accent">For Businesses</h3>
            <ul className="space-y-4 text-velocity-muted">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-velocity-accent shrink-0 mt-1" />
                <span>Automate repetitive tasks to free up your team for strategic work</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-velocity-accent shrink-0 mt-1" />
                <span>Optimize workflows with AI-powered process mining</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-velocity-accent shrink-0 mt-1" />
                <span>Scale operations without proportionally increasing headcount</span>
              </li>
            </ul>
          </div>
          <div className="glass-card p-8 animate-fade-up delay-150">
            <h3 className="text-xl font-semibold mb-4 text-purple-400">For Nonprofits</h3>
            <ul className="space-y-4 text-velocity-muted">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-purple-400 shrink-0 mt-1" />
                <span>Streamline donor management and engagement processes</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-purple-400 shrink-0 mt-1" />
                <span>Maximize impact with limited resources through automation</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-purple-400 shrink-0 mt-1" />
                <span>Improve volunteer coordination and program management</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
