
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto text-center glass-card p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-velocity-accent/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10" />
        <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient">
          Ready to Increase Your Velocity?
        </h2>
        <p className="text-lg text-velocity-muted mb-8">
          Book a free consultation and discover how we can help you achieve 10x growth.
        </p>
        <Button className="btn-primary text-lg">
          Book Consultation <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
