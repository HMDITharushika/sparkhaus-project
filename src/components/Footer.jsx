import arrowImage from "../assets/images/home-arrow-icon.png";

import { MdEmail } from "react-icons/md";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section className="text-white flex flex-col items-center justify-center text-center h-screen px-6">
      {/* Header Section */}
      <h2 className="font-bebas-neue text-[3rem] lg:text-[4rem] leading-tight mb-6">
        SPEAK WITH US IF YOU&apos;D LIKE TO TELL <br />
        YOUR STORY
      </h2>
      <p className="text-lg lg:text-xl text-gray-300 mb-8">
        Something in mind? Hop on that call!
      </p>

      {/* Call-to-Action Button */}
      <a href="/book-a-call" className="pt-6 mb-12">
        <div className="bg-white text-black rounded-2xl flex items-center justify-center mt-1 px-6 py-3 font-bebas-neue text-lg hover:bg-gray-200 transition duration-300">
          GET IN TOUCH
          <img src={arrowImage} alt="arrow" className="ml-2 w-5 h-5" />
        </div>
      </a>

      {/* Contact Information Table */}
      <div className="w-full max-w-4xl">
        <div className="grid grid-cols-3 gap-6 text-lg lg:text-xl text-gray-300">
          {/* Email Column */}
          <div className="flex items-center space-y-2 gap-2">
            <MdEmail className="w-8 h-8 text-white" />
            <span>sparkhausdigital@gmail.com</span>
          </div>

          {/* Social Media Column */}
          <div className="flex flex-col items-center space-y-2">
            <div className="flex space-x-4 text-2xl">
              <a href="" className="hover:text-gray-400">
                <FaFacebook />
              </a>
              <a href="" className="hover:text-gray-400">
                <FaInstagram />
              </a>
              <a href="" className="hover:text-gray-400">
                <FaLinkedin />
              </a>
            </div>
           
          </div>

          {/* Phone Column */}
          <div className="flex items-center space-y-2 gap-2">
            <FaPhoneAlt className="w-8 h-8 text-white" />
            <span>+94 77 786 7920</span>
            <span>+94 71 163 1003</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
