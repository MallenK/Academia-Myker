import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Clase en Myker Academy" 
                className="w-full object-cover h-[400px] lg:h-[500px]"
              />
              <div className="absolute inset-0 bg-primary-600/10"></div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-100 rounded-full z-[-1]"></div>
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-gray-100 rounded-full z-[-1]"></div>
          </motion.div>

          {/* Text */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-primary-600 font-bold tracking-wide uppercase text-sm mb-3">Quiénes Somos</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Potenciamos tu futuro a través de los idiomas
            </h3>
            
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                Descubre tu máximo potencial con nuestra formación especializada en inglés, francés y alemán. En <span className="font-semibold text-primary-700">Myker Academy</span>, nos comprometemos a ofrecer una educación de alta calidad para estudiantes de todos los niveles.
              </p>
              <p>
                Ya sea que estés empezando desde cero o que busques perfeccionar tus habilidades, nuestro equipo de docentes apasionados y nuestras metodologías dinámicas te ayudarán a alcanzar tus objetivos lingüísticos.
              </p>
              <p className="border-l-4 border-primary-500 pl-4 italic text-gray-800 font-medium bg-primary-50 py-2 rounded-r-lg">
                “Nuestro propósito es sencillo: proporcionar a nuestros estudiantes la confianza para comunicarse con fluidez y seguridad, creando al mismo tiempo un entorno de aprendizaje interactivo, acogedor y motivador.”
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;