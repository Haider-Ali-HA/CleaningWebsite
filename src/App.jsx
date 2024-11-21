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

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<ResourceLayout />}>
          <Route path="reviews" element={<Reviews />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="case-study-1" element={<SingleCaseStudy />} />
          <Route path="case-study-2" element={<SingleCaseStudy />} />

          <Route path="blog" element={<Blogs />} />
          <Route path="blog1" element={<SingleBlogData />} />
          <Route path="blog2" element={<SingleBlogData />} />
          <Route path="blog3" element={<SingleBlogData />} />
          <Route path="blog4" element={<SingleBlogData />} />
        </Route>
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
