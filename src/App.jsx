import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import TechStack from "./components/TechStack";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import ComingSoon from "./components/ComingSoon";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import LeadBuzzCaseStudy from "./components/LeadBuzzCaseStudy";
import WhyChooseUs from "./components/WhyChooseUs";
import EzyClinicCaseStudy from "./components/EzyClinicCaseStudy";
import EzyClinicMockups from "./components/EzyClinicMockups";
function App() {
  return (
    <div className="font-sans text-gray-900 scroll-smooth">


      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-20">
        <Hero />
        <Services />
        <WhyChooseUs />

        <Portfolio />
        {/* ⭐ NEW: LEADBUZZ CASE STUDY SECTION */}
        <div id="leadbuzz-case-study">
          <LeadBuzzCaseStudy />
        </div>
        <div id="coming-soon">
          <ComingSoon />
        </div>

        <EzyClinicMockups />
        <EzyClinicCaseStudy />

        <TechStack />
        {/* <Testimonials /> */}
        <Pricing />

        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
