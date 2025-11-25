import React from 'react';
import { motion } from 'framer-motion';

const certificaciones = [
  {
    idioma: 'Inglés',
    examenes: ['Cambridge (A2–C1)', 'First (B2)', 'Advanced (C1)', 'IELTS'],
    descripcion:
      'Te ayudamos a preparar exámenes oficiales de inglés, trabajando formato de prueba, simulacros y estrategias.',
  },
  {
    idioma: 'Francés',
    examenes: ['DELF', 'DALF'],
    descripcion:
      'Refuerzo específico de comprensión y producción oral/escrita para afrontar con seguridad los exámenes oficiales.',
  },
  {
    idioma: 'Alemán',
    examenes: ['Goethe-Zertifikat'],
    descripcion:
      'Enfoque orientado a los requisitos de las pruebas oficiales, con práctica intensiva de las cuatro destrezas.',
  },
];

const Certificaciones: React.FC = () => {
  return (
    <section id="certificaciones" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Cabecera */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-primary-600 font-bold tracking-wide uppercase text-sm mb-3">
            Exámenes & Certificaciones
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Prepárate para tus certificaciones oficiales
          </h3>
          <p className="text-gray-600">
            Diseñamos itinerarios específicos para que puedas presentarte a exámenes
            oficiales con garantías, combinando práctica de formato, simulacros y
            estrategias de examen.
          </p>
        </motion.div>

        {/* Grid de certificaciones */}
        <motion.div
          className="grid gap-8 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {certificaciones.map((item) => (
            <motion.div
              key={item.idioma}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 flex flex-col"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-1">
                {item.idioma}
              </h4>
              <p className="text-xs uppercase tracking-wide text-primary-600 mb-3">
                Preparación de exámenes
              </p>
              <ul className="text-sm text-gray-800 mb-4 space-y-1">
                {item.examenes.map((ex) => (
                  <li key={ex}>• {ex}</li>
                ))}
              </ul>
              <p className="text-sm text-gray-600 mb-4">{item.descripcion}</p>
              <p className="mt-auto text-xs text-gray-500">
                Consulta próximas convocatorias y niveles disponibles para cada examen.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificaciones;
