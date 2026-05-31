import "./InfoPage.css";

import Navbar from "../navbar/Navbar";

import HeroSection from "../components/HeroSection/HeroSection";
import FeaturesSection from "../components/FeaturesSection/FeaturesSection";
import ExchangeSection from "../components/ExchangeSection/ExchangeSection";    
import ReportsSection from "../components/ReportsSection/ReportsSection";
import AdvantagesSection from "../components/AdvantagesSection/AdvantagesSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import SectorsSection from "../components/SectorsSection/SectorsSection";
import CalculatorsSection from "../components/CalculatorsSection/CalculatorsSection";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";

export default function InfoPage() {
    return (
        <div className="home">

            <Navbar />

            <HeroSection />

            <FeaturesSection />

            <ExchangeSection />

            <ReportsSection />

            <AdvantagesSection />

            <ServicesSection />

            <SectorsSection />

            <CalculatorsSection />

            <ContactSection />

            <Footer />

        </div>
    );
}