import { MdArrowOutward } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center h-screen px-6">
      <h2 className="font-bebas-neue text-[3rem] sm:text-[4rem] leading-tight mb-6">
        SPEAK WITH US IF YOU&apos;D LIKE TO TELL <br />
        YOUR STORY
      </h2>
      <p className="text-lg lg:text-xl text-gray-300 mb-6">
        Something in mind? Hop on that call!
      </p>

      <a href="/book-a-call" className="pt-10 mb-6">
        <div
          className="group bg-white text-black border-2 border-transparent rounded-2xl flex items-center justify-center text-center mt-1 px-4 py-2 font-bebas-neue 
                        hover:border-white transition duration-500 hover:bg-black hover:text-white active:border-white"
        >
          GET IN TOUCH
          <MdArrowOutward className="ml-2 w-5 h-5 transform transition-transform duration-600 ease-in-out group-hover:rotate-[45deg]" />
        </div>
      </a>

      <div className="w-full max-w-4xl text-sm">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-lg sm:text-xl lg:text-2xl text-gray-300">
          <div className="flex items-center space-x-2">
            <MdEmail className="w-5 h-5" />
            <span>sparkhausdigital@gmail.com</span>
          </div>

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

          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="w-5 h-5" />
            <div>
              <span>+94 77 786 7920, +94 71 163 1003</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
