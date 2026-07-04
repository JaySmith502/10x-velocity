import { useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Download } from "lucide-react";

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedIndustry?: string;
}

// ponytail: embeds the shared GHL intake form (same one ContactPopup uses)
// so leads route to GoHighLevel like the rest of the site — no custom backend.
export const LeadCaptureModal = ({ isOpen, onClose, selectedIndustry }: LeadCaptureModalProps) => {
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (isOpen && !scriptLoadedRef.current) {
      const script = document.createElement("script");
      script.src = "https://link.msgsndr.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
      scriptLoadedRef.current = true;
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-background border-border">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 rounded-lg bg-accent/20">
              <Download className="w-6 h-6 text-accent" />
            </div>
            <DialogTitle className="text-2xl text-foreground">
              Download Tool Guide
            </DialogTitle>
          </div>
          <DialogDescription className="text-foreground/80">
            Get a comprehensive PDF guide of {selectedIndustry ? `${selectedIndustry} ` : ''}AI and automation tools delivered to your inbox.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 rounded-lg overflow-hidden bg-white">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/mYtM8nnkSBtAzcDroeEO"
            className="w-full h-[439px] border-none"
            id="inline-mYtM8nnkSBtAzcDroeEO-lead-capture"
            data-layout="{'id':'INLINE'}"
            data-form-name="10XVelocity Contact Intake Form - Tool Guide"
            data-height="439"
            data-form-id="mYtM8nnkSBtAzcDroeEO"
            title="Download Tool Guide"
            loading="lazy"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
