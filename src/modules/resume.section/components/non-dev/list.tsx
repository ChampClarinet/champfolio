"use client";

import { type FC } from "react";

import { Badge } from "@/components/ui/badge";
import { useScopedTranslations } from "@/hooks/use-scope-translation";

export interface ListProps {
  valueKey: string;
}
const List: FC<ListProps> = ({ valueKey }) => {
  const list = useScopedTranslations<string[]>(`Resume.nonDevSkillsAndInterests.${valueKey}`);
  return (
    <div className="flex w-full flex-wrap gap-2">
      {list.map((item) => (
        <Badge className="bg-blue-medium rounded-md text-white capitalize" key={item}>
          {item}
        </Badge>
      ))}
    </div>
  );
};

export default List;
