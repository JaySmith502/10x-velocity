
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b border-white/10 bg-black/20 backdrop-blur-md z-50 sticky top-0">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold heading-gradient">
              10x Velocity
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6 mr-4">
              <Link to="/case-studies" className="text-velocity-light hover:text-velocity-accent transition-colors">
                Case Studies
              </Link>
              <Link to="/blog" className="text-velocity-light hover:text-velocity-accent transition-colors">
                Blog
              </Link>
              <Link to="/savings-calculator" className="text-velocity-light hover:text-velocity-accent transition-colors">
                Savings Calculator
              </Link>
            </nav>
            <Button 
              asChild
              className="bg-gradient-to-r from-velocity-accent to-velocity-light text-[#151A24] font-medium hover:bg-gradient-to-r hover:from-purple-400 hover:to-white transition-all"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
