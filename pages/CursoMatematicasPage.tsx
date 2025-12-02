import React from "react";
import { motion } from "framer-motion";
import { Calendar, BookOpen, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CursoMatematicasPage() {
  const { t } = useTranslation();

  return (
    <div className="pt-20">

      {/* HERO */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=1600&q=80"
          className="absolute inset-0 w-full h-full object-cover"
          alt={t("courseDetail.mathFull.alt")}
        />
        <div className="absolute inset-0 bg-gray-900/70"></div>

        <motion.div
          className="relative z-10 text-center text-white px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t("courseDetail.mathFull.title")}
          </h1>
        </motion.div>
      </section>

      {/* CONTENEDOR PRINCIPAL (desc1 + desc2) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">

          <motion.div
            className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 space-y-6"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("courseDetail.mathFull.privateTitle")}
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              {t("courseDetail.mathFull.desc1")}
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              {t("courseDetail.mathFull.desc2")}
            </p>
          </motion.div>

        </div>
      </section>

      {/* TARJETAS INFORMATIVAS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">

          {/* Tarjeta 1 */}
          <motion.div
            className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 text-center flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <BookOpen size={36} className="text-primary-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Refuerzo personalizado</h3>
            <p className="text-gray-600 text-sm">
              Sesiones adaptadas al nivel y necesidades del alumno.
            </p>
          </motion.div>

          {/* Tarjeta 2 */}
          <motion.div
            className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 text-center flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <TrendingUp size={36} className="text-primary-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Progreso real</h3>
            <p className="text-gray-600 text-sm">
              Mejora continua en comprensión, base matemática y exámenes.
            </p>
          </motion.div>

          {/* Tarjeta 3 */}
          <motion.div
            className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 text-center flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Calendar size={36} className="text-primary-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Flexibilidad horaria</h3>
            <p className="text-gray-600 text-sm">
              Clases particulares según disponibilidad del profesor y alumno.
            </p>
          </motion.div>

        </div>
      </section>

      {/* HORARIOS */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-3xl">

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            {t("courseDetail.mathFull.scheduleTitle")}
          </h2>

          <p className="text-center text-gray-600 mb-8">
            {t("courseDetail.mathFull.scheduleNote")}
          </p>

          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-primary-600 mb-4">
              {t("courseDetail.mathFull.days.wednesday.title")}
            </h3>

            <ul className="space-y-2">
              {t("courseDetail.mathFull.days.wednesday.block1", {
                returnObjects: true
              }).map((item: string, i: number) => (
                <li key={i} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>

          </motion.div>

        </div>
      </section>

    </div>
  );
}
