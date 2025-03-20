import React from "react";
import Navbar from "../../components/common/Navbar";
import Hero from "../../components/common/Hero";
import Image from "../../assets/about/about.webp"; // Adjusted image path
import OurServiceAreaData from "../../components/about-us/OurServiceAreaData";
import BillionareImage from "../../assets/air-duct-cleaning/billionare.webp"; // Adjusted image path
import IntroductionSection from "../../components/common/all-services-section/IntroductionSection";
import BenefitsSection from "../../components/common/all-services-section/BenefitsSection";
import ProcessSection from "../../components/common/all-services-section/ProcessSection";
import BeforeAfterSection from "../../components/home/BeforeAfterSection";
import { Helmet } from "react-helmet";

const data = [
  {
    question: "How is Billionaire Duct Cleaning different?",
    answer:
      "Our service is tailored for luxury properties, combining advanced technology with a personalized approach.",
  },
  {
    question: "What types of properties do you service?",
    answer:
      "We clean air ducts in estates, private jets, yachts, and high-end commercial spaces.",
  },
  {
    question: "Is this service confidential?",
    answer:
      "Absolutely. We prioritize privacy and ensure a discreet experience.",
  },
  {
    question: "Can you improve my HVAC system's performance?",
    answer:
      "Yes, our cleaning process optimizes your HVAC system for maximum efficiency.",
  },
];

const benefits = [
  {
    title: "Unmatched Precision",
    description:
      "Our certified technicians guarantee a meticulous cleaning process tailored to your unique needs.",
  },
  {
    title: "Advanced Equipment",
    description:
      "We use exclusive, state-of-the-art vacuum systems to achieve unparalleled results.",
  },
  {
    title: "Privacy & Discretion",
    description:
      "Our team is trained to deliver services with utmost confidentiality and respect for your privacy.",
  },
];

const processSteps = [
  {
    title: "Personalized Consultation",
    description: "We analyze your space and craft a bespoke cleaning strategy.",
  },
  {
    title: "Deep Cleaning",
    description:
      "Our technicians use advanced techniques to eliminate every speck of dust.",
  },
  {
    title: "Air Purification",
    description:
      "We install top-tier air filtration systems to keep your air pristine.",
  },
  {
    title: "Post-Cleaning Assurance",
    description: "A detailed inspection ensures your complete satisfaction.",
  },
];

const Billionare = () => {
  return (
    <div>
      <Helmet>
        <title>Billionaire Air Duct Cleaning | Luxury Duct Services by Duct Buddy</title>
        <meta
          name="description"
          content="Experience premium duct cleaning services for upscale properties. Duct Buddy offers exclusive, high-end cleaning solutions for estates, yachts, private jets, and luxury commercial spaces."
        />
        <link rel="canonical" href="https://www.ductbuddyllc.com/air-duct/residential" />
      </Helmet>

      <Navbar />
      <Hero
        title="Billionaire Duct Cleaning – Premium Air Duct Cleaning for Luxury Estates in New Jersey & Connecticut"
        description="Experience white-glove treatment with DuctBuddy’s <strong>exclusive “Billionaire” air duct cleaning service in New Jersey and Connecticut</strong>. Tailored for mansions, luxury penthouses, and high-end estates, our premium service ensures every vent and HVAC component is impeccably cleaned. We use advanced equipment to remove contaminants while respecting your property’s privacy and maintaining elite <strong>indoor air quality</strong> standards. Enjoy unparalleled cleanliness and comfort befitting your luxury home."
        Image={Image} // Adjusted image usage
      />
      <div className="bg-gray-50 text-gray-800">
        {/* Introduction Section */}
        <section className="py-16 px-8 bg-[#0B1215]">
          <IntroductionSection
            title="Exclusivity Meets Excellence"
            description1="Our Billionaire Duct Cleaning Service is designed for discerning clients who demand perfection. We specialize in enhancing the air quality of luxury estates, private jets, and high-end commercial properties."
            description2="Using cutting-edge technology and a white-glove approach, we ensure your air ducts meet the highest standards of cleanliness and performance."
            image={BillionareImage}
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
            title="Why Choose Billionaire Duct Cleaning?"
            benefits={benefits}
          />
        </section>

        {/* Process Section */}
        <section className="py-16 bg-[#0B1215] px-8">
          <ProcessSection
            title="Our Signature Cleaning Process"
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

export default Billionare;
