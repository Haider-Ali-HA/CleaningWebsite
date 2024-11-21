import React from "react";
import Navbar from "../../components/common/Navbar";
import Hero from "../../components/common/Hero";
import Image from "../../assets/about/about.jpg"; // Adjusted image path
import OurServiceAreaData from "../../components/about-us/OurServiceAreaData";
import GoogleReviews from "../../components/common/GoogleReviews";
import WaterRestorationImage from "../../assets/restoration/water-restoration.jpg"; // Adjusted image path

const data = [
  {
    question: "What is Water Restoration?",
    answer:
      "Water restoration involves the process of cleaning, drying, sanitizing, and repairing any damage caused by water.",
  },
  {
    question: "How quickly should water restoration begin?",
    answer:
      "It's crucial to start water restoration as soon as possible to prevent further damage and mold growth.",
  },
  {
    question: "Do you handle insurance claims?",
    answer:
      "Yes, we assist with insurance claims to make the process as smooth as possible for you.",
  },
  {
    question: "What types of water damage do you handle?",
    answer:
      "We handle all types of water damage, including from floods, leaks, and burst pipes.",
  },
];

const benefits = [
  {
    title: "Rapid Response",
    description:
      "Our team is available 24/7 to respond quickly to your water damage emergencies.",
  },
  {
    title: "Advanced Equipment",
    description:
      "We use state-of-the-art equipment to ensure thorough water extraction and drying.",
  },
  {
    title: "Certified Technicians",
    description:
      "Our technicians are certified and experienced in handling all types of water damage.",
  },
];

const WaterRestoration = () => {
  return (
    <div>
      <Navbar />
      <Hero
        title="Water Restoration"
        description="Restore your property with our expert water restoration services."
        Image={Image} // Adjusted image usage
      />
      <div className="bg-gray-50 text-gray-800">
        {/* Introduction Section */}
        <section className="py-16 px-8 bg-[#0B1215]">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Comprehensive Water Restoration Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <p className="text-gray-200">
              Our{" "}
              <span className="font-semibold">Water Restoration Service</span>{" "}
              is designed to quickly and efficiently restore your property after
              water damage. We specialize in mitigating damage, preventing mold
              growth, and restoring your space to its original condition.
              <br />
              <br />
              Using advanced technology and a meticulous approach, we ensure
              your property is thoroughly dried and sanitized.
            </p>
            <img
              src={WaterRestorationImage}
              alt="Water Restoration"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-5 bg-[#0B1215]">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Why Choose Our Water Restoration Service?
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
            Our Water Restoration Process
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <ul className="list-disc pl-6 space-y-4 text-primary">
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Initial Assessment
                </h3>
                <p className="text-gray-400 mt-2">
                  We evaluate the extent of the damage and create a tailored
                  restoration plan.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Water Extraction
                </h3>
                <p className="text-gray-400 mt-2">
                  Our team uses powerful pumps and vacuums to remove standing
                  water.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Drying and Dehumidification
                </h3>
                <p className="text-gray-400 mt-2">
                  We use industrial-grade dehumidifiers and air movers to dry
                  affected areas.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Cleaning and Sanitizing
                </h3>
                <p className="text-gray-400 mt-2">
                  We clean and sanitize your property to remove any
                  contaminants.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Restoration
                </h3>
                <p className="text-gray-400 mt-2">
                  We repair and restore your property to its pre-damage
                  condition.
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

export default WaterRestoration;
