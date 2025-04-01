// import React from "react";
// import { Link } from "react-router-dom";
// import SocialLinks from "./SocialLinks";

// const Footer = () => {
//   let color = "black";
//   let width = 1.5;
//   let heightAndWidth = 24;
//   return (
//     <footer className="footer overflow-hidden">
//       <div className="container px-6 py-12 pb-0 mx-auto flex flex-col items-center justify-center">
//         <div className="lg:flex lg:gap-48 border-b border-solid border-gray-500 pb-4">
//           <div className="w-auto -mx-6">
//             <div className="px-6 flex flex-col items-center justify-center flex-1">
//               <Link to="/">
//                 <img src="images/logo.png" alt="logo" className="h-24 w-24 " />
//               </Link>

//               <SocialLinks color={color} width={width} heightAndWidth={heightAndWidth}/>
              
//             </div>
//           </div>

//           <div className="second mt-6 lg:mt-0 lg:flex-1">
//             <div className="flex gap-12 items-center justify-center">
//               <div className="flex flex-col sm:flex-row p-6 gap-6  justify-center">

//               <div>
//                 <h3 className="text-black uppercase font-bold">
//                   Quick Links
//                 </h3>
//                 <div className="flex flex-col my-2 text-gray-800">
//                   <Link to="/" className="hover:underline">
//                     Home
//                   </Link>
//                   <Link to="/AboutUs" className="hover:underline">
//                     About Us
//                   </Link>
//                   <Link to="/Services" className="hover:underline">
//                     Services
//                   </Link>
//                   <Link to="/Career" className="hover:underline">
//                     Career
//                   </Link>
//                   <Link to="/ContactUs" className="hover:underline">
//                     Contact Us
//                   </Link>
//                 </div>
//               </div>

//               <div>
//                 <h3 className="text-black uppercase font-bold">SERVICES</h3>
//                 <Link to="/Services">
//                   <span className="block mt-2 text-sm text-gray-800 hover:underline">
//                     RPO
//                   </span>
//                 </Link>
//                 <Link to="/Services">
//                   <span className="block mt-2 text-sm text-gray-800 hover:underline">
//                     BPO
//                   </span>
//                 </Link>
//                 <Link to="/Services">
//                   <span className="block mt-2 text-sm text-gray-800 hover:underline">
//                     ITO
//                   </span>
//                 </Link>
//               </div>

//               </div>


//               <div className="flex gap-6 flex-wrap justify-center items-center">
//                 {/* first half */}
//                 <div className="space-y-6">

//                 <div>
//                   <h3 className="text-black uppercase font-bold">
//                     PAKISTAN
//                   </h3>
//                   <span className="block mt-2 text-sm text-gray-800 hover:underline">
//                     +92 333 5535234
//                   </span>
//                   <a
//                     href="mailto:info@tecpartner.net"
//                     className="block mt-2 text-sm text-gray-800 hover:underline"
//                   >
//                     info@tecpartner.net
//                   </a>
//                 </div>

//                 <div>
//                   <h3 className="text-black uppercase font-bold">UAE</h3>
//                   <span className="block mt-2 text-sm text-gray-800 hover:underline">
//                     +971 50 344 9802
//                   </span>
//                   <a
//                     href="mailto:info@tecpartner.net"
//                     className="block mt-2 text-sm text-gray-800 hover:underline"
//                   >
//                     info@tecpartner.net
//                   </a>
//                 </div>

//                 </div>

//                 {/* first half */}

//                 <div className="space-y-6">

//                 <div>
//                   <h3 className="text-black uppercase font-bold">
//                     AUSTRALIA
//                   </h3>
//                   <span className="block mt-2 text-sm text-gray-800 hover:underline">
//                     +61 410 686 748
//                   </span>
//                   <a
//                     href="mailto:info@tecpartner.net"
//                     className="block mt-2 text-sm text-gray-800 hover:underline"
//                   >
//                     info@tecpartner.net
//                   </a>
//                 </div>

//                 <div>
//                   <h3 className="text-black uppercase font-bold">USA</h3>
//                   <span className="block mt-2 text-sm text-gray-800 hover:underline">
//                     +1 719 374 8482
//                   </span>
//                   <a
//                     href="mailto:info@tecpartner.net"
//                     className="block mt-2 text-sm text-gray-800 hover:underline"
//                   >
//                     info@tecpartner.net
//                   </a>
//                 </div>

//                 </div>

//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="pb-4 pt-3">
//           <p className="text-center text-gray-900 dark:text-gray-900">
//             © TecPartner - All rights reserved
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Instagram, MessageCircle, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Logo</h2>
            <p className="text-gray-300 max-w-xs">
              Empowering new startups with modern user experiences by bridging users' needs and clients' requirements.
              Our expertise lies in developing innovative and impactful solutions.
            </p>
            <div className="flex space-x-4">
              <Link
                to="#"
                className="bg-white text-[#111827] rounded-full p-2 hover:bg-[#4052e6] hover:text-white transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                to="#"
                className="bg-white text-[#111827] rounded-full p-2 hover:bg-[#4052e6] hover:text-white transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                to="#"
                className="bg-white text-[#111827] rounded-full p-2 hover:bg-[#4052e6] hover:text-white transition-colors"
              >
                <MessageCircle size={20} />
                <span className="sr-only">WhatsApp</span>
              </Link>
              <Link
                to="#"
                className="bg-white text-[#111827] rounded-full p-2 hover:bg-[#4052e6] hover:text-white transition-colors"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#4052e6] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-[#4052e6] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-[#4052e6] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-gray-300 hover:text-[#4052e6] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#4052e6] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-[#4052e6] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-[#4052e6] transition-colors">
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/web-development" className="text-gray-300 hover:text-[#4052e6] transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services/graphic-design" className="text-gray-300 hover:text-[#4052e6] transition-colors">
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link to="/services/mobile-apps" className="text-gray-300 hover:text-[#4052e6] transition-colors">
                  Mobile Applications
                </Link>
              </li>
              <li>
                <Link to="/services/ui-ux" className="text-gray-300 hover:text-[#4052e6] transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  to="/services/digital-marketing"
                  className="text-gray-300 hover:text-[#4052e6] transition-colors"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/services/seo" className="text-gray-300 hover:text-[#4052e6] transition-colors">
                  SEO
                </Link>
              </li>
              <li>
                <Link to="/services/content" className="text-gray-300 hover:text-[#4052e6] transition-colors">
                  Content Writing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-[#4052e6] mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">New York, United States</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-[#4052e6] flex-shrink-0" size={18} />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-[#4052e6] flex-shrink-0" size={18} />
                <span className="text-gray-300">info@bestsolutions.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="text-[#4052e6] mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">Opening Hours: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
            <Link
              to="/ContactUs"
              className="inline-flex items-center justify-center rounded-full bg-[#4052e6] px-6 py-3 text-sm font-medium text-white hover:bg-[#4052e6]/90 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Best Solutions Design & Development. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
