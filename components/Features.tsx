import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Feature } from '../types';

const iconMap = {
  0: Award,
  1: Users,
  2: Clock,
  3: MessageCircle
};

const Features: React.FC = () => {
  const { t } = useTranslation();

  const items = t('featuresSection.items', { returnObjects: true }) as Feature[];

  return (
    <section id="features" className="py-20 bg-gray-50 relative overflow-hidden">
      
      {/* Background Blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-2">
            {t('featuresSection.tag')}
          </h2>

          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t('featuresSection.title')}
          </h3>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((feature, index) => {
            const Icon = iconMap[index as keyof typeof iconMap];

            return (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  <Icon size={28} strokeWidth={1.5} />
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h4>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Features;
