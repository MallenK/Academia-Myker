import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="assets/img/thumbnail/WhatsApp8.jpeg" 
          alt="Myker Academia" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent opacity-80"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Etiqueta superior */}
          <span className="inline-block py-1 px-3 rounded-full bg-primary-500/20 border border-primary-400/30 text-primary-200 text-sm font-semibold mb-6 backdrop-blur-sm">
            {t('hero.tagline')}
          </span>

          {/* Título principal */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            ⭐ {t('hero.title.before')} <br/>
            <span className="text-primary-400 font-serif">{t('hero.title.brand')}</span> ⭐
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            {t('hero.subtitle')}
          </p>
          
          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#courses" 
              className="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-primary-500/30 flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              {t('hero.btnCourses')}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a 
              href="#contact" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm rounded-lg font-semibold text-lg transition-all w-full sm:w-auto justify-center flex"
            >
              {t('hero.btnContact')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
