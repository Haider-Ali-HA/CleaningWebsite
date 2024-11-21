import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Blog1 from "../../assets/resources/blog1.jpg";
import Blog2 from "../../assets/resources/blog2.jpg";
import Blog3 from "../../assets/resources/blog3.jpg";
import Blog4 from "../../assets/resources/blog4.jpg";

const blogPosts = [
  {
    id: 1,
  
    title:
      "Why Regular Air Duct Cleaning is Essential for Your Health",
    description:
      "Air ducts are a hidden part of your HVAC system, but they play a significant role in the air quality you breathe. Over time, they collect dust, debris, and allergens that can circulate through your home, leading to poor air quality and health issues. Regular air duct cleaning helps eliminate these harmful particles, ensuring you and your family breathe cleaner, fresher air. It also reduces the chances of mold growth and improves the overall efficiency of your HVAC system. Proper cleaning is essential for maintaining a healthy living environment.",
    imageUrl: Blog1,
    path: "/resources/blog1",
  },
  {
    id: 2,
  
    title: "How Air Duct Cleaning Helps You Save Money",
    description:
      "While air duct cleaning may seem like an unnecessary expense, it can save you money in the long run. Clean ducts allow your HVAC system to function more efficiently, reducing the need for frequent repairs. The cleaner your ducts, the less energy your HVAC system consumes, lowering utility bills. Regular maintenance also helps extend the lifespan of your HVAC system, preventing costly breakdowns. Here’s how keeping your air ducts clean can help your wallet.",
    imageUrl: Blog2,
    path: "/resources/blog2",
  },
  {
    id: 3,
  
    title: "The Ultimate Guide to Residential Air Duct Cleaning",
    description:
      "Residential air duct cleaning is often overlooked, but it is crucial for maintaining a clean and healthy home. Dust, pet dander, and other pollutants can accumulate inside your ducts, spreading allergens throughout your home. Cleaning your air ducts regularly ensures that the air circulating through your home is free from these harmful particles. This process also improves the efficiency of your HVAC system and helps you breathe easier. Here’s everything you need to know about maintaining clean ducts at home",
    imageUrl: Blog3,
    path: "/resources/blog3",
  },
  {
    id: 4,
  
    title: "Commercial Duct Cleaning: A Smart Investment for Your Business",
    description:
      "For businesses, clean air ducts are essential for maintaining both employee health and business efficiency. Commercial spaces, especially those with a large number of people, can quickly accumulate dust and allergens in the air ducts. Clean ducts help maintain good indoor air quality, improving the comfort and health of your employees and customers. Additionally, it ensures that your HVAC system works efficiently, preventing costly repairs. Invest in regular commercial duct cleaning for the benefit of your business.",
    imageUrl: Blog4,
    path: "/resources/blog4",
  },
 
];

const BlogsData = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, []);

  const scrollLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? blogPosts.length - visibleCards : prevIndex - 1
    );
  };

  const scrollRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === blogPosts.length - visibleCards ? 0 : prevIndex + 1
    );
  };

  return (
    <>
    
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-end justify-between">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
              Latest from blog
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-200 lg:mx-0">
              Our blog is an easy, effective way for us to chat with you about
              air ducts, dryer vents and how to keep them sparkling clean, super
              safe and ultra-efficient.
            </p>
          </div>
          <div className="hidden lg:flex lg:items-center lg:space-x-3">
            <button
              onClick={scrollLeft}
              type="button"
              className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-primary hover:text-white  focus:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              type="button"
              className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-primary hover:text-white  focus:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="relative mt-8 lg:mt-16 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            }}
          >
            {blogPosts.map((post) => (
              <div key={post.id} className="flex-shrink-0 w-full sm:w-1/3 p-4">
                <div className="overflow-hidden min-h-[32rem] bg-white rounded shadow">
                  <div className="">
                    <div className="relative">
                      <Link
                        to={post.path}
                        title=""
                        className="block aspect-w-4 aspect-h-3"
                      >
                        <img
                          className="object-cover w-full h-full"
                          src={post.imageUrl}
                          alt=""
                        />
                      </Link>
                    </div>
                    <p className="mt-5 pt-4 px-4 text-2xl font-semibold">
                      <Link to={post.path} title="" className="text-black">
                        {post.title}
                      </Link>
                    </p>
                    <p className="mt-4 px-4 text-base text-gray-600">
                      {post.description.split(" ").slice(0, 10).join(" ")}...
                    </p>
                    <Link
                      to={post.path}
                      title=""
                      className="inline-flex px-4 pb-4 items-center justify-center mt-5 text-base font-semibold text-primary transition-all duration-200 border-b-2 border-transparent hover:underline"
                    >
                      Continue Reading
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a 1 1 0 010 1.414l-4 4a 1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-5 w-full mt-4 lg:hidden">
          <button
            onClick={scrollLeft}
            className="h-10 w-10 text-black text-2xl flex items-center justify-center bg-primary rounded-full shadow-lg focus:outline-none hover:bg-opacity-70"
          >
            &larr;
          </button>
          <button
            onClick={scrollRight}
            className="h-10 w-10 text-black text-2xl flex items-center justify-center bg-primary rounded-full shadow-lg focus:outline-none hover:bg-opacity-70"
          >
            &rarr;
          </button>
        </div>
      </div>
    </section>
              </>
  );
};

export default BlogsData;
