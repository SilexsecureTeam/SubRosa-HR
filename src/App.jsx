import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import WhyChooseUs from './components/WhyChooseUs';
import PricingSection from './components/PricingSection';
import ProcessSection from './components/ProcessSection';
import DiscretionSection from './components/DiscretionSection';
import FAQSection from './components/FAQSection';
import FooterCTA from './components/FooterCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-black min-h-screen font-sans selection:bg-[#C57B85] selection:text-white">
      <Navbar />
      <Hero />
      <ProblemSection />
      <WhyChooseUs />
      <PricingSection />
      <ProcessSection />
      <DiscretionSection />
      <FAQSection />
      <FooterCTA />
      <Footer />
    </div>
  );
}