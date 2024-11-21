import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Blog1 from "../../assets/resources/blog1.jpg";
import Blog2 from "../../assets/resources/blog2.jpg";
import Blog3 from "../../assets/resources/blog3.jpg";
import Blog4 from "../../assets/resources/blog4.jpg";

const blogPosts = [
  {
    id: 1,
    category: "Lifestyle",
    title:
      "How To Win The Vehicle In Gta Your Five Casino Win The Gta Online Scène Vehicl",
    description:
      "How To Win The Vehicle In Gta Your Five Casino Win The Gta Online Scène Vehicle Gta Online Podium Vehicle: How To Be Able To Always Win The Lucky Wheel” Content Gta Online Podium Automobile For This Week, Like Using The Fortunate Wheel What Podium Automobile Is Available Immediately? Where To Get All 200 Jack O’ Lanterns In Gta On The Web (halloween What Is The Particular Gta Online Podium Car This Week Videogamer How To Win The Particular Lucky Wheel Scène Car Every Moment In Gta Online How In Order To Win The Gta Online Podium Car” “[newline]gta Online",
    imageUrl: Blog1,
    path: "/resources/blog1",
  },
  {
    id: 2,
    category: "Marketing",
    title: "Site Oficial Para Cassino Online Electronic Apostas No Brasi",
    description:
      "Site Oficial Para Cassino Online Electronic Apostas No Brasil Mostbet Apostas Desportivas Electronic Casino Online Web-site Oficial No Brasil Comprar Bônus 1600 R$ Entar Content Ao Acessar To Site, Clique Em “cadastre-se” As Melhores Apostas E Jogos Para Cassino Na Mostbet Apostas Esportivas Na Casa De Apostas Mostbet Mostbet – Apostas Esportivas Com U Líder De Mercado Mostbet – Site Estatal De Cassino On-line E Apostas Esportivas Bônus De Boas-vindas Para E-sports E Cassinos Sobre Mostbet Brasil Mostbet: O Site Estatal Da Líder Em Apostas Esportivas Dicas De Apostas Para Jogadores Brasileiros Inicie A Sessão Na Sua Conta Mostbet Casino",
    imageUrl: Blog2,
    path: "/resources/blog2",
  },
  {
    id: 3,
    category: "Productivity",
    title: "Top 10 Mobile Casinos Real Money Video Games In 202",
    description:
      "Top 10 Mobile Casinos Real Money Video Games In 2024 Best Mobile Casinos & Real Cash Casino Software Jul 2024 Content Make The Most Of Real Money Bonuses Create Your Account Plus Verify Balzac Casino Legit Methods To Make Money Watching Videos Popular Best Actual Money Casino Of Which Accepts Paypal 🎁 Mobile Targeted Bonuses And Promotions July’s Top 10 Actual Money Sites What App Can Help You Get At The Online Casino? How We Rated Cellular Casino Sites Regarding Real Money Players What Are The Advantages Of Playing In On The Internet Real Cash Casinos? Can You Use Credit",
    imageUrl: Blog3,
    path: "/resources/blog3",
  },
  {
    id: 4,
    category: "Tech",
    title: "Form W-2g: Specific Gambling Winnings, Manual, And Filing How-to",
    description:
      "Form W-2g: Specific Gambling Winnings, Manual, And Filing How-tos What Income Taxes Are Due Upon Gambling Winnings? Content Can You Deduct Wagering Losses? Gambling Taxes: You Include To Report Just About All Your Winnings Your Wagering Losses Might Be Deductible Do An Individual Have To Spend Taxes On Gambling Establishment Winnings In Typically The Us? Gambling Winnings Reporting Gambling Winnings Plus Losses Gambling Losses Taxable Gambling Income If You’re An Expert Gambler Taxes On Sporting Activities Betting: How That They Work, What’s Taxable Tax Reasons For Why An Individual Should Think Twice Before Bet… How To State Gaming Wins And",
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
                <div className="overflow-hidden min-h-[34rem] bg-white rounded shadow">
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
  );
};

export default BlogsData;
