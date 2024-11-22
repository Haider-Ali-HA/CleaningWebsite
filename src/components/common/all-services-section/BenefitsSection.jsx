import React, { useRef } from "react";
import { useAnimations } from "../../../context/Animations";
import { useInView, motion } from "framer-motion";

const BenefitsSection = ({ title, benefits }) => {
  const { fadeInLeftAnimation, fadeInDownAnimation } =
    useAnimations();
  const refAnimationTitle = useRef(null);
  const refAnimationDiv = useRef(null);
  const isInViewTitle = useInView(refAnimationTitle, { once: true });
  const isInViewDiv = useInView(refAnimationDiv, { once: true });

  return (
    <>
      <motion.h2
        ref={refAnimationTitle}
        initial="hidden"
        animate={isInViewTitle ? "visible" : "hidden"}
        variants={fadeInLeftAnimation}
        className="text-3xl font-bold text-center text-primary mb-8"
      >
        {title}
      </motion.h2>
      <motion.div
        ref={refAnimationDiv}
        initial="hidden"
        animate={isInViewDiv ? "visible" : "hidden"}
        variants={fadeInDownAnimation} className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className=" shadow-[0px_0px_5px_#ffffff] border hover:shadow-[0px_0px_10px_#91e012] transition-all duration-500 hover:scale-105 p-6 rounded-lg  text-center"
          >
            <h3 className="font-semibold text-white text-lg mb-2">
              {benefit.title}
            </h3>
            <p className="text-gray-400">{benefit.description}</p>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default BenefitsSection;
