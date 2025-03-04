import React, { useRef } from "react";
import Navbar from "../common/Navbar";
import { Link } from 'react-router-dom';
import newimage from "../../assets/home/img.webp";
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
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        <Navbar />
        {/* Other elements can be added here */}
      </div>

      <motion.div
        ref={refAnimation}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInLeftAnimation}
        className="text-white relative flex flex-col h-full items-center justify-center w-full"
      >
        <div className="w-3/4 flex flex-col gap-5 mt-20 sm:mt-12 lg:mt-20 items-start">
          {/* H1: Keep your main heading referencing local coverage */}
          <h1 className="text-4xl lg:text-6xl font-semibold">
            Air Duct & Dryer Vent Cleaning in New Jersey & Connecticut – For
            Healthier Indoor Air
          </h1>

          {/* Enriched paragraph with local & service-based keywords */}
          <p className="lg:text-lg tracking-wide md:w-5/6">
            DuctBuddy provides{" "}
            <strong>
              professional air duct cleaning, dryer vent cleaning, and HVAC
              maintenance in New Jersey and Connecticut
            </strong>
            . Our expert team improves indoor air quality for homes and
            businesses, removing dust, allergens, and debris from HVAC systems.{" "}
            <strong>Breathe easier</strong> with cleaner ducts and reliable
            service that keeps your property safe and comfortable.
          </p>

          <Link to="/about">
            <button className="border border-primary hover:bg-transparent text-black hover:text-white hover:border-white transition-all duration-500 rounded bg-primary py-2 px-14">
              Learn More
            </button>
          </Link>

          <div className="flex gap-2">
            <SocialLinks />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
