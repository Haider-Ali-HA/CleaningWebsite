import React from "react";
import { useLocation } from "react-router-dom";
import Image1 from "../../assets/resources/casestudy1.jpg";
import Image2 from "../../assets/resources/casestudy2.jpg";

const CaseStudy1 = {
  title: "St. Peter’s College",
  point1:
    "The faculty and students of St. Peter’s College requested our air duct cleaning service after they became more fully aware of the importance of indoor air quality. For buildings with a lot of daily traffic, such as schools and colleges, cleaning and maintaining the ductwork is essential.",
  point2:
    "We knew it was important to complete our cleaning without interrupting the start of the upcoming school semester. So Duct Dudes provided service day and night, seven days a week. A full-source removal cleaning was provided for all ductwork. When we were finished, air quality testing was administered and confirmed what we already knew: Our work significantly improved this important indoor space.",
  point3:
    "At Duct Dudes, we have a real soft spot for educators and their students and believe they should have the healthiest and safest learning environments possible. We are grateful that we were given this challenging and rewarding opportunity to do our part to help improve the indoor air quality of this great institution.",
  Image: Image1,
};

const CaseStudy2 = {
  title: "The Atlantic City Fire Department",
  point1:
    "Mold issues were discovered in the HVAC system and ductwork at the Atlantic City Fire Department. Environmentalists were consulted to conduct testing, which determined there were substantial and detrimental problems that were jeopardizing the health of the firefighters, EMTs and other building occupants.",
  point2:
    "Duct Dudes provided our full-source removal cleaning on applicable, metal ductwork. We also provided replacement installations for the more porous and insulated ductwork. For more than two days and nights, our staff carried out the cleaning strategy provided by air systems cleaning specialist and company founder Tom Lachowicz.",
  point3:
    "The environmentalists returned to conduct follow-up testing, and our work passed with flying colors.",
  point4:
    "It was a tremendous honor to help improve living and working conditions for the brave members of the Atlantic City Fire Department.",
  Image: Image2,
};

const DefaultCaseStudy = {
  title: "Case Study Not Found",
  description: "The case study you are looking for does not exist.",
  Image: "",
};

const SingleCaseStudy = () => {
  const location = useLocation();
  const path = location.pathname;
  let caseStudy;

  if (path === "/resources/case-study-1") {
    caseStudy = CaseStudy1;
  } else if (path === "/resources/case-study-2") {
    caseStudy = CaseStudy2;
  } else {
    caseStudy = DefaultCaseStudy;
  }

  return (
    <div>
      <section className="py-10 sm:py-16 lg:py-24 ">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
              Case Study
            </h2>
          </div>

          <div className="grid grid-cols-1 mt-8 md:mt-20 gap-y-6 md:grid-cols-2 gap-x-10">
            <div>
              <img
                className="w-full mx-auto "
                src={caseStudy.Image}
                alt={caseStudy.title}
              />
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-primary">
                {caseStudy.title}
              </h3>
              {caseStudy.point1 && (
                <p className="mt-4 text-lg text-gray-200">{caseStudy.point1}</p>
              )}
              {caseStudy.point2 && (
                <p className="mt-4 text-lg text-gray-200">{caseStudy.point2}</p>
              )}
              {caseStudy.point3 && (
                <p className="mt-4 text-lg text-gray-200">{caseStudy.point3}</p>
              )}
              {caseStudy.point4 && (
                <p className="mt-4 text-lg text-gray-200">{caseStudy.point4}</p>
              )}
              {caseStudy.description && (
                <p className="mt-4 text-lg text-gray-200">{caseStudy.description}</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleCaseStudy;
