import React from "react";
import Navbar from "../../components/common/Navbar";
import Hero from "../../components/common/Hero";
import Image from "../../assets/about/about.jpg"; // Adjusted image path
import OurServiceAreaData from "../../components/about-us/OurServiceAreaData";
import GoogleReviews from "../../components/common/GoogleReviews";
import ExteriorBirdImage from "../../assets/dryer-vent-cleaning/exterior-bird-guard.jpg"; // Adjusted image path

const data = [
  {
    question: "Why install an Exterior Bird Guard?",
    answer:
      "It prevents birds from nesting in your vents, ensuring your ventilation system remains unobstructed and efficient.",
  },
  {
    question: "Is the installation process disruptive?",
    answer:
      "Not at all. Our team ensures a quick and clean installation with minimal disruption to your daily routine.",
  },
  {
    question: "How often should the bird guard be inspected?",
    answer:
      "We recommend an annual inspection to ensure it remains in good condition and continues to protect your vents effectively.",
  },
  {
    question: "Can the bird guard be customized?",
    answer:
      "Yes, we offer various sizes and finishes to match your home's exterior aesthetics.",
  },
];

const benefits = [
  {
    title: "Enhanced Protection",
    description:
      "Our bird guards are designed to prevent birds from entering and nesting in your vents, protecting your home from potential damage.",
  },
  {
    title: "Durable Materials",
    description:
      "Made from high-quality materials, our bird guards are built to withstand harsh weather conditions and last for years.",
  },
  {
    title: "Professional Installation",
    description:
      "Our experienced technicians ensure a seamless and secure installation, providing you with peace of mind.",
  },
];

const ExteriorBird = () => {
  return (
    <div>
      <Navbar />
      <Hero
        title="Exterior Bird Guard"
        description="Protect your home with our high-quality exterior bird guards, designed to keep your vents free from nests and debris."
        Image={Image} // Adjusted image usage
      />
      <div className="bg-gray-50 text-gray-800">
        {/* Introduction Section */}
        <section className="py-16 px-8 bg-[#0B1215]">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Keep Your Vents Clear and Protected
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <p className="text-gray-200">
              Our <span className="font-semibold">Exterior Bird Guard</span> is
              the perfect solution to prevent birds from nesting in your vents.
              This not only protects your ventilation system but also ensures
              the air quality in your home remains high.
              <br />
              <br />
              With our professional installation and durable materials, you can
              trust that your home is well-protected.
            </p>
            <img
              src={ExteriorBirdImage}
              alt="Exterior Bird Guard"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-5 bg-[#0B1215]">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Why Choose Our Exterior Bird Guard?
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
            Our Installation Process
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <ul className="list-disc pl-6 space-y-4 text-primary">
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Site Assessment
                </h3>
                <p className="text-gray-400 mt-2">
                  We evaluate your property to determine the best bird guard
                  solution.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Professional Installation
                </h3>
                <p className="text-gray-400 mt-2">
                  Our technicians install the bird guard with precision and
                  care.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Quality Check
                </h3>
                <p className="text-gray-400 mt-2">
                  We perform a thorough inspection to ensure the installation
                  meets our high standards.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Maintenance Tips
                </h3>
                <p className="text-gray-400 mt-2">
                  We provide guidance on how to maintain your bird guard for
                  long-lasting protection.
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

export default ExteriorBird;
