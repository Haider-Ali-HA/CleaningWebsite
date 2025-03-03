import React from "react";
import Navbar from "../components/common/Navbar";
import ContactForm from "../components/contact/ContactForm";
import Map from "../components/contact/Map";
import Hero from "../components/common/Hero";
import Image from "../assets/contact/contactUs.jpg";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Duct Buddy | Get a Free Quote for Expert Duct Cleaning Services</title>
        <meta name="description" content="Reach out to Duct Buddy for professional air duct, dryer vent, and HVAC cleaning services in New Jersey And Connecticut. Contact us today to schedule an appointment and get your free quote." />
        <link rel="canonical" href="https://www.ductbuddyllc.com/contact" />
      </Helmet>
      <Navbar />
      <Hero
        title="Contact Duct Buddy"
        description="Feel free to contact us"
        Image={Image}
      />
      <Map />
      <ContactForm />
    </div>
  );
};

export default Contact;