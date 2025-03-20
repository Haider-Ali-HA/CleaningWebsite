import React, { useEffect, useRef } from "react";
import ReactCompareImage from "react-compare-image";
import { motion } from "framer-motion";

const BeforeAfterSection = () => {
  const sliderRef = useRef(null);
  
  // Single slider for air duct cleaning only
  const slider = {
    before: "/images/before-duct1.webp",
    after: "/images/after-duct1.webp",
    title: "Air Duct Cleaning",
    description:
      "Removing years of dust and allergen buildup from residential air ducts, improving indoor air quality and system efficiency.",
  };

  // Prevent page scrolling when interacting with the slider
  useEffect(() => {
    const sliderElement = sliderRef.current;
    
    const preventScroll = (e) => {
      e.preventDefault();
    };
    
    const addScrollPrevention = () => {
      if (sliderElement) {
        sliderElement.addEventListener('touchmove', preventScroll, { passive: false });
      }
    };
    
    const removeScrollPrevention = () => {
      if (sliderElement) {
        sliderElement.removeEventListener('touchmove', preventScroll);
      }
    };
    
    if (sliderElement) {
      sliderElement.addEventListener('touchstart', addScrollPrevention);
    }
    
    // Cleanup
    return () => {
      if (sliderElement) {
        sliderElement.removeEventListener('touchstart', addScrollPrevention);
        removeScrollPrevention();
      }
    };
  }, []);

  return (
    <section className="py-16 bg-[#0F191D] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            See the DuctBuddy Difference
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Drag the slider to reveal the dramatic before and after results of
            our professional air duct cleaning service
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-[#1A252B] rounded-xl overflow-hidden shadow-lg"
        >
          <div ref={sliderRef} className="h-80 sm:h-96 md:h-[500px] relative">
            <ReactCompareImage
              leftImage={slider.before}
              rightImage={slider.after}
              sliderLineWidth={2}
              sliderLineColor="#1B75BC"
              handle={
                <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </div>
              }
              handleSize={40}
              sliderPositionPercentage={0.5}
              cssOverrides={{
                container: {
                  boxSizing: 'border-box',
                },
                rightImage: {
                  clip: 'unset',
                },
              }}
            />
            <div className="absolute top-3 left-3 bg-primary text-white text-xs md:text-sm font-semibold px-3 py-1.5 rounded">
              BEFORE
            </div>
            <div className="absolute top-3 right-3 bg-green-500 text-white text-xs md:text-sm font-semibold px-3 py-1.5 rounded">
              AFTER
            </div>
          </div>
          
          <div className="p-6 md:p-8 text-center">
            <h3 className="text-2xl font-semibold text-primary">
              {slider.title}
            </h3>
            <p className="text-gray-300 mt-3 max-w-2xl mx-auto text-base">
              {slider.description}
            </p>
            <div className="mt-4 text-sm text-gray-400 max-w-2xl mx-auto">
              Our professional air duct cleaning process removes contaminants
              that would otherwise circulate throughout your home every time
              your HVAC system runs, helping to improve respiratory health and prevent allergen-related issues.
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-10 md:mt-12"
        >
          <a
            href="/contact"
            className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 md:px-8 rounded-md transition duration-300 inline-flex items-center"
          >
            Get a Free Quote Now!
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;