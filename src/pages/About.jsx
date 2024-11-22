import React from "react";
import Career from "../components/about-us/Career";
import IndustryWeServe from "../components/about-us/IndustryWeServe";
import MeetOurTeam from "../components/about-us/MeetOurTeam";
import WhyChooseUs from "../components/about-us/WhyChooseUs";
import Navbar from "../components/common/Navbar";
import Image from "../assets/about/about.jpg"; // Adjusted image path
import Hero from "../components/common/Hero";
import OurServiceArea from "../components/about-us/OurServiceArea";

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero
        title="About Us"
        description="Restore your property to its original state with our expert fire restoration services."
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
