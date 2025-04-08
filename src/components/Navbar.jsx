"use client";

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Mail, MessageCircle, Home, Briefcase, Users, Phone } from "lucide-react";

const Navbar = () => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const theme = "black";

  const logo = theme === "black" ? "logo-black.png" : "logo-white.png";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isNavbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isNavbarOpen]);

  const toggleNavbar = () => {
    setNavbarOpen((prevState) => !prevState);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav
        className={`${
          isScrolled ? "bg-[#121624]/90 backdrop-blur-sm" : "bg-[#121624]"
        } fixed w-full z-30 transition-all duration-300`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2 md:py-4">
          {/* Logo */}
          <Link to="/" className="text-white font-bold">
            <div className="relative w-32 md:w-40 h-16 md:h-20 overflow-hidden group">
              <div className="absolute inset-0 flex items-center transition-transform duration-500 ease-in-out group-hover:translate-x-[100%]">
                <img src={`/images/${logo}`} alt="Logo" className="w-16 h-16 md:w-20 md:h-20" />
              </div>
              <div className="absolute inset-0 flex items-center transition-transform duration-500 ease-in-out translate-x-[100%] group-hover:translate-x-0">
                <span className="text-lg md:text-xl font-bold text-white">
                  Elevex Global
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop/Tablet Navigation */}
          <div className="hidden md:flex items-center">
            <div className="bg-white rounded-full px-3 md:px-4 py-2">
              <ul className="flex space-x-4 md:space-x-8 items-center">
                <li>
                  <Link
                    to="/"
                    className={`text-sm font-medium ${
                      isActive("/") ? "text-[#4154f1]" : "text-gray-800"
                    } hover:text-[#4154f1] transition-colors`}
                  >
                    Home
                  </Link>
                </li>
                <li className="group relative">
                  <Link
                    to="/Services"
                    className={`text-sm font-medium ${
                      isActive("/Services") ? "text-[#4154f1]" : "text-gray-800"
                    } hover:text-[#4154f1] transition-colors flex items-center gap-0`}
                  >
                    <div className="flex items-center justify-center gap-1">
                      <p>Services</p>
                      <ChevronDown className="h-5 w-5 pt-0.5" />
                    </div>
                  </Link>
                  <div className="absolute left-0 top-full mt-0 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden group-hover:block">
                    <Link
                      to="/service-detail/rpo"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                    >
                      RPO
                    </Link>
                    <Link
                      to="/service-detail/ito"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                    >
                      ITO
                    </Link>
                    <Link
                      to="/service-detail/bpo"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                    >
                      BPO
                    </Link>
                  </div>
                </li>
                <li>
                  <Link
                    to="/Career"
                    className={`text-sm font-medium ${
                      isActive("/Career") ? "text-[#4154f1]" : "text-gray-800"
                    } hover:text-[#4154f1] transition-colors`}
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/AboutUs"
                    className={`text-sm font-medium ${
                      isActive("/AboutUs") ? "text-[#4154f1]" : "text-gray-800"
                    } hover:text-[#4154f1] transition-colors`}
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Us Button and Icons */}
          <div className="flex items-center gap-2 md:gap-4">
            <Link
              to="/ContactUs"
              className="md:block border border-white text-white hover:bg-white hover:text-[#121624] transition-colors px-3 md:px-5 py-1.5 md:py-2 rounded-full text-sm md:text-base"
            >
              Contact Us
            </Link>
            <div className="hidden md:block">
              <a href="mailto:info@tecpartner.net" target="_blank" rel="noopener noreferrer">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-white cursor-pointer hover:text-red-400 transition-all duration-200 ease-in-out"/>
              </a>
            </div>
            <div className="hidden md:block">
              <a href="https://wa.me/923335535234" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-white cursor-pointer hover:text-green-500 transition-all duration-200 ease-in-out" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#121624] z-30 px-2 py-3 shadow-lg">
        <div className="flex justify-around items-center">
          <Link 
            to="/" 
            className={`flex flex-col items-center ${isActive("/") ? "text-white" : "text-gray-400"}`}
          >
            <Home className="w-6 h-6" />
            <span className="text-xs mt-1">Home</span>
          </Link>
          <div className="relative group">
            <button
              onClick={toggleNavbar}
              className={`flex flex-col items-center ${
                isActive("/Services") || location.pathname.includes("/service-detail/") 
                  ? "text-white" 
                  : "text-gray-400"
              }`}
            >
              <Briefcase className="w-6 h-6" />
              <span className="text-xs mt-1 flex items-center">
                Services <ChevronDown className="h-3 w-3 ml-1" />
              </span>
            </button>
          </div>
          <Link 
            to="/Career" 
            className={`flex flex-col items-center ${isActive("/Career") ? "text-white" : "text-gray-400"}`}
          >
            <Users className="w-6 h-6" />
            <span className="text-xs mt-1">Careers</span>
          </Link>
          <Link 
            to="/AboutUs" 
            className={`flex flex-col items-center ${isActive("/AboutUs") ? "text-white" : "text-gray-400"}`}
          >
            <Users className="w-6 h-6" />
            <span className="text-xs mt-1">About</span>
          </Link>
          <Link 
            to="/ContactUs" 
            className={`flex flex-col items-center ${isActive("/ContactUs") ? "text-white" : "text-gray-400"}`}
          >
            <Phone className="w-6 h-6" />
            <span className="text-xs mt-1">Contact</span>
          </Link>
        </div>
      </div>

      {/* Mobile Services Dropdown (when clicked from bottom bar) */}
      {isNavbarOpen && (
        <div className="fixed inset-0 bg-[#121624]/95 pt-16 px-4 z-50 overflow-y-auto md:hidden">
          <div className="flex justify-center items-center mb-6">
            <h2 className="text-white text-xl font-bold">Our Services</h2>
          </div>
          <ul className="flex flex-col space-y-4">
            <li>
              <Link
                to="/Services"
                className="block text-white hover:text-gray-300 transition-colors text-lg text-center font-medium"
                onClick={() => setNavbarOpen(false)}
              >
                Services
              </Link>
            </li>
            <li className="border-t border-gray-700 pt-4 mt-2"></li>
            <li>
              <Link
                to="/service-detail/rpo"
                className="block text-gray-300 hover:text-white transition-colors text-lg text-center"
                onClick={() => setNavbarOpen(false)}
              >
                RPO
              </Link>
            </li>
            <li>
              <Link
                to="/service-detail/ito"
                className="block text-gray-300 hover:text-white transition-colors text-lg text-center"
                onClick={() => setNavbarOpen(false)}
              >
                ITO
              </Link>
            </li>
            <li>
              <Link
                to="/service-detail/bpo"
                className="block text-gray-300 hover:text-white transition-colors text-lg text-center"
                onClick={() => setNavbarOpen(false)}
              >
                BPO
              </Link>
            </li>
            <li className="pt-4">
              <button
                className="text-white border border-white px-4 py-2 rounded-full w-full"
                onClick={() => setNavbarOpen(false)}
              >
                Close
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* Add padding to the bottom of the page to account for the mobile navigation bar */}
      <div className="md:hidden h-16"></div>
    </>
  );
};

export default Navbar;
