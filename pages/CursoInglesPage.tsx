import CoursePageTemplate from "../components/CoursePageTemplate";
import { useTranslation } from "react-i18next";

export default function CursoIngles() {
  const { t } = useTranslation();

  return (
    <CoursePageTemplate
      title={t("courseDetail.english.title")}
      description={t("courseDetail.english.desc")}
    >
      <p>{t("courseDetail.english.p1")}</p>
      <p>{t("courseDetail.english.p2")}</p>
      <p>{t("courseDetail.english.p3")}</p>
    </CoursePageTemplate>
  );
}
