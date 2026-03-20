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
      <DialogContent className="bg-background border-border">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-4 rounded-lg bg-accent/20">
              <Package className="w-8 h-8 text-accent" />
            </div>
            <div>
              <DialogTitle className="text-2xl text-foreground">{tool.name}</DialogTitle>
              <span className="inline-block px-3 py-1 text-sm rounded-full bg-surface text-accent mt-2">
                {tool.category}
              </span>
            </div>
          </div>
          <DialogDescription className="text-foreground/80 text-base leading-relaxed">
            {tool.blurb}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-6">
          <a
            href={tool.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full justify-center"
          >
            Visit {tool.name}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};
