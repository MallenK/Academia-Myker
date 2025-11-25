import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Languages, School, User } from 'lucide-react';

const courses = [
  {
    title: "Clases de Inglés",
    description: "Desde principiantes hasta niveles avanzados. Preparación para exámenes oficiales.",
    icon: Languages,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Clases de Francés",
    description: "Sumérgete en la lengua francesa con métodos dinámicos y culturales.",
    icon: Languages,
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    title: "Clases de Alemán",
    description: "Aprende alemán de forma estructurada y eficiente con nuestros expertos.",
    icon: Languages,
    color: "bg-yellow-50 text-yellow-600"
  },
  {
    title: "Clases de Repaso",
    description: "Refuerzo escolar para primaria y secundaria en todas las asignaturas.",
    icon: School,
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "Individuales o Grupo",
    description: "Elige la modalidad que mejor se adapte a tu estilo de aprendizaje.",
    icon: User,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Horarios Flexibles",
    description: "Nos adaptamos a tu rutina. Clases de mañana y tarde.",
    icon: BookOpen,
    color: "bg-orange-50 text-orange-600"
  }
];

const Courses: React.FC = () => {
  return (
    <section id="courses" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-2">Nuestros Servicios</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Formación adaptada a ti</h3>
          <p className="text-gray-600">Ofrecemos una amplia variedad de cursos y modalidades para asegurar que encuentres el camino perfecto hacia el dominio del idioma.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary-200"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${course.color}`}>
                <course.icon size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h4>
              <p className="text-gray-600 mb-6">{course.description}</p>
              <a href="#contact" className="text-primary-600 font-semibold text-sm hover:text-primary-700 flex items-center gap-1 group">
                Más información 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <div className="bg-primary-50 rounded-2xl p-8 md:p-12 inline-block w-full max-w-4xl mx-auto border border-primary-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Listo para dar el primer paso?</h3>
                <p className="text-gray-600 mb-8 max-w-lg mx-auto">Únete a nuestra comunidad de estudiantes y comienza a construir tu futuro hoy mismo.</p>
                <a 
                    href="#contact" 
                    className="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-primary-500/30 transition-all transform hover:-translate-y-0.5"
                >
                    Inscríbete ahora
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;