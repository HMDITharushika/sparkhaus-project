import { MdOutlineArrowOutward } from "react-icons/md";

const Services = () => {
  return (
    <section className="text-white flex flex-col items-center justify-center h-screen">
      <h2 className="font-bebas-neue text-[4rem] mb-20">SERVICES</h2>

      <div className="flex flex-col items-center justify-center w-[80%] space-y-6">
        
        <a
          href="/web-design-development"
          className="uppercase flex items-center justify-center border border-white/50 w-full py-4 rounded-2xl backdrop-blur-lg lg:shadow-lg bg-white/10 hover:bg-white/20 transition"
        >
          Web Design & Development
          <MdOutlineArrowOutward className="ml-2 w-5 h-5 mt-1" />
        </a>

        
        <a
          href="/branding"
          className="uppercase flex items-center justify-center border border-white/50 w-full py-4 rounded-2xl backdrop-blur-lg lg:shadow-lg bg-white/10 hover:bg-white/20 transition"
        >
          Branding
          <MdOutlineArrowOutward className="ml-2 w-5 h-5 mt-1" />
        </a>

        
        <a
          href="/social-media-management"
          className="uppercase flex items-center justify-center border border-white/50 w-full py-4 rounded-2xl backdrop-blur-lg lg:shadow-lg bg-white/10 hover:bg-white/20 transition"
        >
          Social Media Management
          <MdOutlineArrowOutward className="ml-2 w-5 h-5 mt-1" />
        </a>
      </div>
    </section>
  );
};

export default Services;
