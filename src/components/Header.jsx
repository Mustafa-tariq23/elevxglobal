import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { Linkedin, Instagram, MessageCircle, Plus } from "lucide-react";

const Header = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="bg-[#121624] min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-4 pt-24 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-8 z-10">
              <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold leading-tight text-white">
                {/* Your Partner in Global<br />Growth. */}
                Expert IT Services &amp; Consultancy. <br /> Scalable Solutions for Your Business Growth.
              </h1>

              <div className="flex space-x-3 pt-4">
                <Link
                  to="/ContactUs"
                  className="bg-[#4154f1] hover:bg-[#3645d1] transition-colors duration-300 text-white px-6 py-2 rounded-full"
                >
                  Contact Us
                </Link>
                <Link
                  to="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-full p-2 flex items-center justify-center"
                >
                  <Linkedin size={20} className="text-[#0e76a8]" />
                </Link>
                <Link
                  to="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-full p-2 flex items-center justify-center"
                >
                  <Instagram size={20} className="text-[#e4405f]" />
                </Link>
                <Link
                  to="https://wa.me/17193748482"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-full p-2 flex items-center justify-center"
                >
                  <MessageCircle size={20} className="text-[#25D366]" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-16 -right-8 w-24 h-24 rounded-full border-2 border-gray-700 opacity-70"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  // src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-27%20at%208.55.13%20PM-mXw6WACb5ek9tvf0Lfv62Gz8uHRx3n.png"
                  src="/images/header-image.png"
                  alt="Person working on laptop"
                  className="w-full object-cover"
                />
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#1e2235] opacity-20">
                <div className="text-[180px] font-bold">HI</div>
              </div>
              <div className="absolute bottom-8 right-8 bg-white rounded-full p-3">
                <Plus className="text-gray-800" size={24} />
              </div>
            </div>
          </div>

          <div className="text-center mt-16 max-w-3xl mx-auto text-gray-300">
            <p>
              Empowering new startups with modern user experiences by bridging
              users' needs and clients' requirements. Our expertise lies in
              developing innovative and impactful solutions.
            </p>
          </div>
        </div>

        {/* <div className="bg-[#4154f1] py-4 overflow-hidden mt-auto">
          <div className="flex animate-marquee whitespace-nowrap">
            <div className="mx-8 text-lg font-semibold text-white">Web Development</div>
            <div className="mx-8 text-lg font-semibold text-white">UI/UX Designer</div>
            <div className="mx-8 text-lg font-semibold text-white">Custom Logo Designer</div>
            <div className="mx-8 text-lg font-semibold text-white">Web Development</div>
            <div className="mx-8 text-lg font-semibold text-white">UI/UX Designer</div>
            <div className="mx-8 text-lg font-semibold text-white">Custom Logo Designer</div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
