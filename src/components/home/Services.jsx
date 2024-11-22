import React, { useRef } from "react";
import Image1 from "../../assets/home/airDuctCleaning.jpg";
import Image2 from "../../assets/home/dryerVentCleaning.jpg";
import Image3 from "../../assets/home/ptacCleaning.jpg";
import Image4 from "../../assets/home/restoration.jpg";
import { Link } from "react-router-dom";
import { useAnimations } from "../../context/Animations";
import { useInView,motion  } from "framer-motion";

const services = [
  { id: 1, name: "Air Duct Cleaning", description: "Improve air quality and system efficiency. Professional air duct cleaning services.", image: Image1, path: "/air-duct/commercial" },
  { id: 2, name: "Dryer Vent Cleaning", description: "Reduce fire hazards by cleaning vents. Ensure your dryer vents are clean and safe.", image: Image2, path: "/dryer-vent/residential" },,
  { id: 3, name: "PTAC Cleaning", description: "Ensure clean airflow and energy savings. Comprehensive PTAC system cleaning.", image: Image3, path: "/ptac-cleaning" },
  { id: 4, name: "Restoration", description: "Restore your property to its original condition. Expert restoration services.", image: Image4, path: "/restoration/smoke" },
];

const ServicesCard = () => {
  const {fadeInLeftAnimation ,fadeInDownAnimation} =useAnimations();
  const refAnimation = useRef(null);
  const isInView = useInView(refAnimation, { once: true });
  return (
    <section className="py-10 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={refAnimation}
        initial="hidden"
        animate={isInView  ? "visible" : "hidden"}
        variants={fadeInLeftAnimation} className="text-center mb-8">
          <h2 className="text-3xl font-bold leading-tight  sm:text-4xl lg:text-5xl">Our Services</h2>
          <p className="mt-2 ">
            Explore our range of professional cleaning services designed for your home or office.
          </p>
        </motion.div>
        <motion.div ref={refAnimation}
        initial="hidden"
        animate={isInView  ? "visible" : "hidden"}
        variants={fadeInDownAnimation} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative bg-white text-center rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col overflow-hidden"
            >
              {/* Service Image */}
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-40 object-cover rounded-t-lg transform transition-transform duration-300 hover:scale-110"
                />
              </div>
              {/* Content */}
              <div className="p-6 flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
              {/* Learn More Link */}
              <Link
                to={service.path}
                className="block py-3 rounded text-center mx-auto mb-5 text-white border w-32 bg-primary text-sm font-medium hover:underline"
              >
                Learn More
              </Link>
            </div>
          ))}

        </motion.div>

        
      </div>
      
    </section>
  );
};

export default ServicesCard;
