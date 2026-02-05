import { Check, BookOpen, Users, Award, Heart, Clock, GraduationCap, MessageCircle, Search, Lightbulb } from "lucide-react";
import DiscoveryButton from "@/components/ui/DiscoveryButton";

const AIGuideCertification = () => {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section id="ai-guide-certification" className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-velocity-dark/90 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 heading-gradient animate-fade-up">
              AI Guide Certification
            </h1>
            <p className="text-xl md:text-2xl text-velocity-muted mb-6 animate-fade-up">
              Become the bridge between AI and the people who need it most.
            </p>
            <p className="text-lg text-velocity-light/80 max-w-3xl mx-auto mb-10 animate-fade-up">
              Thousands of small business owners are smart, successful, and completely overwhelmed by generative AI. They don't need a tech genius—they need someone patient who can meet them where they are. That's where you come in.
            </p>
            <DiscoveryButton
              text="Register Now"
              url="/contact"
              className="animate-fade-up"
            />
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 bg-[#151A24]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 heading-gradient">
              Who This Is For
            </h2>
            <p className="text-center text-velocity-muted mb-12 max-w-2xl mx-auto">
              High school students who are ready to turn their tech comfort into real-world impact.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {audience.map((item, index) => (
                <div key={index} className="glass-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-velocity-accent/20 p-2 rounded-full flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-velocity-accent" />
                    </div>
                    <p className="text-velocity-light">{item}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-velocity-muted mt-8 italic">
              No prior professional experience required. Just curiosity, patience, and a willingness to listen more than you talk.
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 bg-velocity-dark/80">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 heading-gradient">
              What You'll Learn
            </h2>
            <p className="text-center text-velocity-muted mb-12 max-w-2xl mx-auto">
              This isn't a ChatGPT tutorial—you'll figure that out on your own. This is a consulting and communication course that uses AI as its context.
            </p>
            <div className="space-y-6">
              {learningAreas.map((area, index) => (
                <div key={index} className="glass-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-velocity-accent/20 p-3 rounded-full flex-shrink-0">
                      <area.icon className="w-6 h-6 text-velocity-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-velocity-light mb-2">{area.title}</h3>
                      <p className="text-velocity-muted">{area.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-16 bg-[#151A24]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 heading-gradient">
              What You'll Get
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {outcomes.map((outcome, index) => (
                <div key={index} className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-velocity-accent/20 p-2 rounded-full">
                      <outcome.icon className="w-5 h-5 text-velocity-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-velocity-light">{outcome.title}</h3>
                  </div>
                  <p className="text-velocity-muted">{outcome.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-velocity-dark/80">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 heading-gradient">
              How It Works
            </h2>
            <div className="glass-card p-8">
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-velocity-accent/20 rounded-full flex items-center justify-center text-velocity-accent font-bold">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-velocity-light mb-2">{step.title}</h3>
                      <p className="text-velocity-muted">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-16 bg-[#151A24]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 heading-gradient">
              Program Details
            </h2>
            <div className="glass-card p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {details.map((detail, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-velocity-accent font-semibold whitespace-nowrap">{detail.label}:</span>
                    <span className="text-velocity-light">{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-velocity-dark/80 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient">
            Ready to Get Started?
          </h2>
          <p className="text-velocity-muted mb-8 max-w-2xl mx-auto">
            Join the pilot cohort and become one of the first certified AI Guides.
          </p>
          <DiscoveryButton text="Register for Certification" url="/contact" className="text-lg" />
        </div>
      </section>
    </main>
  );
};

const audience = [
  "Comfortable using AI tools like ChatGPT",
  "Interested in gaining real-world consulting experience",
  "Patient enough to help someone who learns slower than them",
  "Looking for a meaningful credential that stands out",
];

const learningAreas = [
  {
    icon: Users,
    title: "Understanding Your Client",
    description:
      "Why successful professionals freeze around new technology, and how to help them through it without condescension.",
  },
  {
    icon: MessageCircle,
    title: "Communicating Without Jargon",
    description:
      "How to explain AI tools in plain language that builds confidence instead of creating distance.",
  },
  {
    icon: Search,
    title: "Finding the Real Problem",
    description:
      "Discovery techniques to surface what's actually costing your client time and energy.",
  },
  {
    icon: Lightbulb,
    title: "Guiding the First Win",
    description:
      "How to help someone get their first useful AI output—the moment everything clicks.",
  },
  {
    icon: Heart,
    title: "The Human Skills",
    description:
      "Reading frustration, adjusting your pace, knowing what not to say, and leaving clients more capable instead of more dependent.",
  },
];

const outcomes = [
  {
    icon: Award,
    title: "Verified Digital Credential",
    description:
      "A certification backed by real requirements—not just seat time. Something you can add to college applications, resumes, and LinkedIn.",
  },
  {
    icon: Users,
    title: "Real Client Experience",
    description:
      "You'll work with actual small business owners in supervised sessions. This isn't simulation—it's the real thing.",
  },
  {
    icon: Clock,
    title: "Service Hours",
    description:
      "Documented hours that count toward school service requirements (where applicable).",
  },
  {
    icon: BookOpen,
    title: "Transferable Skills",
    description:
      "Consulting, communication, and empathy skills that apply to any career path you choose.",
  },
];

const steps = [
  {
    number: "1",
    title: "Complete the Modules",
    description:
      "Seven modules covering client psychology, communication, discovery, setup sessions, and professional consulting skills. Approximately 10-12 hours of instruction.",
  },
  {
    number: "2",
    title: "Pass the Assessments",
    description:
      "Knowledge checks throughout the course. 80% threshold required.",
  },
  {
    number: "3",
    title: "Practicum",
    description:
      "Minimum two supervised sessions with real local business owners. A mentor observes and provides feedback.",
  },
  {
    number: "4",
    title: "Reflect and Certify",
    description:
      "Submit a written reflection on what you learned about teaching and consulting. Receive your verified credential.",
  },
];

const details = [
  { label: "Format", value: "Virtual, self-paced modules + scheduled practicum sessions" },
  { label: "Time", value: "10-12 hours instruction + minimum 2 client sessions" },
  { label: "Cost", value: "Free for the pilot cohort" },
  { label: "Offered by", value: "10x Velocity, Louisville KY" },
];

export default AIGuideCertification;
