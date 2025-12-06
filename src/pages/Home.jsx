import React from 'react';
import Hero from '../sections/Hero';
import TrustedBy from '../sections/TrustedBy';
import About from '../sections/About';
import Services from '../sections/Services';
import Industries from '../sections/Industries';
import Portfolio from '../sections/Portfolio';
import WhyChooseUs from '../sections/WhyChooseUs';
import Process from '../sections/Process';
import Testimonials from '../sections/Testimonials';
import FAQ from '../sections/FAQ';
import CTA from '../sections/CTA';

const Home = () => {
    return (
        <>
            <Hero />
            <TrustedBy />
            <About />
            <Services />
            <Industries />
            <Portfolio />
            <WhyChooseUs />
            <Process />
            <Testimonials />
            <FAQ />
            <CTA />
        </>
    );
};

export default Home;
