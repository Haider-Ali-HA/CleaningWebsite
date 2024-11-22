import React, { useRef } from "react";
import { useAnimations } from "../../../context/Animations";
import { useInView,motion } from "framer-motion";

const ProcessSection = ({ title, processSteps }) => {
  const { fadeInLeftAnimation, fadeInUpAnimation } = useAnimations();
  const refAnimationHeading = useRef(null);
  const refAnimationList = useRef(null);
  const isInViewHeading = useInView(refAnimationHeading, { once: true });
  const isInViewList = useInView(refAnimationList, { once: true });
  return (
    <>
      <motion.h2
        ref={refAnimationHeading}
        initial="hidden"
        animate={isInViewHeading ? "visible" : "hidden"}
        variants={fadeInUpAnimation}
        className="text-3xl font-bold text-center text-primary mb-8"
      >
        {title}
      </motion.h2>
      <motion.div
        ref={refAnimationList}
        initial="hidden"
        animate={isInViewList ? "visible" : "hidden"}
        variants={fadeInLeftAnimation}
        className="max-w-4xl mx-auto space-y-8"
      >
        <ul className="list-disc pl-6 space-y-4 text-primary">
          {processSteps.map((step, index) => (
            <li key={index}>
              <h3 className="font-semibold text-white text-lg">{step.title}</h3>
              <p className="text-gray-400 mt-2">{step.description}</p>
            </li>
          ))}
        </ul>
      </motion.div>
    </>
  );
};

export default ProcessSection;
