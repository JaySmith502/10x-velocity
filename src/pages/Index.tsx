
import { ArrowRight, Bot, ChartLine, Users, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 heading-gradient">
            Accelerate Your Business Growth with AI
          </h1>
          <p className="text-lg md:text-xl text-velocity-muted mb-8">
            Transform your business processes with cutting-edge AI solutions. 
            Based in Louisville, KY, serving ambitious companies worldwide.
          </p>
          <Button className="btn-primary text-lg">
            Get Started <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20 bg-black/20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card p-6 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <feature.icon className="w-10 h-10 text-velocity-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-velocity-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center glass-card p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient">
            Ready to Increase Your Velocity?
          </h2>
          <p className="text-lg text-velocity-muted mb-8">
            Book a free consultation and discover how we can help you achieve 10x growth.
          </p>
          <Button className="btn-primary text-lg">
            Book Consultation <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-8 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-velocity-muted">
              © 2024 10x Velocity. All rights reserved.
            </p>
            <p className="text-velocity-muted mt-4 md:mt-0">
              Louisville, Kentucky
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const features = [
  {
    title: "AI Process Automation",
    description: "Streamline your operations with intelligent automation solutions that learn and adapt.",
    icon: Bot,
  },
  {
    title: "Data Analytics",
    description: "Transform your data into actionable insights with advanced analytics.",
    icon: ChartLine,
  },
  {
    title: "Team Augmentation",
    description: "Enhance your team's capabilities with AI-powered tools and training.",
    icon: Users,
  },
  {
    title: "Process Mining",
    description: "Discover optimization opportunities in your business processes automatically.",
    icon: Database,
  },
];

export default Index;
