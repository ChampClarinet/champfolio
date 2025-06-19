"use client";

import { type FC, Fragment } from "react";

import { Text } from "@/components/ui/text";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useScopedTranslations } from "@/hooks/use-scope-translation";
import { Star } from "lucide-react";
import { useTranslations } from "next-intl";

const Languages: FC = () => {
  const t = useTranslations("Resume");
  const languages =
    useScopedTranslations<{ title: string; level: number }[]>("Resume.languages.skills");
  const levels = useScopedTranslations<string[]>("Resume.languages.levels");
  return (
    <div className="flex max-w-[300px] flex-col gap-4 overflow-hidden">
      <Text variant="small-heading" className="text-xl font-bold">
        {t("titles.language")}
      </Text>

      <div className="grid w-full grid-cols-[auto_1fr] gap-2">
        {languages.map(({ title, level }) => (
          <Fragment key={title}>
            <Text key={title}>{title}</Text>
            <Tooltip>
              <TooltipTrigger className="w-fit">
                <div className="flex w-fit items-center gap-1">
                  {[...new Array(level + 1)].map((_, i) => (
                    <Star key={i} className="text-yellow-300" />
                  ))}

                  <Text variant="small" className="text-blue-gray capitalize">
                    {`(${levels[level]})`}
                  </Text>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="capitalize">{levels[level]}</p>
              </TooltipContent>
            </Tooltip>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Languages;
