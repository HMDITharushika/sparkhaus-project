import { useState } from "react";
import player from "../assets/images/cricket.webp";
import playerSmallImage from "../assets/images/cricketer-small.png";

const Showcase = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <section className="flex flex-col items-center justify-center">
      <h2 className="font-bebas-neue text-[4rem]">SHOWCASE</h2>
      <p className="text-center">
        Crafting Digital Success Stories, One Project at a Time
      </p>

      {/* Outer div for larger screens only */}
      <div className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-lg p-6 px-4 py-4 mt-10 shadow-lg overflow-hidden w-[80%] h-[80%] sm:flex hidden transition-colors hover:bg-gradient-to-r from-white/20 to-[#8d8989]/10 duration-300 ease-out ">

        <div className="flex-[2]">
          <img
            src={isLoaded ? player : playerSmallImage}
            loading="lazy"
            onLoad={handleImageLoad}
            className="rounded-xl border border-white/10 w-full h-full object-cover bg-black "
          />
        </div>
        <div className="flex-[1] flex flex-col items-center justify-center px-4">
          <h3 className="font-bebas-neue text-[2rem]">DOCTOR OF BAT</h3>
          <p className="text-center font-normal">Cricket bat repair shop</p>
        </div>
      </div>

      {/* Div for smaller screens */}
      <div className="flex flex-col items-center justify-center sm:hidden mt-10">
        <img
          src={isLoaded ? player : playerSmallImage}
          loading="lazy"
          onLoad={handleImageLoad}
          className="rounded-xl border border-white/10 w-full max-h-[350px] object-cover bg-black"
        />
        <h3 className="font-bebas-neue text-lg mt-4">DOCTOR OF BAT</h3>
        <p className="text-center font-normal">Cricket bat repair shop</p>
      </div>
    </section>
  );
};

export default Showcase;

// {/* hover effect 2 */}<div className="m-2 p-10 text-white rounded-xl transition-all duration-500 bg-gradient-to-br to-white via-black from-red-500 bg-size-200 hover:bg-right-bottom">  <p>Hover over me</p></div>
