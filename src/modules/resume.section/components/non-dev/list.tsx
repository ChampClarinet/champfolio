"use client";

import { type FC } from "react";

import { useScopedTranslations } from "@/hooks/use-scope-translation";

import Badge from "../badge";

export interface ListProps {
  valueKey: string;
}
const List: FC<ListProps> = ({ valueKey }) => {
  const list = useScopedTranslations<string[]>(`Resume.nonDevSkillsAndInterests.${valueKey}`);
  return (
    <div className="flex w-full flex-wrap gap-2">
      {list.map((item) => (
        <Badge key={item}>{item}</Badge>
      ))}
    </div>
  );
};

export default List;
