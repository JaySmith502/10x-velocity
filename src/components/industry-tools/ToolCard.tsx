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
      className="glass-card p-4 cursor-pointer transition-all duration-300 hover:bg-white/10 hover-scale"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-velocity-accent/20 flex-shrink-0">
          <Package className="w-6 h-6 text-velocity-accent" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h4 className="font-semibold text-velocity-light">{tool.name}</h4>
            <ExternalLink className="w-4 h-4 text-velocity-light/40 flex-shrink-0" />
          </div>
          <p className="text-sm text-velocity-light/60 mb-2">{tool.blurb}</p>
          <span className="inline-block px-2 py-1 text-xs rounded-full bg-white/5 text-velocity-accent">
            {tool.category}
          </span>
        </div>
      </div>
    </div>
  );
};
