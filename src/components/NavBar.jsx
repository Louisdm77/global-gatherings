import React, { useState } from "react";
import { FiAlignJustify, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [page, setPage] = useState("");

  const nav = [
    { name: "Home", link: "/" },
    {name:'Timeline',link:'/timeline'},
    { name: "About", link: "/about" },
    { name: "Offerings", link: "/offerings" },
    { name: "Contact", link: "/contact" },
  ];

  const handleNavClick = () => {
    setOpenNav(!openNav);
  };

  const handleItemClick = (name) => {
    setPage(name);
    setOpenNav(false); // Close the nav menu after selection
  };

  return (
    <div className="flex justify-between items-center px-4 md:px-10 py-2 bg-white shadow-md fixed w-full z-100">
      <div className="flex items-center">
        <h1 className="text-xl font-bold">Global Gatherings </h1>
      </div>

      <div className="hidden lg:flex flex-grow justify-center text-lg">
        <ul className="flex space-x-4 font-base">
          {nav.map((item, index) => (
            <Link to={item.link}>
              <li
                key={index}
                onClick={() => handleItemClick(item.name)}
                className={`cursor-pointer text-black hover:text-purple-500 ${
                  page === item.name ? "font-bold" : ""
                }`}
              >
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {/* Call to Action Button */}
      <div className="hidden lg:block">
        <button className="text-indigo-800 border border-purple-500 border-2 font-bold px-4 py-2 rounded hover:text-white hover:bg-purple-600 transition">
          Get Started
        </button>
      </div>

      {/* Mobile Navigation Toggle */}
      <div className="lg:hidden ">
        <div className="bg-purple-500">
          <div
            onClick={handleNavClick}
            className={`rounded-lg p-2 text-xl cursor-pointer text-white ${
              openNav ? "hidden" : "block"
            }`}
          >
            <FiAlignJustify />
          </div>
          <div
            onClick={handleNavClick}
            className={`rounded-lg p-2 text-xl cursor-pointer text-white ${
              !openNav ? "hidden" : "block"
            }`}
          >
            <FiX />
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {openNav && (
        <div className="absolute top-12 left-0 w-full bg-white shadow-md z-10">
          <ul>
            {nav.map((item, index) => (
              <Link to={item.link}>
                <li
                  key={index}
                  onClick={() => handleItemClick(item.name)}
                  className={`p-2 border-b border-gray-300 w-full block text-black hover:bg-gray-200 ${
                    page === item.name ? "text-purple-500" : ""
                  }`}
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
