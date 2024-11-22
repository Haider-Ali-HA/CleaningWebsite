import React, { useRef } from "react";
import { useAnimations } from "../../../context/Animations";
import { useInView,motion } from "framer-motion";

const ProcessSection = ({ title, processSteps }) => {
  const { fadeInLeftAnimation, fadeInRightAnimation } = useAnimations();
  const refAnimation = useRef(null);
  const isInView = useInView(refAnimation, { once: true });
  return (
    <>
      <motion.h2
        ref={refAnimation}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInRightAnimation}
        className="text-3xl font-bold text-center text-primary mb-8"
      >
        {title}
      </motion.h2>
      <motion.div
        ref={refAnimation}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
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
