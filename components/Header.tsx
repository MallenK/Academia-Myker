import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Sobre Nosotros', href: '/sobre-nosotros' },
  { label: 'Ventajas', href: '/metodologia' },
  { label: 'Cursos', href: '/cursos' },
  { label: 'Contacto', href: '/contacto' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // SOLO negro o verde
  const baseLinkClasses = isScrolled
    ? 'text-black hover:text-primary-600'
    : 'text-primary-600 hover:text-primary-700';

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

          <span className={isScrolled ? 'text-black' : 'text-primary-600'}>
            Myker<span className="text-primary-600 font-light">Academy</span>
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              className={({ isActive }) =>
                [
                  'text-sm font-medium transition-colors',
                  baseLinkClasses,
                  isActive ? 'text-primary-600' : ''
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}

          <NavLink
            to="/contacto"
            className="bg-primary-600 hover:bg-primary-700 text-black px-5 py-2 rounded-full font-medium transition-all shadow-lg hover:shadow-xl text-sm"
          >
            Inscríbete
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

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-neutral-300">
          <div className="flex flex-col py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                className={({ isActive }) =>
                  [
                    'px-6 py-3 text-black hover:bg-primary-50 hover:text-primary-700 font-medium border-l-4 border-transparent hover:border-primary-600 transition-all',
                    isActive ? 'border-primary-600 text-primary-700 bg-primary-50' : ''
                  ].join(' ')
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}

            <NavLink
              to="/contacto"
              className="px-6 py-3 text-black hover:bg-primary-50 hover:text-primary-700 font-semibold border-l-4 border-transparent hover:border-primary-600 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Inscríbete
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
