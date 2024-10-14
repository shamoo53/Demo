import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FiHome, FiInfo, FiLayers, FiPhone } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
   <div className="navbar bg-[#FFFFFF] shadow-md h-[85px]">
     <div className=" w-full max-w-[1440px] mx-auto justify-between  ">
      <div className="navbar-start pl-4 lg:pl-14"
           data-aos="zoom-in-right"
      >
        <a className="text-xl font-semibold flex items-center text-[#000000]">
          DemoApp
        </a>
      </div>

      <div className="navbar-center hidden md:flex gap-20 font-semibold text-[#000000]"
           data-aos="fade-up"
           data-aos-anchor-placement="top-bottom"
      >
        <Link to='/' className="flex items-center gap-2 cursor-pointer transform transition-transform hover:scale-110 hover:shadow-lg">
          <FiHome />
          <h2>Home</h2>
        </Link>
        <div className="flex items-center gap-2 cursor-pointer transform transition-transform hover:scale-110 hover:shadow-lg">
          <FiInfo />
          <h2>About</h2>
        </div>
        <div className="flex items-center gap-2 cursor-pointer transform transition-transform hover:scale-110 hover:shadow-lg">
        <FiLayers />
          <h2>Services</h2>
        </div>
        <div className="flex items-center gap-2 cursor-pointer transform transition-transform hover:scale-110 hover:shadow-lg">
          <FiPhone />
          <h2>Contact</h2>
        </div>
      </div>

      <div 
        className="navbar-end hidden md:flex pr-4 lg:pr-14" 
        data-aos="zoom-in-left"
      >
        <Link
          to="/"
          className="bg-[#413FA0] w-[100px] h-[39px] text-[#ffff] text-sm font-semibold outline-none border-none rounded-[5px] semi-bold px-6 py-2 transform transition-transform hover:scale-110 hover:shadow-lg"
        >
          Sign in
        </Link>
      </div>

      {/* Hamburger Menu */}
      <div className=" md:hidden pr-4">
        <button onClick={toggleMenu} className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-[85px] left-0 w-full bg-white shadow-lg rounded-lg py-2 z-50">
          <div className="flex flex-col items-start px-4">
            <Link to='/' className="flex items-center gap-2 py-2 transform transition-transform hover:scale-110 hover:shadow-lg">
              <FiHome />
              <h2>Home</h2>
            </Link>
            <div className="flex items-center gap-2 py-2 transform transition-transform hover:scale-110 hover:shadow-lg">
              <FiInfo />
              <h2>About</h2>
            </div>
            <div className="flex items-center gap-2 py-2 transform transition-transform hover:scale-110 hover:shadow-lg">
            <FiLayers />
              <h2>Services</h2>
            </div>
            <div className="flex items-center gap-2 py-2 transform transition-transform hover:scale-110 hover:shadow-lg">
              <FiPhone />
              <h2>Contact</h2>
            </div>
            <Link
              to="/"
              className="block w-[100px] h-[39px] py-2 bg-[#413FA0] text-white rounded-md mt-2 text-center transform transition-transform hover:scale-110 hover:shadow-lg"
            >
              Sign in
            </Link>
          </div>
        </div>
      )}
    </div>
   </div>
  );
};

export default Navbar;
