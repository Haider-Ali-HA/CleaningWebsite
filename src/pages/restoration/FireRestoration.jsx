import React from "react";
import Image from "../../assets/about/about.jpg"; // Adjusted image path
import Navbar from "../../components/common/Navbar";
import Hero from "../../components/common/Hero";
import OurServiceAreaData from "../../components/about-us/OurServiceAreaData";
import GoogleReviews from "../../components/common/GoogleReviews";
import FireRestorationImage from "../../assets/restoration/fire-restoration.jpg"; // Adjusted image path

const data = [
  {
    question: "What is the first step in fire restoration?",
    answer:
      "The first step is to assess the damage and create a restoration plan.",
  },
  {
    question: "Can you remove smoke odor?",
    answer:
      "Yes, we use specialized equipment to remove smoke odor completely.",
  },
  {
    question: "How long does fire restoration take?",
    answer:
      "The duration depends on the extent of the damage, but we aim to restore your property as quickly as possible.",
  },
  {
    question: "Do you work with insurance companies?",
    answer:
      "Yes, we work with all major insurance companies to help you through the claims process.",
  },
];

const benefits = [
  {
    title: "Comprehensive Assessment",
    description:
      "We thoroughly assess the damage to create an effective restoration plan.",
  },
  {
    title: "Advanced Equipment",
    description:
      "We use state-of-the-art equipment to ensure thorough cleaning and restoration.",
  },
  {
    title: "Experienced Technicians",
    description:
      "Our team is trained and experienced in handling all aspects of fire restoration.",
  },
];

const FireRestoration = () => {
  return (
    <div>
      <Navbar />
      <Hero
        title="Fire Restoration"
        description="Restore your property to its original state with our expert fire restoration services."
        Image={Image} // Adjusted image usage
      />
      <div className="bg-gray-50 text-gray-800">
        {/* Introduction Section */}
        <section className="py-16 px-8 bg-[#0B1215]">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Expert Fire Restoration Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <p className="text-gray-200">
              Our{" "}
              <span className="font-semibold">Fire Restoration Service</span> is
              designed to help you recover from fire damage quickly and
              efficiently. We specialize in restoring residential and commercial
              properties to their pre-fire condition.
              <br />
              <br />
              Using advanced technology and a meticulous approach, we ensure
              your property is thoroughly cleaned and restored.
            </p>
            <img
              src={FireRestorationImage}
              alt="Fire Restoration"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-5 bg-[#0B1215]">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Why Choose Our Fire Restoration Service?
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
            Our Fire Restoration Process
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <ul className="list-disc pl-6 space-y-4 text-primary">
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Damage Assessment
                </h3>
                <p className="text-gray-400 mt-2">
                  We evaluate the extent of the damage and create a detailed
                  restoration plan.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Debris Removal
                </h3>
                <p className="text-gray-400 mt-2">
                  Our team removes all debris and damaged materials from the
                  site.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Cleaning and Sanitization
                </h3>
                <p className="text-gray-400 mt-2">
                  We clean and sanitize all affected areas to remove soot and
                  smoke residues.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Restoration and Repairs
                </h3>
                <p className="text-gray-400 mt-2">
                  We restore and repair your property to its pre-fire condition.
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

export default FireRestoration;
