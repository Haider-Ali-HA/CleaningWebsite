import React from "react";
import Image1 from "../../assets/resources/casestudy1.jpg";
import Image2 from "../../assets/resources/casestudy2.jpg";
import { Link } from "react-router-dom";

const CaseStudy = () => {
  return (
    <>
    <section class="py-10 sm:py-16 lg:py-24">
      <div class="px-4 mx-auto max-w-[90rem] sm:px-6 lg:px-8">
        <div class="grid items-stretch gap-y-10 md:grid-cols-2 md:gap-x-20">
          <div class="relative flex  flex-col  lg:flex-row   gap-6 mt-10 md:mt-0">
            <div class="overflow-hidden aspect-w-3 aspect-h-4 relative">
              <img
                class="object-cover object-top w-full h-full origin-top scale-150 opacity-50"
                src={Image1}
                alt=" casestudy image 1"
              />
              <div class="absolute inset-0 flex items-center justify-center flex-col">
                <h2 class="text-white text-2xl font-bold">Case Study </h2>
                <Link to="/resources/case-study-1" class="text-white text-2xl font-bold text-center hover:underline">St. Peter's College </Link>
              </div>
            </div>

            <div class="relative">
              <div class="h-full overflow-hidden aspect-w-3 aspect-h-4 relative">
                <img
                  class="object-cover object-top w-full h-full origin-top scale-150 opacity-50"
                  src={Image2}
                  alt="casestudy image 2"
                />
                <div class="absolute inset-0 flex items-center justify-center flex-col">
                  <h2 class="text-white text-2xl font-bold">Case Study 2</h2>
                  <Link to="/resources/case-study-2" class="text-white text-2xl font-bold text-center hover:underline">The Atlantic City Fire Department</Link>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col items-start xl:px-16">
            <h2 class="text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
              It's Another Open-and-Shut Case for the Dudes!
            </h2>
            <p class="mt-4 text-base leading-relaxed text-gray-200">
              It doesn’t matter how tricky or challenging your air duct or dryer
              vent cleaning project is. It doesn’t matter if it’s residential,
              commercial or industrial. Duct Dudes uses its superior training,
              extensive experience, extraordinary specialization and
              top-of-the-line equipment to achieve the best results possible for
              your unique space. We’ve pulled together a portfolio of some of
              the work that makes us beam with pride and shows you that we’re
              the very best in the business.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default CaseStudy;
