import React from "react";
import Navbar from "../../components/common/Navbar";
import Hero from "../../components/common/Hero";
import Image from "../../assets/about/about.jpg"; // Adjusted image path
import OurServiceAreaData from "../../components/about-us/OurServiceAreaData";
import GoogleReviews from "../../components/common/GoogleReviews";
import IndustrialImage from "../../assets/air-duct-cleaning/industrial.jpg"; // Adjusted image path

const data = [
  {
    question: "Why is industrial duct cleaning important?",
    answer:
      "Industrial duct cleaning ensures optimal HVAC performance, improves air quality, and reduces energy consumption in large-scale facilities.",
  },
  {
    question: "How often should I schedule industrial duct cleaning?",
    answer:
      "For most industrial settings, we recommend cleaning your ducts every 1-2 years, depending on the size and type of your operation.",
  },
  {
    question: "Will cleaning affect my production schedule?",
    answer:
      "Our team works efficiently to minimize downtime and can schedule cleaning during off-hours to avoid disruptions to your operations.",
  },
  {
    question: "Is industrial duct cleaning safe?",
    answer:
      "Yes, our cleaning processes are fully compliant with industry safety standards and are conducted with the highest regard for safety and environmental impact.",
  },
];

const benefits = [
  {
    title: "Improved Air Quality",
    description:
      "Reduce dust, mold, and contaminants in the air, improving the health and safety of your employees.",
  },
  {
    title: "Energy Efficiency",
    description:
      "Thorough duct cleaning helps reduce the strain on your HVAC system, lowering energy costs.",
  },
  {
    title: "Long-Term Equipment Longevity",
    description:
      "Keep your HVAC systems running smoothly for years with our deep cleaning and maintenance services.",
  },
];

const Industrial = () => {
  return (
    <div>
      <Navbar />
      <Hero
        title="Industrial Air Duct Cleaning"
        description="Protect your workforce and enhance the efficiency of your industrial operations with our comprehensive duct cleaning services."
        Image={Image} // Adjusted image usage
      />
      <div className="bg-gray-50 text-gray-800">
        {/* Introduction Section */}
        <section className="py-16 px-8 bg-[#0B1215]">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Optimize Your Industrial Operations
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <p className="text-gray-200">
              The air ducts in industrial buildings play a critical role in
              maintaining air quality and ensuring HVAC efficiency. Over time,
              dirt, dust, and contaminants accumulate, leading to reduced
              airflow, increased energy consumption, and even safety hazards.
              <br />
              <br />
              Our expert industrial duct cleaning services use powerful
              equipment and techniques to restore your ducts to optimal
              condition, ensuring a healthier work environment and improved
              system performance.
              <br />
              <br />
              From manufacturing plants to warehouses and distribution centers,
              we provide tailored duct cleaning services to meet the unique
              needs of your business.
            </p>
            <img
              src={IndustrialImage} // Adjusted image path
              alt="Industrial Duct Cleaning"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-5 bg-[#0B1215]">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Why Choose Our Industrial Duct Cleaning Services?
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
            Our Industrial Duct Cleaning Process
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <ul className="list-disc pl-6 space-y-4 text-primary">
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Inspection & Assessment
                </h3>
                <p className="text-gray-400 mt-2">
                  We thoroughly assess your ducts and HVAC system before
                  creating a customized cleaning plan.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Powerful Vacuum Cleaning
                </h3>
                <p className="text-gray-400 mt-2">
                  Our industrial-grade vacuum systems remove dust, debris, and
                  contaminants from your ducts.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Disinfection & Sanitization
                </h3>
                <p className="text-gray-400 mt-2">
                  We disinfect the ducts to prevent the growth of mold,
                  bacteria, and other harmful pathogens.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-white text-lg">
                  Final Inspection
                </h3>
                <p className="text-gray-400 mt-2">
                  After cleaning, we conduct a final inspection to ensure
                  everything is spotless and operating optimally.
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

export default Industrial;
