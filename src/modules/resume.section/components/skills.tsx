"use client";

import { type FC } from "react";

import { Badge } from "@/components/ui/badge";
import { Text } from "@/components/ui/text";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useScopedTranslations } from "@/hooks/use-scope-translation";
import { useTranslations } from "next-intl";

const Skills: FC = () => {
  const t = useTranslations("Resume");
  const skills = useScopedTranslations<{ title: string; years: number }[]>("Resume.skills");
  return (
    <div className="flex flex-col gap-4">
      <Text variant="small-heading" className="text-xl font-bold">
        {t("titles.skills")}
      </Text>

      <div className="flex w-full flex-wrap gap-2">
        {skills.map(({ title, years }, i) => (
          <Tooltip key={i}>
            <TooltipTrigger>
              <Badge className="bg-blue-medium rounded-md text-white capitalize">{title}</Badge>
            </TooltipTrigger>
            <TooltipContent>
              <p>{`${years} year(s)`}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default Skills;
