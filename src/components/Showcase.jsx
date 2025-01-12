const Showcase = () => {
  return (
    <section className="text-white flex flex-col items-center justify-center h-screen">
      <h2 className="font-bebas-neue text-[4rem]">SHOWCASE</h2>
      <p>Crafting Digital Success Stories, One Project at a Time</p>

      <div className="flex bg-white/10 border border-white/20 backdrop-blur-lg  rounded-lg p-6  px-4 py-4 mt-10  shadow-lg overflow-hidden w-[80%] h-[60%]">
        {/* Image container taking 2/3 of the space */}
        <div className="flex-[2]">
          <div className="rounded-xl border  border-white/10 w-full h-full object-cover bg-black" />
        </div>

        {/* Text container taking 1/3 of the space */}
        <div className="flex-[1] flex flex-col items-center justify-center px-4">
          <h3 className="font-bebas-neue text-[2rem]">DOCTOR OF BAT</h3>
          <p className="text-center">Cricket bat repair shop</p>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
