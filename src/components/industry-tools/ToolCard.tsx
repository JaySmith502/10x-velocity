import { ExternalLink, Package } from "lucide-react";
import { Tool } from "@/data/industryTools";

interface ToolCardProps {
  tool: Tool;
  onClick: () => void;
}

export const ToolCard = ({ tool, onClick }: ToolCardProps) => {
  return (
    <div
      onClick={onClick}
      className="bg-surface border border-border rounded-lg p-4 cursor-pointer transition-all duration-300 hover:bg-muted hover-scale"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-accent/20 flex-shrink-0">
          <Package className="w-6 h-6 text-accent" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h4 className="font-semibold text-foreground">{tool.name}</h4>
            <ExternalLink className="w-4 h-4 text-foreground/40 flex-shrink-0" />
          </div>
          <p className="text-sm text-foreground/60 mb-2">{tool.blurb}</p>
          <span className="inline-block px-2 py-1 text-xs rounded-full bg-surface text-accent">
            {tool.category}
          </span>
        </div>
      </div>
    </div>
  );
};
