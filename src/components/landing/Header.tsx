
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <span className="text-white">10x</span>
          <span className="bg-gradient-to-r from-velocity-accent to-velocity-light bg-clip-text text-transparent">Velocity</span>
        </h1>
        <Button 
          className="bg-gradient-to-r from-velocity-accent to-velocity-light text-[#151A24] font-medium hover:opacity-90 transition-opacity"
        >
          Contact Us
        </Button>
      </div>
    </header>
  );
};

export default Header;
