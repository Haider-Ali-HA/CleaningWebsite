import React from "react";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import ChooseUs from "../components/home/ChooseUs";
import GoogleReviews from "../components/common/GoogleReviews";
import CustomerReviews from "../components/resources/CustomerReviews";
import FeatureAndBenefits from "../components/home/FeatureAndBenefits";

const Home = () => {
  return (
    <>
      <Hero  />
      <Services />
      <ChooseUs />
      <FeatureAndBenefits />
      <CustomerReviews />
      <GoogleReviews />
    
    </>
  );
};

export default Home;
