
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          <span className="text-white">10x</span>
          <span className="bg-gradient-to-r from-velocity-accent to-velocity-light bg-clip-text text-transparent">Velocity</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link 
            to="/case-studies" 
            className="text-velocity-muted hover:text-velocity-accent transition-colors font-bold hidden md:block"
          >
            Case Studies
          </Link>
          <Button 
            className="bg-gradient-to-r from-velocity-accent to-velocity-light text-[#151A24] font-medium hover:opacity-90 transition-opacity"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
