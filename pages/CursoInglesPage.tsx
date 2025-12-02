import React from "react";
import { motion } from "framer-motion";
import { Calendar, Check, Star, Clock, BookOpen } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CursoInglesPage() {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50">

      {/* HERO */}
      <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center overflow-hidden shadow-xl">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&q=80"
            alt={t("courseDetail.englishFull.alt")}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/75 mix-blend-multiply"></div>
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
      <section className="py-16 container mx-auto px-6 max-w-5xl">
        <motion.div
          className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("courseDetail.englishFull.intro")}
          </p>
        </motion.div>

        {/* DESTACADOS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {[
            { icon: Star, text: "Práctico y motivador" },
            { icon: BookOpen, text: "Material incluido" },
            { icon: Clock, text: "Horarios amplios" }
          ].map((box, i) => (
            <motion.div
              key={i}
              className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 text-center hover:-translate-y-1 hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <box.icon size={48} className="text-primary-600 mx-auto mb-4" />
              <p className="text-gray-800 font-semibold">{box.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HORARIOS */}
      <section className="py-20 bg-gray-100 border-y border-gray-200">
        <div className="container mx-auto px-6 max-w-5xl">

          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <h2 className="text-3xl font-bold text-gray-900">
              {t("courseDetail.englishFull.scheduleTitle")}
            </h2>
            <p className="text-gray-500 mt-2">
              {t("courseDetail.englishFull.scheduleNote")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {["monday", "tuesday", "wednesday", "thursday"].map((day, i) => (
              <motion.div
                key={day}
                className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:-translate-y-1 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Calendar Header */}
                <div className="flex items-center gap-3 mb-6">
                  <Calendar size={32} className="text-primary-600" />
                  <h3 className="text-2xl font-semibold text-primary-700">
                    {t(`courseDetail.englishFull.days.${day}.title`)}
                  </h3>
                </div>

                {/* Blocks */}
                {["block1", "block2", "block3", "block4"]
                  .filter((block) => {
                    const arr = t(
                      `courseDetail.englishFull.days.${day}.${block}`,
                      { returnObjects: true }
                    );
                    return Array.isArray(arr);
                  })
                  .map((block, index) => (
                    <div key={index} className="mb-5 bg-gray-50 p-4 rounded-2xl shadow-inner border border-gray-200">

                      {/* Hour slot */}
                      <p className="font-semibold text-gray-700 mb-2">
                        {index === 0 ? "15:45 – 17:00" :
                         index === 1 ? "17:00 – 18:00" :
                         index === 2 ? "17:30 – 19:00" :
                         "17:30 – 18:30"}
                      </p>

                      {/* Groups */}
                      <ul className="space-y-1">
                        {t(
                          `courseDetail.englishFull.days.${day}.${block}`,
                          { returnObjects: true }
                        ).map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-600">
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          {t("courseDetail.englishFull.privateTitle")}
        </motion.h2>

        <motion.div
          className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="text-gray-700 leading-relaxed">
            {t("courseDetail.englishFull.privateDesc")}
          </p>
        </motion.div>

        {/* EXTRAS */}
        <motion.div
          className="bg-primary-50 p-8 rounded-3xl shadow-md border border-primary-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-2xl font-bold text-primary-800 mb-4">
            {t("courseDetail.englishFull.extrasTitle")}
          </h3>

          <ul className="space-y-3">
            {t("courseDetail.englishFull.extras", { returnObjects: true }).map(
              (item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-800">
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
