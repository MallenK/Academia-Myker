import React from 'react';
import { GraduationCap, Instagram, Mail, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-6">

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-bold text-2xl tracking-tight mb-6">
              <div className="bg-primary-600 text-white p-1.5 rounded-lg">
                <GraduationCap size={20} />
              </div>
              <span>
                Myker<span className="text-primary-500">Academy</span>
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t('hero.subtitle')}
            </p>

            <div className="flex gap-4">
              <a
                href="https://instagram.com/myker.academy"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Instagram size={18} />
              </a>

              <a
                href="mailto:mykeringlesacademia@gmail.com"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              {t('header.home')}
            </h4>

            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-primary-500 transition-colors">{t('header.home')}</a></li>
              <li><a href="#about" className="hover:text-primary-500 transition-colors">{t('header.about')}</a></li>
              <li><a href="#courses" className="hover:text-primary-500 transition-colors">{t('header.courses')}</a></li>
              <li><a href="#contact" className="hover:text-primary-500 transition-colors">{t('header.contact')}</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              {t('courses.tag')}
            </h4>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>{t('courses.items.english.title')}</li>
              <li>{t('courses.items.french.title')}</li>
              <li>{t('courses.items.math.title')}</li>
              <li>{t('courses.items.school.title')}</li>
              <li>{t('metodologySection.methodology.title')}</li>
            </ul>
          </div>

          {/* Contact Small */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              {t('contactSection.title')}
            </h4>

            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex gap-3">
                <Phone size={16} className="text-primary-500 mt-0.5" />
                <span>{t('contactSection.phone')}</span>
              </li>

              <li className="flex gap-3">
                <Mail size={16} className="text-primary-500 mt-0.5" />
                <span className="break-all">{t('contactSection.email')}</span>
              </li>

              <li className="flex gap-3">
                <div className="w-4 mt-0.5 flex justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                </div>
                <span>{t('contactSection.addressLine1')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">

          <p>
            &copy; {new Date().getFullYear()} Myker Academy — {t('footer.rights')}
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              {t('footer.links.privacy')}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {t('footer.links.terms')}
            </a>
          </div>
        </div>

        {/* MENTION MALLENK */}
        <div className="text-center mt-6 text-xs text-gray-500">
          {t('footer.developedBy', 'Web desarrollada por')}{" "}
          <a
            href="https://mallenk.github.io/Portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-500 hover:text-primary-400 transition font-semibold"
          >
            MallenK
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
