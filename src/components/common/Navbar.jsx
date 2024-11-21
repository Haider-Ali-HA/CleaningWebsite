import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Image from "../../assets/logo-2.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  let dropdownTimeout = null; // Timeout for desktop hover delay

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleDropdownToggle = (index) => {
    setDropdownOpen((prev) => (prev === index ? null : index));
  };

  const handleMouseEnter = (index) => {
    clearTimeout(dropdownTimeout);
    setDropdownOpen(index);
  };

  const handleMouseLeave = () => {
    dropdownTimeout = setTimeout(() => setDropdownOpen(null), 200);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(dropdownTimeout);
    };
  }, []);

  const links = [
    {
      label: "Air Duct Cleaning",
      path: "/air-duct",
      sublinks: [
        { label: "Commercial Duct Cleaning", path: "/air-duct/commercial" },
        { label: "Residential Duct Cleaning", path: "/air-duct/residential" },
        { label: "Billionaire Duct Cleaning", path: "/air-duct/billionaire" },
        { label: "Industrial Air Duct Cleaning", path: "/air-duct/industrial" },
        { label: "Maritime Air Duct Cleaning", path: "/air-duct/maritime" },
      ],
    },
    {
      label: "Dryer Vent Cleaning",
      path: "/dryer-vent",
      sublinks: [
        { label: "Residential Dryer Vent Cleaning", path: "/dryer-vent/residential" },
        { label: "Commercial Dryer Vent Cleaning", path: "/dryer-vent/commercial" },
        { label: "Exterior Bird Guard", path: "/dryer-vent/bird-guard" },
      ],
    },
    { label: "Ptac Cleaning", path: "/ptac-cleaning" },
    {
      label: "Restoration",
      path: "/restoration",
      sublinks: [
        { label: "Smoke Restoration Services", path: "/restoration/smoke" },
        { label: "Mold Restoration Services", path: "/restoration/mold" },
        { label: "Fire Restoration Services", path: "/restoration/fire" },
        { label: "Water Restoration Services", path: "/restoration/water" },
      ],
    },
    {
      label: "About Us",
      path: "/about",
    },
    {
      label: "Resources",
      path: "/resources",
      
    },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full  ${
        scrolled ? "bg-[#0f191d] bg-opacity-100" : "bg-[#0f191d] bg-opacity-70"
      } shadow-lg z-30`}
    >
      <div className="px-4 mx-auto w-5/6 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="font-bold text-lg lg:text-3xl text-white">
            <img src={Image} className="w-auto h-12 lg:h-24 lg:mt-16" alt="" />
          </NavLink>

          {/* Hamburger Menu Button */}
          <button
            type="button"
            onClick={toggleMenu}
            className="xl:hidden text-white"
          >
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 8h16M4 16h16"
                />
              </svg>
            )}
          </button>

          {/* Desktop Navbar */}
          <div className="hidden xl:flex lg:items-center lg:space-x-5 text-white">
            {links.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <NavLink
                  to={item.path}
                  className="flex items-center w-auto text-sm font-medium hover:text-primary"
                  onClick={(e) => item.sublinks && e.preventDefault()}
                >
                  {item.label}
                  {item.sublinks && (
                    <svg
                      className={`h-3 transition-transform ${
                        dropdownOpen === index ? "rotate-180" : "rotate-0"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </NavLink>
                {dropdownOpen === index && item.sublinks && (
                  <div className="absolute left-0 mt-2 w-48 bg-white text-black border rounded-md shadow-md">
                    {item.sublinks.map((sublink, subIndex) => (
                      <NavLink
                        key={subIndex}
                        to={sublink.path}
                        className="block px-4 py-2 text-sm hover:bg-primary"
                        onClick={handleLinkClick}
                      >
                        {sublink.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* Mobile Navbar */}
        <div
          className={`xl:hidden ${menuOpen ? "mt-5" : "-mt-5"} bg-white text-black p-4 rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {links.map((item, index) => (
            <div key={index}>
              {item.sublinks ? (
                <>
                  <button
                    onClick={() => handleDropdownToggle(index)}
                    className="flex items-center justify-between w-full py-2 text-base font-medium"
                  >
                    {item.label}
                    <svg
                      className={`w-5 h-5 transition-transform ${
                        dropdownOpen === index ? "rotate-180" : "rotate-0"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {dropdownOpen === index && (
                    <div className="pl-4 mt-2 space-y-1">
                      {item.sublinks.map((sublink, subIndex) => (
                        <NavLink
                          key={subIndex}
                          to={sublink.path}
                          className="block py-2 text-primary text-md hover:bg-gray-100"
                          onClick={handleLinkClick}
                        >
                          {sublink.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <NavLink
                  to={item.path}
                  className="block py-2 text-black font-semibold text-md hover:bg-gray-100"
                  onClick={handleLinkClick}
                >
                  {item.label}
                </NavLink>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
