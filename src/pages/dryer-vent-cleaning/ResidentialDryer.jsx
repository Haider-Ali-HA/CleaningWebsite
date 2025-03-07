import React from "react";
import Navbar from "../../components/common/Navbar";
import Hero from "../../components/common/Hero";
import Image from "../../assets/about/about.webp"; // Adjusted image path
import OurServiceAreaData from "../../components/about-us/OurServiceAreaData";
import ResidentialImage from "../../assets/dryer-vent-cleaning/residential-dryer-vent-cleaning.webp"; // Adjusted image path
import IntroductionSection from "../../components/common/all-services-section/IntroductionSection";
import BenefitsSection from "../../components/common/all-services-section/BenefitsSection";
import ProcessSection from "../../components/common/all-services-section/ProcessSection";
import { Helmet } from "react-helmet";

const data = [
  {
    question: "Why is dryer vent cleaning important?",
    answer:
      "Regular dryer vent cleaning prevents fires, improves efficiency, and extends the life of your dryer.",
  },
  {
    question: "How often should I clean my dryer vent?",
    answer:
      "It's recommended to clean your dryer vent at least once a year, or more frequently if you use your dryer heavily.",
  },
  {
    question: "What are the signs that my dryer vent needs cleaning?",
    answer:
      "Signs include longer drying times, a burning smell, and the dryer being hot to the touch.",
  },
  {
    question: "Can I clean my dryer vent myself?",
    answer:
      "While some maintenance can be done yourself, professional cleaning ensures thorough removal of lint and debris.",
  },
];

const benefits = [
  {
    title: "Fire Prevention",
    description:
      "Regular cleaning reduces the risk of dryer fires caused by lint buildup.",
  },
  {
    title: "Improved Efficiency",
    description:
      "A clean vent allows your dryer to operate more efficiently, saving energy and time.",
  },
  {
    title: "Extended Appliance Life",
    description:
      "Proper maintenance extends the lifespan of your dryer, protecting your investment.",
  },
];

const processSteps = [
  {
    title: "Initial Inspection",
    description:
      "We assess your dryer vent system to identify any issues.",
  },
  {
    title: "Thorough Cleaning",
    description:
      "Our technicians use specialized tools to remove lint and debris.",
  },
  {
    title: "System Optimization",
    description:
      "We ensure your dryer vent system is optimized for maximum efficiency.",
  },
  {
    title: "Final Inspection",
    description:
      "A final check to ensure everything is clean and functioning properly.",
  },
];

const ResidentialDryer = () => {
  return (
    <div>
      <Helmet>
        <title>Residential Dryer Vent Cleaning | Prevent Fire Hazards & Boost Dryer Efficiency with Duct Buddy</title>
        <meta
          name="description"
          content="Ensure safe, efficient dryer operation with Duct Buddy's residential dryer vent cleaning services. Improve energy efficiency and prevent potential fire hazards in your home."
        />
        <link rel="canonical" href="https://www.ductbuddyllc.com/dryer-vent/residential" />
      </Helmet>
      <Navbar />
      <Hero
        title="Residential Dryer Vent Cleaning in New Jersey & Connecticut – Prevent Fires & Improve Efficiency"
        description="Protect your home from dryer fires with DuctBuddy’s <strong>residential dryer vent cleaning services in New Jersey and Connecticut</strong>. We thoroughly remove lint and debris from your dryer vents to improve drying efficiency and eliminate hazardous clogs. Regular dryer vent maintenance extends your dryer’s lifespan and safeguards your family by reducing fire risks and improving <strong>indoor air quality</strong>."
        Image={Image} // Adjusted image usage
      />
      <div className="bg-gray-50 text-gray-800">
        {/* Introduction Section */}
        <section className="py-16 px-8 bg-[#0B1215]">
          <IntroductionSection
            title="Keep Your Home Safe and Efficient"
            description1="Our Residential Dryer Vent Cleaning Service is designed to ensure your home is safe and your dryer operates at peak efficiency."
            description2="Using advanced technology and a thorough approach, we remove lint and debris to prevent fires and improve dryer performance."
            image={ResidentialImage}
          />
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-5 bg-[#0B1215]">
          <BenefitsSection
            title="Why Choose Our Dryer Vent Cleaning Service?"
            benefits={benefits}
          />
        </section>

        {/* Process Section */}
        <section className="py-16 bg-[#0B1215] px-8">
          <ProcessSection
            title="Our Comprehensive Cleaning Process"
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

export default ResidentialDryer;
