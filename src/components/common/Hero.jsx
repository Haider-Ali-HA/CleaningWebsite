import React, { useRef } from "react";
import { useAnimations } from "../../context/Animations";
import { useInView,motion } from "framer-motion";


const Hero = ({title,description,Image}) => {
  const { fadeInLeftAnimation } = useAnimations();
  const refAnimation = useRef(null);
  const isInView = useInView(refAnimation, { once: true });

  return (
    <div className="h-screen   w-full relative   text-white"> {/* Changed h-full to h-screen */}
      <img
        src={Image}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover opacity-70 z-0"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <motion.div  ref={refAnimation}
        initial="hidden"
        animate={isInView  ? "visible" : "hidden"}
        variants={fadeInLeftAnimation} className="relative px-5 text-center z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl w-5/6">
         {title}
        </h1>
        <p 
  className="max-w-2xl mx-auto mt-4 text-base text-center leading-relaxed text-gray-200"
  dangerouslySetInnerHTML={{ __html: description }}
></p>
      </motion.div>
    </div>
  );
};

export default Hero;
