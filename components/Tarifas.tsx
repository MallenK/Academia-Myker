import React from 'react';
import { motion } from 'framer-motion';

const Tarifas: React.FC = () => {
  return (
    <section id="tarifas" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        {/* Cabecera */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-primary-600 font-bold tracking-wide uppercase text-sm mb-3">
            Tarifas
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Elige el plan que mejor se adapte a ti
          </h3>
          <p className="text-gray-600">
            Precios orientativos por nivel y modalidad. Podemos ajustar la propuesta
            según tus objetivos, frecuencia de clase y tipo de grupo.
          </p>
        </motion.div>

        {/* Grid de tarifas */}
        <div className="grid gap-8 md:gap-10 md:grid-cols-3">
          {/* Plan grupal regular */}
          <motion.div
            className="relative bg-gray-50 rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Grupo regular
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              Clases en grupo reducido, ideal para avanzar de forma constante.
            </p>
            <div className="mb-4">
              <span className="text-3xl font-bold text-gray-900">
                80€
              </span>
              <span className="text-sm text-gray-500"> / mes</span>
            </div>
            <ul className="text-sm text-gray-700 space-y-2 mb-6">
              <li>• 2 clases por semana</li>
              <li>• 60 minutos por sesión</li>
              <li>• Grupos reducidos por nivel</li>
              <li>• Material digital incluido</li>
            </ul>
            <button className="mt-auto inline-flex items-center justify-center rounded-full bg-gray-900 text-white text-sm font-medium px-5 py-2.5 hover:bg-black transition">
              Más información
            </button>
          </motion.div>

          {/* Plan destacado intensivo */}
          <motion.div
            className="relative bg-primary-600 text-white rounded-2xl shadow-xl p-8 flex flex-col border border-primary-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="absolute -top-3 right-6 inline-flex items-center rounded-full bg-white text-primary-700 text-xs font-semibold px-3 py-1 shadow-md">
              Recomendado
            </div>
            <h4 className="text-lg font-semibold mb-2">
              Curso intensivo
            </h4>
            <p className="text-sm text-primary-50 mb-4">
              Ideal para subir de nivel en menos tiempo o preparar un examen oficial.
            </p>
            <div className="mb-4">
              <span className="text-3xl font-bold">
                140€
              </span>
              <span className="text-sm text-primary-100"> / mes</span>
            </div>
            <ul className="text-sm text-primary-50 space-y-2 mb-6">
              <li>• 3–4 clases por semana</li>
              <li>• 60–90 minutos por sesión</li>
              <li>• Enfoque comunicativo e intensivo</li>
              <li>• Preparación de exámenes y objetivos concretos</li>
            </ul>
            <button className="mt-auto inline-flex items-center justify-center rounded-full bg-white text-primary-700 text-sm font-medium px-5 py-2.5 hover:bg-primary-50 transition">
              Consultar plazas
            </button>
          </motion.div>

          {/* Plan individual */}
          <motion.div
            className="relative bg-gray-50 rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Clases individuales
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              Sesiones one-to-one totalmente adaptadas a tu ritmo y necesidades.
            </p>
            <div className="mb-4">
              <span className="text-3xl font-bold text-gray-900">
                30€
              </span>
              <span className="text-sm text-gray-500"> / hora</span>
            </div>
            <ul className="text-sm text-gray-700 space-y-2 mb-6">
              <li>• Horario flexible</li>
              <li>• Clases presenciales u online</li>
              <li>• Enfoque 100% personalizado</li>
              <li>• Ideal para entrevistas, trabajo o exámenes</li>
            </ul>
            <button className="mt-auto inline-flex items-center justify-center rounded-full bg-gray-900 text-white text-sm font-medium px-5 py-2.5 hover:bg-black transition">
              Solicitar propuesta
            </button>
          </motion.div>
        </div>

        {/* Nota y CTA inferior */}
        <motion.div
          className="mt-10 md:mt-12 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <p className="text-sm text-gray-500 mb-4">
            Los precios son orientativos y pueden ajustarse según duración del curso,
            número de alumnos y modalidad. Consúltanos para una propuesta a medida.
          </p>
          <button className="inline-flex items-center justify-center rounded-full bg-primary-600 text-white text-sm font-medium px-6 py-3 hover:bg-primary-700 transition">
            Reserva una sesión informativa gratuita
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Tarifas;
