"use client";

import { type FC } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Text } from "@/components/ui/text";
import { useTranslations } from "next-intl";

import List from "./list";

const tabs = ["music", "academic", "hobbies", "homeAndPets"];
const NonDevSkills: FC = () => {
  const t = useTranslations("Resume");
  return (
    <div className="flex flex-col gap-4">
      <Text variant="small-heading" className="text-xl font-bold">
        {t("titles.nondevskills")}
      </Text>

      <Tabs defaultValue="music">
        <TabsList>
          {tabs.map((tab) => (
            <TabsTrigger key={tab} value={tab} className="p-1 text-xs capitalize">
              {t(`titles.${tab}`)}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((t) => (
          <TabsContent value={t} key={t}>
            <List valueKey={t} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default NonDevSkills;
