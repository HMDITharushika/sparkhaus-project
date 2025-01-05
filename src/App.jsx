import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-black bg-[radial-gradient(ellipse_80%_80%_at_100%_50%,rgba(48,79,204,0.8),rgba(255,255,255,0))]">

          
        </div>

        <div className="absolute top-0 z-[-2] h-screen w-screen bg-black bg-[radial-gradient(ellipse_80%_80%_at_100%_50%,rgba(48,79,204,0.8),rgba(255,255,255,0))]">

      <Hero/>
          
        </div>


      </div>
    </div>
    
  );
}
