"use client";

import { type FC, Fragment } from "react";

import { Text } from "@/components/ui/text";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useScopedTranslations } from "@/hooks/use-scope-translation";
import { Star } from "lucide-react";
import { motion } from "motion/react";
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
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: -6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      // transition={{ delay: i * 0.08, duration: 0.2 }}
                      transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                    >
                      <Star className="text-yellow-500 dark:text-yellow-300" />
                    </motion.div>
                  ))}

                  <Text
                    variant="small"
                    intensity="faded"
                    className="dark:text-blue-gray capitalize"
                  >
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
