import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Certificaciones: React.FC = () => {
  const { t } = useTranslation();

  // Inglés (examsSection.english)
  const englishExams = t('examsSection.english.exams', { returnObjects: true }) as string[];
  const englishExtras = t('examsSection.english.extras', { returnObjects: true }) as string[];

  // Francés (examsSection.french)
  const frenchExams = t('examsSection.french.exams', { returnObjects: true }) as string[];
  const frenchDescList = t('examsSection.french.descriptionList', { returnObjects: true }) as string[];

  return (
    <section id="certificaciones" className="py-20 md:py-28 bg-gray-50">
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
            {t('examsSection.tag')}
          </h2>

          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('examsSection.title')}
          </h3>

          <p className="text-gray-600">
            {t('examsSection.subtitle')}
          </p>
        </motion.div>

        {/* GRID PRINCIPAL */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } }
          }}
        >

          {/* INGLÉS */}
          <motion.div
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 flex flex-col"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <h4 className="text-lg font-semibold text-gray-900 mb-1">
              {t('examsSection.english.language')}
            </h4>

            <p className="text-xs uppercase tracking-wide text-primary-600 mb-3">
              {t('examsSection.english.label')}
            </p>

            {/* Lista de exámenes */}
            <ul className="text-sm text-gray-800 mb-4 space-y-1">
              {englishExams.map((ex, idx) => (
                <li key={idx}>• {ex}</li>
              ))}
            </ul>

            {/* Extras */}
            <p className="text-sm font-medium text-gray-900 mb-2">
              {t('examsSection.english.extrasTitle')}
            </p>

            <ul className="text-sm text-gray-700 mb-4 space-y-1">
              {englishExtras.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>

            {/* Descripción */}
            <p className="text-sm text-gray-600 mb-4">
              {t('examsSection.english.description')}
            </p>

            <p className="mt-auto text-xs text-gray-500">
              {t('examsSection.english.footer')}
            </p>
          </motion.div>

          {/* FRANCÉS */}
          <motion.div
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 flex flex-col"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <h4 className="text-lg font-semibold text-gray-900 mb-1">
              {t('examsSection.french.language')}
            </h4>

            <p className="text-xs uppercase tracking-wide text-primary-600 mb-3">
              {t('examsSection.french.label')}
            </p>

            {/* Lista de exámenes */}
            <ul className="text-sm text-gray-800 mb-4 space-y-1">
              {frenchExams.map((ex, idx) => (
                <li key={idx}>• {ex}</li>
              ))}
            </ul>

            {/* Lista de puntos */}
            <p className="text-sm font-medium text-gray-900 mb-2">
              {t('examsSection.french.descriptionTitle')}
            </p>

            <ul className="text-sm text-gray-700 mb-4 space-y-1">
              {frenchDescList.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>

            {/* Footer */}
            <p className="mt-auto text-xs text-gray-500">
              {t('examsSection.french.footer')}
            </p>
          </motion.div>

        </motion.div>

        {/* CTA FINAL */}
        <motion.div
          className="mt-12 md:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="#contacto"
            className="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white text-lg font-semibold rounded-xl shadow-lg transition-all"
          >
            {t('examsSection.cta')}
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Certificaciones;
