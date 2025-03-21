import React from "react";
import Navbar from "../../components/common/Navbar";
import Hero from "../../components/common/Hero";
import Image from "../../assets/about/about.webp"; // Adjusted image path
import OurServiceAreaData from "../../components/about-us/OurServiceAreaData";
import MariTimeImage from "../../assets/air-duct-cleaning/maritime.webp"; // Adjusted image path
import IntroductionSection from "../../components/common/all-services-section/IntroductionSection";
import BenefitsSection from "../../components/common/all-services-section/BenefitsSection";
import ProcessSection from "../../components/common/all-services-section/ProcessSection";
import BeforeAfterSection from "../../components/home/BeforeAfterSection";
import { Helmet } from "react-helmet";

const data = [
  {
    question: "Why is maritime duct cleaning important?",
    answer:
      "Air ducts on ships and offshore platforms can accumulate contaminants, which affect air quality and HVAC performance. Regular cleaning ensures the health and safety of passengers and crew.",
  },
  {
    question: "How often should maritime duct cleaning be done?",
    answer:
      "We recommend annual duct cleaning to maintain air quality and HVAC efficiency, especially for long voyages or extended offshore operations.",
  },
  {
    question: "Can cleaning impact vessel operations?",
    answer:
      "Our cleaning process is quick and efficient, minimizing downtime. We can schedule cleaning during off-hours to avoid disrupting your operations.",
  },
  {
    question: "Is maritime duct cleaning compliant with regulations?",
    answer:
      "Yes, our cleaning services comply with maritime hygiene and safety standards, ensuring your vessel meets all necessary requirements.",
  },
];

const benefits = [
  {
    title: "Enhanced Air Quality",
    description:
      "Ensure healthy breathing conditions for your crew and passengers by removing dust, mold, and pollutants from your ducts.",
  },
  {
    title: "Improved HVAC Efficiency",
    description:
      "Our cleaning services optimize the performance of your HVAC system, ensuring cooler air and efficient airflow throughout the vessel",
  },
  {
    title: "Compliance with Safety Standards",
    description:
      "We help your vessel meet marine safety and hygiene standards by maintaining clean and well-maintained HVAC systems",
  },
];

const processSteps = [
  {
    title: "Inspection & Assessment",
    description:
      "We conduct a thorough inspection of the vessel’s air duct system to determine the most efficient cleaning approach.",
  },
  {
    title: "Comprehensive Cleaning",
    description:
      "Our powerful equipment and experienced team work together to remove dirt, mold, and contaminants from your ducts.",
  },
  {
    title: "Sanitization & Disinfection",
    description:
      "We apply disinfectants to prevent the growth of bacteria and mold, ensuring the air remains clean and fresh.",
  },
  {
    title: "Final System Check",
    description:
      "We perform a final check of the entire system to ensure everything is functioning optimally before we finish the job.",
  },
];

const MariTime = () => {
  return (
    <div>
      <Helmet>
        <title>Maritime Air Duct Cleaning | Keep Vessels Safe & Air Quality High</title>
        <meta
          name="description"
          content="Ensure the safety and comfort of your crew and passengers with professional maritime air duct cleaning services. Keep your vessel's air quality at its best."/>
        <link rel="canonical" href="https://www.ductbuddyllc.com/air-duct/maritime" />
      </Helmet>
      <Navbar />
      <Hero
        title="Maritime Air Duct Cleaning in New Jersey & Connecticut – Clean Air for Ships & Yachts"
        description="Trust DuctBuddy for <strong>maritime air duct cleaning in New Jersey and Connecticut</strong> at local ports and marinas. We service yachts, ferries, and commercial ships, removing salt, mildew, and odors from onboard HVAC systems to ensure fresh, healthy air at sea. Our specialized team understands the unique challenges of marine ventilation and delivers thorough cleaning to improve vessel <strong>indoor air quality</strong> and comfort for crew and passengers."
        Image={Image} // Adjusted image usage
      />
      <div className="bg-gray-50 text-gray-800">
        {/* Introduction Section */}
        <section className="py-16 px-8 bg-[#0B1215]">
          <IntroductionSection
            title="Critical Maintenance for Maritime Air Systems"
            description1="In the confined environment of a ship or offshore platform, air quality is a top priority. The air ducts that circulate fresh air play a significant role in maintaining a healthy atmosphere onboard. However, with the constant exposure to salty air, moisture, and harsh marine conditions, air ducts on vessels often accumulate dirt, mold, and bacteria that can significantly affect the air quality and safety of the crew and passengers."
            description2="Our maritime air duct cleaning services are designed to address the unique challenges of cleaning HVAC systems on ships, cruise liners, cargo vessels, and offshore platforms. We use the latest technology and equipment to ensure that your air ducts remain clean, fresh, and free from contaminants."
            image={MariTimeImage}
          />
        </section>

        <BeforeAfterSection 
  beforeImage="/images/before-commercial-duct.webp"
  afterImage="/images/after-commercial-duct.webp"
  title="Commercial Air Duct Cleaning Results"
  description="See the dramatic difference our professional cleaning makes in commercial HVAC systems, removing years of dust and contaminant buildup that affects workplace air quality."
/>

        {/* Benefits Section */}
        <section className="py-16 px-5 bg-[#0B1215]">
          <BenefitsSection
            title="Why Choose Our Maritime Duct Cleaning Services?"
            benefits={benefits}
          />
        </section>

        {/* Process Section */}
        <section className="py-16 bg-[#0B1215] px-8">
          <ProcessSection
            title="Our Maritime Duct Cleaning Process"
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

export default MariTime;
