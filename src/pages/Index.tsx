
import { ArrowRight, Bot, ChartLine, Users, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <span className="text-white">10x</span>
            <span className="bg-gradient-to-r from-velocity-accent to-velocity-light bg-clip-text text-transparent">Velocity</span>
          </h1>
          <Button 
            className="bg-gradient-to-r from-velocity-accent to-velocity-light text-[#151A24] font-medium hover:opacity-90 transition-opacity"
          >
            Contact Us
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-velocity-accent/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 heading-gradient">
            Accelerate Your Business Growth with AI
          </h1>
          <p className="text-lg md:text-xl text-velocity-muted mb-8">
            Transform your business processes with cutting-edge AI solutions. 
            Based in Louisville, KY, serving ambitious companies worldwide.
          </p>
          <Button className="bg-gradient-to-r from-velocity-accent to-velocity-light text-[#151A24] font-medium hover:opacity-90 transition-opacity text-lg">
            Get Started <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Value Proposition */}
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

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient">
            Our Solutions
          </h2>
          <p className="text-lg text-velocity-muted">
            Comprehensive AI-powered tools and services to transform your operations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card p-6 animate-fade-up hover:bg-white/10 transition-colors"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <feature.icon className="w-10 h-10 text-velocity-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-velocity-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gradient-to-b from-transparent to-black/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient">
              Our Approach
            </h2>
            <p className="text-lg text-velocity-muted">
              A structured methodology to transform your operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {process.map((step, index) => (
              <div key={step.title} className="text-center animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 rounded-full bg-velocity-accent/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-velocity-accent">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-velocity-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center glass-card p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-velocity-accent/20 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10" />
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
      <footer className="mt-auto py-16 border-t border-white/10 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-velocity-light">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-velocity-muted hover:text-velocity-accent transition-colors">About Us</a></li>
                <li><a href="#" className="text-velocity-muted hover:text-velocity-accent transition-colors">Careers</a></li>
                <li><a href="#" className="text-velocity-muted hover:text-velocity-accent transition-colors">Contact</a></li>
                <li><a href="#" className="text-velocity-muted hover:text-velocity-accent transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-velocity-light">Solutions</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-velocity-muted hover:text-velocity-accent transition-colors">Process Automation</a></li>
                <li><a href="#" className="text-velocity-muted hover:text-velocity-accent transition-colors">Data Analytics</a></li>
                <li><a href="#" className="text-velocity-muted hover:text-velocity-accent transition-colors">AI Integration</a></li>
                <li><a href="#" className="text-velocity-muted hover:text-velocity-accent transition-colors">Workflow Optimization</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-velocity-light">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-velocity-muted hover:text-velocity-accent transition-colors">Documentation</a></li>
                <li><a href="#" className="text-velocity-muted hover:text-velocity-accent transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-velocity-muted hover:text-velocity-accent transition-colors">Webinars</a></li>
                <li><a href="#" className="text-velocity-muted hover:text-velocity-accent transition-colors">API Reference</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-velocity-light">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-velocity-muted hover:text-velocity-accent transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-velocity-muted hover:text-velocity-accent transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-velocity-muted hover:text-velocity-accent transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="text-velocity-muted hover:text-velocity-accent transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
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

const process = [
  {
    title: "Assessment",
    description: "We analyze your current processes and identify optimization opportunities.",
  },
  {
    title: "Strategy",
    description: "Develop a tailored implementation plan aligned with your goals.",
  },
  {
    title: "Implementation",
    description: "Execute the solution with continuous monitoring and refinement.",
  },
];

export default Index;
