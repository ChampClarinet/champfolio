"use client";

import { useLanguage } from "@/hooks/use-language";
import { useTranslations } from "next-intl";

const HomePage = () => {
  const { localeText } = useLanguage();
  const t = useTranslations("General");

  return (
    <div className="flex flex-col items-center gap-4">
      <span className="">Displaying {localeText}</span>
      <span className="text-primary whitespace-pre-line">{t("greeting")}</span>
    </div>
  );
};

export default HomePage;
