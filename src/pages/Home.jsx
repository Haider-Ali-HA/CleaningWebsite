import React from "react";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import GoogleReviews from "../components/common/GoogleReviews";
import CustomerReviews from "../components/resources/CustomerReviews";
import FeatureAndBenefits from "../components/home/FeatureAndBenefits";
import BeforeAfterSection from "../components/home/BeforeAfterSection";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="w-auto overflow-hidden">
      <Helmet>
        <title>Home - Duct Buddy | Professional Air Duct & HVAC Cleaning in NJ & CT</title>
        <meta name="description" content="Duct Buddy offers expert air duct, dryer vent, and HVAC cleaning services for residential and commercial properties in New Jersey and Connecticut. Improve your indoor air quality today!" />
        <link rel="canonical" href="https://www.ductbuddyllc.com/" />
      </Helmet>
      <Hero />
      <Services />
      <BeforeAfterSection /> {/* Add this line */}
      <FeatureAndBenefits />
      <CustomerReviews />
      <GoogleReviews />
    </div>
  );
};

export default Home;