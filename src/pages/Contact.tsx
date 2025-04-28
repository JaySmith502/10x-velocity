
import { Button } from "@/components/ui/button";
import Swal from 'sweetalert2';


const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
  
    formData.append("access_key", "53ef4527-c820-423e-a034-5567467e3ca3");
  
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
  
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());
  
    if (res.success) {
      // Reset form fields
      form.reset();
      
      Swal.fire({
        title: "Success!",
        text: "We'll be in touch ASAP!",
        icon: "success"
      });
    }
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
                Email: <a href="mailto:info@10xvelocity.com" className="text-velocity-accent hover:underline">info@10xvelocity.com</a>
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
              <form name="contact" onSubmit={onSubmit} className="space-y-4" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
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
                    required
                    rows={4}
                    className="w-full px-4 py-2 bg-[#1A1F2C]/50 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-velocity-accent/50"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-velocity-accent to-velocity-light text-[#151A24] font-medium hover:bg-gradient-to-r hover:from-purple-400 hover:to-white transition-all mt-4"
                >Submit Info
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
