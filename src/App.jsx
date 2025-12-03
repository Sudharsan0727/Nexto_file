import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import TrustedBy from './sections/TrustedBy';
import About from './sections/About';
import Services from './sections/Services';
import Industries from './sections/Industries';
import Portfolio from './sections/Portfolio';
import USP from './sections/USP';
import Process from './sections/Process';
import Testimonials from './sections/Testimonials';
import Stats from './sections/Stats';
import CTA from './sections/CTA';
import Footer from './sections/Footer';

function App() {
  return (
    <main className="bg-black text-white min-h-screen selection:bg-neonBlue selection:text-black">
      <Navbar />
      <Hero />
      <TrustedBy />
      <About />
      <Services />
      <Industries />
      <Portfolio />
      <USP />
      <Process />
      <Testimonials />
      <Stats />
      <CTA />
      <Footer />
    </main>
  );
}

export default App;
