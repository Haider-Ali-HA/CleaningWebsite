import React, { useRef } from "react";
import { useAnimations } from "../../context/Animations";
import { useInView, motion } from "framer-motion";

const GoogleReviews = () => {
  const { fadeInDownAnimation, fadeInLeftAnimation } = useAnimations();
  const refAnimation = useRef(null);
  const isInView = useInView(refAnimation, { once: true });

  return (
    <>
      <motion.h2
        ref={refAnimation}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInLeftAnimation}
        className="text-3xl font-bold leading-tight  w-full text-center text-primary mb-10 sm:text-4xl lg:text-5xl"
      >
        Our Testimonials
      </motion.h2>
      <motion.div
        ref={refAnimation}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInDownAnimation}
        className="elfsight-app-0eeae9d9-9200-45bb-a24d-94eaf7acfec9 px-5"
        data-elfsight-app-lazy
      ></motion.div>
    </>
  );
};

export default GoogleReviews;
