// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import HeaderTopBar from "./HeaderTopBar";

// const Navbar = () => {
//   const [isNavbarOpen, setNavbarOpen] = useState(false);

//   useEffect(() => {
//     if (isNavbarOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//   }, [isNavbarOpen]);

//   const toggleNavbar = () => {
//     setNavbarOpen((prevState) => !prevState);
//   };

//   const linkClasses =
//     "block py-2 text-[#15307c] hover:bg-[#15307c] hover:text-white rounded-full px-4 duration-500";

//   return (
//     <nav className=" mirror  h-18 bg-white border-gray-200 scroll-smooth focus:scroll-auto shadow-lg	 fixed w-full z-30 ">
//       <div className="hidden sm:block">
//         <HeaderTopBar />
//       </div>
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
//         <span className=" h-16 w-28 p-4 self-center text-2xl font-semibold whitespace-nowrap text-white flex items-center space-x-3 rtl:space-x-reverse">
//           <Link to="/">
//             <img src="images/logo.png" alt="logo" />
//           </Link>
//         </span>
//         <button
//           onClick={toggleNavbar}
//           type="button"
//           aria-label="Toggle navigation menu"
//           className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden text-[#15307c] focus:outline-none focus:ring-2 focus:ring-[#9eafd6] "
//           aria-controls="navbar-multi-level"
//           aria-expanded={isNavbarOpen}
//         >
//           <span className="sr-only">Open main menu</span>
//           <svg
//             className="w-5 h-5"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 17 14"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M1 1h15M1 7h15M1 13h15"
//             />
//           </svg>
//         </button>
//         <div
//           className={`${
//             isNavbarOpen ? "block" : "hidden"
//           } w-full md:block md:w-auto`}
//           id="navbar-multi-level"
//         >
//           <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-[#9eafd6] rounded-lg md:flex-row md:mt-0 md:border-0 space-x-3 rtl:space-x-4">
//             {/* Home */}
//             <li className="px-3">
//               <Link to="/" className={linkClasses} aria-current="page">
//                 Home
//               </Link>
//             </li>
//             {/* about */}
//             <li>
//               <Link to="/AboutUs" className={linkClasses}>
//                 About Us
//               </Link>
//             </li>
//             {/* Services */}
//             <li>
//               <Link to="/services">
//                 <div className="dropdown dropdown-hover w-full">
//                   <div
//                     tabIndex={0}
//                     role="button"
//                     className="flex gap-2 items-center justify-start py-2 text-[#15307c] hover:bg-[#15307c] hover:text-white rounded-full px-4 duration-500 border-transparent border-0"
//                   >
//                     <h3>Services</h3>
//                     <svg
//                       className="h-4 mt-1"
//                       data-slot="icon"
//                       aria-hidden="true"
//                       fill="#15307c"
//                       stroke-width="1.5"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="m19.5 8.25-7.5 7.5-7.5-7.5"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       ></path>
//                     </svg>
//                   </div>
//                   <ul
//                     tabIndex={0}
//                     className="dropdown-content menu rounded-box z-[1] w-52 p-2 bg-white shadow-lg shadow-[#15307c]"
//                   >
//                     <li className="text-[#15307c] hover:bg-[#15307c] hover:text-white rounded transition ease-in-out duration-500 focus:bg-[#15307c]">
//                       <Link to="/service-detail/rpo">RPO</Link>
//                     </li>
//                     <li className="text-[#15307c] hover:bg-[#15307c] hover:text-white rounded-lg transition ease-in-out duration-500">
//                       <Link to="/service-detail/bpo">BPO</Link>
//                     </li>
//                     <li className="text-[#15307c] hover:bg-[#15307c] hover:text-white rounded-lg transition ease-in-out duration-500">
//                       <Link to="/service-detail/ito">ITO</Link>
//                     </li>
//                   </ul>
//                 </div>
//               </Link>
//             </li>
//             {/* Career */}
//             <li>
//               <Link to="/Career" className={linkClasses}>
//                 Careers
//               </Link>
//             </li>
//             {/* Contact */}
//             <li>
//               <Link to="/ContactUs" className={linkClasses}>
//                 Contact Us
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

"use client"

import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, ChevronDown } from "lucide-react"

