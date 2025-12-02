import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const MetodologiaNiveles: React.FC = () => {
  const { t } = useTranslation();

  const metodologiaItems = t('metodologySection.methodology.items', { returnObjects: true }) as string[];
  const followItems = t('metodologySection.followup.items', { returnObjects: true }) as string[];
  const niveles = t('metodologySection.levelsList', { returnObjects: true }) as {
    code: string;
    name: string;
    desc: string;
    ideal: string;
  }[];

  return (
    <section id="metodologia" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-6">

        {/* CABECERA */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-primary-600 font-bold tracking-wide uppercase text-sm mb-3">
            {t('metodologySection.tag')}
          </h2>

          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('metodologySection.title')}
          </h3>

          <p className="text-gray-600">
            {t('metodologySection.subtitle')}
          </p>
        </motion.div>

        {/* METODOLOGÍA */}
        <div className="grid gap-10 lg:grid-cols-2 mb-12 md:mb-16">

          {/* Metodología Myker */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              {t('metodologySection.methodology.title')}
            </h4>

            <p className="text-gray-600 mb-4">
              {t('metodologySection.methodology.intro')}
            </p>

            <ul className="space-y-2 text-sm text-gray-700">
              {metodologiaItems.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
          </motion.div>

          {/* Seguimiento y objetivos */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              {t('metodologySection.followup.title')}
            </h4>

            <p className="text-gray-600 mb-4">
              {t('metodologySection.followup.intro')}
            </p>

            <p className="text-sm font-medium text-gray-900 mb-2">
              {t('metodologySection.followup.listTitle')}
            </p>

            <ul className="space-y-2 text-sm text-gray-700">
              {followItems.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* NIVELES */}
        <motion.div
          className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } }
          }}
        >
          {niveles.map((nivel) => (
            <motion.div
              key={nivel.code}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-xs font-semibold tracking-wide uppercase text-primary-600">
                  {t('metodologySection.levels.tag', { code: nivel.code })}
                </span>

                <span className="inline-flex items-center rounded-full bg-primary-50 text-primary-700 text-xs font-medium px-2 py-1">
                  {nivel.name}
                </span>
              </div>

              <p className="text-sm text-gray-700 mb-3">{nivel.desc}</p>

              <p className="text-xs text-gray-500 mt-auto">
                {t('metodologySection.levels.ideal')}{' '}
                <span className="font-medium text-gray-700">
                  {nivel.ideal}
                </span>
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* NOTA FINAL */}
        <motion.div
          className="mt-10 md:mt-12 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <p className="text-sm text-gray-500">
            {t('metodologySection.finalNote')}
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default MetodologiaNiveles;
