
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsOfService = () => {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-velocity-muted hover:text-velocity-accent transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-8 text-velocity-light">Terms of Service</h1>
        
        <div className="space-y-8 text-velocity-muted">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-velocity-light">1. Introduction</h2>
            <p className="mb-4">
              Welcome to 10x Velocity. These Terms of Service ("Terms") govern your use of our website, products, and services. By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access our services.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-velocity-light">2. Use of Services</h2>
            <p className="mb-4">
              Our services are designed to help businesses optimize their operations through process automation, data analytics, and team augmentation. You agree to use our services only for lawful purposes and in accordance with these Terms.
            </p>
            <p>
              You are prohibited from using our services in any way that could damage, disable, overburden, or impair our servers or networks, or interfere with any other party's use and enjoyment of our services.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-velocity-light">3. Account Responsibilities</h2>
            <p className="mb-4">
              If you create an account with us, you are responsible for maintaining the security of your account and for all activities that occur under your account. You must immediately notify us of any unauthorized uses of your account or any other breaches of security.
            </p>
            <p>
              We will not be liable for any acts or omissions by you, including any damages of any kind incurred as a result of such acts or omissions.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-velocity-light">4. Intellectual Property</h2>
            <p className="mb-4">
              Our website and its original content, features, and functionality are owned by 10x Velocity and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without our prior written consent.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-velocity-light">5. User Content</h2>
            <p className="mb-4">
              By submitting content to us, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate, and distribute your content in any existing or future media. You also grant us the right to sublicense these rights and the right to bring an action for infringement of these rights.
            </p>
            <p>
              You represent and warrant that your content does not violate the rights of any third party, including copyright, trademark, privacy, personality, or other personal or proprietary rights.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-velocity-light">6. Limitation of Liability</h2>
            <p className="mb-4">
              In no event shall 10x Velocity, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Your access to or use of or inability to access or use our services</li>
              <li>Any conduct or content of any third party on our services</li>
              <li>Any content obtained from our services</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-velocity-light">7. Termination</h2>
            <p className="mb-4">
              We may terminate or suspend your account and bar access to our services immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
            </p>
            <p>
              If you wish to terminate your account, you may simply discontinue using our services. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-velocity-light">8. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the United States and the State of Kentucky, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-velocity-light">9. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our services after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use our services.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-velocity-light">10. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>By email: info@10xvelocity.ai</li>
              <li>By visiting the contact page on our website: <a href="/contact" className="text-velocity-accent hover:underline">Contact Us</a></li>
            </ul>
          </section>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-velocity-muted">Last updated: June 1, 2024</p>
        </div>
      </div>
    </main>
  );
};

export default TermsOfService;
