import React from "react";
import Navbar from "../components/common/Navbar";
import ContactForm from "../components/contact/ContactForm";
import Map from "../components/contact/Map";
import Hero from "../components/common/Hero";
import Image from "../assets/contact/contactUs.webp";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Duct Buddy | Get a Free Quote for Expert Duct Cleaning Services</title>
        <meta name="description" content="Reach out to Duct Buddy for professional air duct, dryer vent, and HVAC cleaning services in New Jersey And Connecticut. Contact us today to schedule an appointment and get your free quote." />
        <link rel="canonical" href="https://www.ductbuddyllc.com/contact" />
      </Helmet>
      <Helmet>
  {/* Your existing meta tags */}
  
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact DuctBuddy LLC",
        "description": "Get in touch with DuctBuddy for air duct cleaning, dryer vent cleaning and HVAC services in New Jersey and Connecticut.",
        "mainEntity": {
          "@type": "LocalBusiness",
          "name": "DuctBuddy LLC",
          "telephone": "+15512555709",
          "email": "info@ductbuddyllc.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "110 Laidlaw Ave",
            "addressLocality": "Jersey City",
            "addressRegion": "NJ",
            "postalCode": "07306",
            "addressCountry": "US"
          }
        }
      }
    `}
  </script>
</Helmet>
      <Navbar />
      <Hero
        title="Contact DuctBuddy – Schedule Your Air Duct & Dryer Vent Cleaning in New Jersey & Connecticut"
        description="Ready to improve your indoor air quality? Get in touch with DuctBuddy for <strong>air duct cleaning, dryer vent service, or HVAC maintenance in New Jersey and Connecticut</strong>. We offer prompt responses and free estimates, ensuring you receive high-quality service when you need it. Contact us today to schedule your cleaning and <strong>breathe cleaner air</strong> in your home or business."
        Image={Image}
      />
      <Map />
      <ContactForm />
    </div>
  );
};

export default Contact;