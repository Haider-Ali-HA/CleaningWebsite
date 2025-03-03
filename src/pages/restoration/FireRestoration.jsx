import React from "react";
import Image from "../../assets/about/about.jpg"; // Adjusted image path
import Navbar from "../../components/common/Navbar";
import Hero from "../../components/common/Hero";
import OurServiceAreaData from "../../components/about-us/OurServiceAreaData";
import FireRestorationImage from "../../assets/restoration/fire-restoration.jpg"; // Adjusted image path
import IntroductionSection from "../../components/common/all-services-section/IntroductionSection";
import BenefitsSection from "../../components/common/all-services-section/BenefitsSection";
import ProcessSection from "../../components/common/all-services-section/ProcessSection";
import { Helmet } from "react-helmet";
const data = [
  {
    question: "What is the first step in fire restoration?",
    answer:
      "The first step is to assess the damage and create a restoration plan.",
  },
  {
    question: "Can you remove smoke odor?",
    answer:
      "Yes, we use specialized equipment to remove smoke odor completely.",
  },
  {
    question: "How long does fire restoration take?",
    answer:
      "The duration depends on the extent of the damage, but we aim to restore your property as quickly as possible.",
  },
  {
    question: "Do you work with insurance companies?",
    answer:
      "Yes, we work with all major insurance companies to help you through the claims process.",
  },
];

const benefits = [
  {
    title: "Comprehensive Assessment",
    description:
      "We thoroughly assess the damage to create an effective restoration plan.",
  },
  {
    title: "Advanced Equipment",
    description:
      "We use state-of-the-art equipment to ensure thorough cleaning and restoration.",
  },
  {
    title: "Experienced Technicians",
    description:
      "Our team is trained and experienced in handling all aspects of fire restoration.",
  },
];

const processSteps = [
  {
    title: "Damage Assessment",
    description:
      "We evaluate the extent of the damage and create a detailed restoration plan.",
  },
  {
    title: "Debris Removal",
    description: "Our team removes all debris and damaged materials from the site.",
  },
  {
    title: "Cleaning and Sanitization",
    description: "We clean and sanitize all affected areas to remove soot and smoke residues.",
  },
  {
    title: "Restoration and Repairs",
    description: "We restore and repair your property to its pre-fire condition.",
  },
];

const FireRestoration = () => {
  return (
    <div>
      <Helmet>
        <title>
        Fire Restoration Services In Nj And CT 
        | Comprehensive Cleanup & Recovery by Duct Buddy 
        </title>
        <meta
          name="description"
          content="Recover quickly after a fire with Duct Buddy's professional fire restoration services. We clean and restore your property to its original condition while ensuring safety and quality."
        />
        <link
          rel="canonical"
          href="https://www.ductbuddyllc.com/restoration/fire"
        />
      </Helmet>
      <Navbar />
      <Hero
        title="Fire Restoration"
        description="Restore your property to its original state with our expert fire restoration services."
        Image={Image} // Adjusted image usage
      />
      <div className="bg-gray-50 text-gray-800">
        {/* Introduction Section */}
        <section className="py-16 px-8 bg-[#0B1215]">
          <IntroductionSection
            title="Expert Fire Restoration Services"
            description1="Our Fire Restoration Service is designed to help you recover from fire damage quickly and efficiently. We specialize in restoring residential and commercial properties to their pre-fire condition."
            description2="Using advanced technology and a meticulous approach, we ensure your property is thoroughly cleaned and restored."
            image={FireRestorationImage}
          />
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-5 bg-[#0B1215]">
          <BenefitsSection
            title="Why Choose Our Fire Restoration Service?"
            benefits={benefits}
          />
        </section>

        {/* Process Section */}
        <section className="py-16 bg-[#0B1215] px-8">
          <ProcessSection
            title="Our Fire Restoration Process"
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

export default FireRestoration;
