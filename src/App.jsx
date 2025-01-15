import Background from "./components/Background";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Showcase from "./components/Showcase";

export default function App() {
  return (
    <>
     
      <Background />

      {/* Main Content */}
      <div className="mx-auto px-4 text-white">
        <Navbar />
        <Hero />
        <Showcase />
        <Services />
        <Footer />
      </div>
    </>
  );
}
