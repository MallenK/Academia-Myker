import React from 'react';
import { motion } from 'framer-motion';

const CTAFinal: React.FC = () => {
  return (
    <section
      id="cta-final"
      className="py-16 md:py-20 bg-primary-600"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="rounded-3xl bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-10 md:px-12 md:py-14 flex flex-col md:flex-row items-center gap-8 md:gap-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex-1">
            <h2 className="text-sm font-semibold tracking-wide uppercase text-primary-100 mb-2">
              Da el siguiente paso
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Preparado para mejorar tu inglés, francés o alemán?
            </h3>
            <p className="text-sm md:text-base text-primary-50 max-w-xl">
              Reserva una sesión informativa gratuita con nuestro equipo y te
              ayudamos a definir el mejor plan según tu nivel, objetivos y
              disponibilidad horaria.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <button
              onClick={() => {
                const el = document.querySelector('#contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center rounded-full bg-white text-primary-700 text-sm font-semibold px-6 py-3 hover:bg-primary-50 transition"
            >
              Reserva tu sesión gratuita
            </button>
            <p className="text-xs text-primary-100 max-w-xs text-left md:text-right">
              Sin compromiso. Solo necesitamos conocer tu nivel aproximado y tus
              objetivos para orientarte mejor.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAFinal;
