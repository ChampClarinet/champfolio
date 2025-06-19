"use client";

import { type FC } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Text } from "@/components/ui/text";
import { motion } from "motion/react";
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

      <Tabs defaultValue="music" className="gap-4">
        <TabsList>
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className="p-1 text-xs capitalize sm:text-sm md:text-base"
            >
              {t(`titles.${tab}`)}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((t) => (
          <TabsContent value={t} key={t}>
            <motion.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              initial="hidden"
              whileInView="visible"
            >
              <List valueKey={t} />
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default NonDevSkills;
