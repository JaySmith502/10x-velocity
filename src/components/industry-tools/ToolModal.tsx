import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink, Package } from "lucide-react";
import { Tool } from "@/data/industryTools";

interface ToolModalProps {
  tool: Tool | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ToolModal = ({ tool, isOpen, onClose }: ToolModalProps) => {
  if (!tool) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-velocity-dark border-white/10">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-4 rounded-lg bg-velocity-accent/20">
              <Package className="w-8 h-8 text-velocity-accent" />
            </div>
            <div>
              <DialogTitle className="text-2xl text-velocity-light">{tool.name}</DialogTitle>
              <span className="inline-block px-3 py-1 text-sm rounded-full bg-white/5 text-velocity-accent mt-2">
                {tool.category}
              </span>
            </div>
          </div>
          <DialogDescription className="text-velocity-light/80 text-base leading-relaxed">
            {tool.blurb}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-6">
          <a
            href={tool.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full justify-center"
          >
            Visit {tool.name}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};
