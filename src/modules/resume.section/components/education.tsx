"use client";

import { type FC } from "react";

import Timeline from "@/components/molecules/timeline";
import { useScopedTranslations } from "@/hooks/use-scope-translation";
import { useTranslations } from "next-intl";

const Education: FC = () => {
  const t = useTranslations("Resume");
  const items = useScopedTranslations<EducationItem[]>("Resume.education");
  return (
    <Timeline
      heading={t("titles.academic")}
      items={items.map(({ date, institution, major, title }) => ({
        date,
        icon: "education",
        title,
        description: [institution, major],
      }))}
    />
  );
};

export default Education;

interface EducationItem {
  title: string;
  major: string;
  institution: string;
  date: string;
}
