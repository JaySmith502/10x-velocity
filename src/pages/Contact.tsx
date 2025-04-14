
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Check } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 heading-gradient">
              Get in Touch
            </h1>
            <p className="text-velocity-muted mb-8 text-lg">
              Ready to supercharge your team's velocity? Let's talk about how we can help you achieve 10x results.
            </p>
            
            <div className="glass-card p-6 md:p-8 mb-8">
              <h3 className="font-semibold text-lg mb-2">Contact Information</h3>
              <p className="text-velocity-muted mb-4">
                Email: <a href="mailto:hello@10xvelocity.com" className="text-velocity-accent hover:underline">hello@10xvelocity.com</a>
              </p>
              <p className="text-velocity-muted">
                Hours: Monday-Friday, 9am-5pm EST
              </p>
            </div>
            
            <div className="glass-card p-6 md:p-8">
              <h3 className="font-semibold text-lg mb-2">Office Location</h3>
              <p className="text-velocity-muted">
                10x Velocity<br />
                10440 Bluegrass Pkwy<br />
                Louisville, KY 40299
              </p>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="glass-card p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
              <form name="contact" onSubmit={handleSubmit} className="space-y-4" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-[#1A1F2C]/50 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-velocity-accent/50"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-[#1A1F2C]/50 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-velocity-accent/50"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-[#1A1F2C]/50 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-velocity-accent/50"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 bg-[#1A1F2C]/50 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-velocity-accent/50"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-velocity-accent to-velocity-light text-[#151A24] font-medium hover:bg-gradient-to-r hover:from-purple-400 hover:to-white transition-all mt-4"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
