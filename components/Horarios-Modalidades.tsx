import React from 'react';
import { motion } from 'framer-motion';

const HorariosModalidades: React.FC = () => {
  return (
    <section
      id="horarios"
      className="py-20 md:py-28 bg-gray-50"
    >
      <div className="container mx-auto px-6">
        {/* Cabecera de sección */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-primary-600 font-bold tracking-wide uppercase text-sm mb-3">
            Horarios & Modalidades
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Clases adaptadas a tu ritmo de vida
          </h3>
          <p className="text-gray-600">
            Elige el formato y el horario que mejor encajen contigo. En Myker Academy
            nos adaptamos a tu día a día para que aprender un idioma sea compatible
            con tu trabajo, estudios o familia.
          </p>
        </motion.div>

        {/* Grid principal */}
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Modalidades */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-100 text-primary-700 text-sm font-bold">
                1
              </span>
              Modalidades de clase
            </h4>
            <p className="text-gray-600 mb-6">
              Diferentes formatos para que puedas aprender de la forma que te resulte
              más cómoda, tanto de forma presencial como online.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="bg-primary-50 rounded-xl p-4">
                <h5 className="font-semibold text-primary-700 mb-1">
                  Presencial
                </h5>
                <p className="text-sm text-primary-900/80">
                  Clases en aula, grupos reducidos y trato cercano. Ideal para
                  quienes buscan interacción cara a cara.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <h5 className="font-semibold text-gray-900 mb-1">
                  Online en directo
                </h5>
                <p className="text-sm text-gray-700">
                  Sesiones en vivo por videollamada, con participación activa y acceso
                  a materiales digitales.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <h5 className="font-semibold text-gray-900 mb-1">
                  Individual / One-to-one
                </h5>
                <p className="text-sm text-gray-700">
                  Clases totalmente personalizadas, enfocadas en tus objetivos
                  específicos (exámenes, entrevistas, trabajo…).
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <h5 className="font-semibold text-gray-900 mb-1">
                  Grupos reducidos
                </h5>
                <p className="text-sm text-gray-700">
                  Grupos pequeños para garantizar participación, práctica oral y
                  seguimiento cercano del profesor.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Horarios */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100 flex flex-col justify-between"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div>
              <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-100 text-primary-700 text-sm font-bold">
                  2
                </span>
                Franja horaria semanal
              </h4>
              <p className="text-gray-600 mb-6">
                Organizamos los grupos por nivel y disponibilidad para que puedas
                elegir el horario que mejor se adapte a ti.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary-500" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Mañanas
                    </p>
                    <p className="text-sm text-gray-700">
                      Franja orientada a adultos con disponibilidad matinal.
                      Ideal para compaginar con estudios o trabajo por la tarde.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary-500" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Tardes
                    </p>
                    <p className="text-sm text-gray-700">
                      Horarios después del colegio y del trabajo, pensados para
                      niños, adolescentes y adultos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary-500" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Sábados
                    </p>
                    <p className="text-sm text-gray-700">
                      Grupos especiales y talleres intensivos para quienes solo
                      disponen de fines de semana.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-100 pt-6">
              <p className="text-sm text-gray-600 mb-3">
                Ajustamos los grupos según nivel (A1–C1) y edad. Si no encuentras
                un horario que encaje contigo, contáctanos y buscamos una alternativa.
              </p>
              <p className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 bg-primary-50 rounded-full px-4 py-2">
                Contacta con nosotros para ver horarios y grupos disponibles en este momento.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HorariosModalidades;
