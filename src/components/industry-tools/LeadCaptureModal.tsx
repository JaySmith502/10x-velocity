import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedIndustry?: string;
}

export const LeadCaptureModal = ({ isOpen, onClose, selectedIndustry }: LeadCaptureModalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Success!",
      description: "Your tool guide will be sent to your email shortly.",
    });

    setLoading(false);
    onClose();
    setName("");
    setEmail("");
    setCompany("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-velocity-dark border-white/10">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 rounded-lg bg-velocity-accent/20">
              <Download className="w-6 h-6 text-velocity-accent" />
            </div>
            <DialogTitle className="text-2xl text-velocity-light">
              Download Tool Guide
            </DialogTitle>
          </div>
          <DialogDescription className="text-velocity-light/80">
            Get a comprehensive PDF guide of {selectedIndustry ? `${selectedIndustry} ` : ''}AI and automation tools delivered to your inbox.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-velocity-light">Name</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-white/5 border-white/10 text-velocity-light"
              placeholder="Your name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-velocity-light">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/5 border-white/10 text-velocity-light"
              placeholder="your@email.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company" className="text-velocity-light">Company (Optional)</Label>
            <Input
              id="company"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="bg-white/5 border-white/10 text-velocity-light"
              placeholder="Your company"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full justify-center"
          >
            {loading ? "Sending..." : "Send Me the Guide"}
            <Download className="w-4 h-4" />
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
