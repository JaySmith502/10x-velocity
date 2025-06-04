
import DiscoveryButton from "@/components/ui/DiscoveryButton";

const SmartBots = () => {
  return (
    <main className="flex-1">
      <div className="min-h-screen bg-gradient-to-br from-velocity-dark to-black py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-16 animate-fade-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 heading-gradient">
                Smart Bots with Custom Knowledge
              </h1>
              <p className="text-xl text-velocity-light max-w-3xl mx-auto">
                Experience the future of AI-powered customer service with RAG-enabled chatbots that understand your business inside and out.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left side - Content */}
              <div className="space-y-8 animate-fade-up">
                <div className="glass-card p-8">
                  <h2 className="text-2xl font-bold mb-4 text-velocity-accent">
                    Transform Your Team Efficiency
                  </h2>
                  <p className="text-velocity-light mb-6">
                    Our RAG-enabled chatbots leverage custom knowledge bases to deliver intelligent, context-aware responses that save your teams countless hours every day.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-velocity-accent/20 p-2 rounded-full mt-1">
                        <span className="flex items-center justify-center w-6 h-6 bg-velocity-accent rounded-full text-black font-bold text-sm">HR</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-velocity-light mb-2">Human Resources</h3>
                        <p className="text-velocity-muted">Instantly answer policy questions, onboarding procedures, and benefits inquiries 24/7</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-velocity-accent/20 p-2 rounded-full mt-1">
                        <span className="flex items-center justify-center w-6 h-6 bg-velocity-accent rounded-full text-black font-bold text-sm">CS</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-velocity-light mb-2">Customer Service</h3>
                        <p className="text-velocity-muted">Provide accurate product information and troubleshooting based on your documentation</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-velocity-accent/20 p-2 rounded-full mt-1">
                        <span className="flex items-center justify-center w-6 h-6 bg-velocity-accent rounded-full text-black font-bold text-sm">EN</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-velocity-light mb-2">Engineering</h3>
                        <p className="text-velocity-muted">Access technical documentation and code standards instantly without interrupting team flow</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-velocity-accent/20 p-2 rounded-full mt-1">
                        <span className="flex items-center justify-center w-6 h-6 bg-velocity-accent rounded-full text-black font-bold text-sm">💼</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-velocity-light mb-2">Leadership</h3>
                        <p className="text-velocity-muted">Get quick insights from company data, reports, and strategic documents for faster decision-making</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <DiscoveryButton text="Build Your Smart Bot" className="text-lg px-8 py-4" />
                </div>
              </div>

              {/* Right side - Why RAG and Game Theory Bot */}
              <div className="lg:sticky lg:top-8 space-y-8">
                <div className="glass-card p-8">
                  <h2 className="text-2xl font-bold mb-4 text-velocity-accent">
                    Why RAG-Enabled Chatbots?
                  </h2>
                  <ul className="space-y-3 text-velocity-light">
                    <li className="flex items-start gap-3">
                      <span className="text-velocity-accent">•</span>
                      <span><strong>Always Up-to-Date:</strong> Automatically syncs with your latest documentation and data</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-velocity-accent">•</span>
                      <span><strong>Contextually Accurate:</strong> Understands nuanced questions about your specific business</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-velocity-accent">•</span>
                      <span><strong>Reduces Training Time:</strong> New employees get instant access to institutional knowledge</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-velocity-accent">•</span>
                      <span><strong>24/7 Availability:</strong> Never miss a question, even outside business hours</span>
                    </li>
                  </ul>
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-xl font-bold mb-4 text-center text-velocity-accent">
                    Try Our Game Theory Smart Bot
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50 w-80 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl overflow-hidden">
        <div className="bg-velocity-accent/20 p-3 border-b border-white/10">
          <h4 className="text-sm font-semibold text-velocity-light text-center">
            Game Theory Smart Bot
          </h4>
        </div>
        <div className="h-[400px]">
          <needle-widget
            client-key="clk_01JWXE9Q7W1P9JN3RNX2G6ZPEJ"
            collection-id="clt_01JT0S48710W0VC34C7S991YS8"
          />
        </div>
      </div>
    </main>
  );
};

export default SmartBots;
