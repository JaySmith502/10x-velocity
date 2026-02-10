
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Calendar, Clock, MapPin, Check, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DiscoveryButton from "@/components/ui/DiscoveryButton";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const LunchAndLearn = () => {
  return (
    <>
      <Helmet>
        <title>AI Lunch & Learn Event | 10x Velocity</title>
        <meta
          name="description"
          content="Join our AI as Your Performance Enhancer lunch and learn session. Discover practical AI applications for your business in a hands-on interactive setting."
        />
        <link rel="canonical" href="https://10xvelocity.ai/events/lunch-and-learn" />
      </Helmet>
      <div className="min-h-screen bg-velocity-dark">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-velocity-dark/90 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 heading-gradient animate-fade-up">
              AI as Your Performance Enhancer
            </h1>
            <p className="text-xl md:text-2xl text-velocity-muted mb-8 animate-fade-up">
              How to Run a 10x Company Playbook
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-up">
              <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full">
                <Calendar className="w-5 h-5 text-velocity-accent" />
                <span>April 22, 2025</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full">
                <Clock className="w-5 h-5 text-velocity-accent" />
                <span>12:00-1:00pm ET</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full">
                <MapPin className="w-5 h-5 text-velocity-accent" />
                <span>Hybrid (In-Person + Zoom)</span>
              </div>
            </div>
            <DiscoveryButton 
              text="Register Now" 
              url="https://www.eventbrite.com/e/1302953963379?aff=oddtdtcreator" 
              className="animate-fade-up" 
            />
          </div>
        </div>
      </section>

      {/* Meme Section */}
      <section className="py-16 bg-velocity-dark/80">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 heading-gradient">
              Don't let technology slap you in the face!
            </h2>
            
            <Card className="bg-transparent border-velocity-accent/20 overflow-hidden max-w-2xl mx-auto">
              <CardContent className="p-0">
                <div className="w-full">
                  <img 
                    src="/lovable-uploads/cb4bc5ad-603d-48d9-b4fe-0749e28a4217.png" 
                    alt="SpongeBob AI Meme" 
                    className="w-full h-auto object-contain"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section className="py-16 bg-[#151A24]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 heading-gradient">
              Event Agenda
            </h2>
            <p className="text-center text-velocity-muted mb-12 max-w-2xl mx-auto">
              Join us for this interactive 60-minute session to discover how AI is reshaping business operations and how to build your own 10x playbook.
            </p>
            
            <div className="glass-card p-8 mb-10">
              <div className="space-y-8">
                <AgendaItem 
                  number="1" 
                  title="Welcome & Introductions" 
                  description="Meet the Co-Founders: Jay Smith & Kirk Hilbrecht - Their backgrounds, vision, and why 10xVelocity exists"
                />
                
                <AgendaItem 
                  number="2" 
                  title="What is 10xVelocity?" 
                  description="What we do / What we don't do - Who we help and how we help them"
                />
                
                <AgendaItem 
                  number="3" 
                  title="What is AI in 2025?" 
                  description="Today's AI: Co-pilots, not replacements - What AI will look like in 2026"
                />
                
                <AgendaItem 
                  number="4" 
                  title="AI Security: What to Actually Worry About" 
                  description="The online banking comparison - Responsible use and best practices"
                />
                
                <AgendaItem 
                  number="5" 
                  title="The Cost of NOT Using AI" 
                  description="Competitor advantage - Lost time, missed opportunities"
                />
                
                <AgendaItem 
                  number="6" 
                  title="Where AI Can Transform Your Business" 
                  description="15 Business Functions AI Can 10x - Tools you can use today"
                />
                
                <AgendaItem 
                  number="7" 
                  title="Building Your AI Workflow" 
                  description="Where to start - Mapping out your AI playbook - 10xVelocity's free online workflow tool"
                />
                
                <AgendaItem 
                  number="8" 
                  title="Open Q&A" 
                  description="Real-time examples, burning questions, personalized use cases"
                />
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 heading-gradient">Limited In-Person Seating Available</h3>
              <p className="text-velocity-muted mb-8">
                Join us in-person for a complimentary lunch or online via Zoom
              </p>
              <DiscoveryButton 
                text="Register Now" 
                url="https://www.eventbrite.com/e/1302953963379?aff=oddtdtcreator" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-velocity-dark/80">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 heading-gradient">
              Why Attend This Event?
            </h2>
            <p className="text-center text-velocity-muted mb-12 max-w-2xl mx-auto">
              Supercharge your business with AI — here's what you'll gain from our free Lunch & Learn:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="glass-card p-6">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-velocity-accent/20 p-2 rounded-full">
                      <Check className="w-5 h-5 text-velocity-accent" />
                    </div>
                    <h3 className="text-xl font-semibold">AI Multiplier Effect</h3>
                  </div>
                  <p className="text-velocity-muted flex-grow">
                    Learn how AI multiplies team output and efficiency across departments
                  </p>
                </div>
              </div>
              
              <div className="glass-card p-6">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-velocity-accent/20 p-2 rounded-full">
                      <Check className="w-5 h-5 text-velocity-accent" />
                    </div>
                    <h3 className="text-xl font-semibold">Practical Tools</h3>
                  </div>
                  <p className="text-velocity-muted flex-grow">
                    Get a breakdown of real AI tools you can implement today
                  </p>
                </div>
              </div>
              
              <div className="glass-card p-6">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-velocity-accent/20 p-2 rounded-full">
                      <Check className="w-5 h-5 text-velocity-accent" />
                    </div>
                    <h3 className="text-xl font-semibold">Live Demonstrations</h3>
                  </div>
                  <p className="text-velocity-muted flex-grow">
                    See AI in action with real-time workflow demonstrations
                  </p>
                </div>
              </div>
              
              <div className="glass-card p-6">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-velocity-accent/20 p-2 rounded-full">
                      <Check className="w-5 h-5 text-velocity-accent" />
                    </div>
                    <h3 className="text-xl font-semibold">Workflow Mapping</h3>
                  </div>
                  <p className="text-velocity-muted flex-grow">
                    Map your first AI workflow in minutes with expert guidance
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href="https://level.10xvelocity.ai/widget/bookings/jay-smith-10xvelocity" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-velocity-accent hover:text-velocity-light transition-colors"
              >
                Learn more about our services <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

const AgendaItem = ({ 
  number, 
  title, 
  description 
}: { 
  number: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-10 h-10 bg-velocity-accent/20 rounded-full flex items-center justify-center text-velocity-accent font-bold">
        {number}
      </div>
      <div className="flex-grow">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <h3 className="text-xl font-semibold text-velocity-light">{title}</h3>
        </div>
        <p className="text-velocity-muted">{description}</p>
      </div>
    </div>
  );
};

export default LunchAndLearn;
