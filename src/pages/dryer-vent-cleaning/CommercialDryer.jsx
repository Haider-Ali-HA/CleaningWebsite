import React from "react";
import Navbar from "../../components/common/Navbar";
import Hero from "../../components/common/Hero";
import Image from "../../assets/about/about.jpg"; // Adjusted image path
import OurServiceAreaData from "../../components/about-us/OurServiceAreaData";
import CommercialDryerImage from "../../assets/dryer-vent-cleaning/comercial-dryer-vent-cleaning.jpg"; // Adjusted image path
import IntroductionSection from "../../components/common/all-services-section/IntroductionSection";
import BenefitsSection from "../../components/common/all-services-section/BenefitsSection";
import ProcessSection from "../../components/common/all-services-section/ProcessSection";
import { Helmet } from "react-helmet";
const data = [
  {
    question: "Why is commercial dryer vent cleaning important?",
    answer:
      "Regular cleaning prevents fire hazards, improves efficiency, and extends the lifespan of your dryers.",
  },
  {
    question: "How often should commercial dryer vents be cleaned?",
    answer:
      "It is recommended to clean them at least once a year, or more frequently depending on usage.",
  },
  {
    question: "What types of commercial properties do you service?",
    answer:
      "We service laundromats, hotels, hospitals, and other commercial facilities with high dryer usage.",
  },
  {
    question: "Do you offer emergency cleaning services?",
    answer:
      "Yes, we provide emergency cleaning services to address urgent needs and ensure safety.",
  },
];

const benefits = [
  {
    title: "Enhanced Safety",
    description:
      "Regular cleaning reduces the risk of dryer fires, ensuring a safer environment for your business.",
  },
  {
    title: "Improved Efficiency",
    description:
      "Clean vents allow dryers to operate more efficiently, saving energy and reducing drying times.",
  },
  {
    title: "Extended Equipment Life",
    description:
      "Proper maintenance extends the lifespan of your dryers, reducing the need for costly replacements.",
  },
];

const processSteps = [
  {
    title: "Initial Inspection",
    description:
      "We assess the condition of your dryer vents to determine the best cleaning approach.",
  },
  {
    title: "Thorough Cleaning",
    description:
      "Our technicians use specialized tools to remove lint and debris from the vents.",
  },
  {
    title: "Final Inspection",
    description:
      "We conduct a final inspection to ensure the vents are clean and functioning properly.",
  },
];

const CommercialDryer = () => {
  return (
    <div>
      <Helmet>
        <title>Commercial Dryer Vent Cleaning In Nj And CT Areas| Enhance Efficiency with Duct Buddy</title>
        <meta
          name="description"
          content="Duct Buddy offers professional commercial dryer vent cleaning services designed to maintain efficient dryer performance and 
          prevent fire risks in commercial properties."
        />
        <link rel="canonical" href="https://www.ductbuddyllc.com/dryer-vent/commercial" />
      </Helmet>
      <Navbar />
      <Hero
        title="Commercial Dryer Vent Cleaning in New Jersey & Connecticut – Prevent Fire Hazards & Downtime"
        description="Keep your laundromat, hotel, or facility safe with DuctBuddy’s <strong>commercial dryer vent cleaning services in New Jersey and Connecticut</strong>. We clear lint buildup from high-volume dryer systems to prevent fires and maintain fast drying times for your business. By scheduling regular cleanings, you reduce downtime, prolong equipment life, and ensure a safer environment while maintaining healthy <strong>indoor air quality</strong> for employees and customers."
        Image={Image} // Adjusted image usage
      />
      <div className="bg-gray-50 text-gray-800">
        {/* Introduction Section */}
        <section className="py-16 px-8 bg-[#0B1215]">
          <IntroductionSection
            title="Professional Commercial Dryer Vent Cleaning"
            description1="Our Commercial Dryer Vent Cleaning Service is designed to keep your business running smoothly. We specialize in cleaning dryer vents for laundromats, hotels, hospitals, and other commercial facilities."
            description2="Using advanced equipment and techniques, we ensure your dryer vents are free from lint and debris, reducing the risk of fires and improving efficiency."
            image={CommercialDryerImage}
          />
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-5 bg-[#0B1215]">
          <BenefitsSection
            title="Benefits of Our Service"
            benefits={benefits}
          />
        </section>

        {/* Process Section */}
        <section className="py-16 bg-[#0B1215] px-8">
          <ProcessSection
            title="Our Cleaning Process"
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

export default CommercialDryer;
