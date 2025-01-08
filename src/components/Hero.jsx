import arrowImage from '../assets/images/home-arrow-icon.png'

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="font-bebas-neue font-normal text-[4rem] sm:text-[8rem] text-white leading-none">
        IGNITE THE STORY
        <br />
        SHAPE THE LEGACY
      </h1>

      <p className="font-semibold text-sm ">
        Create experiences, connect audiences and spark ideas that drive your
        brand forward
      </p>

      
      <a href="/book-a-call" className="pt-10" >
        <div className="bg-white  text-black rounded-2xl flex text-center mt-1 px-4 py-2 font-bebas-neue" >
          START PROJECT
          <img
            src={arrowImage}
            alt="arrow"
            className="ml-2 w-3 h-3 mt-1"
          />
        </div>
        
      </a>
      
    </section>
  );
};

export default Hero;
