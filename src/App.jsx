import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/common/Footer";
import Contact from "./pages/Contact";
import ResourceLayout from "./components/layouts/resources-layout/ResourceLayout";
import Reviews from "./pages/resources/Reviews";
import CaseStudies from "./pages/resources/CaseStudies";
import Blogs from "./pages/resources/Blogs";
import SingleCaseStudy from "./components/resources/SingleCaseStudy";
import SingleBlogData from "./components/resources/SingleBlogData";
import Commercial from "./pages/air-duct-cleaning/Commercial";
import Residential from "./pages/air-duct-cleaning/Residential";
import Billionare from "./pages/air-duct-cleaning/Billionare";
import Industrial from "./pages/air-duct-cleaning/Industrial";
import MariTime from "./pages/air-duct-cleaning/MariTime";
import CommercialDryer from "./pages/dryer-vent-cleaning/CommercialDryer";
import ResidentialDryer from "./pages/dryer-vent-cleaning/ResidentialDryer";
import ExteriorBird from "./pages/dryer-vent-cleaning/ExteriorBird";
import PtacCleaning from "./pages/PtacCleaning";
import SmokeRestoration from "./pages/restoration/SmokeRestoration";
import MoldRestoration from "./pages/restoration/MoldRestoration";
import FireRestoration from "./pages/restoration/FireRestoration";
import WaterRestoration from "./pages/restoration/WaterRestoration";
import About from "./pages/About";
import Resources from "./pages/Resources";
import { Helmet } from "react-helmet";




const App = () => {
  return (
    <div>

<Helmet>
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "DuctBuddy LLC",
        "image": "https://www.ductbuddyllc.com/assets/duct-buddy-logo.webp",
        "url": "https://www.ductbuddyllc.com",
        "telephone": "+15512555709",
        "email": "info@ductbuddyllc.com",
        "description": "Professional air duct cleaning, dryer vent cleaning, and HVAC maintenance in New Jersey and Connecticut, improving indoor air quality for homes and businesses.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "110 Laidlaw Ave",
          "addressLocality": "Jersey City",
          "addressRegion": "NJ",
          "postalCode": "07306",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 40.7375,
          "longitude": -74.0633
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "08:00",
            "closes": "18:00"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/ductbuddyllc",
          "https://www.instagram.com/ductbuddyllc"
        ],
        "areaServed": [
          {
            "@type": "State",
            "name": "New Jersey"
          },
          {
            "@type": "State",
            "name": "Connecticut"
          }
        ],
        "priceRange": "$$"
      }
    `}
  </script>
  
  {/* Open Graph / Facebook */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.ductbuddyllc.com/" />
  <meta property="og:title" content="DuctBuddy LLC - Air Duct & Dryer Vent Cleaning in NJ & CT" />
  <meta property="og:description" content="Professional air duct cleaning, dryer vent cleaning, and HVAC maintenance services in New Jersey and Connecticut. Improve your indoor air quality today!" />
  <meta property="og:image" content="https://www.ductbuddyllc.com/og-image.jpg" />
  <meta property="og:site_name" content="DuctBuddy LLC" />
  <meta property="og:locale" content="en_US" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://www.ductbuddyllc.com/" />
  <meta name="twitter:title" content="DuctBuddy LLC - Air Duct & Dryer Vent Cleaning in NJ & CT" />
  <meta name="twitter:description" content="Professional air duct cleaning, dryer vent cleaning, and HVAC maintenance services in New Jersey and Connecticut. Improve your indoor air quality today!" />
  <meta name="twitter:image" content="https://www.ductbuddyllc.com/og-image.jpg" />
</Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/reviews" element={<Reviews />} />
        <Route path="/resources/case-studies" element={<CaseStudies />} />
        <Route path="/resources/case-study-1" element={<SingleCaseStudy />} />
        <Route path="/resources/case-study-2" element={<SingleCaseStudy />} />

        <Route path="/resources/blog" element={<Blogs />} />
        <Route path="/resources/blog1" element={<SingleBlogData />} />
        <Route path="/resources/blog2" element={<SingleBlogData />} />
        <Route path="/resources/blog3" element={<SingleBlogData />} />
        <Route path="/resources/blog4" element={<SingleBlogData />} />

        <Route path="/air-duct/commercial" element={<Commercial />} />
        <Route path="/air-duct/residential" element={<Residential />} />
        <Route path="/air-duct/billionaire" element={<Billionare />} />
        <Route path="/air-duct/industrial" element={<Industrial />} />
        <Route path="/air-duct/maritime" element={<MariTime />} />

        <Route path="/dryer-vent/commercial" element={<CommercialDryer />} />
        <Route path="/dryer-vent/residential" element={<ResidentialDryer />} />
        <Route path="/dryer-vent/bird-guard" element={<ExteriorBird />} />

        <Route path="/ptac-cleaning" element={<PtacCleaning />} />
        <Route path={"/restoration/smoke"} element={<SmokeRestoration />} />
        <Route path={"/restoration/mold"} element={<MoldRestoration />} />
        <Route path={"/restoration/fire"} element={<FireRestoration />} />
        <Route path={"/restoration/water"} element={<WaterRestoration />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
