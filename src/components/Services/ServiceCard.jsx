import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const ServiceCard = ({ link, text }) => {
  return (
    <div className="w-[80vw]">
      
      <Link
        to={link}
        className="group uppercase flex items-center justify-center border border-white/50 py-4 px-6 rounded-2xl backdrop-blur-lg lg:shadow-lg bg-gradient-to-r from-white/10 to-[#8d8989]/10 hover:bg-white/20 transition"
      >
        <span className="flex items-center">
          <span className="block transition-transform duration-500 group-hover:translate-x-[-10vw] whitespace-nowrap text-center group-hover:text-black">
            {text}
          </span>
        </span>

        <MdOutlineArrowOutward className="w-5 h-5 ml-4 transform transition-transform duration-500 ease-in-out group-hover:rotate-[45deg] group-hover:translate-x-[25vw] " />
      </Link>
    </div>
  );
};

export default ServiceCard;
