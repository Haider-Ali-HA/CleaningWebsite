import React from "react";
import Image from "../../assets/about/about.jpg"; // Adjusted image path
import Navbar from "../../components/common/Navbar";
import Hero from "../../components/common/Hero";
import OurServiceAreaData from "../../components/about-us/OurServiceAreaData";
import AirDuctCleaningImage from "../../assets/air-duct-cleaning/clean-air-duct.jpg"; // Adjusted image path
import GoogleReviews from "../../components/common/GoogleReviews";

const data = [
  {
    question: "How often should commercial air ducts be cleaned?",
    answer:
      "We recommend cleaning every 3-5 years, or more frequently for high-traffic businesses.",
  },
  {
    question: "Will cleaning disrupt our daily operations?",
    answer:
      "Not at all! We work on a schedule that fits your business hours, ensuring minimal disruption.",
  },
  {
    question: "Do you provide certifications for compliance?",
    answer:
      "Yes, we can provide documentation to confirm the cleaning for compliance purposes.",
  },
  {
    question: "What type of businesses do you serve?",
    answer:
      "Our services are tailored for offices, retail spaces, warehouses, and more.",
  },
];

const benefits = [
  {
    title: "Healthier Employees",
    description:
      "Reduce allergens and pollutants to promote a healthier workplace.",
  },
  {
    title: "Lower Energy Bills",
    description:
      "Clean ducts reduce strain on HVAC systems, improving energy efficiency.",
  },
  {
    title: "Enhanced Productivity",
    description: "Fresh, clean air improves focus and comfort for employees.",
  },
  {
    title: "Compliance Ready",
    description:
      "Meet health and safety standards with professional duct cleaning.",
  },
];
const Commercial = () => {
  return (
    <div>
      <Navbar />
      <Hero
        title=" Commercial Air Duct Cleaning"
        description=" Professional commercial air duct cleaning to enhance air quality,
              boost employee health, and improve HVAC efficiency."
        Image={Image} // Adjusted image usage
      />
      <div className="bg-gray-50 text-gray-800">
        {/* Introduction Section */}
        <section className="py-16 px-8 bg-[#0B1215] ">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            A Clean Business Starts Here
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <p className="text-gray-200">
              In a bustling workplace, your HVAC system is the unsung hero,
              keeping your employees comfortable and your operations running
              smoothly. But over time, dust, debris, and allergens can
              accumulate in your air ducts, affecting air quality and even
              increasing your energy bills.
              <br />
              <br />
              Our{" "}
              <span className="font-semibold">
                Commercial Duct Cleaning Services
              </span>{" "}
              are designed to tackle these challenges head-on. Whether you're
              managing an office, retail space, or industrial facility, our
              expert team ensures your ducts are spotless, enhancing both air
              quality and HVAC efficiency.
            </p>
            <img
              src={AirDuctCleaningImage}
              alt="Clean Air Ducts"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-5 bg-[#0B1215] ">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Why Clean Air Matters for Your Business
          </h2>
          <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-[#0B1215] px-8">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Our Proven Cleaning Process
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <ul className="list-disc pl-6 space-y-4 text-primary">
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Comprehensive Inspection
                </h3>
                <p className="text-gray-400 mt-2">
                  We assess your HVAC system and ducts to identify problem
                  areas.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-white text-lg">
                  High-Powered Cleaning
                </h3>
                <p className="text-gray-400 mt-2">
                  Using advanced equipment, we remove dust, mold, and debris.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Detailed Finishing Touches
                </h3>
                <p className="text-gray-400 mt-2">
                  We sanitize your ducts and ensure top air quality standards.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Post-Service Inspection
                </h3>
                <p className="text-gray-400 mt-2">
                  A final walkthrough to ensure satisfaction and system
                  efficiency.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-[#0B1215]">
          <OurServiceAreaData faqs={data} title="Frequently Asked Questions" />
        </section>

        <section className="bg-[#0B1215] py-5">
          <GoogleReviews />
        </section>
      </div>
    </div>
  );
};

export default Commercial;
