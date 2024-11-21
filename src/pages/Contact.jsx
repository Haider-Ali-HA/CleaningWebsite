import React from "react";
import Navbar from "../components/common/Navbar";
import ContactForm from "../components/contact/ContactForm";
import Map from "../components/contact/Map";
import Hero from "../components/common/Hero";
import Image from "../assets/contact/contactUs.jpg";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Hero
        title="Contact Duct Dudes"
        description="Feel free to contact us"
        Image={Image}
      />
      <Map />
      <ContactForm />
    </div>
  );
};

export default Contact;
