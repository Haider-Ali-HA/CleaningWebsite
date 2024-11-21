import React from "react";
import Navbar from "../../components/common/Navbar";
import Hero from "../../components/common/Hero";
import Image from "../../assets/about/about.jpg"; // Adjusted image path
import OurServiceAreaData from "../../components/about-us/OurServiceAreaData";
import GoogleReviews from "../../components/common/GoogleReviews";
import SmokeRestorationImage from "../../assets/restoration/smoke-restoration.jpg"; // Adjusted image path

const data = [
  {
    question: "What is Smoke Restoration?",
    answer:
      "Smoke restoration involves cleaning and deodorizing properties affected by smoke damage.",
  },
  {
    question: "How long does the process take?",
    answer:
      "The duration depends on the extent of the damage, but we aim to complete the process efficiently.",
  },
  {
    question: "Is the service safe?",
    answer:
      "Yes, we use safe and effective methods to restore your property without causing further damage.",
  },
  {
    question: "Can you remove all smoke odors?",
    answer:
      "Our advanced techniques are designed to eliminate smoke odors completely.",
  },
];

const benefits = [
  {
    title: "Comprehensive Cleaning",
    description:
      "We thoroughly clean all affected areas to remove smoke residues and odors.",
  },
  {
    title: "Advanced Deodorization",
    description:
      "Our deodorization process ensures that all smoke odors are eliminated.",
  },
  {
    title: "Expert Technicians",
    description:
      "Our team is trained to handle smoke damage with precision and care.",
  },
];

const SmokeRestoration = () => {
  return (
    <div>
      <Navbar />
      <Hero
        title="Smoke Restoration"
        description="Restore your property with our expert smoke restoration services."
        Image={Image} // Adjusted image usage
      />
      <div className="bg-gray-50 text-gray-800">
        {/* Introduction Section */}
        <section className="py-16 px-8 bg-[#0B1215]">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Restore Your Property
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <p className="text-gray-200">
              Our{" "}
              <span className="font-semibold">Smoke Restoration Service</span>{" "}
              is designed to help you recover from smoke damage quickly and
              efficiently. We specialize in cleaning and deodorizing properties
              affected by smoke.
              <br />
              <br />
              Using advanced technology and techniques, we ensure your property
              is restored to its pre-damage condition.
            </p>
            <img
              src={SmokeRestorationImage}
              alt="Smoke Restoration"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-5 bg-[#0B1215]">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Why Choose Our Smoke Restoration Service?
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
            Our Smoke Restoration Process
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <ul className="list-disc pl-6 space-y-4 text-primary">
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Initial Assessment
                </h3>
                <p className="text-gray-400 mt-2">
                  We evaluate the extent of the smoke damage and create a
                  restoration plan.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Cleaning and Deodorization
                </h3>
                <p className="text-gray-400 mt-2">
                  Our team cleans all affected areas and uses advanced
                  deodorization techniques.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Restoration and Repairs
                </h3>
                <p className="text-gray-400 mt-2">
                  We restore and repair any damaged areas to their original
                  condition.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Final Inspection
                </h3>
                <p className="text-gray-400 mt-2">
                  A thorough inspection ensures that all smoke damage has been
                  addressed.
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

export default SmokeRestoration;
