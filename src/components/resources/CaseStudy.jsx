import React, { useRef } from "react";
import Image1 from "../../assets/resources/casestudy1.webp";
import Image2 from "../../assets/resources/casestudy2.webp";
import { Link } from "react-router-dom";
import { useAnimations } from "../../context/Animations";
import { useInView, motion } from "framer-motion";

const CaseStudy = () => {
  const { fadeInLeftAnimation, fadeInUpAnimation } = useAnimations();
  const refAnimationLeft = useRef(null);
  const refAnimationRight = useRef(null);
  const isInViewLeft = useInView(refAnimationLeft, { once: true });
  const isInViewRight = useInView(refAnimationRight, { once: true });

  return (
    <>
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-[90rem] sm:px-6 lg:px-8">
          <div className="grid items-stretch gap-y-10 md:grid-cols-2 md:gap-x-20">
            <motion.div
              ref={refAnimationLeft}
              initial="hidden"
              animate={isInViewLeft ? "visible" : "hidden"}
              variants={fadeInLeftAnimation}
              className="relative flex flex-col lg:flex-row gap-6 mt-10 md:mt-0"
            >
              <div className="overflow-hidden aspect-w-3 aspect-h-4 relative rounded-md">
                <img
                  className="object-cover object-top w-full h-full origin-top scale-150 opacity-50"
                  src={Image1}
                  alt=" casestudy image 1"
                />
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  
                  <Link
                    to="/resources/case-study-1"
                    className="text-white px-1 text-2xl font-bold text-center hover:underline"
                  >
                    Clean Air Solutions Inc.
                  </Link>
                </div>
              </div>

              <div className="relative overflow-hidden aspect-w-3 aspect-h-4 rounded-md">
                <img
                  className="object-cover object-top w-full h-full origin-top scale-150 opacity-50"
                  src={Image2}
                  alt="casestudy image 2"
                />
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                    
                    <Link
                      to="/resources/case-study-2"
                      className="text-white px-1 text-2xl font-bold text-center hover:underline"
                    >
                      Fresh Breeze Duct Cleaning
                    </Link>
                  </div>
                </div>
              </motion.div>

            <motion.div
              ref={refAnimationRight}
              initial="hidden"
              animate={isInViewRight ? "visible" : "hidden"}
              variants={fadeInUpAnimation}
              className="flex flex-col items-start xl:px-16"
            >
              <h2 className="text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
                It's Another Open-and-Shut Case for the Buddy!
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-200">
                It doesn’t matter how tricky or challenging your air duct or
                dryer vent cleaning project is. It doesn’t matter if it’s
                residential, commercial or industrial. Duct Buddy uses its
                superior training, extensive experience, extraordinary
                specialization and top-of-the-line equipment to achieve the best
                results possible for your unique space. We’ve pulled together a
                portfolio of some of the work that makes us beam with pride and
                shows you that we’re the very best in the business.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudy;
