import React from "react";
import CoursePageTemplate from "./CoursePageTemplate";
import { useTranslation } from "react-i18next";

export default function CursoInglesPage() {
  const { t } = useTranslation();

  return (
    <CoursePageTemplate
      title={t("courseDetail.englishFull.title")}
      description={t("courseDetail.englishFull.description")}
    >
      {/* Imagen */}
      <div className="my-8">
        <img
          src="https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=1600&auto=format&fit=crop"
          alt={t("courseDetail.englishFull.alt")}
          className="w-full rounded-xl shadow-lg object-cover max-h-[400px]"
        />
      </div>

      {/* Intro */}
      <p>{t("courseDetail.englishFull.intro")}</p>

      {/* Horarios */}
      <h2 className="text-2xl font-bold text-primary-700 mt-10 mb-4">
        {t("courseDetail.englishFull.scheduleTitle")}
      </h2>

      <p className="text-gray-600">
        {t("courseDetail.englishFull.scheduleNote")}
      </p>

      <div className="space-y-10 mt-8">

        {/* Lunes */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {t("courseDetail.englishFull.days.monday.title")}
          </h3>

          <ul className="space-y-2 text-gray-700">
            {/* 15:45–17:00 */}
            <li>
              <strong>15:45 – 17:00</strong>
              <ul className="ml-4 list-disc">
                {t("courseDetail.englishFull.days.monday.block1", { returnObjects: true })
                  .map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                ))}
              </ul>
            </li>

            {/* 17:00–18:00 */}
            <li>
              <strong>17:00 – 18:00</strong>
              <ul className="ml-4 list-disc">
                {t("courseDetail.englishFull.days.monday.block2", { returnObjects: true })
                  .map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                ))}
              </ul>
            </li>

            {/* 17:30–19:00 */}
            <li>
              <strong>17:30 – 19:00</strong>
              <ul className="ml-4 list-disc">
                {t("courseDetail.englishFull.days.monday.block3", { returnObjects: true })
                  .map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                ))}
              </ul>
            </li>

            {/* 17:30–18:30 */}
            <li>
              <strong>17:30 – 18:30</strong>
              <ul className="ml-4 list-disc">
                {t("courseDetail.englishFull.days.monday.block4", { returnObjects: true })
                  .map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>

        {/* MARTES */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {t("courseDetail.englishFull.days.tuesday.title")}
          </h3>

          <ul className="space-y-2 text-gray-700">

            <li>
              <strong>15:45 – 17:00</strong>
              <ul className="ml-4 list-disc">
                {t("courseDetail.englishFull.days.tuesday.block1", { returnObjects: true })
                  .map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                ))}
              </ul>
            </li>

            <li>
              <strong>17:00 – 18:00</strong>
              <ul className="ml-4 list-disc">
                {t("courseDetail.englishFull.days.tuesday.block2", { returnObjects: true })
                  .map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                ))}
              </ul>
            </li>

            <li>
              <strong>18:00 – 19:00</strong>
              <ul className="ml-4 list-disc">
                {t("courseDetail.englishFull.days.tuesday.block3", { returnObjects: true })
                  .map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                ))}
              </ul>
            </li>

          </ul>
        </div>

        {/* MIÉRCOLES */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {t("courseDetail.englishFull.days.wednesday.title")}
          </h3>

          <ul className="space-y-2 text-gray-700">

            <li>
              <strong>15:45 – 17:00</strong>
              <ul className="ml-4 list-disc">
                {t("courseDetail.englishFull.days.wednesday.block1", { returnObjects: true })
                  .map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                ))}
              </ul>
            </li>

            <li>
              <strong>17:00 – 18:00</strong>
              <ul className="ml-4 list-disc">
                {t("courseDetail.englishFull.days.wednesday.block2", { returnObjects: true })
                  .map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                ))}
              </ul>
            </li>

            <li>
              <strong>18:00 – 19:30</strong>
              <ul className="ml-4 list-disc">
                {t("courseDetail.englishFull.days.wednesday.block3", { returnObjects: true })
                  .map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                ))}
              </ul>
            </li>

          </ul>
        </div>

        {/* JUEVES */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {t("courseDetail.englishFull.days.thursday.title")}
          </h3>

          <ul className="space-y-2 text-gray-700">
            <li>
              <strong>15:45 – 17:00</strong>
              <ul className="ml-4 list-disc">
                {t("courseDetail.englishFull.days.thursday.block1", { returnObjects: true })
                  .map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>

      </div>

      {/* Particulares */}
      <h2 className="text-2xl font-bold text-primary-700 mt-12 mb-4">
        {t("courseDetail.englishFull.privateTitle")}
      </h2>

      <p>{t("courseDetail.englishFull.privateDesc")}</p>

      {/* Extras */}
      <h2 className="text-2xl font-bold text-primary-700 mt-12 mb-4">
        {t("courseDetail.englishFull.extrasTitle")}
      </h2>

      <ul className="ml-4 list-disc text-gray-700 space-y-2">
        {t("courseDetail.englishFull.extras", { returnObjects: true })
          .map((item: string, idx: number) => (
            <li key={idx}>{item}</li>
        ))}
      </ul>
    </CoursePageTemplate>
  );
}
