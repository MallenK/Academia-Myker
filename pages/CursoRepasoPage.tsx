import React from "react";
import { motion } from "framer-motion";
import { Calendar, Check, User, Users, Lightbulb, BookOpen } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CursoRepasoPage() {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50">

      {/* HERO */}
      <section className="relative h-[75vh] min-h-[500px] flex items-center justify-center overflow-hidden shadow-xl">
        <div className="absolute inset-0">
          <img
            src="src/assets/img/thumbnail/WhatsApp6.jpeg"
            alt={t("courseDetail.schoolFull.alt")}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t("courseDetail.schoolFull.title")}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {t("courseDetail.schoolFull.description")}
          </motion.p>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <section className="py-20 container mx-auto px-6 max-w-5xl space-y-20">

        {/* PÁRRAFOS UNIFICADOS */}
        <motion.div
          className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 space-y-6"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t("courseDetail.schoolFull.privateTitle")}
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            {t("courseDetail.schoolFull.desc1")}
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            {t("courseDetail.schoolFull.desc2")}
          </p>
        </motion.div>

        {/* TARJETAS DE INFORMACIÓN */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Grupo */}
          <motion.div
            className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-[2px] transition-all text-center flex flex-col items-center"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Users size={42} className="text-primary-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {t("courseDetail.schoolFull.cards.groupTitle")}
            </h3>
            <p className="text-gray-700 text-sm">
              {t("courseDetail.schoolFull.cards.groupDesc")}
            </p>
          </motion.div>

          {/* Individual */}
          <motion.div
            className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-[2px] transition-all text-center flex flex-col items-center"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <User size={42} className="text-primary-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {t("courseDetail.schoolFull.cards.individualTitle")}
            </h3>
            <p className="text-gray-700 text-sm">
              {t("courseDetail.schoolFull.cards.individualDesc")}
            </p>
          </motion.div>

          {/* Técnicas de estudio */}
          <motion.div
            className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-[2px] transition-all text-center flex flex-col items-center"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Lightbulb size={42} className="text-primary-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Técnicas de estudio
            </h3>
            <p className="text-gray-700 text-sm">
              Mejora de hábitos, planificación y estrategias para exámenes.
            </p>
          </motion.div>

        </div>

        {/* EXTRAS */}
        <motion.div
          className="bg-primary-50 p-10 rounded-3xl shadow-md border border-primary-100"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-2xl font-bold text-primary-800 mb-5">
            {t("courseDetail.schoolFull.extrasTitle")}
          </h3>

          <ul className="space-y-3">
            {t("courseDetail.schoolFull.extras", { returnObjects: true }).map(
              (item: string, i: number) => (
                <li key={i} className="flex items-center gap-3 text-gray-800">
                  <Check size={18} className="text-primary-700" />
                  {item}
                </li>
              )
            )}
          </ul>
        </motion.div>

      </section>

      {/* HORARIOS — No hay días definidos */}
      <section className="py-24 bg-gray-100 border-t border-gray-300 mt-10">
        <div className="container mx-auto px-6 max-w-5xl">

          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <h2 className="text-3xl font-bold text-gray-900">
              {t("courseDetail.schoolFull.scheduleTitle")}
            </h2>
            <p className="text-gray-500 mt-2">
              {t("courseDetail.schoolFull.scheduleNote")}
            </p>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
