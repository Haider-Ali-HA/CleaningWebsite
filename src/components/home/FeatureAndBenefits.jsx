import React, { useRef } from "react";
import { useAnimations } from "../../context/Animations";
import { useInView, motion } from "framer-motion";
import Image from "../../assets/home/feature-and-benefits.webp";
import BgImage from "../../assets/home/feature-and-benefits-bg.webp";

const FeatureAndBenefits = () => {
  const { fadeInUpAnimation } = useAnimations();
  const refAnimation = useRef(null);
  const isInView = useInView(refAnimation, { once: true });

  // Custom animations for different screen sizes
  const contentAnimation = {
    hidden: {
      opacity: 0,
      x: window.innerWidth >= 1024 ? 100 : 0,
      y: window.innerWidth >= 1024 ? 0 : 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 1 },
    },
  };

  const benefits = [
    {
      title: "Improved Indoor Air Quality for Allergy Relief",
      description: "Our specialized HEPA filtration technology removes up to 99.97% of airborne contaminants, including dust mites, pollen, and pet dander that trigger allergy symptoms in New Jersey and Connecticut homes.",
    },
    {
      title: "Energy Savings Through Efficient HVAC Operation",
      description: "Professional duct cleaning can reduce energy consumption by up to 21%, lowering monthly utility bills while extending your heating and cooling system's operational lifespan.",
    },
    {
      title: "Healthier Living Spaces for Families with Children",
      description: "Children are especially vulnerable to poor indoor air quality. Our thorough residential air duct cleaning removes harmful particles that can aggravate asthma and respiratory conditions.",
    },
    {
      title: "Elimination of Musty Odors and Allergen Sources",
      description: "Deep cleaning of air ducts and vents removes trapped moisture, mold spores, and bacteria that cause persistent household odors and respiratory irritation in NJ & CT homes.",
    }
  ];

  return (
    <section className="relative py-10 bg-[#0f191d] mt-10">
      <div className="absolute inset-0">
        <img
          src={BgImage}
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0f191d] opacity-90"></div>
      </div>
      <div className="relative w-full px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse items-center justify-center gap-20 lg:flex-row">
          <motion.div
            ref={refAnimation}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUpAnimation}
            className="relative"
          >
            <div className="flex justify-center items-center px-5 md:px-0">
              <img
                className="relative rounded-lg shadow-2xl w-full max-w-md mx-auto"
                src={Image}
                alt="DuctBuddy professional air duct cleaning in New Jersey"
              />
            </div>
          </motion.div>
          <motion.div
            ref={refAnimation}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={contentAnimation}
            className="lg:w-3/6 px-2 sm:px-14"
          >
            <h2 className="text-3xl font-bold leading-tight w-full text-primary sm:text-4xl lg:text-5xl">
              Benefits of Professional Air Duct Cleaning
            </h2>
            
            <div className="mt-8 space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-xl text-white">{benefit.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
            
            <p className="mt-8 text-base leading-relaxed text-gray-200">
              At DuctBuddy, we combine advanced NADCA-approved technology with expert certified technicians to deliver superior air duct cleaning services across New Jersey and Connecticut. Our comprehensive cleaning approach improves indoor air quality, enhances energy efficiency, and creates healthier living environments for families and businesses throughout the Northeast.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureAndBenefits;