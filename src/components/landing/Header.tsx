
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-2xl font-bold">
            <span className="text-white">10x</span>
            <span className="bg-gradient-to-r from-velocity-accent to-velocity-light bg-clip-text text-transparent">Velocity</span>
          </Link>
          <nav>
            <Link 
              to="/case-studies" 
              className="text-velocity-muted hover:text-velocity-accent transition-colors"
            >
              Case Studies
            </Link>
          </nav>
        </div>
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
