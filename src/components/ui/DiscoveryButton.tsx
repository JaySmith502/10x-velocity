
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DiscoveryButtonProps {
  className?: string;
  text?: string;
  url?: string;
}

const DiscoveryButton: React.FC<DiscoveryButtonProps> = ({ 
  className, 
  text = "15 minute discovery",
  url = "/contact"
}) => {
  return (
    <Button 
      asChild
      className={`bg-accent text-background font-medium hover:bg-accent/90 transition-all text-lg ${className}`}
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        {text} <ArrowRight className="w-5 h-5" />
      </a>
    </Button>
  );
};

export default DiscoveryButton;
