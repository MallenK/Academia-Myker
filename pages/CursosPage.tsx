import React from 'react';
import Courses from '../components/Courses';
import HorariosModalidades from '../components/Horarios-Modalidades';
import MetodologiaNiveles from '../components/MetodologiaNiveles';
import Certificaciones from '../components/Certificaciones';
import Tarifas from '../components/Tarifas';
import CTAFinal from '../components/CTAFinal';

const CursosPage: React.FC = () => {
  return (
    <>
      <Courses />
      <HorariosModalidades />
      <MetodologiaNiveles />
      <Certificaciones />
      <Tarifas />
      <CTAFinal />
    </>
  );
};

export default CursosPage;
