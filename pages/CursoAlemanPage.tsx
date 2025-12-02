import CoursePageTemplate from "../components/CoursePageTemplate";
import { useTranslation } from "react-i18next";

export default function CursoAleman() {
  const { t } = useTranslation();

  return (
    <CoursePageTemplate
      title={t("courseDetail.french.title")}
      description={t("courseDetail.french.desc")}
    >
      <p>{t("courseDetail.french.p1")}</p>
      <p>{t("courseDetail.french.p2")}</p>
    </CoursePageTemplate>
  );
}
