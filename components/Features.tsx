import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, MessageCircle } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "Profesores Expertos",
    icon: Award,
    description: "Docentes experimentados y certificados apasionados por la enseñanza."
  },
  {
    title: "Grupos Reducidos",
    icon: Users,
    description: "Atención personalizada para asegurar tu progreso constante."
  },
  {
    title: "Horarios Flexibles",
    icon: Clock,
    description: "Adaptamos nuestras clases a tu rutina diaria y necesidades."
  },
  {
    title: "Método Práctico",
    icon: MessageCircle,
    description: "Enfoque innovador basado en la comunicación real y práctica."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background Blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-10 right-10 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-2">Por qué elegirnos</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">La diferencia Myker</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                <feature.icon size={28} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;