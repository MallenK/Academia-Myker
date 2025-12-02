import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const HorariosModalidades: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="horarios"
      className="py-20 md:py-28 bg-gray-50"
    >
      <div className="container mx-auto px-6">

        {/* CABECERA DE SECCIÓN */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-primary-600 font-bold tracking-wide uppercase text-sm mb-3">
            {t('modalitiesSection.tag')}
          </h2>

          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('modalitiesSection.title')}
          </h3>

          <p className="text-gray-600">
            {t('modalitiesSection.intro')}
          </p>
        </motion.div>

        {/* GRID PRINCIPAL */}
        <div className="grid gap-10 lg:grid-cols-2">

          {/* MODALIDADES */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-100 text-primary-700 text-sm font-bold">
                1
              </span>
              {t('modalitiesSection.modalities.title')}
            </h4>

            {/* TARJETAS */}
            <div className="grid gap-4 sm:grid-cols-2">

              {/* Presencial */}
              <div className="bg-primary-50 rounded-xl p-4">
                <h5 className="font-semibold text-primary-700 mb-1">
                  {t('modalitiesSection.modalities.presential.title')}
                </h5>
                <p className="text-sm text-primary-900/80">
                  {t('modalitiesSection.modalities.presential.desc')}
                </p>
              </div>

              {/* Online */}
              <div className="bg-gray-50 rounded-xl p-4">
                <h5 className="font-semibold text-gray-900 mb-1">
                  {t('modalitiesSection.modalities.online.title')}
                </h5>
                <p className="text-sm text-gray-700">
                  {t('modalitiesSection.modalities.online.desc')}
                </p>
              </div>

              {/* One to One */}
              <div className="bg-gray-50 rounded-xl p-4">
                <h5 className="font-semibold text-gray-900 mb-1">
                  {t('modalitiesSection.modalities.oneToOne.title')}
                </h5>
                <p className="text-sm text-gray-700">
                  {t('modalitiesSection.modalities.oneToOne.desc')}
                </p>
              </div>

              {/* Grupos reducidos */}
              <div className="bg-gray-50 rounded-xl p-4">
                <h5 className="font-semibold text-gray-900 mb-1">
                  {t('modalitiesSection.modalities.groups.title')}
                </h5>
                <p className="text-sm text-gray-700">
                  {t('modalitiesSection.modalities.groups.desc')}
                </p>
              </div>

            </div>
          </motion.div>

          {/* HORARIOS */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100 flex flex-col justify-between"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div>
              {/* TÍTULO */}
              <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-100 text-primary-700 text-sm font-bold">
                  2
                </span>
                {t('modalitiesSection.schedule.title')}
              </h4>

              {/* NIÑOS Y ADOLESCENTES */}
              <div className="mb-8">
                <p className="font-semibold text-gray-900 mb-1">
                  {t('modalitiesSection.schedule.kids.title')}
                </p>
                <p className="text-sm text-primary-700 font-medium mb-1">
                  {t('modalitiesSection.schedule.kids.subtitle')}
                </p>
                <p className="text-sm text-gray-700 mb-3">
                  {t('modalitiesSection.schedule.kids.desc')}
                </p>

                <p className="text-sm text-gray-900 font-medium mb-2">
                  {t('modalitiesSection.schedule.kids.groupsTitle')}
                </p>

                <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
                  {t('modalitiesSection.schedule.kids.groups', { returnObjects: true }).map(
                    (item: string, idx: number) => (
                      <li key={idx}>{item}</li>
                    )
                  )}
                </ul>

                <p className="text-sm text-gray-600 mt-3">
                  {t('modalitiesSection.schedule.kids.footer')}
                </p>
              </div>

              {/* ADULTOS */}
              <div className="mb-8">
                <p className="font-semibold text-gray-900 mb-1">
                  {t('modalitiesSection.schedule.adults.title')}
                </p>
                <p className="text-sm text-primary-700 font-medium mb-1">
                  {t('modalitiesSection.schedule.adults.subtitle')}
                </p>
                <p className="text-sm text-gray-700 mb-3">
                  {t('modalitiesSection.schedule.adults.desc')}
                </p>

                <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
                  {t('modalitiesSection.schedule.adults.items', { returnObjects: true }).map(
                    (item: string, idx: number) => (
                      <li key={idx}>{item}</li>
                    )
                  )}
                </ul>

                <p className="text-sm text-gray-600 mt-3">
                  {t('modalitiesSection.schedule.adults.footer')}
                </p>
              </div>

              {/* NO ENCUENTRAS HORARIO */}
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <p className="font-semibold text-gray-900">
                  {t('modalitiesSection.schedule.noSchedule.title')}
                </p>
                <p className="text-sm text-gray-700 mt-1">
                  {t('modalitiesSection.schedule.noSchedule.desc1')}
                </p>
                <p className="text-sm text-gray-700 mt-1">
                  {t('modalitiesSection.schedule.noSchedule.desc2')}
                </p>
              </div>
            </div>

            {/* CTA FINAL */}
            <div className="mt-8 border-t border-gray-100 pt-6">
              <p className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 bg-primary-50 rounded-full px-4 py-2">
                {t('modalitiesSection.schedule.cta')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HorariosModalidades;
