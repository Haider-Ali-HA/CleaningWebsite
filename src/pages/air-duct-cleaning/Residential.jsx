import React from "react";
import Navbar from "../../components/common/Navbar";
import Hero from "../../components/common/Hero";
import Image from "../../assets/about/about.webp"; // Adjusted image path
import OurServiceAreaData from "../../components/about-us/OurServiceAreaData";
import ResidentialImage from "../../assets/air-duct-cleaning/residential.webp"; // Adjusted image path
import IntroductionSection from "../../components/common/all-services-section/IntroductionSection";
import BenefitsSection from "../../components/common/all-services-section/BenefitsSection";
import ProcessSection from "../../components/common/all-services-section/ProcessSection";
import { Helmet } from "react-helmet";

const data = [
  {
    question: "Why is residential duct cleaning important?",
    answer:
      "Residential duct cleaning ensures optimal HVAC performance, improves air quality, and reduces energy consumption in homes.",
  },
  {
    question: "How often should I schedule residential duct cleaning?",
    answer:
      "For most homes, we recommend cleaning your ducts every 1-2 years, depending on the size and type of your home.",
  },
  {
    question: "Will cleaning affect my daily schedule?",
    answer:
      "Our team works efficiently to minimize disruption and can schedule cleaning during convenient times for you.",
  },
  {
    question: "Is residential duct cleaning safe?",
    answer:
      "Yes, our cleaning processes are fully compliant with industry safety standards and are conducted with the highest regard for safety and environmental impact.",
  },
];

const benefits = [
  {
    title: "Improved Air Quality",
    description:
      "Reduce dust, mold, and contaminants in the air, improving the health and safety of your family.",
  },
  {
    title: "Energy Efficiency",
    description:
      "Thorough duct cleaning helps reduce the strain on your HVAC system, lowering energy costs.",
  },
  {
    title: "Long-Term Equipment Longevity",
    description:
      "Keep your HVAC systems running smoothly for years with our deep cleaning and maintenance services.",
  },
];

const processSteps = [
  {
    title: "Inspection & Assessment",
    description:
      "We thoroughly assess your ducts and HVAC system before creating a customized cleaning plan.",
  },
  {
    title: "Powerful Vacuum Cleaning",
    description:
      "Our industrial-grade vacuum systems remove dust, debris, and contaminants from your ducts.",
  },
  {
    title: "Disinfection & Sanitization",
    description:
      "We disinfect the ducts to prevent the growth of mold, bacteria, and other harmful pathogens.",
  },
  {
    title: "Final Inspection",
    description:
      "After cleaning, we conduct a final inspection to ensure everything is spotless and operating optimally.",
  },
];

const Residential = () => {
  return (
    <div>
      <Helmet>
        <title>Residential Air Duct Cleaning | Improve Home Air Quality & HVAC Efficiency</title>
        <meta
          name="description"
          content="Protect your family’s health with our expert residential air duct cleaning services. Enhance your HVAC system’s efficiency and enjoy a cleaner, healthier home environment in NJ & CT.Protect your family and enhance the efficiency of your home with our comprehensive residential duct cleaning services. Contact us today to schedule an appointment."
        />
        <link rel="canonical" href="https://www.ductbuddyllc.com/air-duct/residential" />
      </Helmet>
      <Navbar />
      <Hero
        title="Residential Air Duct Cleaning in New Jersey & Connecticut – Breathe Easier at Home"
        description="Give your family the gift of clean air with DuctBuddy’s <strong>residential air duct cleaning in New Jersey and Connecticut</strong>. Our team removes dust, pollen, and pet dander from your HVAC ducts to help reduce allergies and improve <strong>indoor air quality</strong>. Enjoy a healthier home environment, better HVAC efficiency, and peace of mind knowing your air is fresh and clean."
        Image={Image} // Adjusted image usage
      />
      <div className="bg-gray-50 text-gray-800">
        {/* Introduction Section */}
        <section className="py-16 px-8 bg-[#0B1215]">
          <IntroductionSection
            title="Optimize Your Home's Air Quality"
            description1="The air ducts in your home play a critical role in maintaining air quality and ensuring HVAC efficiency. Over time, dirt, dust, and contaminants accumulate, leading to reduced airflow, increased energy consumption, and even safety hazards."
            description2="Our expert residential duct cleaning services use powerful equipment and techniques to restore your ducts to optimal condition, ensuring a healthier living environment and improved system performance. From single-family homes to large estates, we provide tailored duct cleaning services to meet the unique needs of your residence."
            image={ResidentialImage}
          />
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-5 bg-[#0B1215]">
          <BenefitsSection
            title="Why Choose Our Residential Duct Cleaning Services?"
            benefits={benefits}
          />
        </section>

        {/* Process Section */}
        <section className="py-16 bg-[#0B1215] px-8">
          <ProcessSection
            title="Our Residential Duct Cleaning Process"
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

export default Residential;
