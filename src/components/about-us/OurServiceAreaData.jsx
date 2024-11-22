import React, { useRef, useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useAnimations } from "../../context/Animations";
import { useInView, motion } from "framer-motion";
const OurServiceAreaData = ({ faqs, title }) => {
  const { fadeInLeftAnimation, fadeInDownAnimation } = useAnimations();
  const refTitleAnimation = useRef(null);
  const refFAQAnimation = useRef(null);
  const isTitleInView = useInView(refTitleAnimation, { once: true });
  const isFAQInView = useInView(refFAQAnimation, { once: true });
  const [activeIndex, setActiveIndex] = useState(null);
  console.log(faqs);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  if (!faqs || !Array.isArray(faqs)) {
    return <div>No data available</div>;
  }
  return (
    <section className="py-10  text-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            ref={refTitleAnimation}
            initial="hidden"
            animate={isTitleInView ? "visible" : "hidden"}
            variants={fadeInLeftAnimation}
            className="text-3xl font-bold leading-tight  sm:text-4xl lg:text-5xl"
          >
            {title}
          </motion.h2>
        </div>
        <motion.div
          ref={refFAQAnimation}
          initial="hidden"
          animate={isFAQInView ? "visible" : "hidden"}
          variants={fadeInDownAnimation}
          className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="transition-all duration-200 bg-white border  border-gray-200 shadow-lg cursor-pointer "
            >
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-black">
                  {faq.question}
                </span>
                {activeIndex === index ? (
                  <BiChevronUp className="w-6 h-6 text-gray-400" />
                ) : (
                  <BiChevronDown className="w-6 h-6 text-gray-400" />
                )}
              </button>
              {/* Animated Answer Section */}
              <div
                className={`overflow-hidden transition-[max-height] duration-300 ${
                  activeIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default OurServiceAreaData;
