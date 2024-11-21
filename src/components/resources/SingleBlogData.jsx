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
    category: "Lifestyle",
    title:
      "How To Win The Vehicle In Gta Your Five Casino Win The Gta Online Scène Vehicl",
    description:
      "How To Win The Vehicle In Gta Your Five Casino Win The Gta Online Scène Vehicle Gta Online Podium Vehicle: How To Be Able To Always Win The Lucky Wheel” Content Gta Online Podium Automobile For This Week, Like Using The Fortunate Wheel What Podium Automobile Is Available Immediately? Where To Get All 200 Jack O’ Lanterns In Gta On The Web (halloween What Is The Particular Gta Online Podium Car This Week Videogamer How To Win The Particular Lucky Wheel Scène Car Every Moment In Gta Online How In Order To Win The Gta Online Podium Car” “[newline]gta Online",
    imageUrl:
      Blog1,
  },
  {
    id: 2,
    category: "Marketing",
    title: "Site Oficial Para Cassino Online Electronic Apostas No Brasi",
    description:
      "Site Oficial Para Cassino Online Electronic Apostas No Brasil Mostbet Apostas Desportivas Electronic Casino Online Web-site Oficial No Brasil Comprar Bônus 1600 R$ Entar Content Ao Acessar To Site, Clique Em “cadastre-se” As Melhores Apostas E Jogos Para Cassino Na Mostbet Apostas Esportivas Na Casa De Apostas Mostbet Mostbet – Apostas Esportivas Com U Líder De Mercado Mostbet – Site Estatal De Cassino On-line E Apostas Esportivas Bônus De Boas-vindas Para E-sports E Cassinos Sobre Mostbet Brasil Mostbet: O Site Estatal Da Líder Em Apostas Esportivas Dicas De Apostas Para Jogadores Brasileiros Inicie A Sessão Na Sua Conta Mostbet Casino",
    imageUrl:
      Blog2,
  },
  {
    id: 3,
    category: "Productivity",
    title: "Top 10 Mobile Casinos Real Money Video Games In 202",
    description:
      "Top 10 Mobile Casinos Real Money Video Games In 2024 Best Mobile Casinos & Real Cash Casino Software Jul 2024 Content Make The Most Of Real Money Bonuses Create Your Account Plus Verify Balzac Casino Legit Methods To Make Money Watching Videos Popular Best Actual Money Casino Of Which Accepts Paypal 🎁 Mobile Targeted Bonuses And Promotions July’s Top 10 Actual Money Sites What App Can Help You Get At The Online Casino? How We Rated Cellular Casino Sites Regarding Real Money Players What Are The Advantages Of Playing In On The Internet Real Cash Casinos? Can You Use Credit",
    imageUrl:
     Blog3,
  },
  {
    id: 4,
    category: "Tech",
    title: "Form W-2g: Specific Gambling Winnings, Manual, And Filing How-to",
    description:
      "Form W-2g: Specific Gambling Winnings, Manual, And Filing How-tos What Income Taxes Are Due Upon Gambling Winnings? Content Can You Deduct Wagering Losses? Gambling Taxes: You Include To Report Just About All Your Winnings Your Wagering Losses Might Be Deductible Do An Individual Have To Spend Taxes On Gambling Establishment Winnings In Typically The Us? Gambling Winnings Reporting Gambling Winnings Plus Losses Gambling Losses Taxable Gambling Income If You’re An Expert Gambler Taxes On Sporting Activities Betting: How That They Work, What’s Taxable Tax Reasons For Why An Individual Should Think Twice Before Bet… How To State Gaming Wins And",
    imageUrl:
    Blog4,
  },
  
];

const SingleBlogData = () => {
  const location = useLocation();
  const blogId = parseInt(
    location.pathname.split("/").pop().replace("blog", "")
  );
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
        <h1 className="text-4xl font-bold text-primary sm:text-5xl lg:text-6xl">
          {blog.title}
        </h1>

        {/* Blog Image */}
        <div className="mt-8">
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Blog Content */}
        <div className="mt-8 text-gray-200 leading-relaxed space-y-6">
          {blog.description.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default SingleBlogData;
