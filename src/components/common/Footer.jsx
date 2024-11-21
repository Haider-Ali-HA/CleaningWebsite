import React from "react";
import { FaFacebookF, FaInstagram, FaMap, FaMapMarkedAlt, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";
import image from "../../assets/logo-2.svg";
import { IoMdCall } from "react-icons/io";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section class="py-10 bg-[#0f191d]  sm:pt-16 lg:pt-24">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid grid-cols-2 md:col-span-3  lg:grid-cols-5 gap-y-16 gap-x-12">
          <div class="col-span-2 md:col-span-3 lg:col-span-2 ">
            <img
              class="w-auto h-16"
              src={image}
              alt=""
            />

            <p class="text-base leading-relaxed text-gray-300 w-3/4 mt-7">
              Duct Dudes is the brainchild of Tom Lachowicz, who began his
              company as a part-time venture in New Jersey while working full
              time in the IT field.
            </p>

            <div className=" flex gap-3 my-5">
              <SocialLinks />
            </div>
          </div>

          <div>
            <p class="text-sm font-semibold tracking-widest text-primary uppercase">
              Company
            </p>

            <ul class="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  title=""
                  class="flex text-base text-gray-300 transition-all duration-200 hover:text-gray-500"
                >
                  {" "}
                  Home{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  class="flex text-base text-gray-300 transition-all duration-200 hover:text-gray-500"
                >
                  {" "}
                  About{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  class="flex text-base text-gray-300 transition-all duration-200 hover:text-gray-500"
                >
                  {" "}
                  Resource{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  class="flex text-base text-gray-300 transition-all duration-200 hover:text-gray-500"
                >
                  {" "}
                  Contact{" "}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p class="text-sm font-semibold tracking-widest text-primary uppercase">
              Services
            </p>

            <ul class="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  title=""
                  class="flex text-base text-gray-300 transition-all duration-200 hover:text-gray-500"
                >
                  {" "}
                  Air Duct Cleaning{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  class="flex text-base text-gray-300 transition-all duration-200 hover:text-gray-500"
                >
                  {" "}
                  Dryer Vent Cleaning{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  class="flex text-base text-gray-300 transition-all duration-200 hover:text-gray-500"
                >
                  {" "}
                  PTAC Cleaning{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  class="flex text-base text-gray-300 transition-all duration-200 hover:text-gray-500"
                >
                  {" "}
                  Restoration{" "}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p class="text-sm font-semibold tracking-widest text-primary uppercase">
              Contact Us
            </p>

            <ul class="mt-6 space-y-4 ">
              <li >
                <a
                  href="#"
                  title=""
                  class="flex text-base  w-full gap-3 text-gray-300 transition-all duration-200 hover:text-gray-500"
                >
                <FaMapMarkedAlt  className="text-4xl"/>
                  {" "}
                  173 Karkus Ave Woodbrige, NJ 07095{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  class="flex text-base  w-full gap-3 text-gray-300 transition-all duration-200 hover:text-gray-500"
                >
                  {" "}
                <IoMdCall className="text-2xl" />
                  1-866-383-3911{" "}
                </a>
              </li>

              
            </ul>
          </div>
        </div>

        <hr class="mt-16 mb-10 border-gray-200" />

        <p class="text-sm text-center text-gray-200">
          © Copyright {currentYear}, All Rights Reserved by Duct Dudes
        </p>
      </div>
    </section>
  );
};

export default Footer;
