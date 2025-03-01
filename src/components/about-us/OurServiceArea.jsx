import React, { useRef } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useAnimations } from "../../context/Animations";
import { useInView, motion } from "framer-motion";

function OurServiceArea() {
  const { fadeInLeftAnimation, fadeInDownAnimation } = useAnimations();
  const refHeading = useRef(null);
  const refCards = useRef(null);
  const isHeadingInView = useInView(refHeading, { once: true });
  const isCardsInView = useInView(refCards, { once: true });

  return (
    <section className="service-areas py-16 px-8 bg-[#0B1215]">
      <motion.h2
        ref={refHeading}
        initial="hidden"
        animate={isHeadingInView ? "visible" : "hidden"}
        variants={fadeInLeftAnimation}
        className="text-3xl  lg:text-4xl font-bold text-primary text-center mb-8"
      >
        Our Air Duct Cleaning Service Areas
      </motion.h2>
      <motion.div
        ref={refCards}
        initial="hidden"
        animate={isCardsInView ? "visible" : "hidden"}
        variants={fadeInDownAnimation}
        className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8"
      >
        {/* Virginia */}
        <div className="area-card p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-black">Virginia</h3>
          <ul className="space-y-2">
            {[
              "Alexandria",
              "Arlington",
              "McLean",
              "Springfield",
              "Lorton",
              "Lake Ridge",
              "Woodbridge",
              "Dumfries",
            ].map((location, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <FaMapMarkerAlt className="mr-2 text-blue-600" />
                {location}
              </li>
            ))}
          </ul>
        </div>

        {/* Maryland */}
        <div className="area-card p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-black">Maryland</h3>
          <ul className="space-y-2">
            {[
              "Rockville",
              "Bethesda",
              "Laurel",
              "Bowie",
              "College Park",
              "Hyattsville",
              "Largo",
              "Fort Washington",
            ].map((location, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <FaMapMarkerAlt className="mr-2 text-blue-600" />
                {location}
              </li>
            ))}
          </ul>
        </div>
        {/* Washington DC */}
        <div className="area-card p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-black">
            Washington DC
          </h3>
          <ul className="space-y-2">
            {[
              "NE Washington DC",
              "NW Washington DC",
              "SW Washington DC",
              "SE Washington DC",
              "Capitol Hill",
              "Georgetown",
            ].map((location, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <FaMapMarkerAlt className="mr-2 text-blue-600" />
                {location}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

export default OurServiceArea;
