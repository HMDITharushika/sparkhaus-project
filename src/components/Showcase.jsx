import player from "../assets/images/cricket.webp";

const Showcase = () => {
  return (
    <section className="text-white flex flex-col items-center justify-center h-screen">
      <h2 className="font-bebas-neue text-[4rem]">SHOWCASE</h2>
      <p className="text-center">Crafting Digital Success Stories, One Project at a Time</p>

      {/* Outer div for larger screens only */}
      <div className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-lg p-6 px-4 py-4 mt-10 shadow-lg overflow-hidden w-[80%] h-[60%] sm:flex hidden">
        <div className="flex-[2]">
          <img src={player} className="rounded-xl border border-white/10 w-full max-h-[350px] object-cover bg-black" />
        </div>
        <div className="flex-[1] flex flex-col items-center justify-center px-4">
          <h3 className="font-bebas-neue text-[2rem]">DOCTOR OF BAT</h3>
          <p className="text-center font-normal">Cricket bat repair shop</p>
        </div>
      </div>

      {/* Div for smaller screens */}
      <div className="flex flex-col items-center justify-center sm:hidden mt-10">
        <img src={player} className="rounded-xl border border-white/10 w-full max-h-[350px] object-cover bg-black" />
        <h3 className="font-bebas-neue text-[2rem] mt-4">DOCTOR OF BAT</h3>
        <p className="text-center font-normal">Cricket bat repair shop</p>
      </div>
    </section>
  );
};

export default Showcase;
