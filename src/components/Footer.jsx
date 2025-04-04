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

// export default Footer;import { Link } from "react-router-dom"
import { Linkedin, Instagram, MessageCircle, Facebook, Phone, Mail } from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => {
  const width = 1.5
  const theme = "black";
  const logo = theme !== "black" ? "logo-white.png" : "logo-black.png";

  return (
    <footer className="bg-[#0f1424] text-white py-12">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1: Company Info */}
          <div className="space-y-4">
            <Link to="/">
            <div className="relative w-40 h-20 overflow-hidden group">
            <div className="absolute inset-0 flex items-center transition-transform duration-500 ease-in-out group-hover:translate-x-[100%]">
              <img src={`/images/${logo}`} alt="Logo" className="w-20 h-20" />
            </div>
            <div className="absolute inset-0 flex items-center transition-transform duration-500 ease-in-out translate-x-[100%] group-hover:translate-x-0">
              <span className="text-xl font-bold text-white">
                Elevex Global
              </span>
            </div>
          </div>
            </Link>
            <p className="text-gray-300 text-sm max-w-xs">
              Your Partner in Global Growth. Empowering new startups with modern user experiences by bridging users'
              needs and clients' requirements.
            </p>
            <div className="flex space-x-3">
              <Link to="#" className="bg-white text-[#0f1424] rounded-full p-1.5 hover:bg-gray-300 transition-colors">
                <Linkedin size={16} strokeWidth={width} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link to="#" className="bg-white text-[#0f1424] rounded-full p-1.5 hover:bg-gray-300 transition-colors">
                <Instagram size={16} strokeWidth={width} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link to="#" className="bg-white text-[#0f1424] rounded-full p-1.5 hover:bg-gray-300 transition-colors">
                <Facebook size={16} strokeWidth={width} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link to="#" className="bg-white text-[#0f1424] rounded-full p-1.5 hover:bg-gray-300 transition-colors">
                <MessageCircle size={16} strokeWidth={width} />
                <span className="sr-only">WhatsApp</span>
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/AboutUs" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/Services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/Careers" className="text-gray-300 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/ContactUs" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Offered */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b border-gray-700 pb-2">Services Offered</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/Services/WebDevelopment" className="text-gray-300 hover:text-white transition-colors">
                  BPO
                </Link>
              </li>
              <li>
                <Link to="/Services/WebDevelopment" className="text-gray-300 hover:text-white transition-colors">
                  ITO
                </Link>
              </li>
              <li>
                <Link to="/Services/WebDevelopment" className="text-gray-300 hover:text-white transition-colors">
                  RPO
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Column 4: Pakistan & USA Offices */}
          <div className="space-y-8">
            {/* Pakistan Office */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold border-b border-gray-700 pb-2">Pakistan</h3>
              
              <div className="flex items-center space-x-2">
                <Phone className="text-gray-400" size={16} />
                <span className="text-gray-300 text-sm">+92 333 5535234</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="text-gray-400" size={16} />
                <span className="text-gray-300 text-sm">info@tecpartner.net</span>
              </div>
            </div>

            {/* UAE Office */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold border-b border-gray-700 pb-2">UAE</h3>
              <div className="flex items-center space-x-2">
                <Phone className="text-gray-400" size={16} />
                <span className="text-gray-300 text-sm">+971 50 344 9802</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="text-gray-400" size={16} />
                <span className="text-gray-300 text-sm">info@tecpartner.net</span>
              </div>
            </div>
            
          </div>

          {/* Column 5: UK & KSA Offices */}
          <div className="space-y-8">
            {/* USA Office */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold border-b border-gray-700 pb-2">USA</h3>
              <div className="flex items-center space-x-2">
                <Phone className="text-gray-400" size={16} />
                <span className="text-gray-300 text-sm">+1 719 374 8482</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="text-gray-400" size={16} />
                <span className="text-gray-300 text-sm">info@tecpartner.net</span>
              </div>
            </div>

            {/* AUSTRALIA Office */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold border-b border-gray-700 pb-2">AUSTRALIA</h3>
              <div className="flex items-center space-x-2">
                <Phone className="text-gray-400" size={16} />
                <span className="text-gray-300 text-sm">+61 410 686 748</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="text-gray-400" size={16} />
                <span className="text-gray-300 text-sm">info@tecpartner.net</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Us Button */}
        <div className="mt-20 flex justify-center">
          <Link
            to="/ContactUs"
            className="inline-flex items-center justify-center rounded-full bg-white text-[#0f1424] px-6 py-2 font-medium hover:bg-gray-200 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Copyright section */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Best Solutions Design & Development. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

