import React from 'react';
import About from '../components/About';
import Features from '../components/Features';
import Profesores from '../components/Profesores';
import Testimonials from '../components/Testimonials';
import CTAFinal from '../components/CTAFinal';

const SobreNosotrosPage: React.FC = () => {
  return (
    <div style={{ marginTop: '5%' }}>
      <About />
      <Profesores />
      <Features />
      <Testimonials />
      <CTAFinal />
    </div>
  );
};

export default SobreNosotrosPage;
