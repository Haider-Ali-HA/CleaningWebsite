import React from "react";
import CustomerReviews from "../components/resources/CustomerReviews";
import GoogleReviews from "../components/common/GoogleReviews";
import CaseStudy from "../components/resources/CaseStudy";
import BlogsData from "../components/resources/BlogsData";

const Resources = () => {
  return (
    <div>
      <CustomerReviews />
      <GoogleReviews />
      <CaseStudy />
      <BlogsData />
    </div>
  );
};

export default Resources;
