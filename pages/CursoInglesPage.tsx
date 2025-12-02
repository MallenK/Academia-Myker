import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Star, Check, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CursoInglesPage() {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50">

      {/* HERO */}
      <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&q=80"
            alt={t("courseDetail.englishFull.alt")}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t("courseDetail.englishFull.title")}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {t("courseDetail.englishFull.description")}
          </motion.p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 container mx-auto px-6 max-w-5xl">
        <motion.p
          className="text-gray-700 text-lg leading-relaxed mb-10 bg-white p-6 rounded-2xl shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t("courseDetail.englishFull.intro")}
        </motion.p>

        {/* ICON FEATURES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: Star, text: "Práctico y motivador" },
            { icon: BookOpen, text: "Material incluido" },
            { icon: Clock, text: "Horarios amplios" }
          ].map((box, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <box.icon className="text-primary-600 mb-4" size={40} />
              <p className="text-gray-700 font-medium text-center">{box.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HORARIOS */}
      <section className="bg-white py-20 border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            {t("courseDetail.englishFull.scheduleTitle")}
          </h2>

          <p className="text-gray-500 text-center mb-12">
            {t("courseDetail.englishFull.scheduleNote")}
          </p>

          {/* DÍAS */}
          <div className="space-y-12">
            {["monday", "tuesday", "wednesday", "thursday"].map((day) => (
              <motion.div
                key={day}
                className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold text-primary-700 mb-4">
                  {t(`courseDetail.englishFull.days.${day}.title`)}
                </h3>

                {/* bloques */}
                {["block1", "block2", "block3", "block4"]
                  .filter((block) =>
                    t(`courseDetail.englishFull.days.${day}.${block}`, { returnObjects: true }) instanceof Array
                  )
                  .map((block, index) => (
                    <div key={index} className="mb-4">
                      <p className="font-semibold text-gray-700">
                        {index === 0 ? "15:45 – 17:00" :
                          index === 1 ? "17:00 – 18:00" :
                          index === 2 ? "17:30 – 19:00" :
                          "17:30 – 18:30"}
                      </p>

                      <ul className="mt-1 space-y-1">
                        {t(`courseDetail.englishFull.days.${day}.${block}`, {
                          returnObjects: true
                        }).map((item: string, i: number) => (
                          <li key={i} className="flex items-center gap-2 text-gray-600">
                            <Check size={16} className="text-primary-600" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTICULARES */}
      <section className="py-20 container mx-auto px-6 max-w-5xl">
        <motion.h2
          className="text-3xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t("courseDetail.englishFull.privateTitle")}
        </motion.h2>

        <motion.p
          className="text-gray-700 leading-relaxed bg-white p-6 rounded-2xl shadow-sm mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t("courseDetail.englishFull.privateDesc")}
        </motion.p>

        {/* EXTRAS */}
        <motion.div
          className="bg-primary-50 p-8 rounded-2xl shadow-sm border border-primary-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-primary-800 mb-4">
            {t("courseDetail.englishFull.extrasTitle")}
          </h3>

          <ul className="space-y-3">
            {t("courseDetail.englishFull.extras", { returnObjects: true }).map(
              (item: string, i: number) => (
                <li key={i} className="flex items-center gap-2 text-gray-700">
                  <Check className="text-primary-600" size={18} />
                  {item}
                </li>
              )
            )}
          </ul>
        </motion.div>
      </section>

    </div>
  );
}
