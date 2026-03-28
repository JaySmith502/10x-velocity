import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";

const WORKSHOP_FORM_WEBHOOK = "WORKSHOP_FORM_WEBHOOK";

const teamSizes = ["Just me", "2-5", "6-10", "11-20", "20+"] as const;
const referralSources = ["Referral", "EOS / ENRG", "LinkedIn", "Search", "Other"] as const;

const workshopFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(1, "Company is required"),
  role: z.string().optional(),
  teamSize: z.enum(teamSizes, { required_error: "Please select your team size" }),
  referralSource: z.enum(referralSources).optional(),
  notes: z.string().optional(),
});

type WorkshopFormValues = z.infer<typeof workshopFormSchema>;

const WorkshopInterestForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<WorkshopFormValues>({
    resolver: zodResolver(workshopFormSchema),
  });

  const onSubmit = async (data: WorkshopFormValues) => {
    setSubmitting(true);
    try {
      await fetch(WORKSHOP_FORM_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch {
      // Silently handle — we still show success to avoid blocking users
    }
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-surface border border-border rounded-2xl p-10 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
          <CheckCircle2 className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-2xl font-bold mb-3">Got it — we'll be in touch within 48 hours with upcoming dates and next steps.</h3>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-surface border border-border rounded-2xl p-8 md:p-10 space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input id="firstName" placeholder="Jane" {...register("firstName")} />
          {errors.firstName && <p className="text-sm text-destructive">{errors.firstName.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input id="lastName" placeholder="Smith" {...register("lastName")} />
          {errors.lastName && <p className="text-sm text-destructive">{errors.lastName.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input id="email" type="email" placeholder="jane@company.com" {...register("email")} />
        {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company / Organization *</Label>
        <Input id="company" placeholder="Acme Corp" {...register("company")} />
        {errors.company && <p className="text-sm text-destructive">{errors.company.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="role">Role / Title</Label>
        <Input id="role" placeholder="VP of Operations" {...register("role")} />
      </div>

      <div className="space-y-2">
        <Label>Team Size *</Label>
        <Select onValueChange={(val) => setValue("teamSize", val as WorkshopFormValues["teamSize"], { shouldValidate: true })}>
          <SelectTrigger>
            <SelectValue placeholder="Select team size" />
          </SelectTrigger>
          <SelectContent>
            {teamSizes.map((size) => (
              <SelectItem key={size} value={size}>{size}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.teamSize && <p className="text-sm text-destructive">{errors.teamSize.message}</p>}
      </div>

      <div className="space-y-2">
        <Label>How did you hear about this?</Label>
        <Select onValueChange={(val) => setValue("referralSource", val as WorkshopFormValues["referralSource"])}>
          <SelectTrigger>
            <SelectValue placeholder="Select one" />
          </SelectTrigger>
          <SelectContent>
            {referralSources.map((source) => (
              <SelectItem key={source} value={source}>{source}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">Anything else we should know?</Label>
        <Textarea id="notes" placeholder="Questions, accessibility needs, topics you're most interested in..." {...register("notes")} className="min-h-[100px]" />
      </div>

      <Button type="submit" size="lg" disabled={submitting} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg py-6">
        {submitting ? "Submitting..." : "I'm Interested"}
      </Button>
    </form>
  );
};

export default WorkshopInterestForm;
