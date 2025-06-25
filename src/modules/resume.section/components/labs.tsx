"use client";

import { type FC } from "react";

import Timeline from "@/components/molecules/timeline";
import { useScopedTranslations } from "@/hooks/use-scope-translation";
import { useTranslations } from "next-intl";

const Labs: FC = () => {
  const t = useTranslations("Resume");
  const items = useScopedTranslations<LabItem[]>("Resume.labassistant");
  return (
    <Timeline
      heading={t("titles.labassistant")}
      items={items.map(({ date, subtitle, description, title }) => ({
        date,
        icon: "job",
        title,
        description: [`Tools / Languages: ${subtitle}`, description],
      }))}
    />
  );
};

export default Labs;

interface LabItem {
  date: string;
  title: string;
  subtitle: string;
  description: string;
}
