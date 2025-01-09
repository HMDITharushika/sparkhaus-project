import logo from "../assets/images/sparkhaus.png";

const NavBar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full text-white">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between mt-8 px-4 py-1 backdrop-blur-lg border border-slate-700 rounded-3xl font-bebas-neue">
        {/* Logo */}
        <img src={logo} alt="SparkHaus Logo" className="w-32" />

        {/* Navigation Links */}
        <div className="hidden space-x-8 lg:flex text-lg uppercase hover:text-gray-400 ">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
        </div>

        {/* Call-to-Action Button */}
        <a
          href="#contact"
          className="hidden rounded-full bg-white px-6 py-2 text-black font-medium uppercase tracking-wide shadow-lg transition hover:bg-gray-200 lg:inline-block"
        >
          Book a Call
        </a>

        {/* Mobile Menu Button */}
        <button className="block text-xl lg:hidden">☰</button>
      </div>
    </nav>
  );
};

export default NavBar;
