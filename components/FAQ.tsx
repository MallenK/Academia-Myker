import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const FAQ: React.FC = () => {
  const { t } = useTranslation();

  const faqs = t('faq.items', { returnObjects: true }) as {
    q: string;
    a: string;
  }[];

  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-primary-600 font-bold tracking-wide uppercase text-sm mb-3">
            {t('faq.title_pre')}
          </h2>

          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('faq.title')}
          </h3>

          <p className="text-gray-600">
            {t('faq.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="grid gap-4 md:gap-6 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
        >
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-50 rounded-2xl border border-gray-100 p-5 md:p-6"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h4 className="text-sm md:text-base font-semibold text-gray-900 mb-2">
                {faq.q}
              </h4>

              <p className="text-sm text-gray-700">
                {faq.a}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
