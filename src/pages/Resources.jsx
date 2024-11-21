import React from "react";
import CustomerReviews from "../components/resources/CustomerReviews";
import GoogleReviews from "../components/common/GoogleReviews";
import CaseStudy from "../components/resources/CaseStudy";
import BlogsData from "../components/resources/BlogsData";
import Navbar from "../components/common/Navbar";
import Hero from "../components/common/Hero";
import Image from "../assets/about/about.jpg"; // Adjusted image path

const Resources = () => {
  return (
    <div>
      <Navbar />
      <Hero
        title="Resources"
        description="Restore your property to its original state with our expert fire restoration services."
        Image={Image} // Adjusted image usage
      />
      <CustomerReviews />
      <GoogleReviews />
      <CaseStudy />
      <BlogsData />
    </div>
  );
};

export default Resources;
