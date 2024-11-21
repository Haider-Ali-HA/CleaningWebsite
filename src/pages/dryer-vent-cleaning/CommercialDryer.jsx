import React from "react";
import Navbar from "../../components/common/Navbar";
import Hero from "../../components/common/Hero";
import Image from "../../assets/about/about.jpg"; // Adjusted image path
import OurServiceAreaData from "../../components/about-us/OurServiceAreaData";
import GoogleReviews from "../../components/common/GoogleReviews";
import CommercialDryerImage from "../../assets/dryer-vent-cleaning/comercial-dryer-vent-cleaning.jpg"; // Adjusted image path

const data = [
  {
    question: "Why is commercial dryer vent cleaning important?",
    answer:
      "Regular cleaning prevents fire hazards, improves efficiency, and extends the lifespan of your dryers.",
  },
  {
    question: "How often should commercial dryer vents be cleaned?",
    answer:
      "It is recommended to clean them at least once a year, or more frequently depending on usage.",
  },
  {
    question: "What types of commercial properties do you service?",
    answer:
      "We service laundromats, hotels, hospitals, and other commercial facilities with high dryer usage.",
  },
  {
    question: "Do you offer emergency cleaning services?",
    answer:
      "Yes, we provide emergency cleaning services to address urgent needs and ensure safety.",
  },
];

const benefits = [
  {
    title: "Enhanced Safety",
    description:
      "Regular cleaning reduces the risk of dryer fires, ensuring a safer environment for your business.",
  },
  {
    title: "Improved Efficiency",
    description:
      "Clean vents allow dryers to operate more efficiently, saving energy and reducing drying times.",
  },
  {
    title: "Extended Equipment Life",
    description:
      "Proper maintenance extends the lifespan of your dryers, reducing the need for costly replacements.",
  },
];

const CommercialDryer = () => {
  return (
    <div>
      <Navbar />
      <Hero
        title="Commercial Dryer Vent Cleaning"
        description="Ensure the safety and efficiency of your commercial dryers with our professional cleaning services."
        Image={Image} // Adjusted image usage
      />
      <div className="bg-gray-50 text-gray-800">
        {/* Introduction Section */}
        <section className="py-16 px-8 bg-[#0B1215]">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Professional Commercial Dryer Vent Cleaning
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <p className="text-gray-200">
              Our{" "}
              <span className="font-semibold">
                Commercial Dryer Vent Cleaning Service
              </span>{" "}
              is designed to keep your business running smoothly. We specialize
              in cleaning dryer vents for laundromats, hotels, hospitals, and
              other commercial facilities.
              <br />
              <br />
              Using advanced equipment and techniques, we ensure your dryer
              vents are free from lint and debris, reducing the risk of fires
              and improving efficiency.
            </p>
            <img
              src={CommercialDryerImage}
              alt="Commercial Dryer Vent Cleaning"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-5 bg-[#0B1215]">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Benefits of Our Service
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
            Our Cleaning Process
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <ul className="list-disc pl-6 space-y-4 text-primary">
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Initial Inspection
                </h3>
                <p className="text-gray-400 mt-2">
                  We assess the condition of your dryer vents to determine the
                  best cleaning approach.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Thorough Cleaning
                </h3>
                <p className="text-gray-400 mt-2">
                  Our technicians use specialized tools to remove lint and
                  debris from the vents.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Final Inspection
                </h3>
                <p className="text-gray-400 mt-2">
                  We conduct a final inspection to ensure the vents are clean
                  and functioning properly.
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

export default CommercialDryer;
