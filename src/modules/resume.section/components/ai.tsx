"use client";

import { type FC } from "react";

import { Text } from "@/components/ui/text";
import { useTranslations } from "next-intl";

import Badge from "./badge";

const AIList = [
  { title: "ChatGPT", link: "https://chatgpt.com" },
  { title: "ClaudeAI", link: "https://claude.ai" },
  { title: "Preplexity", link: "https://www.perplexity.ai" },
  { title: "SOL7", link: "https://sol7.ai" },
];

const AISkills: FC = () => {
  const t = useTranslations("Resume");
  return (
    <div className="flex flex-col gap-4">
      <Text variant="small-heading" className="text-xl font-bold">
        AI {t("titles.skills")}
      </Text>

      <div className="flex w-full flex-wrap gap-2">
        {AIList.map(({ title, link }, i) => {
          return (
            <Badge
              key={i}
              onClick={() => {
                window.open(link);
              }}
            >
              {title}
            </Badge>
          );
        })}
      </div>
    </div>
  );
};

export default AISkills;
