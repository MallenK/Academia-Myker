// src/pages/sobre-nosotros/Profesores.tsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface Teacher {
  name: string;
  subjects: string;
  bio: string;
  image: string;
}

const Profesores: React.FC = () => {
  const { t } = useTranslation();

  const teachers = t('teachersSection.items', {
    returnObjects: true
  }) as Teacher[];

  return (
    <section className="container mx-auto px-6 py-16">
      
      {/* Título */}
      <motion.h2
        className="text-3xl font-bold text-primary-600 mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {t('teachersSection.tag')}
      </motion.h2>

      {/* Grid de profesores */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {teachers.map((p, index) => (
          <motion.div
            key={p.name}
            className="p-6 border border-neutral-300 rounded-xl shadow-sm hover:shadow-md bg-white transition-shadow"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />

            <h3 className="text-xl font-semibold text-black">{p.name}</h3>

            <p className="text-primary-600 font-medium mb-3">
              {p.subjects}
            </p>

            <p className="text-black/80 leading-relaxed">
              {p.bio}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Profesores;
