"use client";

import { type FC } from "react";

import Timeline from "@/components/molecules/timeline";
import { useScopedTranslations } from "@/hooks/use-scope-translation";
import { useTranslations } from "next-intl";

const Works: FC = () => {
  const t = useTranslations("Resume");
  const items = useScopedTranslations<WorksItem[]>("Resume.works");
  return (
    <Timeline
      heading={t("titles.works")}
      items={items.map(({ date, institution, description, title, references }) => ({
        date,
        icon: "job",
        title,
        description: [institution, description],
        references,
      }))}
    />
  );
};

export default Works;

interface WorksItem {
  date: string;
  title: string;
  institution: string;
  description: string;
  references: string[];
}
