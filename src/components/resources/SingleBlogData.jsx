import React from "react";
import { useLocation } from "react-router-dom";
import Blog1 from "../../assets/resources/blog1.jpg";
import Blog2 from "../../assets/resources/blog2.jpg";
import Blog3 from "../../assets/resources/blog3.jpg";
import Blog4 from "../../assets/resources/blog4.jpg";
import Navbar from "../common/Navbar";
import Hero from "../common/Hero";
import Image from "../../assets/about/about.jpg"; // Adjusted image path

const blogPosts = [
  {
    id: 1,
    title: "Why Regular Air Duct Cleaning is Essential for Your Health",
    description:
      "Air ducts are a hidden part of your HVAC system, but they play a significant role in the air quality you breathe. Over time, they collect dust, debris, and allergens that can circulate through your home, leading to poor air quality and health issues. Regular air duct cleaning helps eliminate these harmful particles, ensuring you and your family breathe cleaner, fresher air. It also reduces the chances of mold growth and improves the overall efficiency of your HVAC system. Proper cleaning is essential for maintaining a healthy living environment.",
    points: [
      "Health Benefits: Reduces the risk of respiratory problems, allergies, and asthma.",
      "Improves Air Quality: Provides fresher air throughout your home or office.",
      "Increases HVAC Efficiency: Enhances airflow and reduces energy bills.",
      "Prevents Mold Growth: Stops the development of mold and bacteria inside ducts.",
      "Long-Term Health Maintenance: Regular cleaning ensures a healthier home environment."
    ],
    imageUrl: Blog1,
  },
  {
    id: 2,
    title: "How Air Duct Cleaning Helps You Save Money",
    description:
      "While air duct cleaning may seem like an unnecessary expense, it can save you money in the long run. Clean ducts allow your HVAC system to function more efficiently, reducing the need for frequent repairs. The cleaner your ducts, the less energy your HVAC system consumes, lowering utility bills. Regular maintenance also helps extend the lifespan of your HVAC system, preventing costly breakdowns. Here’s how keeping your air ducts clean can help your wallet.",
    points: [
      "Energy Efficiency: Reduces energy consumption by improving airflow.",
      "Lower Maintenance Costs: Prevents frequent HVAC repairs and breakdowns.",
      "Prolongs HVAC Lifespan: Regular cleaning extends the life of your HVAC system.",
      "Decreases Mold Remediation Costs: Prevents mold growth that may require expensive treatment.",
      "Boosts HVAC Performance: Ensures that your system runs at peak efficiency."
    ],
    imageUrl: Blog2,
  },
  {
    id: 3,
    title: "The Ultimate Guide to Residential Air Duct Cleaning",
    description:
      "Residential air duct cleaning is often overlooked, but it is crucial for maintaining a clean and healthy home. Dust, pet dander, and other pollutants can accumulate inside your ducts, spreading allergens throughout your home. Cleaning your air ducts regularly ensures that the air circulating through your home is free from these harmful particles. This process also improves the efficiency of your HVAC system and helps you breathe easier. Here’s everything you need to know about maintaining clean ducts at home",
    points: [
      "Cleaner Air at Home: Reduces allergens like dust and pet dander.",
      "Improves Comfort: Enhances airflow and temperature control.",
      "Protects Health: Reduces the spread of germs and bacteria.",
      "When to Schedule: Cleaning every 3-5 years or as needed.",
      "Preventative Care: Prolongs the life of your HVAC system."
    ],
    imageUrl: Blog3,
  },
  {
    id: 4,
    title: "Commercial Duct Cleaning: A Smart Investment for Your Business",
    description:
      "For businesses, clean air ducts are essential for maintaining both employee health and business efficiency. Commercial spaces, especially those with a large number of people, can quickly accumulate dust and allergens in the air ducts. Clean ducts help maintain good indoor air quality, improving the comfort and health of your employees and customers. Additionally, it ensures that your HVAC system works efficiently, preventing costly repairs. Invest in regular commercial duct cleaning for the benefit of your business.",
    points: [
      "Healthier Employees: Reduces sick days by improving indoor air quality.",
      "Increases Productivity: Clean air helps maintain focus and efficiency.",
      "Lower Energy Bills: Clean ducts improve HVAC system performance.",
      "Improved Airflow: Enhances the distribution of fresh air throughout your building.",
      "Complies with Regulations: Meets health and safety regulations in some industries."
    ],
    imageUrl: Blog4,
  },
];

const SingleBlogData = () => {
  const location = useLocation();
  const blogId = parseInt(location.pathname.split("/").pop().replace("blog", ""));
  const blog = blogPosts.find((post) => post.id === blogId);

  return (
    <>
      <Navbar />
      <Hero
        title="Resources"
        description="Restore your property to its original state with our expert fire restoration services."
        Image={Image} // Adjusted image usage
      />
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Blog Header */}
          <h1 className="text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
            {blog.title}
          </h1>

          <div className="mt-8 flex flex-col lg:flex-row lg:space-x-8">
            {/* Blog Image */}
            <div className="lg:w-1/2">
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Blog Content */}
            <div className="mt-8 lg:mt-0 lg:w-1/2 text-gray-200 leading-relaxed space-y-6">
              {blog.description.split("\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              {/* Display Points */}
              <ul className="list-disc pl-5 mt-6 space-y-2">
                {blog.points.map((point, index) => (
                  <li key={index} className="text-gray-200">{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlogData;