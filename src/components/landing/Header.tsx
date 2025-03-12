
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import DiscoveryButton from "@/components/ui/DiscoveryButton";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-white/10 bg-black/20 backdrop-blur-md z-50 sticky top-0">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            {/* Logo - hidden on mobile */}
            <Link to="/" className="hidden md:flex items-center">
              <img 
                src="/lovable-uploads/3a6e6f00-b9ba-4507-a097-f7bef657f6ce.png" 
                alt="10x Velocity Logo" 
                className="h-10 md:h-12 w-auto"
              />
            </Link>
            
            {/* Mobile hamburger menu button */}
            <button 
              className="md:hidden text-velocity-muted hover:text-velocity-light p-2 -ml-2"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/services" className="text-velocity-muted hover:text-velocity-light transition-colors font-bold">
                Services
              </Link>
              <Link to="/power-automate" className="text-velocity-muted hover:text-velocity-light transition-colors font-bold">
                Power Automate
              </Link>
              <Link to="/case-studies" className="text-velocity-muted hover:text-velocity-light transition-colors font-bold">
                Case Studies
              </Link>
              <Link to="/savings-calculator" className="text-velocity-muted hover:text-velocity-light transition-colors font-bold">
                Savings Calculator
              </Link>
            </nav>
            <DiscoveryButton className="text-sm" text="Contact Us" />
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />
    </header>
  );
};

export default Header;
