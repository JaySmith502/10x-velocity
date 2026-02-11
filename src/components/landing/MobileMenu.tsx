
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X, ChevronDown, ChevronUp } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div 
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />
      
      <div 
        className="relative w-4/5 max-w-xs h-full z-10 bg-[#1A1F2C]"
        style={{
          backgroundColor: "#1A1F2C"
        }}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 flex justify-end">
            <button 
              onClick={onClose}
              className="text-velocity-muted hover:text-velocity-light p-2"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="px-4 py-2 flex flex-col items-start bg-[#1A1F2C]">
            <div className="mb-6">
              <Link to="/" className="flex items-center" onClick={onClose}>
                <img
                  src="/lovable-uploads/d113002f-f6b2-41b5-aa96-2057ce8f4046.webp"
                  alt="10x Velocity Logo"
                  className="h-10 w-auto"
                  width={1920}
                  height={1160}
                />
              </Link>
            </div>
            
            <nav className="flex flex-col items-start w-full space-y-6">
              <div className="w-full">
                <button 
                  className="text-velocity-muted hover:text-velocity-light transition-colors font-bold py-2 flex items-center justify-between w-full"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  Services
                  {servicesOpen ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
                
                {servicesOpen && (
                  <div className="ml-4 mt-2 space-y-2 border-l-2 border-velocity-accent/20 pl-4">
                    <Link 
                      to="/services" 
                      className="block text-velocity-muted hover:text-velocity-light transition-colors py-2"
                      onClick={onClose}
                    >
                      All Services
                    </Link>
                    <Link 
                      to="/services/data-cleaning" 
                      className="block text-velocity-muted hover:text-velocity-light transition-colors py-2"
                      onClick={onClose}
                    >
                      Data Cleaning
                    </Link>
                    <Link 
                      to="/services/phone-voice-agents" 
                      className="block text-velocity-muted hover:text-velocity-light transition-colors py-2"
                      onClick={onClose}
                    >
                      Phone Voice Agents
                    </Link>
                    <Link 
                      to="/services/smart-bots" 
                      className="block text-velocity-muted hover:text-velocity-light transition-colors py-2"
                      onClick={onClose}
                    >
                      Smart Bots
                    </Link>
                    <Link 
                      to="/power-automate" 
                      className="block text-velocity-muted hover:text-velocity-light transition-colors py-2"
                      onClick={onClose}
                    >
                      Power Automate
                    </Link>
                    <Link 
                      to="/lexi-file" 
                      className="block text-velocity-muted hover:text-velocity-light transition-colors py-2"
                      onClick={onClose}
                    >
                      Lexi-File
                    </Link>
                    <Link 
                      to="/services/ai-workshops" 
                      className="block text-velocity-muted hover:text-velocity-light transition-colors py-2"
                      onClick={onClose}
                    >
                      AI Workshops
                    </Link>
                    <Link 
                      to="/prototypes" 
                      className="block text-velocity-muted hover:text-velocity-light transition-colors py-2"
                      onClick={onClose}
                    >
                      Rapid Prototypes
                    </Link>
                  </div>
                )}
              </div>
              
              <Link 
                to="/about" 
                className="text-velocity-muted hover:text-velocity-light transition-colors font-bold py-2"
                onClick={onClose}
              >
                About
              </Link>
              
              <Link 
                to="/case-studies" 
                className="text-velocity-muted hover:text-velocity-light transition-colors font-bold py-2"
                onClick={onClose}
              >
                Case Studies
              </Link>
              <Link 
                to="/savings-calculator" 
                className="text-velocity-muted hover:text-velocity-light transition-colors font-bold py-2"
                onClick={onClose}
              >
                Savings Calculator
              </Link>
              <Link 
                to="/demo" 
                className="text-velocity-muted hover:text-velocity-light transition-colors font-bold py-2"
                onClick={onClose}
              >
                Get Demo
              </Link>
              <a href="/contact" 
                className="bg-gradient-to-r from-velocity-accent to-velocity-light text-[#151A24] font-bold px-6 py-3 rounded-lg w-full text-center mt-4"
                onClick={onClose}
              >
                Contact Us
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
