import React from "react";
import { ArrowRight, Lock, Lightbulb, Settings, Zap, Brain, FileSearch, Shield, Users, Calendar, CheckCircle } from "lucide-react";
import DiscoveryButton from "@/components/ui/DiscoveryButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LexiFile = () => {
  const features = [
    {
      icon: Lock,
      title: "Enterprise-Grade Privacy",
      description: "Your data never leaves your systems. We connect directly to your existing tools (OneDrive, Google Workspace, Dropbox, SharePoint, CRMs, and more) with zero indexing or data replication."
    },
    {
      icon: Lightbulb,
      title: "Answers, Not Search Results",
      description: "No more hunting through folders or dashboards. Your team gets contextual, AI-generated responses drawn directly from your internal documents and systems."
    },
    {
      icon: Settings,
      title: "Fully Customized to Your Stack",
      description: "We configure and maintain the system for your exact workflow—legal, financial, nonprofit, or otherwise. From setup to governance, we handle the complexity so you don't have to."
    },
    {
      icon: Zap,
      title: "Setup in Days, Not Months",
      description: "Forget long IT deployments. Your private assistant can be up and running in a week—with no data migration or end-user training needed."
    },
    {
      icon: Brain,
      title: "Built for Non-Technical Teams",
      description: "Anyone on your team can use the assistant with simple language—no Boolean search, coding, or database queries required."
    },
    {
      icon: CheckCircle,
      title: "No Long-Term Commitment",
      description: "Our relationship works month to month, and we're with you every step of the way. Whenever you need support adding or removing users or file connections, just reach out and we'll handle it."
    }
  ];

  const useCases = [
    {
      title: "Law Firms",
      description: "Instantly locate case references, client files, or policy changes across your entire knowledge base",
      icon: FileSearch
    },
    {
      title: "Accounting & Finance",
      description: "Retrieve compliance requirements, client contracts, and audit trails without sifting through systems",
      icon: Shield
    },
    {
      title: "Nonprofits",
      description: "Quickly find grant requirements, program data, or board meeting notes—on demand",
      icon: Users
    }
  ];

  const whatYouGet = [
    "Private, AI-powered knowledge assistant branded and tailored to your business",
    "Ongoing system maintenance, updates, and permissions management",
    "Access-based document search across all major platforms",
    "Monthly performance reporting and system tuning",
    "Branded for your company and hosted on your subdomain",
    "Dedicated support from 10x Velocity"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-velocity-accent/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 heading-gradient">
            Lexi-File
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-velocity-light">
            AI-Powered Document Search & Retrieval for High-Volume Knowledge Work
          </h2>
          <p className="text-lg md:text-xl text-velocity-muted mb-8">
            Cut Research Time in Half—Without Sacrificing Accuracy
          </p>
          <p className="text-lg text-velocity-muted mb-8 max-w-3xl mx-auto">
            For law firms, accounting practices, nonprofits, and other document-heavy organizations, 
            digging through shared drives, PDFs, emails, or intranets wastes time, introduces errors, 
            and frustrates your team. Our Smart Knowledge Assistant changes that.
          </p>
          <p className="text-lg text-velocity-muted mb-8 max-w-3xl mx-auto">
            We deploy a private, secure AI system that lets your team ask plain-language questions 
            and get immediate, accurate answers—grounded only in your data.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 heading-gradient">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="glass-card p-6 flex flex-col h-full animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-velocity-accent/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-velocity-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-velocity-light">{feature.title}</h3>
                <p className="text-velocity-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Satisfaction Guarantee */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-emerald-500/10 to-green-400/10 border border-emerald-500/20 rounded-xl p-8 animate-fade-up">
            <h3 className="text-2xl font-bold mb-4 text-emerald-400">Our Satisfaction Guarantee</h3>
            <div className="relative mb-8">
              <div className="w-24 h-0.5 bg-gradient-to-r from-emerald-400 to-green-300 mx-auto shadow-[0_0_20px_rgba(52,211,153,0.8)]"></div>
              <div className="absolute inset-0 w-24 h-0.5 bg-gradient-to-r from-emerald-400 to-green-300 mx-auto blur-sm opacity-75"></div>
            </div>
            <p className="text-lg text-velocity-muted mb-6">
              We're confident this solution will transform how your team works. After onboarding (usually completed in one week), 
              you'll get 30 days to evaluate the system inside your real environment.
            </p>
            <p className="text-lg text-velocity-muted mb-6">
              If you decide not to continue, we'll refund 50% of your onboarding fee—because we believe in shared commitment, not just easy exits.
            </p>
            <p className="text-lg font-medium text-emerald-300">
              Most of our clients see value within days. But we'll let the results speak for themselves.
            </p>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 heading-gradient">
            Who This Is For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={useCase.title}
                className="glass-card p-6 text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-velocity-accent/20 flex items-center justify-center mb-6 mx-auto">
                  <useCase.icon className="w-8 h-8 text-velocity-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-velocity-light">{useCase.title}</h3>
                <p className="text-velocity-muted">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 heading-gradient">
            What You Get
          </h2>
          <div className="glass-card p-8 animate-fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whatYouGet.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-velocity-accent shrink-0 mt-1" />
                  <span className="text-velocity-muted">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 heading-gradient">
            Pricing
          </h2>
          <div className="glass-card p-8 animate-fade-up">
            <div className="space-y-6">
              <div className="border-b border-velocity-muted/20 pb-4">
                <h3 className="text-xl font-semibold text-velocity-light mb-2">Setup Fee</h3>
                <p className="text-velocity-muted">Custom based on size and complexity (starts at $2,500)</p>
              </div>
              <div className="border-b border-velocity-muted/20 pb-4">
                <h3 className="text-xl font-semibold text-velocity-light mb-2">Monthly Per-User</h3>
                <p className="text-velocity-muted">$35/user depending on plan tier</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-velocity-light mb-2">Premium Add-ons Available</h3>
                <p className="text-velocity-muted">Audit logging, advanced compliance configs, CRM syncs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why 10x Velocity */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 heading-gradient">
            Why 10x Velocity?
          </h2>
          <div className="glass-card p-8 animate-fade-up">
            <p className="text-lg text-velocity-muted mb-6">
              We combine deep expertise in automation, secure system integration, and industry-specific AI implementation. 
              Our team has helped law firms, nonprofits, and regulated businesses adopt AI responsibly and at speed—without the tech overhead.
            </p>
            <p className="text-xl font-semibold text-velocity-light">
              We don't just sell software. We deliver working systems.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 heading-gradient">
            Book a Discovery Call
          </h2>
          <p className="text-lg md:text-xl text-velocity-muted mb-8">
            Let's talk about how this can save hours per week across your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <DiscoveryButton />
            <Button 
              asChild
              variant="outline" 
              className="border-velocity-accent text-[#151A24] hover:bg-gradient-to-r hover:from-purple-400 hover:to-white hover:border-transparent text-lg"
            >
              <Link to="/contact">
                Contact Us <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LexiFile;