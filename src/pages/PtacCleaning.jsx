import React from "react";
import Navbar from "../components/common/Navbar";
import Hero from "../components/common/Hero";
import Image from "../assets/about/about.jpg"; // Adjusted image path
import OurServiceAreaData from "../components/about-us/OurServiceAreaData";
import GoogleReviews from "../components/common/GoogleReviews";
import PtacImage from "../assets/ptac-cleaning/ptac-cleaning.jpg"; // Adjusted image path

const data = [
  {
    question: "What is PTAC Cleaning?",
    answer:
      "PTAC Cleaning involves thorough cleaning of Packaged Terminal Air Conditioner units to ensure optimal performance and air quality.",
  },
  {
    question: "How often should PTAC units be cleaned?",
    answer:
      "It is recommended to clean PTAC units at least twice a year to maintain efficiency and air quality.",
  },
  {
    question: "Do you offer maintenance contracts?",
    answer:
      "Yes, we offer customizable maintenance contracts to keep your PTAC units in top condition year-round.",
  },
  {
    question: "Can PTAC cleaning improve energy efficiency?",
    answer:
      "Absolutely. Regular cleaning of PTAC units can significantly improve their energy efficiency and lifespan.",
  },
];

const benefits = [
  {
    title: "Enhanced Air Quality",
    description:
      "Our PTAC cleaning service ensures that your air is free from dust, allergens, and pollutants.",
  },
  {
    title: "Improved Efficiency",
    description:
      "Regular cleaning helps your PTAC units run more efficiently, saving you money on energy bills.",
  },
  {
    title: "Extended Lifespan",
    description:
      "Proper maintenance and cleaning can extend the lifespan of your PTAC units.",
  },
];

const PtacCleaning = () => {
  return (
    <div>
      <Navbar />
      <Hero
        title="PTAC Cleaning"
        description="Elevate your living environment with our exclusive PTAC cleaning service."
        Image={Image} // Adjusted image usage
      />
      <div className="bg-gray-50 text-gray-800">
        {/* Introduction Section */}
        <section className="py-16 px-8 bg-[#0B1215]">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Professional PTAC Cleaning Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <p className="text-gray-200">
              Our <span className="font-semibold">PTAC Cleaning Service</span>{" "}
              is designed to improve the air quality and efficiency of your PTAC
              units. We specialize in thorough cleaning and maintenance to
              ensure your units perform at their best.
              <br />
              <br />
              Using advanced technology and a meticulous approach, we ensure
              your PTAC units are clean and efficient.
            </p>
            <img
              src={PtacImage}
              alt="PTAC Cleaning"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-5 bg-[#0B1215]">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Why Choose Our PTAC Cleaning Service?
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
            Our PTAC Cleaning Process
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <ul className="list-disc pl-6 space-y-4 text-primary">
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Initial Inspection
                </h3>
                <p className="text-gray-400 mt-2">
                  We inspect your PTAC units to identify any issues and
                  determine the best cleaning approach.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Deep Cleaning
                </h3>
                <p className="text-gray-400 mt-2">
                  Our technicians use specialized equipment to thoroughly clean
                  your PTAC units.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Sanitization
                </h3>
                <p className="text-gray-400 mt-2">
                  We sanitize the units to eliminate any bacteria or mold.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Final Inspection
                </h3>
                <p className="text-gray-400 mt-2">
                  A detailed inspection ensures your PTAC units are clean and
                  functioning optimally.
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

export default PtacCleaning;
