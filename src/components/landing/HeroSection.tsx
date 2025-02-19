
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 pt-20 pb-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-velocity-accent/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />
      <div className="max-w-4xl mx-auto text-center animate-fade-up">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 heading-gradient">
          Accelerate Your Business Growth with AI
        </h1>
        <p className="text-lg md:text-xl text-velocity-muted mb-8">
          Transform your business processes with cutting-edge AI solutions. 
          Based in Louisville, KY, serving ambitious companies worldwide.
        </p>
        <Button className="bg-gradient-to-r from-velocity-accent to-velocity-light text-[#151A24] font-medium hover:opacity-90 transition-opacity text-lg">
          Get Started <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
