import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  { code: 'ca', label: 'Català' },
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' }
];

const DEFAULT_LANGUAGE = 'en';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();

  // Rutas que deben comportarse como la home
  const homeLikeRoutes = [
    '/',
    '/curso-ingles',
    '/curso-frances',
    '/curso-matematicas',
    '/curso-repaso'
  ];

  const isHomeLike = homeLikeRoutes.includes(pathname);
  const shouldBeTransparent = isHomeLike && !isScrolled;

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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const baseLinkClasses = `${shouldBeTransparent ? 'text-white' : 'text-black'} hover:text-primary-600`;

  const navItems = [
    { key: 'home', href: '/' },
    { key: 'about', href: '/sobre-nosotros' },
    { key: 'courses', href: '/cursos' },
    { key: 'contact', href: '/contacto' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        shouldBeTransparent ? 'bg-transparent py-5' : 'bg-white shadow-md py-3'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">

        {/* LOGO */}
        <NavLink
          to="/"
          className="flex items-center gap-2 font-bold text-2xl tracking-tight"
        >
          <div className="text-black p-2 rounded-lg">
              <img 
                src="../src/assets/logo/MykerLogo1.png" 
                alt="Myker Academy" 
                className="w-full object-cover h-[40px] lg:h-[40px]"
              />
          </div>
          <span className={shouldBeTransparent ? 'text-white' : 'text-black'}>
            Myker<span className="text-primary-600 font-light">Academy</span>
          </span>
        </NavLink>

        {/* DESKTOP */}
        <div className="hidden lg:flex items-center gap-6">

          <nav className="flex items-center gap-8">
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
          </nav>

          {/* Desktop Language Selector */}
          <select
            value={language}
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="border border-neutral-400 rounded-lg px-3 py-1 text-black bg-white cursor-pointer"
          >
            {LANGUAGES.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>

        {/* MOBILE */}
        <div className="flex items-center gap-4 lg:hidden">

          {/* Mobile Language Selector */}
          <select
            value={language}
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="border border-neutral-400 rounded-lg px-3 py-1 text-black bg-white cursor-pointer"
          >
            {LANGUAGES.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.label}
              </option>
            ))}
          </select>

          {/* MENU BUTTON */}
          <button
            className="focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={28} className={shouldBeTransparent ? 'text-white' : 'text-black'} />
            ) : (
              <Menu size={28} className={shouldBeTransparent ? 'text-white' : 'text-black'} />
            )}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
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
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
