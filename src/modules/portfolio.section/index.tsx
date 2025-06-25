"use client";

import { type FC, useState } from "react";

import Section from "@/components/molecules/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { fadeIn } from "@/config/animations";
import { uniqueArray } from "@/utils/utils";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { projects } from "./projects";

const PortfolioSection: FC = () => {
  const t = useTranslations("Projects");
  const [filterTags, setFilterTags] = useState<string[]>([]);

  const tags = uniqueArray(
    projects.reduce((arr: string[], proj) => {
      return [...arr, ...proj.tags];
    }, []),
  );

  const filteredProjects = filterTags.length
    ? projects.filter(({ tags }) => tags.some((t) => filterTags.includes(t)))
    : projects;
  return (
    <motion.div initial="hidden" variants={fadeIn} whileInView="visible" viewport={{ once: true }}>
      <Section name="portfolio">
        <div className="flex w-full flex-col items-center justify-center gap-2">
          <Text variant="heading">portfolio</Text>
          <Text className="mt-5">{t("subtitle")}</Text>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 pb-4">
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <Button
                key={tag}
                variant={filterTags.includes(tag) ? "default" : "outline"}
                className="rounded-full capitalize"
                onClick={() =>
                  setFilterTags((prev) =>
                    prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
                  )
                }
              >
                {tag}
              </Button>
            ))}
          </div>
          {filterTags.length > 0 && (
            <Button variant="link" className="whitespace-nowrap" onClick={() => setFilterTags([])}>
              Clear all
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 gap-4 @xl:grid-cols-2 @xl:gap-6 @5xl:grid-cols-3 @5xl:gap-8">
          {filteredProjects.map(({ projectKey, link, img }) => {
            return (
              <Card
                className="m-auto max-w-[300px] cursor-pointer overflow-hidden border-transparent p-0"
                key={projectKey}
                onClick={() => {
                  window.open(link, "_blank");
                }}
              >
                <Image
                  src={`/images/${img}`}
                  alt={projectKey}
                  width={300}
                  height={200}
                  className="object-contain"
                />
                <CardContent className="flex flex-col gap-1 pb-6">
                  <Text variant="subtitle">{t(`${projectKey}.name`)}</Text>
                  <Text
                    intensity="faded"
                    variant="small"
                    className="dark:text-blue-light/80 line-clamp-3"
                  >
                    {t(`${projectKey}.description`)}
                  </Text>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>
    </motion.div>
  );
};

export default PortfolioSection;
