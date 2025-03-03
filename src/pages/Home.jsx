import React from "react";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import ChooseUs from "../components/home/ChooseUs";
import GoogleReviews from "../components/common/GoogleReviews";
import CustomerReviews from "../components/resources/CustomerReviews";
import FeatureAndBenefits from "../components/home/FeatureAndBenefits";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - Duct Buddy | Professional Air Duct & HVAC Cleaning in NJ & CT</title>
        <meta name="description" content="Duct Buddy offers expert air duct, dryer vent, and HVAC cleaning services for residential and commercial properties in New Jersey and Connecticut. Improve your indoor air quality today!" />
        <link rel="canonical" href="https://www.ductbuddyllc.com/" />
      </Helmet>
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