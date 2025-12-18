import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Image */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="assets/img/thumbnail/WhatsApp9.jpeg" 
                alt="Clase en Myker Academy" 
                className="w-full object-cover h-[400px] lg:h-[500px]"
              />
              <div className="absolute inset-0 bg-primary-600/10"></div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-100 rounded-full z-[-1]"></div>
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-gray-100 rounded-full z-[-1]"></div>
          </motion.div>

          {/* Text */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Etiqueta */}
            <h2 className="text-primary-600 font-bold tracking-wide uppercase text-sm mb-3">
              {t('about.tag')}
            </h2>

            {/* Título */}
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {t('about.title')}
            </h3>
            
            {/* Textos */}
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>

              {/* Cita destacada */}
              <p className="border-l-4 border-primary-500 pl-4 italic text-gray-800 font-medium bg-primary-50 py-2 rounded-r-lg">
                {t('about.quote')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
