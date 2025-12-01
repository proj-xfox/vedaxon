import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import TechStack from "../components/TechStack";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import ComingSoon from "../components/ComingSoon";
import Contact from "../components/Contact";
import LeadBuzzCaseStudy from "../components/LeadBuzzCaseStudy";
import WhyChooseUs from "../components/WhyChooseUs";
import EzyClinicCaseStudy from "../components/EzyClinicCaseStudy";
import EzyClinicMockups from "../components/EzyClinicMockups";
import PremiumAboutVedaxon from "../components/PremiumAboutVedaxon";
import ProductAccelerators from "../components/ProductAccelerators";
import LeadBuzzShowcase from "../components/showcase/LeadBuzzShowcase";
import BrokerShowcase from "../components/showcase/BrokerShowcase";
import EzyClinicShowcase from "../components/showcase/EzyClinicShowcase";

export default function LandingPage() {
    return (
        <main className="pt-20">
            <Hero />
            <div id="services">
                <Services />
            </div>
            <WhyChooseUs />
            <PremiumAboutVedaxon />
            <div id="portfolio">
                <Portfolio />
            </div>
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
            <Pricing />
            <div id="contact">
                <Contact />
            </div>
        </main>
    );
}
