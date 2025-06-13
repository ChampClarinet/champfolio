"use client";

import { type ComponentProps, type FC, useEffect } from "react";

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";

export function ThemeProvider({ children, ...props }: ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      <ThemeSync />
      {children}
    </NextThemesProvider>
  );
}

const ThemeSync: FC = () => {
  const { setTheme, systemTheme } = useTheme();

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (!storedTheme) {
      // No theme set, trust system preference
      setTheme(systemTheme ?? "light");
    }
  }, [setTheme, systemTheme]);
  return <></>;
};
