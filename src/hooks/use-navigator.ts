"use client";

import { useRouter } from "next/navigation";

import { useLanguage } from "./use-language";
import { useTheme } from "./use-theme";

export const useNavigator = () => {
  const { locale } = useLanguage();
  const { setTheme, resolvedTheme } = useTheme();
  const router = useRouter();

  const goto = (link: string) => {
    if (typeof window !== "undefined") {
      const prevTheme = resolvedTheme;
      const url = `/${locale}/${link}`;
      router.push(url);
      if (prevTheme) setTheme(prevTheme);
    }
  };

  return { goto };
};
