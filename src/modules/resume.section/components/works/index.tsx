"use client";

import { type FC } from "react";

import { Text } from "@/components/ui/text";
import { useScopedTranslations } from "@/hooks/use-scope-translation";
import { useTranslations } from "next-intl";
import { v7 } from "uuid";

import WorkCard from "./card";

const Works: FC = () => {
  const t = useTranslations("Resume");
  const items = useScopedTranslations<WorksItem[]>("Resume.works");
  return (
    <div className="flex flex-col items-center">
      <Text variant="small-heading" className="mb-5 text-xl font-bold">
        {t("titles.works")}
      </Text>
      <div className="hidden flex-col @2xl:flex">
        {items.map(({ key, date, description, institution, title, references }, i) => {
          const position = i % 2 == 0 ? "left" : "right";
          const card = (
            <WorkCard
              key={v7()}
              workKey={key}
              title={title}
              date={date}
              institution={institution}
              description={description}
              references={references}
            />
          );
          return (
            <div className="grid w-full grid-cols-[1fr_16px_1fr] gap-4" key={i}>
              {position == "left" ? card : <div />}
              <div className="relative flex justify-center">
                <div className="line bg-blue-medium h-full w-[1px]" />
                <div className="bg-blue-medium absolute top-1/2 left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full brightness-150" />
              </div>
              {position == "right" ? card : <div />}
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-4 @2xl:hidden">
        {items?.map(({ key, date, description, institution, title, references }) => (
          <WorkCard
            key={v7()}
            workKey={key}
            title={title}
            date={date}
            institution={institution}
            description={description}
            references={references}
          />
        ))}
      </div>
    </div>
  );
};

export default Works;

interface WorksItem {
  date: string;
  title: string;
  institution: string;
  description: string;
  references: string[];
  key: string;
}
