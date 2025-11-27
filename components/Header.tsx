import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Supported languages
const LANGUAGES = [
  { code: 'ca', label: 'Català' },
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'English' },
  { code: 'de', label: 'Deutsch' },
  { code: 'fr', label: 'Français' }
];

const DEFAULT_LANGUAGE = 'en';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

  const { t, i18n } = useTranslation();

  // Restore language
  useEffect(() => {
    const savedLang = localStorage.getItem('myker_lang');
    if (savedLang) {
      setLanguage(savedLang);
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  const handleLanguageChange = (code: string) => {
    setLanguage(code);
    i18n.changeLanguage(code);
    localStorage.setItem('myker_lang', code);
  };

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const baseLinkClasses = 'text-black hover:text-primary-600';

  // Navigation (keys instead of hardcoded labels)
  const navItems = [
    { key: 'home', href: '/' },
    { key: 'about', href: '/sobre-nosotros' },
    { key: 'courses', href: '/cursos' },
    { key: 'contact', href: '/contacto' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 font-bold text-2xl tracking-tight"
        >
          <div className="bg-primary-600 text-black p-2 rounded-lg">
            <GraduationCap size={24} />
          </div>

          <span className="text-black">
            Myker<span className="text-primary-600 font-light">Academy</span>
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.key}
              to={item.href}
              className={({ isActive }) =>
                [
                  'text-sm font-medium transition-colors',
                  baseLinkClasses,
                  isActive ? 'text-primary-600' : ''
                ].join(' ')
              }
            >
              {t(`header.${item.key}`)}
            </NavLink>
          ))}

          {/* Language Selector */}
          <select
            value={language}
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="border border-neutral-400 rounded-lg px-3 py-1 text-black bg-white"
          >
            {LANGUAGES.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.label}
              </option>
            ))}
          </select>

          {/* Enroll button */}
          <NavLink
            to="/contacto"
            className="bg-primary-600 hover:bg-primary-700 text-black px-5 py-2 rounded-full font-medium transition-all shadow-lg hover:shadow-xl text-sm"
          >
            {t('header.enroll')}
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={28} className="text-black" />
          ) : (
            <Menu size={28} className="text-black" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-neutral-300">
          <div className="flex flex-col py-4">

            {navItems.map((item) => (
              <NavLink
                key={item.key}
                to={item.href}
                className={({ isActive }) =>
                  [
                    'px-6 py-3 text-black hover:bg-primary-50 hover:text-primary-700 font-medium border-l-4 border-transparent hover:border-primary-600 transition-all',
                    isActive ? 'border-primary-600 text-primary-700 bg-primary-50' : ''
                  ].join(' ')
                }
                onClick={() => setIsOpen(false)}
              >
                {t(`header.${item.key}`)}
              </NavLink>
            ))}

            {/* Mobile Language Selector */}
            <div className="px-6 py-3">
              <select
                value={language}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="w-full border border-neutral-400 rounded-lg px-3 py-2 text-black bg-white"
              >
                {LANGUAGES.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>

            <NavLink
              to="/contacto"
              className="px-6 py-3 text-black hover:bg-primary-50 hover:text-primary-700 font-semibold border-l-4 border-transparent hover:border-primary-600 transition-all"
              onClick={() => setIsOpen(false)}
            >
              {t('header.enroll')}
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
