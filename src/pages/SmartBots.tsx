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
  // Get environment variables for the Needle widget
  const clientKey = import.meta.env.VITE_NEEDLE_CLIENT_KEY;
  const collectionId = import.meta.env.VITE_NEEDLE_COLLECTION_ID;
  const isDevelopment = import.meta.env.DEV;

  // Show error message if environment variables are missing
  if (!clientKey || !collectionId) {
    console.error('Missing Needle widget environment variables. Please check your .env.local file.');
  }

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
                  {clientKey && collectionId ? (
                    isDevelopment ? (
                      // Mock widget for development (CORS workaround)
                      <div className="bg-gray-800 rounded-lg p-6 border border-gray-600">
                        <div className="text-center mb-4">
                          <p className="text-yellow-400 mb-2">🚧 Development Mode</p>
                          <p className="text-velocity-light text-sm mb-4">
                            Needle AI widget will work on live site. CORS blocks localhost.
                          </p>
                        </div>
                        <div className="bg-gray-900 rounded p-4 min-h-[300px] flex items-center justify-center">
                          <div className="text-center">
                            <div className="animate-pulse mb-4">
                              <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2"></div>
                            </div>
                            <p className="text-gray-400">Needle AI Chat Widget</p>
                            <p className="text-gray-500 text-sm mt-2">
                              Client Key: {clientKey.substring(0, 8)}...
                            </p>
                            <p className="text-gray-500 text-sm">
                              Collection: {collectionId.substring(0, 8)}...
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <needle-embedded-widget
                        client-key={clientKey}
                        collection-id={collectionId}
                        title="10x Chat"
                        initial-message="Hi, I am a Gamification expert. How can I help you?"
                        theme="dark"
                      />
                    )
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-red-400 mb-2">⚠️ Widget Configuration Missing</p>
                      <p className="text-velocity-light text-sm">
                        Please configure your environment variables in .env.local
                      </p>
                    </div>
                  )}
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
