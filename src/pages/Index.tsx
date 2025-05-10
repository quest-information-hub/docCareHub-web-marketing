
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/FeatureSection';
import TrustSection from '@/components/TrustSection';
import IntegrationSection from '@/components/IntegrationSection';
import HowItWorks from '@/components/HowItWorks';
import StayAtHome from '@/components/StayAtHome';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FeatureSection from '@/components/FeatureSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeatureSection/>
      <TrustSection />
      <IntegrationSection />
      <StayAtHome />
      <HowItWorks />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
