import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import CursosPage from './pages/CursosPage';
import MetodologiaPage from './pages/MetodologiaPage';
import OpinionesPage from './pages/OpinionesPage';
import ContactoPage from './pages/ContactoPage';
import SobreNosotrosPage from './pages/SobreNosotrosPage';

import CursoInglesPage from './pages/CursoInglesPage';
import CursoFrancesPage from './pages/CursoFrancesPage';
import CursoAlemanPage from './pages/CursoAlemanPage';
import CursoRepasoPage from './pages/CursoRepasoPage';
import CursoModalidadesPage from './pages/CursoModalidadesPage';
import CursoHorariosPage from './pages/CursoHorariosPage';

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

            <Route path="/curso-ingles" element={<CursoInglesPage />} />
            <Route path="/curso-frances" element={<CursoFrancesPage />} />
            <Route path="/curso-aleman" element={<CursoAlemanPage />} />
            <Route path="/curso-repaso" element={<CursoRepasoPage />} />
            <Route path="/curso-modalidades" element={<CursoModalidadesPage />} />
            <Route path="/curso-horarios" element={<CursoHorariosPage />} />

            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
