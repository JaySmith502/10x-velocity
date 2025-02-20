
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <main className="flex-1">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-velocity-accent to-velocity-light bg-clip-text text-transparent mb-6">
              Accelerate Your Digital Growth
            </h1>
            <p className="text-velocity-muted text-lg mb-8">
              We help ambitious businesses scale through high-performance software development and strategic digital solutions.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-gradient-to-r from-velocity-accent to-velocity-light text-[#151A24] hover:opacity-90 transition-opacity">
                Get Started
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
