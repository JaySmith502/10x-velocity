
import { Helmet } from "react-helmet";
import { ArrowRight, Sparkle } from "lucide-react";
import DiscoveryButton from "@/components/ui/DiscoveryButton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const AIWorkshops = () => {
  return (
    <>
      <Helmet>
        <title>AI Workshops for Teams | 10x Velocity</title>
        <meta
          name="description"
          content="Hands-on AI workshops that empower your team to leverage automation tools effectively. Customized training for businesses in Louisville, KY and beyond."
        />
        <link rel="canonical" href="https://10xvelocity.ai/services/ai-workshops" />
      </Helmet>
      <main className="flex-1">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 heading-gradient">
          Empower Your Team with Hands-On AI Workshops
        </h1>
        <h2 className="text-xl md:text-2xl text-velocity-muted text-center max-w-3xl mx-auto">
          Practical, role-based training to unlock AI's potential—tailored for your industry.
        </h2>
      </section>

      {/* Overview Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="glass-card p-8 max-w-4xl mx-auto">
          <p className="text-lg text-velocity-light mb-6">
            Our customized AI workshops deliver hands-on training that transforms how your team works. Through practical exercises and real-world scenarios, we build the skills your staff needs to leverage AI effectively in their daily tasks. Each workshop is tailored to your industry and specific use cases, ensuring immediate value and application.
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

      {/* Popular Workshops */}
      <section className="container mx-auto px-4 py-16 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">Popular Workshops</h3>
          <div className="space-y-6">
            {workshops.map((workshop, index) => (
              <div key={index} className="glass-card p-6">
                <h4 className="text-xl font-bold mb-4 text-velocity-light">{workshop.title}</h4>
                <div className="flex flex-wrap gap-3">
                  {workshop.topics.map((topic, topicIndex) => (
                    <span 
                      key={topicIndex}
                      className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full text-sm"
                    >
                      <Sparkle className="w-4 h-4 text-velocity-accent" />
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold mb-12 text-center">How It Works</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="glass-card p-6 relative">
              <div className="text-velocity-accent font-bold text-xl mb-4">
                {step.number}
              </div>
              <h4 className="text-xl font-bold mb-3 text-velocity-light">{step.title}</h4>
              <p className="text-velocity-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h3>
          <div className="glass-card p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Team's AI Skills?</h3>
        <p className="text-velocity-muted mb-8 max-w-2xl mx-auto">
          Book a free discovery session to discuss your team's needs and design a custom workshop program.
        </p>
        <DiscoveryButton text="Schedule Free Consultation" className="text-lg" />
      </section>
    </main>
    </>
  );
};

const benefits = [
  {
    emoji: "📈",
    title: "Boost Productivity",
    description: "Teach your team to automate routine tasks and reclaim up to 30% of their time"
  },
  {
    emoji: "👥",
    title: "People-First Approach",
    description: "Focus on individual workflows and empower every user—no tech expertise required"
  },
  {
    emoji: "🎯",
    title: "Use-Case Tailoring",
    description: "Workshops built around your specific processes and challenges"
  },
  {
    emoji: "🔧",
    title: "Practice-Oriented",
    description: "Hands-on exercises ensure immediate application of AI tools"
  },
  {
    emoji: "📚",
    title: "Post-Session Resources",
    description: "Take-home templates, prompts, and cheat-sheets for ongoing success"
  }
];

const workshops = [
  {
    title: "Prompt Engineering Masterclass",
    topics: ["Best-practice prompting", "Prompt frameworks", "Limits & pitfalls", "Custom templates"]
  },
  {
    title: "Custom GPT Development",
    topics: ["GPT fundamentals", "Structuring your own GPT", "Data ingestion", "Fine-tuning"]
  },
  {
    title: "Generative AI for Visuals",
    topics: ["Image creation tools", "Copyright & compliance", "Creative workflows"]
  },
  {
    title: "AI Fundamentals Bootcamp",
    topics: ["Core AI concepts", "Generative AI overview", "Live demos", "Hands-on labs"]
  }
];

const steps = [
  {
    number: "01",
    title: "Analysis Call",
    description: "30-60 minute consultation to identify high-impact use cases and goals"
  },
  {
    number: "02",
    title: "Workshop Design",
    description: "Customize agenda, exercises, and data sources to match your needs"
  },
  {
    number: "03",
    title: "Live Delivery",
    description: "Expert-led training either in-person or virtual with real-time support"
  },
  {
    number: "04",
    title: "Follow-Up & Resources",
    description: "Comprehensive resource pack including slides, prompts, and action plans"
  }
];

const faqs = [
  {
    question: "How do we pick the right workshop?",
    answer: "During our initial consultation, we'll assess your team's current AI knowledge, specific challenges, and goals to recommend the most impactful workshop format and content."
  },
  {
    question: "What skills do participants need?",
    answer: "Our workshops are designed for all skill levels. No technical background is required—just basic computer literacy and an openness to learning new tools."
  },
  {
    question: "Can we mix and match modules?",
    answer: "Yes! We can combine elements from different workshops to create a custom program that perfectly matches your team's needs and interests."
  },
  {
    question: "Is there follow-up support?",
    answer: "Absolutely. All workshops include comprehensive resource materials and 30 days of post-workshop email support for questions and guidance."
  }
];

export default AIWorkshops;
