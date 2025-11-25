import React from 'react';
import { motion } from 'framer-motion';

const MetodologiaNiveles: React.FC = () => {
  const niveles = [
    {
      codigo: 'A1-A2',
      nombre: 'Iniciación',
      descripcion:
        'Primer contacto con el idioma. Vocabulario básico, expresiones cotidianas y estructuras sencillas.',
      ideal: 'Personas que empiezan desde cero o con nociones muy básicas.',
    },
    {
      codigo: 'B1',
      nombre: 'Intermedio',
      descripcion:
        'Capacidad para desenvolverse en situaciones habituales, conversaciones sencillas y textos breves.',
      ideal: 'Quién ya se defiende pero quiere ganar seguridad y fluidez.',
    },
    {
      codigo: 'B2',
      nombre: 'Intermedio alto',
      descripcion:
        'Comprensión de textos más complejos, debates y situaciones de trabajo o estudios.',
      ideal: 'Personas que necesitan el idioma para el ámbito académico o profesional.',
    },
    {
      codigo: 'C1',
      nombre: 'Avanzado',
      descripcion:
        'Uso flexible y efectivo del idioma en contextos formales e informales, con alto nivel de precisión.',
      ideal: 'Usuarios avanzados que buscan perfeccionar matices, vocabulario y registro.',
    },
  ];

  return (
    <section id="metodologia" className="py-20 md:py-28 bg-gray-50">
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
            Metodología & Niveles
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Una metodología práctica para avanzar nivel a nivel
          </h3>
          <p className="text-gray-600">
            Combinamos comunicación real, gramática aplicada y materiales actuales para que puedas
            usar el idioma desde el primer día, con grupos organizados por nivel y objetivos.
          </p>
        </motion.div>

        {/* Metodología */}
        <div className="grid gap-10 lg:grid-cols-2 mb-12 md:mb-16">
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              Metodología comunicativa
            </h4>
            <p className="text-gray-600 mb-4">
              En Myker Academy priorizamos la comunicación real: hablar, entender y usar el idioma
              en situaciones del día a día. La gramática se trabaja de forma aplicada, siempre al
              servicio de la expresión oral y escrita.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Actividades orales en parejas y grupos reducidos.</li>
              <li>• Material auténtico y recursos digitales actualizados.</li>
              <li>• Corrección continua y feedback personalizado.</li>
              <li>• Evaluaciones periódicas para medir tu progreso.</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              Seguimiento y objetivos
            </h4>
            <p className="text-gray-600 mb-4">
              Definimos contigo objetivos claros (mejorar conversación, aprobar un examen, preparar
              entrevistas…) y revisamos periódicamente tu evolución para ajustar el ritmo o el tipo
              de actividades si es necesario.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Pruebas de nivel inicial y seguimiento continuo.</li>
              <li>• Informes de progreso y recomendaciones personalizadas.</li>
              <li>• Preparación específica para exámenes oficiales (según idioma).</li>
              <li>• Comunicación directa con el equipo docente.</li>
            </ul>
          </motion.div>
        </div>

        {/* Niveles */}
        <motion.div
          className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {niveles.map((nivel) => (
            <motion.div
              key={nivel.codigo}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-xs font-semibold tracking-wide uppercase text-primary-600">
                  Nivel {nivel.codigo}
                </span>
                <span className="inline-flex items-center rounded-full bg-primary-50 text-primary-700 text-xs font-medium px-2 py-1">
                  {nivel.nombre}
                </span>
              </div>
              <p className="text-sm text-gray-700 mb-3">{nivel.descripcion}</p>
              <p className="text-xs text-gray-500 mt-auto">
                Ideal para: <span className="font-medium text-gray-700">{nivel.ideal}</span>
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Nota final */}
        <motion.div
          className="mt-10 md:mt-12 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <p className="text-sm text-gray-500">
            Realizamos una prueba de nivel inicial gratuita para asignarte al grupo adecuado
            y recomendarte el itinerario que mejor encaje con tus objetivos.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MetodologiaNiveles;
