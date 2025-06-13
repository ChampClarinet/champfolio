import { type ReactNode } from "react";

import Global from "@/components/molecules/global";
import { ThemeProvider } from "@/providers/theme";

import "./index.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Global>{children}</Global>
        </ThemeProvider>
      </body>
    </html>
  );
}
