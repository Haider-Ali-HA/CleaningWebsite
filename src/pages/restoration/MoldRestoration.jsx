import React from "react";
import Image from "../../assets/about/about.jpg"; // Adjusted image path
import Navbar from "../../components/common/Navbar";
import Hero from "../../components/common/Hero";
import OurServiceAreaData from "../../components/about-us/OurServiceAreaData";
import MoldRestorationImage from "../../assets/restoration/mold-restoration.jpg"; // Adjusted image path
import IntroductionSection from "../../components/common/all-services-section/IntroductionSection";
import BenefitsSection from "../../components/common/all-services-section/BenefitsSection";
import ProcessSection from "../../components/common/all-services-section/ProcessSection";
import { Helmet } from "react-helmet";
const data = [
  {
    question: "What is the first step in mold restoration?",
    answer:
      "The first step is to assess the extent of the mold growth and create a remediation plan.",
  },
  {
    question: "Can you remove mold completely?",
    answer:
      "Yes, we use specialized techniques and equipment to remove mold completely and prevent future growth.",
  },
  {
    question: "How long does mold restoration take?",
    answer:
      "The duration depends on the extent of the mold growth, but we aim to restore your property as quickly as possible.",
  },
  {
    question: "Do you work with insurance companies?",
    answer:
      "Yes, we work with all major insurance companies to help you through the claims process.",
  },
];

const benefits = [
  {
    title: "Thorough Assessment",
    description:
      "We thoroughly assess the mold growth to create an effective remediation plan.",
  },
  {
    title: "Advanced Equipment",
    description:
      "We use state-of-the-art equipment to ensure thorough mold removal and prevention.",
  },
  {
    title: "Experienced Technicians",
    description:
      "Our team is trained and experienced in handling all aspects of mold restoration.",
  },
];

const processSteps = [
  {
    title: "Damage Assessment",
    description:
      "We evaluate the extent of the mold growth and create a detailed remediation plan.",
  },
  {
    title: "Containment",
    description:
      "Our team contains the affected area to prevent the spread of mold.",
  },
  {
    title: "Mold Removal",
    description:
      "We use advanced techniques to remove mold completely and prevent future growth.",
  },
  {
    title: "Cleaning and Sanitization",
    description:
      "We clean and sanitize all affected areas to ensure a safe and healthy environment.",
  },
];

const MoldRestoration = () => {
  return (
    <div>
      <Helmet>
        <title>
          Mold Restoration Services In Nj And CT | Eliminate Mold & Improve Air
          Quality with Duct Buddy
        </title>
        <meta
          name="description"
          content="Remove mold and safeguard your home 
          with Duct Buddy's expert mold restoration services. Our proven process improves air quality and protects your property from future mold growth."
        />
        <link
          rel="canonical"
          href="https://www.ductbuddyllc.com/restoration/mold"
        />
      </Helmet>
      <Navbar />
      <Hero
        title="Mold Restoration"
        description="Restore your property to a safe and healthy state with our expert mold restoration services."
        Image={Image} // Adjusted image usage
      />
      <div className="bg-gray-50 text-gray-800">
        {/* Introduction Section */}
        <section className="py-16 px-8 bg-[#0B1215]">
          <IntroductionSection
            title="Expert Mold Restoration Services"
            description1="Our Mold Restoration Service is designed to help you recover from mold damage quickly and efficiently. We specialize in restoring residential and commercial properties to a safe and healthy state."
            description2="Using advanced technology and a meticulous approach, we ensure your property is thoroughly cleaned and restored."
            image={MoldRestorationImage}
          />
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-5 bg-[#0B1215]">
          <BenefitsSection
            title="Why Choose Our Mold Restoration Service?"
            benefits={benefits}
          />
        </section>

        {/* Process Section */}
        <section className="py-16 bg-[#0B1215] px-8">
          <ProcessSection
            title="Our Mold Restoration Process"
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

export default MoldRestoration;
