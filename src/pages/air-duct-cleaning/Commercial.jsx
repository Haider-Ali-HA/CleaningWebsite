import React, { useRef } from "react";
import Image from "../../assets/about/about.jpg"; // Adjusted image path
import Navbar from "../../components/common/Navbar";
import Hero from "../../components/common/Hero";
import OurServiceAreaData from "../../components/about-us/OurServiceAreaData";
import AirDuctCleaningImage from "../../assets/air-duct-cleaning/clean-air-duct.jpg"; // Adjusted image path
import IntroductionSection from "../../components/common/all-services-section/IntroductionSection";
import BenefitsSection from "../../components/common/all-services-section/BenefitsSection";
import ProcessSection from "../../components/common/all-services-section/ProcessSection";
import { Helmet } from "react-helmet";

const data = [
  {
    question: "How often should commercial air ducts be cleaned?",
    answer:
      "We recommend cleaning every 3-5 years, or more frequently for high-traffic businesses.",
  },
  {
    question: "Will cleaning disrupt our daily operations?",
    answer:
      "Not at all! We work on a schedule that fits your business hours, ensuring minimal disruption.",
  },
  {
    question: "Do you provide certifications for compliance?",
    answer:
      "Yes, we can provide documentation to confirm the cleaning for compliance purposes.",
  },
  {
    question: "What type of businesses do you serve?",
    answer:
      "Our services are tailored for offices, retail spaces, warehouses, and more.",
  },
];

const benefits = [
  {
    title: "Healthier Employees",
    description:
      "Reduce allergens and pollutants to promote a healthier workplace.",
  },
  {
    title: "Lower Energy Bills",
    description:
      "Clean ducts reduce strain on HVAC systems, improving energy efficiency.",
  },
  {
    title: "Enhanced Productivity",
    description: "Fresh, clean air improves focus and comfort for employees.",
  },
  {
    title: "Compliance Ready",
    description:
      "Meet health and safety standards with professional duct cleaning.",
  },
];

const processSteps = [
  {
    title: "Comprehensive Inspection",
    description:
      "We assess your HVAC system and ducts to identify problem areas.",
  },
  {
    title: "High-Powered Cleaning",
    description: "Using advanced equipment, we remove dust, mold, and debris.",
  },
  {
    title: "Detailed Finishing Touches",
    description: "We sanitize your ducts and ensure top air quality standards.",
  },
  {
    title: "Post-Service Inspection",
    description:
      "A final walkthrough to ensure satisfaction and system efficiency.",
  },
];

const Commercial = () => {
  return (
    <div>
       <Helmet>
        <title>Commercial Air Duct Cleaning | Boost Office Air Quality & HVAC Efficiency with Duct Buddy</title>
        <meta name="description" content="Improve workplace air quality and reduce energy costs with Duct Buddy's professional commercial air duct cleaning services tailored for offices, retail spaces, and industrial facilities." />
        <link rel="canonical" href="https://www.ductbuddyllc.com/air-duct/commercial" />
      </Helmet>
      <Navbar />
      <Hero
        title=" Commercial Air Duct Cleaning in New Jersey & Connecticut – Boost Indoor Air Quality at Your Business"
        description=" Keep your workplace safe and productive with DuctBuddy’s <strong>commercial air duct cleaning services in New Jersey and Connecticut</strong>. We clean and sanitize HVAC systems in offices, retail stores, and commercial buildings to remove allergens, dust, and mold buildup. Our thorough service improves <strong>indoor air quality</strong> and HVAC efficiency, helping lower energy costs and promote a healthier environment for employees and customers."
        Image={Image} // Adjusted image usage
      />
      
        {/* Introduction Section */}
        <section className="py-16 px-8 bg-[#0B1215] ">
          <IntroductionSection
            title="A Clean Business Starts Here"
            description1="In a bustling workplace, your HVAC system is the unsung hero,
            keeping your employees comfortable and your operations running
            smoothly. But over time, dust, debris, and allergens can accumulate
            in your air ducts, affecting air quality and even increasing your
            energy bills."
            description2="Our Commercial Duct Cleaning Services are designed to tackle these
            challenges head-on. Whether you're managing an office, retail space,
            or industrial facility, our expert team ensures your ducts are
            spotless, enhancing both air quality and HVAC efficiency."
            image={AirDuctCleaningImage}
          />
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-5 bg-[#0B1215] ">
          <BenefitsSection
            title="Why Clean Air Matters for Your Business"
            benefits={benefits}
          />
        </section>

        {/* Process Section */}
        <section className="py-16 bg-[#0B1215] px-8">
          <ProcessSection
            title="    Our Proven Cleaning Process"
            processSteps={processSteps}
          />
        </section>

        {/* FAQ Section */}
        <section className="bg-[#0B1215]">
          <OurServiceAreaData faqs={data} title="Frequently Asked Questions" />
        </section>
      </div>
   
  );
};

export default Commercial;
