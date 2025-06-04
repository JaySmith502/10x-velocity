
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
                Coming soon...
              </p>
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
