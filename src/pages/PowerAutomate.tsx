import { useState } from "react";
import { ArrowRight, Check, CheckCircle2, Bot, ChartLine, Users, Database } from "lucide-react";
import DiscoveryButton from "@/components/ui/DiscoveryButton";
import { Link } from "react-router-dom";

type TabType = 'overview' | 'features' | 'benefits' | 'cases';

const PowerAutomate = () => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  return (
    <div className="min-h-screen flex flex-col">
      <section className="container mx-auto px-4 py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-velocity-accent/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 heading-gradient">
            Microsoft Power Automate Expertise
          </h1>
          <p className="text-lg md:text-xl text-velocity-muted mb-8">
            Transform your enterprise workflows with our Microsoft Power Automate solutions.
            Automate complex business processes, integrate disparate systems, and unlock new levels of operational efficiency.
          </p>
          <DiscoveryButton text="Schedule a Power Automate Consultation" />
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="glass-card p-1 rounded-lg max-w-4xl mx-auto">
          <div className="grid grid-cols-4 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`py-3 px-4 rounded-md transition-all text-sm sm:text-base font-medium ${
                  activeTab === tab.id
                    ? "bg-velocity-accent/20 text-velocity-accent"
                    : "hover:bg-gray-800/50 text-velocity-muted"
                }`}
                onClick={() => setActiveTab(tab.id as TabType)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {activeTab === 'overview' && (
            <div className="space-y-16 animate-fade">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 heading-gradient">Enterprise-Grade Automation</h2>
                  <p className="text-velocity-muted mb-6">
                    Microsoft Power Automate (formerly Flow) is a powerful cloud-based service that allows enterprises to create automated workflows between applications and services.
                    It helps organizations automate repetitive tasks, streamline processes, and improve productivity.
                  </p>
                  <p className="text-velocity-muted">
                    At 10x Velocity, we specialize in harnessing the full potential of Power Automate to create sophisticated
                    automation solutions tailored to your enterprise's unique challenges and objectives.
                  </p>
                </div>
                <div className="glass-card p-8 rounded-xl">
                  <h3 className="text-xl font-semibold mb-6 text-center">Our Power Automate Services</h3>
                  <ul className="space-y-4">
                    {services.map((service, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-velocity-accent shrink-0 mt-0.5" />
                        <span className="text-velocity-muted">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="glass-card p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-6 text-center">Why Choose 10x Velocity for Power Automate?</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {reasons.map((reason, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 rounded-full bg-velocity-accent/20 flex items-center justify-center mx-auto mb-4">
                        <reason.icon className="w-8 h-8 text-velocity-accent" />
                      </div>
                      <h3 className="font-semibold mb-2">{reason.title}</h3>
                      <p className="text-sm text-velocity-muted">{reason.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-12 animate-fade">
              <h2 className="text-3xl font-bold text-center mb-12 heading-gradient">
                Power Automate Features We Leverage
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="glass-card p-8 rounded-xl">
                    <h3 className="text-xl font-semibold mb-4 text-velocity-accent">{feature.title}</h3>
                    <p className="text-velocity-muted mb-6">{feature.description}</p>
                    <h4 className="font-medium mb-3">Common Applications:</h4>
                    <ul className="space-y-2">
                      {feature.applications.map((app, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <ArrowRight className="w-5 h-5 text-velocity-accent shrink-0 mt-0.5" />
                          <span className="text-velocity-muted">{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'benefits' && (
            <div className="space-y-12 animate-fade">
              <h2 className="text-3xl font-bold text-center mb-12 heading-gradient">
                Business Benefits of Power Automate
              </h2>
              
              <div className="glass-card p-8 rounded-xl">
                <div className="grid md:grid-cols-2 gap-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-velocity-accent/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-velocity-accent" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                        <p className="text-velocity-muted">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-lg mb-6">
                  Ready to transform your operations with Microsoft Power Automate?
                </p>
                <DiscoveryButton text="Book a Free Consultation" />
              </div>
            </div>
          )}

          {activeTab === 'cases' && (
            <div className="space-y-12 animate-fade">
              <h2 className="text-3xl font-bold text-center mb-12 heading-gradient">
                Success Stories
              </h2>
              
              <div className="grid gap-8">
                {caseStudies.map((study, index) => (
                  <div key={index} className="glass-card p-8 rounded-xl">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-3">{study.title}</h3>
                        <p className="text-velocity-muted mb-4">{study.description}</p>
                        <h4 className="font-medium mb-3">Results:</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-velocity-accent shrink-0 mt-0.5" />
                              <span className="text-velocity-muted">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-col justify-between">
                        <div className="glass-card p-4 mb-4 bg-black/40">
                          <h4 className="font-medium mb-2">Industry</h4>
                          <p className="text-velocity-muted">{study.industry}</p>
                        </div>
                        <div className="glass-card p-4 mb-4 bg-black/40">
                          <h4 className="font-medium mb-2">Solutions Used</h4>
                          <p className="text-velocity-muted">{study.solutions}</p>
                        </div>
                        {study.linkTo && (
                          <Link to={study.linkTo} className="text-velocity-accent hover:underline inline-flex items-center">
                            View detailed case study <ArrowRight className="ml-2 w-4 h-4" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center glass-card p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-velocity-accent/20 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient">
            Ready to Automate Your Enterprise?
          </h2>
          <p className="text-lg text-velocity-muted mb-8">
            Let's discuss how Microsoft Power Automate can transform your business operations and deliver 10x results.
          </p>
          <DiscoveryButton text="Book Your Strategy Session" />
        </div>
      </section>
    </div>
  );
};

const tabs: { id: TabType; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'features', label: 'Features' },
  { id: 'benefits', label: 'Benefits' },
  { id: 'cases', label: 'Case Studies' }
];

const services = [
  "Custom Power Automate workflow design and implementation",
  "Power Automate integration with Microsoft 365 ecosystem",
  "Legacy system connections and API integrations",
  "Robotic Process Automation (RPA) with UI flows",
  "Process mining and optimization",
  "Approval workflow automation",
  "Training and enablement for your team"
];

const reasons = [
  {
    title: "Microsoft Certified Experts",
    description: "Our team includes certified Microsoft Power Platform specialists with deep expertise in Power Automate.",
    icon: Database
  },
  {
    title: "Cross-Platform Integration",
    description: "We specialize in connecting Power Automate with your entire technology ecosystem.",
    icon: ChartLine
  },
  {
    title: "AI-Enhanced Automation",
    description: "We combine Power Automate with AI capabilities for intelligent process automation.",
    icon: Bot
  },
  {
    title: "Enterprise-Grade Solutions",
    description: "We build secure, scalable, and compliant automation solutions for enterprise needs.",
    icon: Users
  }
];

const features = [
  {
    title: "Cloud Flows",
    description: "Automate processes across cloud services and web APIs. Create scheduled or trigger-based workflows that connect to hundreds of services.",
    applications: [
      "Automate document approval processes",
      "Synchronize data between systems",
      "Process form submissions with intelligent routing",
      "Create multi-stage approval workflows"
    ]
  },
  {
    title: "Desktop Flows (RPA)",
    description: "Automate repetitive tasks on legacy systems or desktop applications using robotic process automation (RPA) capabilities.",
    applications: [
      "Data extraction from legacy systems",
      "Automated data entry across multiple applications",
      "Screen scraping and information processing",
      "UI-based automation of desktop software"
    ]
  },
  {
    title: "Business Process Flows",
    description: "Guide users through important business processes with a visual, step-by-step interface that ensures consistency and compliance.",
    applications: [
      "Customer onboarding workflows",
      "Regulatory compliance procedures",
      "Sales pipeline management",
      "New employee onboarding processes"
    ]
  },
  {
    title: "AI Builder Integration",
    description: "Incorporate AI capabilities into your automation workflows to process forms, detect images, analyze text, and make predictions.",
    applications: [
      "Automated document processing with form recognition",
      "Sentiment analysis on customer feedback",
      "Invoice processing and data extraction",
      "Predictive maintenance workflows"
    ]
  }
];

const benefits = [
  {
    title: "Significant Cost Reduction",
    description: "Eliminate costly manual processes and reduce operational expenses by up to 70% through intelligent automation."
  },
  {
    title: "Enhanced Productivity",
    description: "Free your team from repetitive tasks, allowing them to focus on strategic initiatives and high-value activities."
  },
  {
    title: "Improved Accuracy",
    description: "Minimize human error in business processes through consistent, rules-based automation with validation."
  },
  {
    title: "Accelerated Operations",
    description: "Speed up process execution by up to 90%, reducing cycle times and improving customer and employee satisfaction."
  },
  {
    title: "Better Compliance",
    description: "Ensure consistent adherence to regulatory requirements with documented, repeatable automated processes."
  },
  {
    title: "Enhanced Scalability",
    description: "Scale operations efficiently without proportional increases in overhead or personnel costs."
  },
  {
    title: "Valuable Analytics",
    description: "Gain insights from process data to continuously improve and optimize your automation initiatives."
  },
  {
    title: "Rapid ROI",
    description: "Achieve return on investment typically within 3-6 months of implementing Power Automate solutions."
  }
];

const caseStudies = [
  {
    title: "Transportation Director - Appliance Manufacturing",
    description: "Streamlined inbound logistics for a major appliance manufacturer handling 400+ daily trucks with Power Automate OCR solutions.",
    industry: "Manufacturing & Logistics",
    solutions: "Power Automate, AI Builder OCR, Document Processing",
    results: [
      "85% reduction in documentation errors",
      "70% decrease in wasted labor hours",
      "60% increase in dock productivity",
      "Eliminated costly detention fees and production delays"
    ],
    linkTo: "/case-studies/transportation-director"
  },
  {
    title: "Global Financial Services Firm",
    description: "Automated client onboarding and KYC processes using Power Automate, integrating with legacy systems and Microsoft 365.",
    industry: "Financial Services",
    solutions: "Cloud Flows, Desktop Flows, AI Builder",
    results: [
      "85% reduction in onboarding processing time",
      "60% decrease in compliance-related errors",
      "$1.2M annual cost savings",
      "Improved customer satisfaction scores by 40%"
    ]
  },
  {
    title: "Healthcare Provider Network",
    description: "Created automated patient referral and insurance verification workflows connecting multiple healthcare systems.",
    industry: "Healthcare",
    solutions: "Cloud Flows, Business Process Flows",
    results: [
      "73% faster insurance verification process",
      "Reduced administrative overhead by 50%",
      "90% decrease in referral processing errors",
      "Enabled staff to handle 3x more patient inquiries"
    ],
    linkTo: "/case-studies/hillcrest-partners"
  }
];

export default PowerAutomate;
