import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialLinks = () => {
  return (
    <>
      <Link
        to="https://www.facebook.com/"
        className="p-3 bg-white text-black rounded-full hover:bg-primary hover:text-white transition"
      >
        <FaFacebookF />
      </Link>
      <Link
      to="https://www.Instagram.com/"
        className="p-3 bg-white text-black rounded-full hover:bg-primary hover:text-white transition"
      >
        <FaInstagram />
      </Link>
      <Link
        to="https://www.Twitter.com/"
        className="p-3 bg-white text-black rounded-full hover:bg-primary hover:text-white transition"
      >
        <FaTwitter />
      </Link>
      <Link
        to="https://www.Youtube.com/"
        className="p-3 bg-white text-black rounded-full hover:bg-primary hover:text-white transition"
      >
        <FaYoutube />
      </Link>
    </>
  );
};

export default SocialLinks;
