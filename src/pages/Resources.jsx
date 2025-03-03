import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/common/Navbar";
import Hero from "../components/common/Hero";
import Image from "../assets/about/about.webp";
import CustomerReviews from "../components/resources/CustomerReviews";
import GoogleReviews from "../components/common/GoogleReviews";
import CaseStudy from "../components/resources/CaseStudy";
import BlogsData from "../components/resources/BlogsData";

const Resources = () => {
  return (
    <div>
      <Helmet>
        <title>Resources – DuctBuddy | Expert Air Duct & Restoration Guides in New Jersey & Connecticut</title>
        <meta
          name="description"
          content="Explore articles, case studies, and customer reviews covering air duct cleaning, dryer vent cleaning, and restoration services for New Jersey & Connecticut properties. Learn expert tips to improve indoor air quality and protect your home or business."
        />
        <link rel="canonical" href="https://www.ductbuddyllc.com/resources" />
      </Helmet>
      <Navbar />
      <Hero
        title="Resources"
        description="Restore your property to its original state with our expert fire restoration services."
        Image={Image}
      />
      <CustomerReviews />
      <GoogleReviews />
      <CaseStudy />
      <BlogsData />
    </div>
  );
};

export default Resources;

