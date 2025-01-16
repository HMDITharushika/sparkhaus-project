import { MdArrowOutward } from "react-icons/md";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8">
      <h1 className="font-bebas-neue font-normal text-4xl sm:text-6xl lg:text-8xl leading-none">
        IGNITE THE STORY
        <br />
        SHAPE THE LEGACY
      </h1>

      <p className="font-semibold text-sm sm:text-base lg:text-l mt-4 sm:mt-6 md:mt-8">
        Create experiences, connect audiences, and spark ideas that drive your brand forward.
      </p>

      <a href="/book-a-call" className="pt-10 mb-6">
        <div
          className="group bg-white text-black border-2 border-transparent rounded-2xl flex items-center justify-center text-center mt-1 px-4 py-2 font-bebas-neue 
                        hover:border-white transition duration-500 hover:bg-black hover:text-white active:border-white"
        >
          START PROJECT
          <MdArrowOutward
            className="ml-2 w-5 h-5 transform transition-transform duration-600 ease-in-out group-hover:rotate-[45deg]"
          />
        </div>
      </a>
    </section>
  );
};

export default Hero;
