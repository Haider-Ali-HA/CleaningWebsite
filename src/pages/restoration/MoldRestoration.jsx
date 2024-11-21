import React from "react";
import Image from "../../assets/about/about.jpg"; // Adjusted image path
import Navbar from "../../components/common/Navbar";
import Hero from "../../components/common/Hero";
import OurServiceAreaData from "../../components/about-us/OurServiceAreaData";
import GoogleReviews from "../../components/common/GoogleReviews";
import MoldRestorationImage from "../../assets/restoration/mold-restoration.jpg"; // Adjusted image path

const data = [
  {
    question: "What is the first step in mold restoration?",
    answer:
      "The first step is to assess the extent of the mold growth and create a remediation plan.",
  },
  {
    question: "Can you remove mold completely?",
    answer:
      "Yes, we use specialized techniques and equipment to remove mold completely and prevent future growth.",
  },
  {
    question: "How long does mold restoration take?",
    answer:
      "The duration depends on the extent of the mold growth, but we aim to restore your property as quickly as possible.",
  },
  {
    question: "Do you work with insurance companies?",
    answer:
      "Yes, we work with all major insurance companies to help you through the claims process.",
  },
];

const benefits = [
  {
    title: "Thorough Assessment",
    description:
      "We thoroughly assess the mold growth to create an effective remediation plan.",
  },
  {
    title: "Advanced Equipment",
    description:
      "We use state-of-the-art equipment to ensure thorough mold removal and prevention.",
  },
  {
    title: "Experienced Technicians",
    description:
      "Our team is trained and experienced in handling all aspects of mold restoration.",
  },
];

const MoldRestoration = () => {
  return (
    <div>
      <Navbar />
      <Hero
        title="Mold Restoration"
        description="Restore your property to a safe and healthy state with our expert mold restoration services."
        Image={Image} // Adjusted image usage
      />
      <div className="bg-gray-50 text-gray-800">
        {/* Introduction Section */}
        <section className="py-16 px-8 bg-[#0B1215]">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Expert Mold Restoration Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <p className="text-gray-200">
              Our{" "}
              <span className="font-semibold">Mold Restoration Service</span> is
              designed to help you recover from mold damage quickly and
              efficiently. We specialize in restoring residential and commercial
              properties to a safe and healthy state.
              <br />
              <br />
              Using advanced technology and a meticulous approach, we ensure
              your property is thoroughly cleaned and restored.
            </p>
            <img
              src={MoldRestorationImage}
              alt="Mold Restoration"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-5 bg-[#0B1215]">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Why Choose Our Mold Restoration Service?
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
            Our Mold Restoration Process
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <ul className="list-disc pl-6 space-y-4 text-primary">
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Damage Assessment
                </h3>
                <p className="text-gray-400 mt-2">
                  We evaluate the extent of the mold growth and create a
                  detailed remediation plan.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Containment
                </h3>
                <p className="text-gray-400 mt-2">
                  Our team contains the affected area to prevent the spread of
                  mold.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Mold Removal
                </h3>
                <p className="text-gray-400 mt-2">
                  We use advanced techniques to remove mold completely and
                  prevent future growth.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Cleaning and Sanitization
                </h3>
                <p className="text-gray-400 mt-2">
                  We clean and sanitize all affected areas to ensure a safe and
                  healthy environment.
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

export default MoldRestoration;
