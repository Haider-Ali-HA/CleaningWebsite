import React from "react";
import Navbar from "../../components/common/Navbar";
import Hero from "../../components/common/Hero";
import Image from "../../assets/about/about.jpg"; // Adjusted image path
import OurServiceAreaData from "../../components/about-us/OurServiceAreaData";
import GoogleReviews from "../../components/common/GoogleReviews";
import BillionareImage from "../../assets/air-duct-cleaning/billionare.jpg"; // Adjusted image path

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

const Billionare = () => {
  return (
    <div>
      <Navbar />
      <Hero
        title="Billionare Air Duct Cleaning"
        description="Elevate your living environment with our exclusive billionaire-grade air duct cleaning service."
        Image={Image} // Adjusted image usage
      />
      <div className="bg-gray-50 text-gray-800">
        {/* Introduction Section */}
        <section className="py-16 px-8 bg-[#0B1215]">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Exclusivity Meets Excellence
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <p className="text-gray-200">
              Our{" "}
              <span className="font-semibold">
                Billionaire Duct Cleaning Service
              </span>{" "}
              is designed for discerning clients who demand perfection. We
              specialize in enhancing the air quality of luxury estates, private
              jets, and high-end commercial properties.
              <br />
              <br />
              Using cutting-edge technology and a white-glove approach, we
              ensure your air ducts meet the highest standards of cleanliness
              and performance.
            </p>
            <img
              src={BillionareImage}
              alt="Billionaire Duct Cleaning"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-5 bg-[#0B1215]">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Why Choose Billionaire Duct Cleaning?
          </h2>
          <div className="flex flex-col lg:flex-row  gap-8 max-w-6xl mx-auto">
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
            Our Signature Cleaning Process
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <ul className="list-disc pl-6 space-y-4 text-primary">
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Personalized Consultation
                </h3>
                <p className="text-gray-400 mt-2">
                  We analyze your space and craft a bespoke cleaning strategy.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Deep Cleaning
                </h3>
                <p className="text-gray-400 mt-2">
                  Our technicians use advanced techniques to eliminate every
                  speck of dust.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Air Purification
                </h3>
                <p className="text-gray-400 mt-2">
                  We install top-tier air filtration systems to keep your air
                  pristine.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Post-Cleaning Assurance
                </h3>
                <p className="text-gray-400 mt-2">
                  A detailed inspection ensures your complete satisfaction.
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

export default Billionare;
