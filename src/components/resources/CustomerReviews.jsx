import React, { useRef } from "react";
import { useAnimations } from "../../context/Animations";
import { useInView, motion } from "framer-motion";

const CustomerReviews = () => {
  const { fadeInLeftAnimation, fadeInUpAnimation } = useAnimations();
  const refAnimation = useRef(null);
  const isInView = useInView(refAnimation, { once: true });

  return (
    <>
      <section class="py-10  sm:py-16 lg:py-24 mt-10">
        <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div class="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
            <motion.div
              ref={refAnimation}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInLeftAnimation}
            >
              <h2 class="text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
                Customer Review
              </h2>
              <p class="mt-4 text-base leading-relaxed text-gray-200">
                We can talk until we’re blue in the face about our amazing
                technicians, high-tech equipment and off-the-charts customer
                service. But it means 3,000 times more when you hear it from our
                customers—homeowners and business owners just like you who
                expect nothing but the best for their air duct and dryer vent
                cleaning services. Check out what our discerning customers have
                to say about us. We don’t just meet expectations. We exceed
                them.
              </p>
            </motion.div>

            <motion.div
              ref={refAnimation}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUpAnimation}
              class="relative pl-20 pr-6 sm:pl-6 md:px-0"
            >
              <div class="relative w-full  max-w-xs mt-4 mb-10 ml-auto">
                <img
                  class="ml-auto rounded-md"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/person.jpg"
                  alt=""
                />

                <img
                  class="absolute -top-4 -left-12"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/wavey-lines.svg"
                  alt=""
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomerReviews;
