"use client";

import { type FC } from "react";

import Section from "@/components/molecules/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Link from "@/components/ui/link";
import { Text } from "@/components/ui/text";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { fadeIn } from "@/config/animations";
import { cn } from "@/utils/utils";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { projects } from "./projects";

const PortfolioSection: FC = () => {
  const t = useTranslations("Projects");
  const tG = useTranslations("General");
  return (
    <motion.div initial="hidden" variants={fadeIn} whileInView="visible" viewport={{ once: true }}>
      <Section name="portfolio">
        <div className="flex w-full flex-col items-center justify-center gap-2">
          <Text variant="heading">portfolio</Text>
          <Text className="mt-5 max-w-[600px] text-center">{t("subtitle")}</Text>
        </div>

        <div className="grid grid-cols-1 gap-4 @xl:grid-cols-2 @xl:gap-8 @5xl:grid-cols-3 @5xl:gap-8">
          {projects.map(({ projectKey, link, img, tags, status }) => {
            const statusColor =
              status == "available"
                ? "bg-green-500"
                : status == "internal"
                  ? "bg-blue-500"
                  : "bg-gray-500 dark:bg-gray-700";
            return (
              <Tooltip key={projectKey}>
                <TooltipTrigger>
                  <Link name={t(`${projectKey}.name`)} link={link ?? undefined}>
                    <Card className="bg-card/50 h-full overflow-hidden border-transparent p-0">
                      <Image
                        src={`/images/${img}`}
                        alt={projectKey}
                        width={300}
                        height={200}
                        className="w-full object-contain"
                      />
                      <CardContent className="flex flex-col items-start gap-2 pb-6">
                        <div className="flex w-full items-center gap-1">
                          <Text variant="subtitle">{t(`${projectKey}.name`)}</Text>
                          <Badge className="mt-1 flex gap-1">
                            <div className={cn(statusColor, "h-2.5 w-2.5 shrink-0 rounded-full")} />
                            {tG(`project-status.${status}`)}
                          </Badge>
                        </div>

                        {["internal", "achieved"].includes(status) && (
                          <Text variant="small" className="text-left">
                            ⚠️{tG(status)}
                          </Text>
                        )}

                        <Text
                          intensity="faded"
                          variant="small"
                          className="dark:text-blue-light/80 line-clamp-3 text-left"
                        >
                          {t(`${projectKey}.description`)}
                        </Text>

                        <div className="tags flex flex-wrap gap-1">
                          {tags.map((tag, i) => (
                            <Badge key={i} className="capitalize">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="max-w-[200px]">
                  {t(`${projectKey}.description`)}
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </Section>
    </motion.div>
  );
};

export default PortfolioSection;
