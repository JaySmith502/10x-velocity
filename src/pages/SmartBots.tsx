import DiscoveryButton from "@/components/ui/DiscoveryButton";

// Declare the custom element type for TypeScript
declare module "react" {
    interface IntrinsicElements {
      'needle-embedded-widget': {
        'client-key': string;
        'collection-id': string;
      };
    }
}

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
              <p className="text-xl text-velocity-light max-w-3xl mx-auto mb-8">
                Experience our AI-powered chatbot with custom knowledge base. Ask questions and get intelligent responses tailored to your needs.
              </p>
            </div>

            {/* Chatbot Widget Section */}
            <div className="mb-16">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                  Chat with Our AI Assistant
                </h2>
                <div className="flex justify-center">
                  <div className="w-full max-w-none sm:w-4/5 lg:w-3/5">
                  <needle-embedded-widget
                    client-key="clk_01JWXE9Q7W1P9JN3RNX2G6ZPEJ"
                    collection-id="clt_01JT0S48710W0VC34C7S991YS8"
                  />
                </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <DiscoveryButton text="Contact Us" className="text-lg px-8 py-4" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SmartBots;
