import React from "react";
import Navbar from "../../components/common/Navbar";
import Hero from "../../components/common/Hero";
import Image from "../../assets/about/about.jpg"; // Adjusted image path
import OurServiceAreaData from "../../components/about-us/OurServiceAreaData";
import SmokeRestorationImage from "../../assets/restoration/smoke-restoration.jpg"; // Adjusted image path
import IntroductionSection from "../../components/common/all-services-section/IntroductionSection";
import BenefitsSection from "../../components/common/all-services-section/BenefitsSection";
import ProcessSection from "../../components/common/all-services-section/ProcessSection";

const data = [
  {
    question: "What is Smoke Restoration?",
    answer:
      "Smoke restoration involves cleaning and deodorizing properties affected by smoke damage.",
  },
  {
    question: "How long does the process take?",
    answer:
      "The duration depends on the extent of the damage, but we aim to complete the process efficiently.",
  },
  {
    question: "Is the service safe?",
    answer:
      "Yes, we use safe and effective methods to restore your property without causing further damage.",
  },
  {
    question: "Can you remove all smoke odors?",
    answer:
      "Our advanced techniques are designed to eliminate smoke odors completely.",
  },
];

const benefits = [
  {
    title: "Comprehensive Cleaning",
    description:
      "We thoroughly clean all affected areas to remove smoke residues and odors.",
  },
  {
    title: "Advanced Deodorization",
    description:
      "Our deodorization process ensures that all smoke odors are eliminated.",
  },
  {
    title: "Expert Technicians",
    description:
      "Our team is trained to handle smoke damage with precision and care.",
  },
];

const processSteps = [
  {
    title: "Initial Assessment",
    description:
      "We evaluate the extent of the smoke damage and create a restoration plan.",
  },
  {
    title: "Cleaning and Deodorization",
    description:
      "Our team cleans all affected areas and uses advanced deodorization techniques.",
  },
  {
    title: "Restoration and Repairs",
    description:
      "We restore and repair any damaged areas to their original condition.",
  },
  {
    title: "Final Inspection",
    description:
      "A thorough inspection ensures that all smoke damage has been addressed.",
  },
];

const SmokeRestoration = () => {
  return (
    <div>
      <Navbar />
      <Hero
        title="Smoke Restoration"
        description="Restore your property with our expert smoke restoration services."
        Image={Image} // Adjusted image usage
      />
      <div className="bg-gray-50 text-gray-800">
        {/* Introduction Section */}
        <section className="py-16 px-8 bg-[#0B1215]">
          <IntroductionSection
            title="Restore Your Property"
            description1="Our Smoke Restoration Service is designed to help you recover from smoke damage quickly and efficiently. We specialize in cleaning and deodorizing properties affected by smoke."
            description2="Using advanced technology and techniques, we ensure your property is restored to its pre-damage condition."
            image={SmokeRestorationImage}
          />
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-5 bg-[#0B1215]">
          <BenefitsSection
            title="Why Choose Our Smoke Restoration Service?"
            benefits={benefits}
          />
        </section>

        {/* Process Section */}
        <section className="py-16 bg-[#0B1215] px-8">
          <ProcessSection
            title="Our Smoke Restoration Process"
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

export default SmokeRestoration;
