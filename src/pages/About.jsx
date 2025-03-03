import React from "react";
import Career from "../components/about-us/Career";
import IndustryWeServe from "../components/about-us/IndustryWeServe";
import MeetOurTeam from "../components/about-us/MeetOurTeam";
import WhyChooseUs from "../components/about-us/WhyChooseUs";
import Navbar from "../components/common/Navbar";
import Image from "../assets/about/about.webp"; // Adjusted image path
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
      <Helmet>
  {/* Your existing meta tags */}
  
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "DuctBuddy LLC",
        "url": "https://www.ductbuddyllc.com",
        "logo": "https://www.ductbuddyllc.com/assets/duct-buddy-logo.webp",
        "description": "DuctBuddy LLC provides professional air duct cleaning, dryer vent cleaning, and HVAC maintenance services in New Jersey and Connecticut.",
        "foundingDate": "2020",
        "founders": [
          {
            "@type": "Person",
            "name": "Hassan "
          }
        ],
        "email": "info@ductbuddyllc.com",
        "telephone": "+15512555709",
        "sameAs": [
          "https://www.facebook.com/ductbuddyllc",
          "https://www.instagram.com/ductbuddyllc"
        ]
      }
    `}
  </script>
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