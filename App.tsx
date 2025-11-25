import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Courses from './components/Courses';
import HorariosModalidades from './components/Horarios-Modalidades';
import MetodologiaNiveles from './components/MetodologiaNiveles';
import Tarifas from './components/Tarifas';
import Certificaciones from './components/Certificaciones';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import CTAFinal from './components/CTAFinal';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Features />
        <Courses />
        <HorariosModalidades />
        <MetodologiaNiveles />
        <Tarifas />
        <Certificaciones />
        <Testimonials />
        <FAQ />
        <Contact />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  );
}

export default App;
