import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import Image1 from "../../assets/resources/casestudy1.jpg";
import Image2 from "../../assets/resources/casestudy2.jpg";
import Navbar from "../common/Navbar";
import Hero from "../common/Hero";
import Image from "../../assets/about/about.jpg"; // Adjusted image path
import { useAnimations } from "../../context/Animations";
import { useInView, motion } from "framer-motion";

const CaseStudy1 = {
  title: "Clean Air Solutions Inc.",
  point1:
    "St. Peter’s College requested our air duct cleaning service to improve indoor air quality. Cleaning and maintaining the ductwork is essential for buildings with a lot of daily traffic.",
  point2:
    "We completed our cleaning without interrupting the school semester, providing service day and night. Air quality testing confirmed significant improvement.",
  point3:
    "We believe educators and students deserve the healthiest learning environments. We are grateful for the opportunity to improve the indoor air quality of this institution.",
  Image: Image1,
};

const CaseStudy2 = {
  title: "Fresh Breeze Duct Cleaning",
  point1:
    "Mold issues were discovered in the HVAC system and ductwork at the Atlantic City Fire Department, jeopardizing the health of the occupants.",
  point2:
    "We provided full-source removal cleaning on metal ductwork and replacement installations for porous ductwork. Our staff carried out the cleaning strategy over two days and nights.",
  point3:
    "Follow-up testing confirmed our work passed with flying colors.",
  point4:
    "It was an honor to improve living and working conditions for the brave members of the Atlantic City Fire Department.",
  Image: Image2,
};

const DefaultCaseStudy = {
  title: "Case Study Not Found",
  description: "The case study you are looking for does not exist.",
  Image: "",
};

const SingleCaseStudy = () => {
  const location = useLocation();
  const path = location.pathname;
  let caseStudy;
  const { fadeInLeftAnimation, fadeInUpAnimation,fadeInRightAnimation } = useAnimations();
  const refAnimation = useRef(null);
  const isInView = useInView(refAnimation, { once: true });

  if (path === "/resources/case-study-1") {
    caseStudy = CaseStudy1;
  } else if (path === "/resources/case-study-2") {
    caseStudy = CaseStudy2;
  } else {
    caseStudy = DefaultCaseStudy;
  }

  return (
    <div>
      <Navbar />
      <Hero
        title="Resources"
        description="Restore your property to its original state with our expert fire restoration services."
        Image={Image} // Adjusted image usage
      />
      <section className="py-10 sm:py-16 lg:py-24 ">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center">
            <motion.h2
              ref={refAnimation}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUpAnimation}
              className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight"
            >
              Case Study
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 items-center mt-8 md:mt-20 gap-y-6 md:grid-cols-2 gap-x-10">
            <motion.div    ref={refAnimation}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInLeftAnimation}>
              <img
                className="w-full mx-auto "
                src={caseStudy.Image}
                alt={caseStudy.title}
              />
            </motion.div>

            <motion.div    ref={refAnimation}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInRightAnimation}>
              <h3 className="text-2xl font-semibold text-primary">
                {caseStudy.title}
              </h3>
              {caseStudy.point1 && (
                <p className="mt-4 text-lg text-gray-200">{caseStudy.point1}</p>
              )}
              {caseStudy.point2 && (
                <p className="mt-4 text-lg text-gray-200">{caseStudy.point2}</p>
              )}
              {caseStudy.point3 && (
                <p className="mt-4 text-lg text-gray-200">{caseStudy.point3}</p>
              )}
              {caseStudy.point4 && (
                <p className="mt-4 text-lg text-gray-200">{caseStudy.point4}</p>
              )}
              {caseStudy.description && (
                <p className="mt-4 text-lg text-gray-200">
                  {caseStudy.description}
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleCaseStudy;
