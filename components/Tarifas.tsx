import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Tarifas: React.FC = () => {
  const { t } = useTranslation();

  // Listas traducibles desde i18next
  const kidsPrices = t('pricesSection.groupsKids.prices', { returnObjects: true }) as string[];
  const kidsMath = t('pricesSection.groupsKids.mathPrices', { returnObjects: true }) as string[];
  const kidsEnrollment = t('pricesSection.groupsKids.enrollmentItems', { returnObjects: true }) as string[];

  const adultsPrices = t('pricesSection.groupsAdults.prices', { returnObjects: true }) as string[];

  const individualPrices = t('pricesSection.individual.prices', { returnObjects: true }) as string[];
  const individualDetails = t('pricesSection.individual.details', { returnObjects: true }) as string[];

  return (
    <section id="tarifas" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">

        {/* CABECERA */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-primary-600 font-bold tracking-wide uppercase text-sm mb-3">
            {t('pricesSection.tag')}
          </h2>

          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('pricesSection.title')}
          </h3>

          <p className="text-gray-600">
            {t('pricesSection.subtitle')}
          </p>
        </motion.div>

        {/* GRID PRINCIPAL */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* BLOQUE — GRUPALES NIÑOS/ADOLESCENTES (RECOMENDADO) */}
          <motion.div
            className="relative bg-primary-600 text-white rounded-2xl shadow-xl p-8 flex flex-col border border-primary-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute -top-3 right-6 inline-flex items-center rounded-full bg-white text-primary-700 text-xs font-semibold px-3 py-1 shadow-md">
              {t('general.recommended', 'Recomendado')}
            </div>

            <h4 className="text-lg font-semibold mb-2">
              {t('pricesSection.groupsKids.title')}
            </h4>

            <p className="text-sm text-primary-50 mb-4">
              {t('pricesSection.groupsKids.desc')}
            </p>

            <h5 className="text-sm font-semibold text-white uppercase mb-2">
              {t('pricesSection.groupsKids.pricesTitle')}
            </h5>

            <ul className="text-sm text-primary-50 space-y-2 mb-6">
              {kidsPrices.map((line, idx) => (
                <li key={idx}>• {line}</li>
              ))}
            </ul>

            <h5 className="text-sm font-semibold text-white uppercase mb-2">
              {t('pricesSection.groupsKids.mathTitle')}
            </h5>

            <ul className="text-sm text-primary-50 space-y-2 mb-6">
              {kidsMath.map((line, idx) => (
                <li key={idx}>• {line}</li>
              ))}
            </ul>

            <h5 className="text-sm font-semibold text-white uppercase mb-2">
              {t('pricesSection.groupsKids.enrollmentTitle')}
            </h5>

            <ul className="text-sm text-primary-50 space-y-2">
              {kidsEnrollment.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
          </motion.div>

          {/* BLOQUE — GRUPALES ADULTOS (NORMAL) */}
          <motion.div
            className="bg-gray-50 rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              {t('pricesSection.groupsAdults.title')}
            </h4>

            <p className="text-sm text-gray-600 mb-4">
              {t('pricesSection.groupsAdults.desc')}
            </p>

            <h5 className="text-sm font-semibold text-primary-600 uppercase mb-2">
              {t('pricesSection.groupsAdults.pricesTitle')}
            </h5>

            <ul className="text-sm text-gray-700 space-y-2 mb-6">
              {adultsPrices.map((line, idx) => (
                <li key={idx}>• {line}</li>
              ))}
            </ul>

            <button className="mt-auto inline-flex items-center justify-center rounded-full bg-primary-600 text-white text-sm font-medium px-5 py-2.5 hover:bg-primary-700 transition">
              {t('cta.moreInfo', 'Consultar plazas')}
            </button>
          </motion.div>

          {/* BLOQUE — PARTICULARES */}
          <motion.div
            className="bg-gray-50 rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              {t('pricesSection.individual.title')}
            </h4>

            <p className="text-sm text-gray-600 mb-4">
              {t('pricesSection.individual.desc')}
            </p>

            <h5 className="text-sm font-semibold text-primary-600 uppercase mb-2">
              {t('pricesSection.individual.pricesTitle')}
            </h5>

            <ul className="text-sm text-gray-700 space-y-2 mb-6">
              {individualPrices.map((line, idx) => (
                <li key={idx}>• {line}</li>
              ))}
            </ul>

            <ul className="text-sm text-gray-700 space-y-2 mb-6">
              {individualDetails.map((detail, idx) => (
                <li key={idx}>• {detail}</li>
              ))}
            </ul>

            <button className="mt-auto inline-flex items-center justify-center rounded-full bg-gray-900 text-white text-sm font-medium px-5 py-2.5 hover:bg-black transition">
              {t('cta.requestProposal', 'Solicitar propuesta')}
            </button>
          </motion.div>

        </div>


        {/* NOTA FINAL + BOTÓN CTA */}
        <motion.div
          className="mt-10 md:mt-12 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <p className="text-sm text-gray-500 mb-4">
            {t('pricesSection.ctaNote')}
          </p>

          <button className="inline-flex items-center justify-center rounded-full bg-primary-600 text-white text-sm font-medium px-6 py-3 hover:bg-primary-700 transition">
            {t('pricesSection.ctaButton')}
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Tarifas;
