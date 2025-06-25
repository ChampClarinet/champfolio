"use client";

import { type FC } from "react";

import { Text } from "@/components/ui/text";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useTranslations } from "next-intl";

import { skills } from "../skills-list";
import Badge from "./badge";

const Skills: FC = () => {
  const t = useTranslations("Resume");
  return (
    <div className="flex flex-col gap-4">
      <Text variant="small-heading" className="text-xl font-bold">
        {t("titles.skills")}
      </Text>

      <Text variant="small" intensity="faded" className="dark:text-foreground/80">
        {t("titles.skills-desc")}
      </Text>

      <div className="flex w-full flex-wrap gap-2">
        {skills.map(({ title, years }, i) => (
          <Tooltip key={i}>
            <TooltipTrigger>
              <Badge>{title}</Badge>
            </TooltipTrigger>
            <TooltipContent>
              <p>{`${years} year${years > 1 ? "s" : ""}`}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default Skills;
