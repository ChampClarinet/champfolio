"use client";

import { useMemo } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fallbackLangauge, supportedLanguages } from "@/config/langauges";
import { usePathname } from "next/navigation";

export const useLanguage = () => {
  const pathname = usePathname();

  const locale = useMemo(() => {
    if (pathname.startsWith("/th")) return "th";
    if (pathname.startsWith("/jp")) return "jp";
    if (pathname.startsWith("/cn")) return "cn";
    return fallbackLangauge;
  }, [pathname]);

  const localeText = supportedLanguages.find((lang) => lang.key === locale)?.label ?? "Unknown";

  const setLocale = (changeTo: string) => {
    const newLocale = supportedLanguages.some((lang) => lang.key === changeTo)
      ? changeTo
      : fallbackLangauge;
    const newPath = pathname.replace(/^\/(en|th|jp|cn)/, "");
    window.location.href = `/${newLocale}${newPath}`;
  };

  const languageSelector = (
    <Select value={locale} onValueChange={setLocale}>
      <SelectTrigger className="cursor-pointer">
        <SelectValue placeholder="Select a language" />
      </SelectTrigger>
      <SelectContent className="z-101">
        {supportedLanguages.map((lang) => (
          <SelectItem
            className="flex w-full cursor-pointer justify-between"
            value={lang.key}
            key={lang.key}
          >
            {lang.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );

  return {
    locale,
    localeText,
    languageSelector,
    supportedLanguages,
    setLocale,
  };
};
