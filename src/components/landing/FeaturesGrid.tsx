
import { Bot, ChartLine, Users, Database } from "lucide-react";

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

const FeaturesGrid = () => {
  return (
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
  );
};

export default FeaturesGrid;
