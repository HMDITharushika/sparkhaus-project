import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";

export default function App() {
  return (
    <>
      {/* Background Layers */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-black bg-[radial-gradient(ellipse_80%_80%_at_100%_50%,rgba(48,79,204,0.8),rgba(255,255,255,0))]"></div>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-black bg-[radial-gradient(ellipse_50%_80%_at_100%_40%,rgba(48,79,204,0.8),rgba(255,255,255,0))]"></div>
      </div>

      {/* Main Content */}
      <div className="mx-auto px-4">
        <Navbar />
        <Hero />
        <Showcase />
        

        

      </div>
    </>
  );
}
