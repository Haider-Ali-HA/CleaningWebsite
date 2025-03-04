import React from "react";
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | DuctBuddy LLC</title>
        <meta
          name="description"
          content="DuctBuddy LLC's privacy policy outlines how we collect, use, and protect your personal information when you use our services."
        />
        <link rel="canonical" href="https://www.ductbuddyllc.com/privacy-policy" />
      </Helmet>

      <div className="container mx-auto px-4 py-16 max-w-4xl bg-white text-black">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Privacy Policy</h1>
        
        <div className="space-y-6 text-black">
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-primary">Introduction</h2>
            <p className="text-black">
              DuctBuddy LLC ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-primary">Information We Collect</h2>
            <p className="text-black">We may collect the following types of information:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-black">
              <li>Personal identification information (name, email address, phone number, etc.)</li>
              <li>Service address and billing information</li>
              <li>Information about your property for service purposes</li>
              <li>Communications between you and DuctBuddy LLC</li>
              <li>Website usage data and cookies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-primary">How We Use Your Information</h2>
            <p className="text-black">We use your information to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-black">
              <li>Provide, operate, and maintain our services</li>
              <li>Schedule and perform cleaning services at your location</li>
              <li>Process payments and send invoices</li>
              <li>Respond to inquiries and service requests</li>
              <li>Send you service updates and promotional communications</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-primary">Information Sharing</h2>
            <p className="text-black">
              We do not sell or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and business, but only to the extent necessary for them to provide their services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-primary">Cookies and Tracking</h2>
            <p className="text-black">
              Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can set your browser to refuse cookies, but this may limit your ability to use some features of our site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-primary">Your Rights</h2>
            <p className="text-black">You have the right to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-black">
              <li>Access personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (when applicable)</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-primary">Security</h2>
            <p className="text-black">
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-primary">Changes to This Policy</h2>
            <p className="text-black">
              We may update this privacy policy from time to time. The updated version will be posted on this page with a revised "last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-primary">Contact Us</h2>
            <p className="text-black">
              If you have questions about this privacy policy or our practices, please contact us at:
            </p>
            <div className="mt-2 text-black">
              <p className="font-medium">DuctBuddy LLC</p>
              <p>110 Laidlaw Ave</p>
              <p>Jersey City, NJ 07306</p>
              <p>Email: info@ductbuddyllc.com</p>
              <p>Phone: +1 (551) 255-5709</p>
            </div>
          </section>

          <p className="text-sm text-black mt-8">Last Updated: March 4, 2025</p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;