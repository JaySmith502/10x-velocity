import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface DiscoveryButtonProps {
  className?: string;
  text?: string;
  url?: string;
}

const DiscoveryButton: React.FC<DiscoveryButtonProps> = ({
  className,
  text = "Contact Us",
  url = "/contact",
}) => {
  const isExternal = url.startsWith("http");

  return (
    <Button
      asChild
      className={`bg-foreground text-background font-semibold hover:bg-foreground/90 transition-colors ${className ?? ""}`}
    >
      {isExternal ? (
        <a href={url} target="_blank" rel="noopener noreferrer">
          {text} <ArrowRight className="w-4 h-4" />
        </a>
      ) : (
        <Link to={url}>
          {text} <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </Button>
  );
};

export default DiscoveryButton;
