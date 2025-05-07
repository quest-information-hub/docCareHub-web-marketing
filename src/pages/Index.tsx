
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import TrustSection from '@/components/TrustSection';
import IntegrationSection from '@/components/IntegrationSection';
import HowItWorks from '@/components/HowItWorks';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <TrustSection />
      <IntegrationSection />
      <HowItWorks />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
