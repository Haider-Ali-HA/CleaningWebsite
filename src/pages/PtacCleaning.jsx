import React from "react";
import Navbar from "../components/common/Navbar";
import Hero from "../components/common/Hero";
import Image from "../assets/about/about.jpg"; // Adjusted image path
import OurServiceAreaData from "../components/about-us/OurServiceAreaData";
import PtacImage from "../assets/ptac-cleaning/ptac-cleaning.jpg"; // Adjusted image path
import IntroductionSection from "../components/common/all-services-section/IntroductionSection";
import BenefitsSection from "../components/common/all-services-section/BenefitsSection";
import ProcessSection from "../components/common/all-services-section/ProcessSection";
import { Helmet } from "react-helmet";

const data = [
  {
    question: "What is PTAC Cleaning?",
    answer:
      "PTAC Cleaning involves thorough cleaning of Packaged Terminal Air Conditioner units to ensure optimal performance and air quality.",
  },
  {
    question: "How often should PTAC units be cleaned?",
    answer:
      "It is recommended to clean PTAC units at least twice a year to maintain efficiency and air quality.",
  },
  {
    question: "Do you offer maintenance contracts?",
    answer:
      "Yes, we offer customizable maintenance contracts to keep your PTAC units in top condition year-round.",
  },
  {
    question: "Can PTAC cleaning improve energy efficiency?",
    answer:
      "Absolutely. Regular cleaning of PTAC units can significantly improve their energy efficiency and lifespan.",
  },
];

const benefits = [
  {
    title: "Enhanced Air Quality",
    description:
      "Our PTAC cleaning service ensures that your air is free from dust, allergens, and pollutants.",
  },
  {
    title: "Improved Efficiency",
    description:
      "Regular cleaning helps your PTAC units run more efficiently, saving you money on energy bills.",
  },
  {
    title: "Extended Lifespan",
    description:
      "Proper maintenance and cleaning can extend the lifespan of your PTAC units.",
  },
];

const processSteps = [
  {
    title: "Initial Inspection",
    description:
      "We inspect your PTAC units to identify any issues and determine the best cleaning approach.",
  },
  {
    title: "Deep Cleaning",
    description:
      "Our technicians use specialized equipment to thoroughly clean your PTAC units.",
  },
  {
    title: "Sanitization",
    description: "We sanitize the units to eliminate any bacteria or mold.",
  },
  {
    title: "Final Inspection",
    description:
      "A detailed inspection ensures your PTAC units are clean and functioning optimally.",
  },
];

const PtacCleaning = () => {
  return (
    <div>
       <Helmet>
        <title>PTAC Cleaning Service - Duct Buddy | Professional PTAC Cleaning in NJ & CT</title>
        <meta name="description" content="Discover our specialized PTAC cleaning services designed to optimize your Packaged Terminal Air Conditioner performance and improve indoor air quality." />
        <link rel="canonical" href="https://www.ductbuddyllc.com/ptac-cleaning" />
      </Helmet>

      <Navbar />
      <Hero
        title="PTAC Cleaning"
        description="Elevate your living environment with our exclusive PTAC cleaning service."
        Image={Image} // Adjusted image usage
      />
      <div className="bg-gray-50 text-gray-800">
        {/* Introduction Section */}
        <section className="py-16 px-8 bg-[#0B1215]">
          <IntroductionSection
            title="Professional PTAC Cleaning Services"
            description1="Our PTAC Cleaning Service is designed to improve the air quality and efficiency of your PTAC units. We specialize in thorough cleaning and maintenance to ensure your units perform at their best."
            description2="Using advanced technology and a meticulous approach, we ensure your PTAC units are clean and efficient."
            image={PtacImage}
          />
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-5 bg-[#0B1215]">
          <BenefitsSection
            title="Why Choose Our PTAC Cleaning Service?"
            benefits={benefits}
          />
        </section>

        {/* Process Section */}
        <section className="py-16 bg-[#0B1215] px-8">
          <ProcessSection
            title="Our PTAC Cleaning Process"
            processSteps={processSteps}
          />
        </section>

        {/* FAQ Section */}
        <section className="bg-[#0B1215]">
          <OurServiceAreaData faqs={data} title="Frequently Asked Questions" />
        </section>
      </div>
    </div>
  );
};

export default PtacCleaning;
