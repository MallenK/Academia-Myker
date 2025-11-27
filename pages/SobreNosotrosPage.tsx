import React from 'react';
import About from '../components/About';
import Features from '../components/Features';
import Profesores from '../components/Profesores';
import Testimonials from '../components/Testimonials';
import CTAFinal from '../components/CTAFinal';

const SobreNosotrosPage: React.FC = () => {
  return (
    <>
      <About />
      <Profesores />
      <Features />
      <Testimonials />
      <CTAFinal />
    </>
  );
};

export default SobreNosotrosPage;
