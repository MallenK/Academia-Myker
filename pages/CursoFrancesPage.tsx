import React from "react";
import { motion } from "framer-motion";
import { Calendar, Check, Star, BookOpen, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CursoFrancesPage() {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50">

      {/* HERO */}
      <section className="relative h-[75vh] min-h-[500px] flex items-center justify-center overflow-hidden shadow-xl">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503676382383-91b51a53cf54?auto=format&fit=crop&w=1920&q=80"
            alt={t("courseDetail.frenchFull.alt")}
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
            {t("courseDetail.frenchFull.title")}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {t("courseDetail.frenchFull.description")}
          </motion.p>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="py-20 container mx-auto px-6 max-w-5xl space-y-20">

        {/* PÁRRAFOS 1 + 2 UNIFICADOS */}
        <motion.div
          className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 space-y-6"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t("courseDetail.frenchFull.privateTitle")}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("courseDetail.frenchFull.desc1")}
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            {t("courseDetail.frenchFull.desc2")}
          </p>
        </motion.div>

        {/* TARJETAS DE INFORMACIÓN */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: Star, text: "Enfoque comunicativo" },
            { icon: BookOpen, text: "Método claro y práctico" },
            { icon: Clock, text: "Horarios adaptables" }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-[2px] transition-all flex flex-col items-center justify-center text-center"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <item.icon className="text-primary-600 mb-4" size={42} />
              <p className="text-gray-800 font-semibold">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* EXTRAS */}
        <motion.div
          className="bg-primary-50 p-10 rounded-3xl shadow-md border border-primary-100"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-primary-800 mb-5">
            {t("courseDetail.frenchFull.extrasTitle")}
          </h3>

          <ul className="space-y-3">
            {t("courseDetail.frenchFull.extras", { returnObjects: true }).map(
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

      {/* HORARIOS */}
      <section className="py-24 bg-gray-100 border-t border-gray-300 mt-10">
        <div className="container mx-auto px-6 max-w-5xl">

          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <h2 className="text-3xl font-bold text-gray-900">
              {t("courseDetail.frenchFull.scheduleTitle")}
            </h2>
            <p className="text-gray-500 mt-2">
              {t("courseDetail.frenchFull.scheduleNote")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {["monday", "wednesday", "friday"].map((day, i) => (
              <motion.div
                key={day}
                className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Calendar size={34} className="text-primary-600" />
                  <h3 className="text-2xl font-semibold text-primary-700">
                    {t(`courseDetail.frenchFull.days.${day}.title`)}
                  </h3>
                </div>

                <div className="bg-gray-50 p-5 rounded-2xl shadow-inner border border-gray-200 mb-5">
                  <p className="font-semibold text-gray-800 mb-2">
                    {t(`courseDetail.frenchFull.days.${day}.time`)}
                  </p>

                  <ul className="space-y-1">
                    {t(`courseDetail.frenchFull.days.${day}.groups`, {
                      returnObjects: true
                    }).map((item: string, idx: number) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-gray-600"
                      >
                        <Check size={16} className="text-primary-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
