"use client";

import { useMemo } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname } from "next/navigation";

export const useLanguage = () => {
  const pathname = usePathname();

  const supportedLanguages = [
    { key: "en", label: "English" },
    { key: "th", label: "ภาษาไทย" },
    { key: "jp", label: "日本語" },
  ];

  const locale = useMemo(() => {
    if (pathname.startsWith("/th")) return "th";
    return "en";
  }, [pathname]);

  const setLocale = (changeTo: string) => {
    const newPath = pathname.replace(/^\/(en|th|cn|jp)/, "");
    window.location.href = `/${changeTo}${newPath}`;
  };

  const toggleLocale = () => {
    const newPath = pathname.replace(/^\/(en|th)/, "");
    const newLocale = locale === "en" ? "th" : "en";
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
    languageSelector,
    supportedLanguages,
    setLocale,
    toggleLocale,
  };
};
