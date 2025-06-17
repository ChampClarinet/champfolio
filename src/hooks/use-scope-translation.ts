import { useTranslations } from "next-intl";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useScopedTranslations = <T = any>(scope: string) => {
  const t = useTranslations();
  return t.raw(scope) as T;
};
