import React, { useRef } from "react";
import Image from "../../assets/home/chooseUs.webp";
import { Link } from "react-router-dom";
import { useAnimations } from "../../context/Animations";
import { useInView,motion } from "framer-motion";

const ChooseUs = () => {
  const {fadeInLeftAnimation,fadeInUpAnimation} =useAnimations();
  const refAnimation = useRef(null);
  const isInView = useInView(refAnimation, { once: true });
  return (
    <section className="py-12 px-6 md:px-16  lg:px-24 flex flex-col lg:flex-row items-center justify-center gap-10">
    {/* Text Content */}
    <motion.div ref={refAnimation}
        initial="hidden"
        animate={isInView  ? "visible" : "hidden"}
        variants={fadeInLeftAnimation}  className="lg:w-1/3">
      <h2 className="text-3xl md:text-4xl font-bold  mb-4">
        Why Choose Duct Buddy
      </h2>
      <p className=" font-semibold mb-6">
        About Duct Buddy
      </p>
      <p className=" leading-relaxed mb-6">
        Why choose Duct Buddy? The answers are simple. Our training is superior.
        Our equipment is the best in our industry. And our commitment to your
        satisfaction is second to none—from Fairfield, CT, to Monmouth County, NJ, and points in between.
      </p>
      <Link to="/about" className="px-6 py-3 bg-primary text-black font-medium text-sm rounded-md hover:bg-opacity-80">
        Learn More
      </Link>
    </motion.div>

    {/* Image Section */}
    <motion.div ref={refAnimation}
        initial="hidden"
        animate={isInView  ? "visible" : "hidden"}
        variants={fadeInUpAnimation} className="relative lg:w-1/3 z-0">
      <img
        src={Image}
        alt="Our Agency"
        className="relative rounded-lg shadow-2xl   z-10 w-full max-w-sm mx-auto"
      />
   </motion.div>
  </section>

  );
};

export default ChooseUs;
