
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DiscoveryButtonProps {
  className?: string;
  text?: string;
}

const DiscoveryButton: React.FC<DiscoveryButtonProps> = ({ 
  className, 
  text = "15 minute quick discovery chat" 
}) => {
  return (
    <Button 
      asChild
      className={`bg-gradient-to-r from-velocity-accent to-velocity-light text-[#151A24] font-medium hover:bg-gradient-to-r hover:from-purple-400 hover:to-white transition-all text-lg ${className}`}
    >
      <a href="https://calendly.com/therootofpi/15-minute-quick-chat" target="_blank" rel="noopener noreferrer">
        {text} <ArrowRight className="w-5 h-5" />
      </a>
    </Button>
  );
};

export default DiscoveryButton;
