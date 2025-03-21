import React from "react";
import Navbar from "../../components/common/Navbar";
import Hero from "../../components/common/Hero";
import Image from "../../assets/about/about.webp"; // Adjusted image path
import OurServiceAreaData from "../../components/about-us/OurServiceAreaData";
import WaterRestorationImage from "../../assets/restoration/water-restoration.webp"; // Adjusted image path
import IntroductionSection from "../../components/common/all-services-section/IntroductionSection";
import BenefitsSection from "../../components/common/all-services-section/BenefitsSection";
import ProcessSection from "../../components/common/all-services-section/ProcessSection";
import { Helmet } from "react-helmet";
const data = [
  {
    question: "What is Water Restoration?",
    answer:
      "Water restoration involves the process of cleaning, drying, sanitizing, and repairing any damage caused by water.",
  },
  {
    question: "How quickly should water restoration begin?",
    answer:
      "It's crucial to start water restoration as soon as possible to prevent further damage and mold growth.",
  },
  {
    question: "Do you handle insurance claims?",
    answer:
      "Yes, we assist with insurance claims to make the process as smooth as possible for you.",
  },
  {
    question: "What types of water damage do you handle?",
    answer:
      "We handle all types of water damage, including from floods, leaks, and burst pipes.",
  },
];

const benefits = [
  {
    title: "Rapid Response",
    description:
      "Our team is available 24/7 to respond quickly to your water damage emergencies.",
  },
  {
    title: "Advanced Equipment",
    description:
      "We use state-of-the-art equipment to ensure thorough water extraction and drying.",
  },
  {
    title: "Certified Technicians",
    description:
      "Our technicians are certified and experienced in handling all types of water damage.",
  },
];

const processSteps = [
  {
    title: "Initial Assessment",
    description:
      "We evaluate the extent of the damage and create a tailored restoration plan.",
  },
  {
    title: "Water Extraction",
    description:
      "Our team uses powerful pumps and vacuums to remove standing water.",
  },
  {
    title: "Drying and Dehumidification",
    description:
      "We use industrial-grade dehumidifiers and air movers to dry affected areas.",
  },
  {
    title: "Cleaning and Sanitizing",
    description:
      "We clean and sanitize your property to remove any contaminants.",
  },
  {
    title: "Restoration",
    description:
      "We repair and restore your property to its pre-damage condition.",
  },
];

const WaterRestoration = () => {
  return (
    <div>
      <Helmet>
        <title>
        Water Restoration Services In Nj And CT 
        | Fast, Reliable Cleanup & Recovery with Duct Buddy
        </title>
        <meta
          name="description"
          content="Address water damage swiftly with Duct Buddy's water restoration services. Our experts mitigate damage and restore your property’s safety and comfort after water-related incidents."
        />
        <link
          rel="canonical"
          href="https://www.ductbuddyllc.com/restoration/water"
        />
      </Helmet>
      <Navbar />
      <Hero
        title="Water Damage Restoration Services in New Jersey & Connecticut – Fast Drying & Flood Cleanup"
        description="Minimize damage from leaks or floods with DuctBuddy’s <strong>water damage restoration services in New Jersey and Connecticut</strong>. Our team provides 24/7 emergency water extraction, structural drying, and sanitization to prevent mold growth and further damage. We use industrial pumps and dehumidifiers to dry your property quickly, helping you recover faster and protect your <strong>indoor air quality</strong>."
        Image={Image} // Adjusted image usage
      />
      <div className="bg-gray-50 text-gray-800">
        {/* Introduction Section */}
        <section className="py-16 px-8 bg-[#0B1215]">
          <IntroductionSection
            title="Comprehensive Water Restoration Services"
            description1="Our Water Restoration Service is designed to quickly and efficiently restore your property after water damage. We specialize in mitigating damage, preventing mold growth, and restoring your space to its original condition."
            description2="Using advanced technology and a meticulous approach, we ensure your property is thoroughly dried and sanitized."
            image={WaterRestorationImage}
          />
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-5 bg-[#0B1215]">
          <BenefitsSection
            title="Why Choose Our Water Restoration Service?"
            benefits={benefits}
          />
        </section>

        {/* Process Section */}
        <section className="py-16 bg-[#0B1215] px-8">
          <ProcessSection
            title="Our Water Restoration Process"
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

export default WaterRestoration;
