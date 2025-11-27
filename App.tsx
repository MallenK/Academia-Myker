import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import CursosPage from './pages/CursosPage';
import MetodologiaPage from './pages/MetodologiaPage';
import OpinionesPage from './pages/OpinionesPage';
import ContactoPage from './pages/ContactoPage';
import SobreNosotrosPage from './pages/SobreNosotrosPage'; // opcional, si la usas

function App() {
  return (
    <BrowserRouter basename="/Academia-Myker">
      <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cursos" element={<CursosPage />} />
            <Route path="/metodologia" element={<MetodologiaPage />} />
            <Route path="/opiniones" element={<OpinionesPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
            <Route path="/sobre-nosotros" element={<SobreNosotrosPage />} />
            {/* fallback simple */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
