import React from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    pregunta: '¿Cómo sé cuál es mi nivel?',
    respuesta:
      'Realizamos una breve prueba de nivel gratuita (online o presencial) para asignarte al grupo adecuado y recomendarte el itinerario más apropiado.',
  },
  {
    pregunta: '¿Hay cuota de matrícula?',
    respuesta:
      'Podemos aplicar o no matrícula según la duración del curso y el tipo de programa. Consúltanos y te daremos todos los detalles actualizados.',
  },
  {
    pregunta: '¿Puedo recuperar una clase si falto?',
    respuesta:
      'En los grupos regulares ofrecemos opciones de recuperación según disponibilidad de otros horarios y grupos del mismo nivel.',
  },
  {
    pregunta: '¿Ofrecéis clases para niños, adolescentes y adultos?',
    respuesta:
      'Sí. Organizamos grupos por edad y nivel: niños, adolescentes y adultos, para ajustar contenidos y dinámica a cada etapa.',
  },
  {
    pregunta: '¿Preparáis exámenes oficiales?',
    respuesta:
      'Podemos ayudarte a preparar diferentes exámenes oficiales de inglés, francés o alemán, en función de la convocatoria y el nivel que necesites.',
  },
];

const FAQ: React.FC = () => {
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
            Preguntas frecuentes
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Resolvemos tus principales dudas
          </h3>
          <p className="text-gray-600">
            Si tienes cualquier otra pregunta sobre horarios, precios o niveles,
            puedes escribirnos directamente y te respondemos lo antes posible.
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
                {faq.pregunta}
              </h4>
              <p className="text-sm text-gray-700">{faq.respuesta}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
