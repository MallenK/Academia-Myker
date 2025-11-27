import React from 'react';
import MetodologiaNiveles from '../components/MetodologiaNiveles';
import Certificaciones from '../components/Certificaciones';
import CTAFinal from '../components/CTAFinal';

const MetodologiaPage: React.FC = () => {
  return (
    <>    
      <MetodologiaNiveles />
      <Certificaciones />
      <CTAFinal />
    </>
  );
};

export default MetodologiaPage;
