"use client";

import { type FC } from "react";

import { Text } from "@/components/ui/text";
import { useScopedTranslations } from "@/hooks/use-scope-translation";
import { useTranslations } from "next-intl";

import Badge from "./badge";

const Pets: FC = () => {
  const t = useTranslations("Resume");
  const pets = useScopedTranslations<string[]>("Resume.pets");
  return (
    <div className="flex max-w-full flex-col gap-4 overflow-hidden">
      <Text variant="small-heading" className="text-xl font-bold">
        {t("titles.pets")}
      </Text>

      <div className="flex w-full flex-wrap gap-2">
        {pets.map((pet, i) => (
          <Badge key={i}>{pet}</Badge>
        ))}
      </div>
    </div>
  );
};

export default Pets;
