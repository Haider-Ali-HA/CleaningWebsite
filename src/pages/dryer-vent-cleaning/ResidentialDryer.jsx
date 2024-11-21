import React from "react";
import Navbar from "../../components/common/Navbar";
import Hero from "../../components/common/Hero";
import Image from "../../assets/about/about.jpg"; // Adjusted image path
import OurServiceAreaData from "../../components/about-us/OurServiceAreaData";
import GoogleReviews from "../../components/common/GoogleReviews";
import ResidentialImage from "../../assets/dryer-vent-cleaning/residential-dryer-vent-cleaning.jpg"; // Adjusted image path

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

const ResidentialDryer = () => {
  return (
    <div>
      <Navbar />
      <Hero
        title="Residential Dryer Vent Cleaning"
        description="Elevate your living environment with our exclusive billionaire-grade air duct cleaning service."
        Image={Image} // Adjusted image usage
      />
      <div className="bg-gray-50 text-gray-800">
        {/* Introduction Section */}
        <section className="py-16 px-8 bg-[#0B1215]">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Keep Your Home Safe and Efficient
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <p className="text-gray-200">
              Our{" "}
              <span className="font-semibold">
                Residential Dryer Vent Cleaning Service
              </span>{" "}
              is designed to ensure your home is safe and your dryer operates at
              peak efficiency.
              <br />
              <br />
              Using advanced technology and a thorough approach, we remove lint
              and debris to prevent fires and improve dryer performance.
            </p>
            <img
              src={ResidentialImage}
              alt="Residential Dryer Vent Cleaning"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-5 bg-[#0B1215]">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Why Choose Our Dryer Vent Cleaning Service?
          </h2>
          <div className="flex flex-col lg:flex-row  gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className=" p-6 rounded-lg  shadow-[0px_0px_5px_#ffffff] hover:shadow-[0px_0px_10px_#91e012] transition-all duration-500 hover:scale-105 text-center"
              >
                <h3 className="font-semibold text-white text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-[#0B1215] px-8">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Our Comprehensive Cleaning Process
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <ul className="list-disc pl-6 space-y-4 text-primary">
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Initial Inspection
                </h3>
                <p className="text-gray-400 mt-2">
                  We assess your dryer vent system to identify any issues.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Thorough Cleaning
                </h3>
                <p className="text-gray-400 mt-2">
                  Our technicians use specialized tools to remove lint and
                  debris.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-white text-lg">
                  System Optimization
                </h3>
                <p className="text-gray-400 mt-2">
                  We ensure your dryer vent system is optimized for maximum
                  efficiency.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Final Inspection
                </h3>
                <p className="text-gray-400 mt-2">
                  A final check to ensure everything is clean and functioning
                  properly.
                </p>
              </li>
            </ul>
          </div>
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
