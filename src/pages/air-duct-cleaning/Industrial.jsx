import React from "react";
import Navbar from "../../components/common/Navbar";
import Hero from "../../components/common/Hero";
import Image from "../../assets/about/about.jpg"; // Adjusted image path
import OurServiceAreaData from "../../components/about-us/OurServiceAreaData";
import IndustrialImage from "../../assets/air-duct-cleaning/industrial.jpg"; // Adjusted image path
import IntroductionSection from "../../components/common/all-services-section/IntroductionSection";
import BenefitsSection from "../../components/common/all-services-section/BenefitsSection";
import ProcessSection from "../../components/common/all-services-section/ProcessSection";

const data = [
  {
    question: "Why is industrial duct cleaning important?",
    answer:
      "Industrial duct cleaning ensures optimal HVAC performance, improves air quality, and reduces energy consumption in large-scale facilities.",
  },
  {
    question: "How often should I schedule industrial duct cleaning?",
    answer:
      "For most industrial settings, we recommend cleaning your ducts every 1-2 years, depending on the size and type of your operation.",
  },
  {
    question: "Will cleaning affect my production schedule?",
    answer:
      "Our team works efficiently to minimize downtime and can schedule cleaning during off-hours to avoid disruptions to your operations.",
  },
  {
    question: "Is industrial duct cleaning safe?",
    answer:
      "Yes, our cleaning processes are fully compliant with industry safety standards and are conducted with the highest regard for safety and environmental impact.",
  },
];

const benefits = [
  {
    title: "Improved Air Quality",
    description:
      "Reduce dust, mold, and contaminants in the air, improving the health and safety of your employees.",
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

const Industrial = () => {
  return (
    <div>
      <Navbar />
      <Hero
        title="Industrial Air Duct Cleaning"
        description="Protect your workforce and enhance the efficiency of your industrial operations with our comprehensive duct cleaning services."
        Image={Image} // Adjusted image usage
      />
      <div className="bg-gray-50 text-gray-800">
        {/* Introduction Section */}
        <section className="py-16 px-8 bg-[#0B1215]">
          <IntroductionSection
            title="Optimize Your Industrial Operations"
            description1="The air ducts in industrial buildings play a critical role in maintaining air quality and ensuring HVAC efficiency. Over time, dirt, dust, and contaminants accumulate, leading to reduced airflow, increased energy consumption, and even safety hazards."
            description2="Our expert industrial duct cleaning services use powerful equipment and techniques to restore your ducts to optimal condition, ensuring a healthier work environment and improved system performance. From manufacturing plants to warehouses and distribution centers, we provide tailored duct cleaning services to meet the unique needs of your business."
            image={IndustrialImage}
          />
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-5 bg-[#0B1215]">
          <BenefitsSection
            title="Why Choose Our Industrial Duct Cleaning Services?"
            benefits={benefits}
          />
        </section>

        {/* Process Section */}
        <section className="py-16 bg-[#0B1215] px-8">
          <ProcessSection
            title="Our Industrial Duct Cleaning Process"
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

export default Industrial;
