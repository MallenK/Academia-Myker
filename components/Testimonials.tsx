import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Testimonial } from '../types';

const Testimonials: React.FC = () => {
  const { t } = useTranslation();

  const testimonials = t('testimonialsSection.items', {
    returnObjects: true
  }) as Testimonial[];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-2">
            {t('testimonialsSection.tag')}
          </h2>

          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t('testimonialsSection.title')}
          </h3>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Stars */}
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 italic mb-6">
                "{testimonial.text}"
              </p>

              {/* Name + Role */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">
                    {testimonial.name}
                  </h4>
                  <span className="text-gray-500 text-xs">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
