
import React, { useState } from 'react';
import { 
  Navigation, 
  Hero, 
  About, 
  ForWhom, 
  HowIWork, 
  Offer, 
  Trust, 
  Testimonials, 
  FAQ, 
  FirstVisit, 
  Contact, 
  Footer 
} from './components/Sections';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <About />
        <ForWhom />
        <HowIWork />
        <Offer />
        <Trust />
        <Testimonials />
        <FirstVisit />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
