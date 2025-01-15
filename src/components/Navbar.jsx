import { useState } from "react";
import logo from "../assets/images/sparkhaus.png";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="top-0 z-10 w-full font-bebas-neue">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between mt-8 px-4 py-1 backdrop-blur-lg border border-white/10 rounded-3xl">
        <img src={logo} alt="SparkHaus Logo" className="w-32" />

        <div className="hidden lg:flex space-x-8 text-lg uppercase hover:text-gray-400">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
        </div>

        <a
          href="*"
          className="hidden lg:inline-block rounded-full bg-white px-6 py-2 text-black font-medium uppercase tracking-wide shadow-lg transition hover:bg-blue-900 hover:text-white transform hover:border-white border border-transparent duration-500 active:border-white"
        >
          Book a Call
        </a>
      </div>

      {/* Mobile Menu*/}
      <div className="lg:hidden flex items-center ml-auto">
        <button onClick={toggleMobileMenu} className="text-xl">
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="w-full backdrop-blur-lg lg:hidden bg-black p-4 rounded-lg bg-opacity-50">
          <div className="flex flex-col items-center space-y-4 text-lg">
            <a href="#services" className="text-white">
              Services
            </a>
            <a href="#about" className="text-white">
              About
            </a>
            <a href="#portfolio" className="text-white">
              Portfolio
            </a>
            <a
              href="*"
              className="rounded-full bg-white px-6 py-2 text-black font-medium uppercase tracking-wide shadow-lg transition hover:bg-blue-900 hover:text-white transform hover:border-white border border-transparent duration-500 active:border-white"
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
