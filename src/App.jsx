import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './sections/Footer';
import FloatingContactBar from './components/FloatingContactBar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import DomainRegistration from './pages/DomainRegistration';
import WebHosting from './pages/WebHosting';
import WebDevelopment from './pages/WebDevelopment';
import DigitalMarketing from './pages/DigitalMarketing';
import SeoSmm from './pages/SeoSmm';
import BusinessEmails from './pages/BusinessEmails';
import WebSecurity from './pages/WebSecurity';
import AppDevelopment from './pages/AppDevelopment';
import InfluencerMarketing from './pages/InfluencerMarketing';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <main className="bg-black text-white min-h-screen selection:bg-neonBlue selection:text-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/domain-registration" element={<DomainRegistration />} />
          <Route path="/web-hosting" element={<WebHosting />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/seo-smm" element={<SeoSmm />} />
          <Route path="/business-emails" element={<BusinessEmails />} />
          <Route path="/web-security" element={<WebSecurity />} />
          <Route path="/app-development" element={<AppDevelopment />} />
          <Route path="/influencer-marketing" element={<InfluencerMarketing />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <FloatingContactBar />
      </main>
    </Router>
  );
}

export default App;
