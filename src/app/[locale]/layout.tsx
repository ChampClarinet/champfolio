import type { ReactNode } from "react";

import Global from "@/components/molecules/global";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/providers/theme";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="overflow-hidden antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
            <Global>{children}</Global>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
