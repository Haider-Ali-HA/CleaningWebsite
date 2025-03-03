import React from "react";
import Navbar from "../../components/common/Navbar";
import Hero from "../../components/common/Hero";
import Image from "../../assets/about/about.jpg"; // Adjusted image path
import OurServiceAreaData from "../../components/about-us/OurServiceAreaData";
import ExteriorBirdImage from "../../assets/dryer-vent-cleaning/exterior-bird-guard.jpg"; // Adjusted image path
import IntroductionSection from "../../components/common/all-services-section/IntroductionSection";
import BenefitsSection from "../../components/common/all-services-section/BenefitsSection";
import ProcessSection from "../../components/common/all-services-section/ProcessSection";
import { Helmet } from "react-helmet";
const data = [
  {
    question: "Why install an Exterior Bird Guard?",
    answer:
      "It prevents birds from nesting in your vents, ensuring your ventilation system remains unobstructed and efficient.",
  },
  {
    question: "Is the installation process disruptive?",
    answer:
      "Not at all. Our team ensures a quick and clean installation with minimal disruption to your daily routine.",
  },
  {
    question: "How often should the bird guard be inspected?",
    answer:
      "We recommend an annual inspection to ensure it remains in good condition and continues to protect your vents effectively.",
  },
  {
    question: "Can the bird guard be customized?",
    answer:
      "Yes, we offer various sizes and finishes to match your home's exterior aesthetics.",
  },
];

const benefits = [
  {
    title: "Enhanced Protection",
    description:
      "Our bird guards are designed to prevent birds from entering and nesting in your vents, protecting your home from potential damage.",
  },
  {
    title: "Durable Materials",
    description:
      "Made from high-quality materials, our bird guards are built to withstand harsh weather conditions and last for years.",
  },
  {
    title: "Professional Installation",
    description:
      "Our experienced technicians ensure a seamless and secure installation, providing you with peace of mind.",
  },
];

const processSteps = [
  {
    title: "Site Assessment",
    description:
      "We evaluate your property to determine the best bird guard solution.",
  },
  {
    title: "Professional Installation",
    description: "Our technicians install the bird guard with precision and care.",
  },
  {
    title: "Quality Check",
    description:
      "We perform a thorough inspection to ensure the installation meets our high standards.",
  },
  {
    title: "Maintenance Tips",
    description:
      "We provide guidance on how to maintain your bird guard for long-lasting protection.",
  },
];

const ExteriorBird = () => {
  return (
    <div>
      <Helmet>
              <title>Exterior Bird Guard Installation In Nj And CT | Protect Dryer Vents with Duct Buddy</title>
              <meta
                name="description"
                content="Prevent birds and debris from clogging your dryer vents with Duct Buddy's expert exterior bird guard installation.
                 Safeguard your home’s dryer performance and ensure safety."
              />
              <link rel="canonical" href="https://www.ductbuddyllc.com/dryer-vent/bird-guard" />
     </Helmet>
      <Navbar />
      <Hero
        title="Exterior Bird Guard"
        description="Protect your home with our high-quality exterior bird guards, designed to keep your vents free from nests and debris."
        Image={Image} // Adjusted image usage
      />
      <div className="bg-gray-50 text-gray-800">
        {/* Introduction Section */}
        <section className="py-16 px-8 bg-[#0B1215]">
          <IntroductionSection
            title="Keep Your Vents Clear and Protected"
            description1="Our Exterior Bird Guard is the perfect solution to prevent birds from nesting in your vents. This not only protects your ventilation system but also ensures the air quality in your home remains high."
            description2="With our professional installation and durable materials, you can trust that your home is well-protected."
            image={ExteriorBirdImage}
          />
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-5 bg-[#0B1215]">
          <BenefitsSection
            title="Why Choose Our Exterior Bird Guard?"
            benefits={benefits}
          />
        </section>

        {/* Process Section */}
        <section className="py-16 bg-[#0B1215] px-8">
          <ProcessSection
            title="Our Installation Process"
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

export default ExteriorBird;
