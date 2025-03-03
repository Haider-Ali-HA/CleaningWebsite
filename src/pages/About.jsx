import React from "react";
import Career from "../components/about-us/Career";
import IndustryWeServe from "../components/about-us/IndustryWeServe";
import MeetOurTeam from "../components/about-us/MeetOurTeam";
import WhyChooseUs from "../components/about-us/WhyChooseUs";
import Navbar from "../components/common/Navbar";
import Image from "../assets/about/about.jpg"; // Adjusted image path
import Hero from "../components/common/Hero";
import OurServiceArea from "../components/about-us/OurServiceArea";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About Us - Duct Buddy | Trusted Duct Cleaning Experts in NJ & CT</title>
        <meta name="description" content="Learn about Duct Buddy's mission, team, and commitment to delivering top-quality air duct, dryer vent, and HVAC cleaning services for homes and businesses in New Jersey and Connecticut." />
        <link rel="canonical" href="https://www.ductbuddyllc.com/about-us" />
      </Helmet>
      <Navbar />
      <Hero
        title="About DuctBuddy – Trusted Air Duct Cleaning & HVAC Maintenance Experts in New Jersey & Connecticut"
        description="Learn why DuctBuddy is the <strong>trusted local expert for air duct and dryer vent cleaning in New Jersey and Connecticut</strong>. Our certified team has years of experience providing top-notch HVAC maintenance and improving <strong>indoor air quality</strong> for homes and businesses. We are committed to customer satisfaction, safety, and delivering cleaner, healthier air to our community."
        Image={Image} // Adjusted image usage
      />
      <WhyChooseUs />
      {/* <Career /> */}
      {/* <IndustryWeServe /> */}
      <MeetOurTeam />
      <OurServiceArea />
    </div>
  );
};

export default About;