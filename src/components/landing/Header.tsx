
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import DiscoveryButton from "@/components/ui/DiscoveryButton";
import MobileMenu from "./MobileMenu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-white/10 bg-black/20 backdrop-blur-md z-50 sticky top-0">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="hidden md:flex items-center">
              <img
                src="/lovable-uploads/d113002f-f6b2-41b5-aa96-2057ce8f4046.webp"
                alt="10x Velocity Logo"
                className="h-10 md:h-12 w-auto"
                width={1920}
                height={1160}
              />
            </Link>
            
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
              <DropdownMenu>
                <DropdownMenuTrigger className="text-velocity-muted hover:text-velocity-light transition-colors font-bold flex items-center gap-1 focus:outline-none">
                  Services <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#1A1F2C] border-velocity-accent/20 text-velocity-light min-w-[200px] rounded-md shadow-lg p-1 z-50">
                  <DropdownMenuItem className="py-2 px-3 cursor-pointer hover:bg-velocity-accent/10 rounded-sm">
                    <Link to="/services" className="w-full">All Services</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="py-2 px-3 cursor-pointer hover:bg-velocity-accent/10 rounded-sm">
                    <Link to="/services/data-cleaning" className="w-full">Data Cleaning</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="py-2 px-3 cursor-pointer hover:bg-velocity-accent/10 rounded-sm">
                    <Link to="/services/phone-voice-agents" className="w-full">Phone Voice Agents</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="py-2 px-3 cursor-pointer hover:bg-velocity-accent/10 rounded-sm">
                    <Link to="/services/smart-bots" className="w-full">Smart Bots</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="py-2 px-3 cursor-pointer hover:bg-velocity-accent/10 rounded-sm">
                    <Link to="/power-automate" className="w-full">Power Automate</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="py-2 px-3 cursor-pointer hover:bg-velocity-accent/10 rounded-sm">
                    <Link to="/lexi-file" className="w-full">Lexi-File</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="py-2 px-3 cursor-pointer hover:bg-velocity-accent/10 rounded-sm">
                    <Link to="/services/ai-workshops" className="w-full">AI Workshops</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="py-2 px-3 cursor-pointer hover:bg-velocity-accent/10 rounded-sm">
                    <Link to="/prototypes" className="w-full">Rapid Prototypes</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Link to="/about" className="text-velocity-muted hover:text-velocity-light transition-colors font-bold">
                About
              </Link>
              
              <Link to="/case-studies" className="text-velocity-muted hover:text-velocity-light transition-colors font-bold">
                Case Studies
              </Link>
              <Link to="/savings-calculator" className="text-velocity-muted hover:text-velocity-light transition-colors font-bold">
                Savings Calculator
              </Link>
              <Link to="/demo" className="text-velocity-muted hover:text-velocity-light transition-colors font-bold">
                Get Demo
              </Link>
            </nav>
            <DiscoveryButton className="text-sm" text="Contact Us" />
          </div>
        </div>
      </div>
      
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />
    </header>
  );
};

export default Header;
