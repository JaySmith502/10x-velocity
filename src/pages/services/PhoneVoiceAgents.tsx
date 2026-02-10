
import { Helmet } from "react-helmet";
import { Sparkle } from "lucide-react";
import DiscoveryButton from "@/components/ui/DiscoveryButton";

const PhoneVoiceAgents = () => {
  return (
    <>
      <Helmet>
        <title>AI Phone & Voice Agents | 10x Velocity</title>
        <meta
          name="description"
          content="Supercharge your customer calls with AI-powered phone and voice agents. Automate inbound and outbound calling while delivering great customer service."
        />
        <link rel="canonical" href="https://10xvelocity.ai/services/phone-voice-agents" />
      </Helmet>
      <main className="flex-1">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 heading-gradient">
          Supercharge Your Customer Calls with AI-Powered Voice Agents
        </h1>
        <h2 className="text-xl md:text-2xl text-velocity-muted text-center max-w-3xl mx-auto">
          Cut costs, boost engagement, and never miss a lead—24/7, in any language.
        </h2>
      </section>

      {/* Overview Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="glass-card p-8 max-w-4xl mx-auto">
          <p className="text-lg text-velocity-light mb-6">
            Our AI-powered Voice Agents seamlessly handle customer calls, qualify leads, and manage inquiries with human-like conversation abilities. By integrating directly with your existing phone systems and CRM tools, these intelligent agents ensure no opportunity is missed while dramatically reducing operational costs.
          </p>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold mb-12 text-center">Key Benefits</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="glass-card p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl mb-4">{benefit.emoji}</div>
              <h4 className="text-xl font-bold mb-3 text-velocity-light">{benefit.title}</h4>
              <p className="text-velocity-muted">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">Features & Capabilities</h3>
          <div className="glass-card p-8">
            <ul className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Sparkle className="text-velocity-accent shrink-0 mt-1" />
                  <span className="text-velocity-light">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why 10x Velocity Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Why 10x Velocity?</h3>
          <div className="glass-card p-8">
            <ul className="space-y-4 text-left">
              <li className="flex items-start gap-3">
                <Sparkle className="text-velocity-accent shrink-0 mt-1" />
                <span className="text-velocity-light">Proven track record with 95% satisfaction rate in AI & automation implementations</span>
              </li>
              <li className="flex items-start gap-3">
                <Sparkle className="text-velocity-accent shrink-0 mt-1" />
                <span className="text-velocity-light">Enterprise-grade security with SOC 2 compliance and end-to-end encryption</span>
              </li>
              <li className="flex items-start gap-3">
                <Sparkle className="text-velocity-accent shrink-0 mt-1" />
                <span className="text-velocity-light">Data-driven optimization with real-time analytics and continuous improvement</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Customer Communication?</h3>
        <p className="text-velocity-muted mb-8 max-w-2xl mx-auto">
          Book a free demo to see how our AI Voice Agents can revolutionize your customer service while cutting costs by up to 70%.
        </p>
        <DiscoveryButton text="Schedule Free Demo" className="text-lg" />
      </section>
    </main>
    </>
  );
};

const benefits = [
  {
    emoji: "💸",
    title: "Cost-Savings vs. Call Centers",
    description: "Reduce headcount and overhead by up to 70% while maintaining 24/7 service coverage"
  },
  {
    emoji: "🤝",
    title: "Customer Engagement",
    description: "Drive higher satisfaction scores with consistent, human-like conversations"
  },
  {
    emoji: "🚫",
    title: "Never Lose Leads",
    description: "Ensure every inquiry is captured and routed with 24/7 call handling"
  },
  {
    emoji: "🚀",
    title: "Lead Generation",
    description: "Convert more callers into qualified prospects with smart qualification"
  },
  {
    emoji: "🌐",
    title: "Multi-Language Support",
    description: "Serve global audiences with seamless language switching capabilities"
  },
];

const features = [
  "Seamless CRM Integration (Salesforce, HubSpot, etc.)",
  "Dynamic Conversation Scripts",
  "Real-time Analytics Dashboard",
  "Sentiment Analysis & Detection",
  "Compliance Recording & Monitoring",
  "Custom Voice & Personality Design",
  "Automated Follow-up Scheduling",
  "Call Transfer & Escalation Logic"
];

export default PhoneVoiceAgents;
