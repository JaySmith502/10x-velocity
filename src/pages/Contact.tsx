
import { Helmet } from "react-helmet";

const Contact = () => {

  return (
    <>
      <Helmet>
        <title>Contact Us | 10x Velocity</title>
        <meta
          name="description"
          content="Get in touch with 10x Velocity for AI and automation consulting services. Schedule a free discovery call to discuss how we can transform your operations."
        />
        <link rel="canonical" href="https://10xvelocity.ai/contact" />
        <meta property="og:title" content="Contact Us | 10x Velocity" />
        <meta property="og:description" content="Get in touch with 10x Velocity for AI and automation consulting services. Schedule a free discovery call to discuss how we can transform your operations." />
        <meta property="og:url" content="https://10xvelocity.ai/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://10xvelocity.ai/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="max-w-5xl mx-auto">
        {/* Header and Contact Cards - Centered */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 heading-gradient">
            Get in Touch
          </h1>
          <p className="text-velocity-muted mb-8 text-lg">
            Ready to supercharge your team's velocity? Let's talk about how we can help you achieve 10x results.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center max-w-3xl mx-auto mb-12">
            <div className="glass-card p-6 md:p-8 flex-1">
              <h3 className="font-semibold text-lg mb-2">Contact Information</h3>
              <p className="text-velocity-muted mb-4">
                Email: <a href="mailto:info@10xvelocity.ai" className="text-velocity-accent hover:underline">info@10xvelocity.ai</a>
              </p>
              <p className="text-velocity-muted">
                Hours: Monday-Friday, 9am-5pm EST
              </p>
            </div>
            
            <div className="glass-card p-6 md:p-8 flex-1">
              <h3 className="font-semibold text-lg mb-2">Office Location</h3>
              <p className="text-velocity-muted">
                10x Velocity<br />
                10440 Bluegrass Pkwy<br />
                Louisville, KY 40299
              </p>
            </div>
          </div>
        </div>
        
        {/* Contact Form - Full Width */}
        <div className="glass-card p-6 md:p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">Send us a message</h2>
          <div className="w-full" style={{ minHeight: '900px' }}>
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/oF3UAG9Kp3vwDm8QCJ1i"
              style={{ display: 'block', width: '100%', height: '900px', border: 'none', borderRadius: '0px' }}
              id="polite-slide-in-right-oF3UAG9Kp3vwDm8QCJ1i"
              data-layout="{'id':'POLITE_SLIDE_IN','minimizedTitle':'','isLeftAligned':false,'isRightAligned':true,'allowMinimize':false}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="10XVelocity Contact Intake Form"
              data-height="900"
              data-layout-iframe-id="polite-slide-in-right-oF3UAG9Kp3vwDm8QCJ1i"
              data-form-id="oF3UAG9Kp3vwDm8QCJ1i"
              title="10XVelocity Contact Intake Form"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
