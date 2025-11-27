import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Courses from '../components/Courses';
import Testimonials from '../components/Testimonials';
import CTAFinal from '../components/CTAFinal';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Courses />
      <Testimonials />
      <CTAFinal />
    </>
  );
};

export default HomePage;
