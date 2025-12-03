// src/components/Footer.tsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
      <div className="container mx-auto px-6">
        
        {/* GRID PRINCIPAL */}
        <div className="grid gap-10 md:grid-cols-3">
          
          {/* COLUMNA 1 — LOGO + DESCRIPCIÓN */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Myker Academy</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </div>

          {/* COLUMNA 2 — MENÚ INTERNO */}
          <div>
            <h4 classintar="text-white text-sm font-semibold mb-3">
              {t('header.home')}
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/sobre-nosotros" className="hover:text-white transition">{t('header.about')}</Link></li>
              <li><Link to="/cursos" className="hover:text-white transition">{t('header.courses')}</Link></li>
              <li><Link to="/contacto" className="hover:text-white transition">{t('header.contact')}</Link></li>
              <li><a href="#testimonios" className="hover:text-white transition">{t('header.testimonials')}</a></li>
            </ul>
          </div>

          {/* COLUMNA 3 — CONTACTO */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-3">
              {t('contactSection.title')}
            </h4>
            <ul className="text-sm space-y-2">
              <li>
                <strong>{t('contactSection.phoneLabel')}:</strong> {t('contactSection.phone')}
              </li>
              <li>
                <strong>{t('contactSection.emailLabel')}:</strong> {t('contactSection.email')}
              </li>
              <li>
                <strong>{t('contactSection.instagramLabel')}:</strong> {t('contactSection.instagram')}
              </li>
            </ul>
          </div>

        </div>

        {/* LÍNEA */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-500">
          
          <p>
            © {new Date().getFullYear()} Myker Academy — {t('footer.rights')}
          </p>

          <div className="flex gap-4 mt-3 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition">
              {t('footer.links.privacy')}
            </Link>
            <Link to="/terms" className="hover:text-white transition">
              {t('footer.links.terms')}
            </Link>
          </div>
        </div>

        {/* MENCIÓN A MALLENK */}
        <div className="text-center mt-6 text-xs text-gray-500">
          Web desarrollada por{' '}
          <a
            href="https://mallenk.github.io/Portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-400 hover:text-primary-300 font-semibold transition"
          >
            MallenK
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
