import React, { useRef } from "react";
import { useAnimations } from "../../context/Animations";
import { useInView, motion } from "framer-motion";
import Image from "../../assets/home/feature-and-benefits.jpg";
import BgImage from "../../assets/home/feature-and-benefits-bg.jpg";

const FeatureAndBenefits = () => {
  const { fadeInRightAnimation, fadeInUpAnimation } = useAnimations();
  const refAnimation = useRef(null);
  const isInView = useInView(refAnimation, { once: true });

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
      <div className="relative w-full  px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse items-center    gap-y-6 lg:flex-row">
          <motion.div
            ref={refAnimation}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUpAnimation}
          >
            <div className="flex justify-center items-center ">
              <img
                className="rounded-md w-full px-5 sm:w-[29rem] lg:w-3/4"
                src={Image}
                alt="feature and benefits"
              />
            </div>
          </motion.div>
          <motion.div
            ref={refAnimation}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInRightAnimation}
            className="w-full xl:w-3/4 px-2 sm:px-14 "
          >
            <h2 className="text-3xl font-bold leading-tight w-full text-primary sm:text-4xl lg:text-5xl">
              Feature and Benefit
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-200">
              We combine advanced technology and professional expertise to
              deliver superior air duct cleaning services tailored for
              residential, commercial, industrial, maritime, and high-end
              properties. Our state-of-the-art equipment removes dust,
              allergens, and pollutants, ensuring improved air quality, enhanced
              energy efficiency, and a healthier environment. With certified
              professionals and customized solutions, we help you breathe
              cleaner air, lower energy costs, and extend the life of your HVAC
              systems—all while prioritizing your comfort and well-being.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureAndBenefits;
