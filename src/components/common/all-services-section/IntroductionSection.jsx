import React, { useRef } from "react";
import { useAnimations } from "../../../context/Animations";
import { useInView, motion } from "framer-motion";

const IntroductionSection = ({ title, description1, description2, image }) => {
  const { fadeInLeftAnimation, fadeInUpAnimation, fadeInRightAnimation } =
    useAnimations();
  const refTitle = useRef(null);
  const refDescription = useRef(null);
  const refImage = useRef(null);
  const isInViewTitle = useInView(refTitle, { once: true });
  const isInViewDescription = useInView(refDescription, { once: true });
  const isInViewImage = useInView(refImage, { once: true });
  return (
    <>
      <motion.h2
        ref={refTitle}
        initial="hidden"
        animate={isInViewTitle ? "visible" : "hidden"}
        variants={fadeInUpAnimation}
        className="text-3xl font-bold text-center text-primary mb-8"
      >
        {title}
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
        <div>
          <motion.p
            ref={refDescription}
            initial="hidden"
            animate={isInViewDescription ? "visible" : "hidden"}
            variants={fadeInLeftAnimation}
            className="text-gray-200"
          >
            {description1}
            <br />
            <br />
            {description2}
          </motion.p>
        </div>
        <motion.div
          ref={refImage}
          initial="hidden"
          animate={isInViewImage ? "visible" : "hidden"}
          variants={fadeInRightAnimation}
        >
          <img
            src={image}
            alt="Clean Air Ducts"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </>
  );
};

export default IntroductionSection;
