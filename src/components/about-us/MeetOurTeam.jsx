import React, { useRef } from "react";
import Image1 from "../../assets/about/team1.webp";
import Image3 from "../../assets/about/team2.webp";
import Image2 from "../../assets/about/team3.webp";
// import Image4 from "../../assets/about/team4.webp";
// import Image5 from "../../assets/about/team5.webp";
// import Image6 from "../../assets/about/team6.webp";
import { useAnimations } from "../../context/Animations";
import { useInView, motion } from "framer-motion";
import { UserCircleIcon } from "@heroicons/react/16/solid";
const MeetOurTeam = () => {
  const { fadeInLeftAnimation, fadeInDownAnimation } = useAnimations();
  const refAnimationHeader = useRef(null);
  const refAnimationGrid = useRef(null);
  const isInViewHeader = useInView(refAnimationHeader, { once: true });
  const isInViewGrid = useInView(refAnimationGrid, { once: true });

  const teamMembers = [
    {
      image: Image1,
      name: "John Doe",
      description: "Oversees the overall direction of the company.",
    },
    {
      image: Image2,
      name: "Jane Smith",
      description: "Leads the technology and engineering teams.",
    },
    {
      image: Image3,
      name: "Alice Johnson",
      description: "Manages the company's finances.",
    },
    // { image: Image4, name: "Bob Brown", description: "Ensures smooth operations across the company." },
    // { image: Image5, name: "Charlie Davis", description: "Heads the marketing strategies and campaigns." },
    // { image: Image6, name: "Eve Wilson", description: "Oversees the information technology strategy." },
  ];

  return (
    <div>
      <section className="py-10 bg-[#0B1215] sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-5xl">
          <motion.div
            ref={refAnimationHeader}
            initial="hidden"
            animate={isInViewHeader ? "visible" : "hidden"}
            variants={fadeInLeftAnimation}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className=" text-3xl lg:text-4xl font-bold leading-tight text-primary lg:leading-tight">
              People who made it successful
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-xl text-gray-200">
              Meet the dedicated team of professionals who work tirelessly to
              ensure our services exceed your expectations. Their expertise and
              commitment are the backbone of our success.
            </p>
          </motion.div>

          <motion.div
            ref={refAnimationGrid}
            initial="hidden"
            animate={isInViewGrid ? "visible" : "hidden"}
            variants={fadeInDownAnimation}
            className="grid grid-cols-2 gap-6 mt-8 sm:grid-cols-3 md:mt-16 lg:gap-x-12"
          >
            {/* {teamMembers.map((member, index) => (
              <div key={index} className="relative aspect-w-1 aspect-h-1">
                <img className="w-full h-full object-cover" src={member.image} alt={member.name} />
                <div className="absolute bottom-0 left-0  text-center pb-5 right-0 bg-gray-800 bg-opacity-60 text-white p-2">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-xs">{member.description}</p>
                </div>
              </div>
            ))} */}
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 bg-opacity-60 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                style={{
                  opacity: isInViewGrid ? 1 : 0,
                  transform: isInViewGrid
                    ? "translateY(0)"
                    : `translateY(${50 + index * 20}px)`,
                  transition: `all 0.6s ease-out ${index * 0.2}s`,
                }}
              >
                <div className="text-center">
                  <UserCircleIcon className="w-14 h-14 text-gray-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-400">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MeetOurTeam;
