import React, { useRef } from "react";
import { useAnimations } from "../../context/Animations";
import { useInView, motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const CustomerReviews = () => {
  const { fadeInLeftAnimation, fadeInUpAnimation } = useAnimations();
  const refAnimation = useRef(null);
  const isInView = useInView(refAnimation, { once: true });

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Jersey City, NJ",
      rating: 5,
      review: "After DuctBuddy cleaned our entire home's air duct system, my daughter's allergy symptoms decreased dramatically. Their technicians were extremely thorough, removing years of accumulated dust and pet dander that our previous service provider had missed. The air in our 3-bedroom colonial home feels noticeably fresher, and our heating bills have decreased by 15% this winter!"
    },
    {
      name: "Michael Rodriguez",
      location: "Stamford, CT",
      rating: 5,
      review: "As someone who operates a small daycare from my home, maintaining clean indoor air is essential. DuctBuddy's comprehensive air duct and dryer vent cleaning service eliminated the musty odor we'd been struggling with for months. Their professional team explained every step of the process and showed me the surprising amount of debris they removed from our 10-year-old HVAC system."
    },
    {
      name: "Jennifer Williams",
      location: "Hoboken, NJ",
      rating: 5,
      review: "After renovating our pre-war apartment, construction dust was circulating throughout our home despite regular cleaning. DuctBuddy's residential air duct cleaning service removed all construction residue from our ductwork, significantly improving our indoor air quality. Their technicians were knowledgeable about older HVAC systems and provided valuable maintenance tips."
    }
  ];

  return (
    <section className="py-10 sm:py-16 lg:py-24 mt-10">
      <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div
          ref={refAnimation}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInLeftAnimation}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-200 max-w-3xl mx-auto">
            We can talk until we're blue in the face about our amazing technicians, high-tech equipment and off-the-charts customer service. But it means 3,000 times more when you hear it from our customers—homeowners and business owners just like you who expect nothing but the best for their air duct and dryer vent cleaning services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              ref={refAnimation}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5, delay: index * 0.2 }
                }
              }}
              className="p-6 bg-[#1A252B] rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
              
              <blockquote>
                <p className="text-base text-gray-300 italic">"{testimonial.review}"</p>
              </blockquote>
              
              <div className="mt-6 flex items-center">
                <div className="ml-4">
                  <p className="text-base font-semibold text-white">{testimonial.name}</p>
                  <p className="mt-0.5 text-sm text-primary">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          ref={refAnimation}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUpAnimation}
          className="mt-12 text-center"
        >
          <a
            href="/resources/reviews"
            className="inline-flex items-center px-6 py-3 border border-primary text-base font-medium rounded-md text-white hover:bg-primary/20 transition duration-300"
          >
            Read More Customer Reviews
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerReviews;