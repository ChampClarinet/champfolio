"use client";

import { type FC } from "react";

import Section from "@/components/molecules/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "@/components/ui/link";
import { Text } from "@/components/ui/text";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { fadeIn } from "@/config/animations";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

import { categories, skills } from "./skills-list";

const SkillSection: FC = () => {
  const t = useTranslations("Skills");
  return (
    <motion.div initial="hidden" variants={fadeIn} whileInView="visible" viewport={{ once: true }}>
      <Section name="skills">
        <div className="flex w-full flex-col items-center justify-center gap-2">
          <Text variant="heading">{t("title")}</Text>
          <Text className="mt-5 max-w-[600px] text-center">{t("subtitle")}</Text>
          <div className="mt-8 grid auto-rows-fr grid-cols-1 gap-4 @lg:grid-cols-2 @2xl:grid-cols-3 @5xl:grid-cols-4">
            {categories.map((category) => (
              <Card key={category.key} className="bg-card/50 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-4">
                    <category.Icon />
                    {t(`skill-cat.${category.key}`)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex w-full flex-wrap gap-2">
                    {skills
                      .filter((s) => s.tags.includes(category.key))
                      .map(({ title, years, link }) => {
                        const badge = <Badge>{title}</Badge>;
                        return (
                          <Tooltip key={title}>
                            <TooltipTrigger>
                              {link ? (
                                <Link name={title} link={link}>
                                  {badge}
                                </Link>
                              ) : (
                                badge
                              )}
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{`${years} year${years > 1 ? "s" : ""}`}</p>
                            </TooltipContent>
                          </Tooltip>
                        );
                      })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </motion.div>
  );
};

export default SkillSection;
