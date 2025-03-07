
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-velocity-muted hover:text-velocity-accent transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-8 text-velocity-light">Privacy Policy</h1>
        
        <div className="space-y-8 text-velocity-muted">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-velocity-light">Introduction</h2>
            <p className="mb-4">
              At 10x Velocity, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
            <p>
              This privacy policy applies to all information collected through our website, as well as any related services, sales, marketing, or events.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-velocity-light">Information We Collect</h2>
            <p className="mb-4">
              We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.
            </p>
            <p className="mb-4">
              The personal information that we collect depends on the context of your interactions with us and the website, the choices you make, and the products and features you use. The personal information we collect may include:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Name and contact data (such as your email address, phone number, and other similar contact data)</li>
              <li>Credentials (such as passwords and security questions)</li>
              <li>Payment data (such as credit card number and billing address)</li>
              <li>Location data (such as IP address)</li>
              <li>Usage data (such as how you use our website and services)</li>
              <li>Communications and interactions when using our chatbot or customer service tools</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-velocity-light">How We Use Your Information</h2>
            <p className="mb-4">
              We use personal information collected via our website for a variety of business purposes described below:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>To provide and maintain our website</li>
              <li>To notify you about changes to our website or any products or services we offer</li>
              <li>To allow you to participate in interactive features of our website when you choose to do so</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our website</li>
              <li>To monitor the usage of our website</li>
              <li>To detect, prevent and address technical issues</li>
              <li>To fulfill any other purpose for which you provide it</li>
              <li>To personalize your experience and to deliver content and product offerings relevant to your interests</li>
            </ul>
          </section>

          <section id="ai-chatbot">
            <h2 className="text-2xl font-semibold mb-4 text-velocity-light">AI-Powered Chatbot</h2>
            <p className="mb-4">
              We utilize artificial intelligence (AI) technology to power our chatbot service. By using our chatbot, you acknowledge and agree to the following:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Data Processing:</strong> Our AI chatbot processes the information you provide during conversations to generate appropriate responses. These interactions may be stored and analyzed to improve our service.</li>
              <li><strong>Third-Party AI Services:</strong> We may use third-party AI services to power our chatbot. Information shared with our chatbot may be processed by these third-party providers in accordance with their privacy policies.</li>
              <li><strong>Limitations:</strong> While we strive to ensure the accuracy of information provided by our AI chatbot, responses are generated automatically and may occasionally contain errors or misinterpretations. The information provided should not be considered professional advice.</li>
              <li><strong>Data Retention:</strong> Conversations with our AI chatbot may be retained for training purposes, quality improvement, and to enhance user experience. We implement reasonable security measures to protect this information.</li>
              <li><strong>Opt-Out:</strong> If you prefer not to interact with our AI chatbot, you can use alternative contact methods listed on our website.</li>
            </ul>
            <p>
              By using our AI chatbot, you consent to the collection, processing, and storage of your interactions as described in this privacy policy.
            </p>
          </section>
          
          <section id="cookie-policy">
            <h2 className="text-2xl font-semibold mb-4 text-velocity-light">Cookie Policy</h2>
            <p className="mb-4">
              Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.
            </p>
            <p className="mb-4">
              A cookie is a small file of letters and numbers that we store on your browser or the hard drive of your computer if you agree. Cookies contain information that is transferred to your computer's hard drive.
            </p>
            <p className="mb-4">
              We use the following cookies:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Strictly necessary cookies:</strong> These are cookies that are required for the operation of our website.</li>
              <li><strong>Analytical/performance cookies:</strong> These allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it.</li>
              <li><strong>Functionality cookies:</strong> These are used to recognize you when you return to our website.</li>
              <li><strong>Targeting cookies:</strong> These cookies record your visit to our website, the pages you have visited and the links you have followed.</li>
            </ul>
            <p className="mb-4">
              You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-velocity-light">Cookies and Tracking Technologies</h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to track the activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
            </p>
            <p>
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-velocity-light">Data Security</h2>
            <p className="mb-4">
              The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
            </p>
            <p>
              For AI-powered features, we implement appropriate technical and organizational measures to protect the data processed through these systems. However, as with any technology service, there are inherent risks in transmitting information over the internet.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-velocity-light">Legal Basis for Processing</h2>
            <p className="mb-4">
              We process your personal information, including data processed through our AI systems, on the following legal bases:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Consent:</strong> Where you have given us explicit consent to process your data for specific purposes.</li>
              <li><strong>Contractual Necessity:</strong> Where processing is necessary for the performance of a contract with you.</li>
              <li><strong>Legitimate Interests:</strong> Where processing is necessary for our legitimate interests, such as improving our services and AI systems, provided these interests are not overridden by your rights and freedoms.</li>
              <li><strong>Legal Obligation:</strong> Where processing is necessary to comply with a legal obligation.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-velocity-light">Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-velocity-light">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, you can contact us:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>By email: info@10xvelocity.com</li>
              <li>By visiting the contact page on our website: <Link to="/contact" className="text-velocity-accent hover:underline">Contact Us</Link></li>
            </ul>
          </section>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-velocity-muted">Last updated: July 1, 2024</p>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
