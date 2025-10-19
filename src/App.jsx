import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import TechStack from "./components/TechStack";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="font-sans text-gray-900 scroll-smooth">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-20">
        <Hero />
        <Services />
        <Portfolio />
        <TechStack />
        {/* <Testimonials /> */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