const Navbar = () => {
  const [isNavbarOpen, setNavbarOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isNavbarOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [isNavbarOpen])

  const toggleNavbar = () => {
    setNavbarOpen((prevState) => !prevState)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav
      className={`${isScrolled ? "bg-[#121624]/90 backdrop-blur-sm" : "bg-[#121624]"} fixed w-full z-30 transition-all duration-300`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-4">
        {/* Logo */}
        <Link to="/" className="text-white text-3xl font-bold">
          Logo
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={toggleNavbar}
          type="button"
          aria-label="Toggle navigation menu"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <Menu className="w-6 h-6" />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <div className="bg-white rounded-full px-4 py-2">
            <ul className="flex space-x-8 items-center">
              <li>
                <Link
                  to="/"
                  className={`text-sm font-medium ${isActive("/") ? "text-[#4154f1]" : "text-gray-800"} hover:text-[#4154f1] transition-colors`}
                >
                  Home
                </Link>
              </li>
              <li className="group relative">
                <Link
                  to="/Services"
                  className={`text-sm font-medium ${isActive("/Services") ? "text-[#4154f1]" : "text-gray-800"} hover:text-[#4154f1] transition-colors flex items-center gap-0`}
                >
                  Services
                </Link>
                <div className="absolute left-0 top-full mt-0 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden group-hover:block">
                  <Link to="/service-detail/rpo" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                    RPO
                  </Link>
                  <Link to="/service-detail/bpo" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                    BPO
                  </Link>
                  <Link to="/service-detail/ito" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                    ITO
                  </Link>
                </div>
              </li>
              <li>
                <Link
                  to="/Career"
                  className={`text-sm font-medium ${isActive("/Career") ? "text-[#4154f1]" : "text-gray-800"} hover:text-[#4154f1] transition-colors`}
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/AboutUs"
                  className={`text-sm font-medium ${isActive("/AboutUs") ? "text-[#4154f1]" : "text-gray-800"} hover:text-[#4154f1] transition-colors`}
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Us Button */}
        <Link
          to="/ContactUs"
          className="hidden md:block border border-white text-white hover:bg-white hover:text-[#121624] transition-colors px-5 py-2 rounded-full"
        >
          Contact Us
        </Link>

        {/* Mobile Navigation */}
        <div className={`${isNavbarOpen ? "fixed inset-0 bg-[#121624] pt-20 px-6 z-50" : "hidden"} md:hidden`}>
          <ul className="flex flex-col space-y-6">
            <li>
              <Link
                to="/"
                className="text-white text-lg font-medium hover:text-gray-300 transition-colors"
                onClick={() => setNavbarOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <div className="relative">
                <button
                  className="flex items-center justify-between w-full text-white text-lg font-medium hover:text-gray-300 transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("mobile-services-dropdown").classList.toggle("hidden")
                  }}
                >
                  <span>Services</span>
                  <ChevronDown className="h-5 w-5" />
                </button>
                <div id="mobile-services-dropdown" className="hidden mt-2 pl-4 space-y-2">
                  <Link
                    to="/service-detail/rpo"
                    className="block text-gray-300 hover:text-white transition-colors"
                    onClick={() => setNavbarOpen(false)}
                  >
                    RPO
                  </Link>
                  <Link
                    to="/service-detail/bpo"
                    className="block text-gray-300 hover:text-white transition-colors"
                    onClick={() => setNavbarOpen(false)}
                  >
                    BPO
                  </Link>
                  <Link
                    to="/service-detail/ito"
                    className="block text-gray-300 hover:text-white transition-colors"
                    onClick={() => setNavbarOpen(false)}
                  >
                    ITO
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <Link
                to="/Career"
                className="text-white text-lg font-medium hover:text-gray-300 transition-colors"
                onClick={() => setNavbarOpen(false)}
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                to="/AboutUs"
                className="text-white text-lg font-medium hover:text-gray-300 transition-colors"
                onClick={() => setNavbarOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/Career"
                className="text-white text-lg font-medium hover:text-gray-300 transition-colors"
                onClick={() => setNavbarOpen(false)}
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                to="/ContactUs"
                className="inline-block border border-white text-white hover:bg-white hover:text-[#121624] transition-colors px-5 py-2 rounded-full"
                onClick={() => setNavbarOpen(false)}
              >
                Contact Us
              </Link>
            </li>
            <li className="pt-6">
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-full p-2 flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#0e76a8"
                    stroke="none"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-full p-2 flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#e4405f"
                    stroke="none"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/17193748482"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-full p-2 flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#25D366"
                    stroke="none"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

