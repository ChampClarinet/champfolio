import { supportedLanguages } from "@/config/langauges";
import { defineRouting } from "next-intl/routing";

const locales = supportedLanguages.map(({ key }) => key);

export const routing = defineRouting({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: "en",
});
