import React, { useRef } from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import SocialLinks from "./SocialLinks";
import image from "../../assets/logo-2.svg";
import { IoMdCall } from "react-icons/io";
import { Link } from "react-router-dom";
import { useAnimations } from "../../context/Animations";
import { useInView, motion } from "framer-motion";

const Footer = () => {
  // const currentYear = new Date().getFullYear();
  const { fadeInLeftAnimation } = useAnimations();
  const refAnimation1 = useRef(null);
  const refAnimation2 = useRef(null);
  const refAnimation3 = useRef(null);
  const refAnimation4 = useRef(null);
  const refAnimation5 = useRef(null);

  const isInView1 = useInView(refAnimation1, { once: true });
  const isInView2 = useInView(refAnimation2, { once: true });
  const isInView3 = useInView(refAnimation3, { once: true });
  const isInView4 = useInView(refAnimation4, { once: true });
  const isInView5 = useInView(refAnimation5, { once: true });

  return (
    <section className="py-10 bg-[#0f191d]  sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3  lg:grid-cols-5 gap-y-16 gap-x-12">
          <motion.div
            ref={refAnimation1}
            initial="hidden"
            animate={isInView1 ? "visible" : "hidden"}
            variants={fadeInLeftAnimation}
            className="col-span-2 md:col-span-3 lg:col-span-2 "
          >
            <img className="w-auto h-16" src={image} alt="" />

            <p className="text-base leading-relaxed text-gray-300 w-3/4 mt-7">
              Duct Buddy is the brainchild of Tom Lachowicz, who began his
              company as a part-time venture in New Jersey while working full
              time in the IT field.
            </p>

            <div className="flex gap-3 my-5 w-full">
              <SocialLinks />
            </div>
          </motion.div>

          <motion.div
            ref={refAnimation2}
            initial="hidden"
            animate={isInView2 ? "visible" : "hidden"}
            variants={fadeInLeftAnimation}
          >
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">
              Company
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  to="/"
                  title=""
                  className="flex text-base text-gray-300 transition-all duration-200 hover:text-gray-500"
                >
                  {" "}
                  Home{" "}
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  title=""
                  className="flex text-base text-gray-300 transition-all duration-200 hover:text-gray-500"
                >
                  {" "}
                  About{" "}
                </Link>
              </li>

              <li>
                <Link
                  to="/resources"
                  title=""
                  className="flex text-base text-gray-300 transition-all duration-200 hover:text-gray-500"
                >
                  {" "}
                  Resource{" "}
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  title=""
                  className="flex text-base text-gray-300 transition-all duration-200 hover:text-gray-500"
                >
                  {" "}
                  Contact{" "}
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            ref={refAnimation3}
            initial="hidden"
            animate={isInView3 ? "visible" : "hidden"}
            variants={fadeInLeftAnimation}
          >
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">
              Services
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  to="/air-duct/commercial"
                  title=""
                  className="flex text-base text-gray-300 transition-all duration-200 hover:text-gray-500"
                >
                  {" "}
                  Air Duct Cleaning{" "}
                </Link>
              </li>

              <li>
                <Link
                  to="/dryer-vent/residential"
                  title=""
                  className="flex text-base text-gray-300 transition-all duration-200 hover:text-gray-500"
                >
                  {" "}
                  Dryer Vent Cleaning{" "}
                </Link>
              </li>

              <li>
                <Link
                  to="/ptac-cleaning"
                  title=""
                  className="flex text-base text-gray-300 transition-all duration-200 hover:text-gray-500"
                >
                  {" "}
                  PTAC Cleaning{" "}
                </Link>
              </li>

              <li>
                <Link
                  to="/restoration/smoke"
                  title=""
                  className="flex text-base text-gray-300 transition-all duration-200 hover:text-gray-500"
                >
                  {" "}
                  Restoration{" "}
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div
            ref={refAnimation4}
            initial="hidden"
            animate={isInView4 ? "visible" : "hidden"}
            variants={fadeInLeftAnimation}
          >
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">
              Contact Us
            </p>

            <ul className="mt-6 space-y-4  ">
              <li>
                <Link
                  to="https://maps.app.goo.gl/CrEJPnyv9mNHmN4t8"
                  title=""
                  className="flex text-base   w-full gap-3  text-gray-300 transition-all duration-200 hover:text-gray-500"
                >
                  <FaMapMarkedAlt className="text-4xl  w-14" /> 110 Laidlaw Ave,
                  Jersey City, NJ 07306, United States
                </Link>
              </li>

              <li>
                <Link
                  to="tel:+15512555709"
                  title=""
                  className="flex text-base  w-full gap-3  text-gray-300 transition-all duration-200 hover:text-gray-500"
                >
                  {" "}
                  <IoMdCall className="text-2xl  w-6" />
                  +15512555709
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>
        

        <motion.p
          ref={refAnimation5}
          initial="hidden"
          animate={isInView5 ? "visible" : "hidden"}
          variants={fadeInLeftAnimation}
          className="text-sm text-center text-gray-200"
        >
          <hr className="mt-16 mb-10 border-gray-200" />© Copyright{" "}
          2024 , All Rights Reserved by Duct Buddy LLC
          <p className="text-center w-full">Design and developed by <Link target="_blank" className="hover:underline" to="https://www.hexlertech.com/">Hexler tech Pvt Ltd.</Link></p>
        </motion.p>
      </div>
    </section>
  );
};

export default Footer;
