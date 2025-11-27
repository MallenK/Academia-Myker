import React from 'react';
import About from '../components/About';
import MetodologiaNiveles from '../components/MetodologiaNiveles';
import Certificaciones from '../components/Certificaciones';
import CTAFinal from '../components/CTAFinal';

const MetodologiaPage: React.FC = () => {
  return (
    <>
      <About />
      <MetodologiaNiveles />
      <Certificaciones />
      <CTAFinal />
    </>
  );
};

export default MetodologiaPage;
