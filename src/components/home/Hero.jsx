import React, { useRef } from "react";
import Navbar from "../common/Navbar";
import newimage from "../../assets/home/img.jpg";
import SocialLinks from "../common/SocialLinks";
import { motion, useInView } from "framer-motion";
import { useAnimations } from "../../context/Animations";
const Hero = () => {
  const { fadeInLeftAnimation } = useAnimations();
  const refAnimation = useRef(null);
  const isInView = useInView(refAnimation, { once: true });

  return (
    <div className="h-screen w-full relative text-white py-10">
      <img
        src={newimage}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-black opacity-50 "></div>
      <div className="relative z-10">
        <Navbar />

        {/* Other elements can be added here */}
      </div>
      <motion.div
        ref={refAnimation}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInLeftAnimation}
        className="text-white relative   flex flex-col h-full items-center    justify-center w-full"
      >
        <div className=" w-3/4 flex flex-col gap-5 mt-20 sm:mt-12  lg:mt-20 items-start">
          <h1 className="text-4xl lg:text-6xl font-semibold">
            Duct Buddy The Best Duct Cleaning Company
          </h1>
          <p className="lg:text-lg  tracking-wide md:w-5/6">
            We’re the No. 1 and superior air duct cleaning and dryer vent
            cleaning company in the New Jersey, and Connecticut
            location 
            {/* Why? Because it’s all we do—so we do it exceptionally well. */}
          </p>
          <button className="border border-primary hover:bg-transparent text-black hover:text-white hover:border-white transition-all duration-500 rounded bg-primary py-2  px-14 ">
            Learn More
          </button>

          <div className="  flex  gap-2">
            <SocialLinks />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
