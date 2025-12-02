import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const CTAFinal: React.FC = () => {
  const { t } = useTranslation();

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
          {/* LEFT SIDE */}
          <div className="flex-1">
            <h2 className="text-sm font-semibold tracking-wide uppercase text-primary-100 mb-2">
              {t('ctaFinal.tag')}
            </h2>

            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {t('ctaFinal.title')}
            </h3>

            <p className="text-sm md:text-base text-primary-50 max-w-xl">
              {t('ctaFinal.text')}
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col items-start md:items-end gap-3">

            <button
              onClick={() => {
                const el = document.querySelector('#contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center rounded-full bg-white text-primary-700 text-sm font-semibold px-6 py-3 hover:bg-primary-50 transition"
            >
              {t('ctaFinal.button')}
            </button>

            <p className="text-xs text-primary-100 max-w-xs text-left md:text-right">
              {t('ctaFinal.note')}
            </p>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAFinal;
