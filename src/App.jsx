import { useEffect } from "react";

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
import PremiumAboutVedaxon from "./components/PremiumAboutVedaxon";
import ProductAccelerators from "./components/ProductAccelerators";
import LeadBuzzShowcase from "./components/showcase/LeadBuzzShowcase";
import BrokerShowcase from "./components/showcase/BrokerShowcase";
import EzyClinicShowcase from "./components/showcase/EzyClinicShowcase";
import BackToTop from "./components/BackToTop";
import StickyWLCTA from "./components/StickyWLCTA";

function App() {

  // 🌟 FIX: Force smooth scroll to #contact or any hash AFTER render
  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      // Temporarily disable smooth scrolling
      document.documentElement.style.scrollBehavior = "auto";

      // Execute jump immediately when DOM paints
      requestAnimationFrame(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "auto", block: "start" });
        }

        // Restore smooth scroll ALMOST instantly
        setTimeout(() => {
          document.documentElement.style.scrollBehavior = "smooth";
        }, 5); // only 5ms, not 50-150ms!
      });
    }
  }, []);


  return (
    <div className="font-sans text-gray-900 scroll-smooth">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-20">
        <Hero />
        <Services />
        <WhyChooseUs />
        <PremiumAboutVedaxon />
        <Portfolio />
        <ProductAccelerators />

        {/* Showcase Sections */}
        <div id="leadbuzz-showcase">
          <LeadBuzzShowcase />
        </div>

        <div id="broker-showcase">
          <BrokerShowcase />
        </div>

        <div id="ezyclinic-showcase">
          <EzyClinicShowcase />
        </div>

        {/* Case Studies */}
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

      <BackToTop />
      <Footer />
    </div>
  );
}

export default App;
