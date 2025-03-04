import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialLinks = () => {
  return (
    <div className="flex gap-4 items-center">
      <a 
        href="https://www.facebook.com/profile.php?id=61561942924648" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Follow DuctBuddy on Facebook"
        className="w-10 h-10 rounded-full border border-gray-300 flex justify-center items-center text-white hover:bg-primary hover:border-primary transition-all duration-300"
      >
        <FaFacebookF />
      </a>
      <a 
        href="https://www.instagram.com/ductbuddyllc" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Follow DuctBuddy on Instagram"
        className="w-10 h-10 rounded-full border border-gray-300 flex justify-center items-center text-white hover:bg-primary hover:border-primary transition-all duration-300"
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default SocialLinks;