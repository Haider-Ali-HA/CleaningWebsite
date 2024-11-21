import React from "react";
import Navbar from "../../components/common/Navbar";
import Hero from "../../components/common/Hero";
import Image from "../../assets/about/about.jpg"; // Adjusted image path
import OurServiceAreaData from "../../components/about-us/OurServiceAreaData";
import GoogleReviews from "../../components/common/GoogleReviews";
import MariTimeImage from "../../assets/air-duct-cleaning/maritime.jpg"; // Adjusted image path

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

const MariTime = () => {
  return (
    <div>
      <Navbar />
      <Hero
        title="Maritime Air Duct Cleaning"
        description="Keep your crew and passengers breathing fresh air with our specialized air duct cleaning services for maritime vessels."
        Image={Image} // Adjusted image usage
      />
      <div className="bg-gray-50 text-gray-800">
        {/* Introduction Section */}
        <section className="py-16 px-8 bg-[#0B1215]">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Critical Maintenance for Maritime Air Systems
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <p className="text-gray-200">
              In the confined environment of a ship or offshore platform, air
              quality is a top priority. The air ducts that circulate fresh air
              play a significant role in maintaining a healthy atmosphere
              onboard. However, with the constant exposure to salty air,
              moisture, and harsh marine conditions, air ducts on vessels often
              accumulate dirt, mold, and bacteria that can significantly affect
              the air quality and safety of the crew and passengers.
              <br />
              <br />
              Our maritime air duct cleaning services are designed to address
              the unique challenges of cleaning HVAC systems on ships, cruise
              liners, cargo vessels, and offshore platforms. We use the latest
              technology and equipment to ensure that your air ducts remain
              clean, fresh, and free from contaminants.
            </p>
            <img
              src={MariTimeImage}
              alt="Maritime Duct Cleaning"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 px-5 bg-[#0B1215]">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Why Choose Our Maritime Duct Cleaning Services?
          </h2>
          <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
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
            Our Maritime Duct Cleaning Process
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <ul className="list-disc pl-6 space-y-4 text-primary">
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Inspection & Assessment
                </h3>
                <p className="text-gray-400 mt-2">
                  We conduct a thorough inspection of the vessel’s air duct
                  system to determine the most efficient cleaning approach.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Comprehensive Cleaning
                </h3>
                <p className="text-gray-400 mt-2">
                  Our powerful equipment and experienced team work together to
                  remove dirt, mold, and contaminants from your ducts.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Sanitization & Disinfection
                </h3>
                <p className="text-gray-400 mt-2">
                  We apply disinfectants to prevent the growth of bacteria and
                  mold, ensuring the air remains clean and fresh.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Final System Check
                </h3>
                <p className="text-gray-400 mt-2">
                  We perform a final check of the entire system to ensure
                  everything is functioning optimally before we finish the job.
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

export default MariTime;
