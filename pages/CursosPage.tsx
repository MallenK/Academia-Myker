import React from 'react';
import Courses from '../components/Courses';
import HorariosModalidades from '../components/Horarios-Modalidades';
import MetodologiaNiveles from '../components/MetodologiaNiveles';
import Certificaciones from '../components/Certificaciones';
import Tarifas from '../components/Tarifas';
import CTAFinal from '../components/CTAFinal';

const CursosPage: React.FC = () => {
  return (
    <div style={{ marginTop: '5%' }}>
      <Courses />
      <HorariosModalidades />
      <MetodologiaNiveles />
      <Certificaciones />
      <Tarifas />
      <CTAFinal />
    </div>
  );
};

export default CursosPage;
