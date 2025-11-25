import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Inicio', href: '#home' },
  { label: 'Sobre Nosotros', href: '#about' },
  { label: 'Ventajas', href: '#features' },
  { label: 'Cursos', href: '#courses' },
  { label: 'Contacto', href: '#contact' },
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

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 text-primary-700 font-bold text-2xl tracking-tight">
          <div className="bg-primary-600 text-white p-2 rounded-lg">
            <GraduationCap size={24} />
          </div>
          <span className={isScrolled ? 'text-gray-900' : 'text-gray-900 lg:text-white'}>
            Myker<span className="text-primary-600 font-light">Academy</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                isScrolled ? 'text-gray-600' : 'text-gray-100 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-full font-medium transition-all shadow-lg hover:shadow-xl text-sm"
          >
            Inscríbete
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} className={isScrolled ? 'text-gray-800' : 'text-gray-800'} /> : <Menu size={28} className={isScrolled ? 'text-gray-800' : 'text-gray-800 lg:text-white'} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100">
          <div className="flex flex-col py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-6 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-700 font-medium border-l-4 border-transparent hover:border-primary-600 transition-all"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;