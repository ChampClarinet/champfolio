import { type FC } from "react";

import Grad from "@/assets/graduation-cap.svg";
import Job from "@/assets/job.svg";
import { Badge } from "@/components/ui/badge";
import { Text } from "@/components/ui/text";
import { marked } from "marked";
import Image from "next/image";

export interface TimelineProps {
  heading: string;
  items: TimelineItem[];
}
const Timeline: FC<TimelineProps> = ({ items, heading }) => {
  return (
    <div className="flex flex-col">
      <Text variant="small-heading" className="mb-5 text-xl font-bold">
        {heading}
      </Text>
      {items.map(({ date, description, icon, title, references }, i) => (
        <div className="grid w-full grid-cols-[56px_1fr] gap-4 md:grid-cols-[90px_1fr]" key={i}>
          <div className="pic relative flex flex-col items-center">
            <div className="bg-blue-medium flex h-14 w-14 items-center justify-center rounded-full md:h-[90px] md:w-[90px]">
              <Image
                src={icon == "education" ? Grad : Job}
                width={60}
                height={60}
                alt={icon}
                className="z-2 h-10 w-10 object-contain md:h-[60px] md:w-[60px]"
              />
            </div>
            <div className="absolute inset-0 z-1 flex justify-center">
              <div className="bg-blue-medium h-full w-[1px]" />
            </div>
          </div>
          <div className="flex flex-col pb-4">
            <div className="flex h-14 items-center md:h-[90px]">
              <Badge className="bg-blue-medium rounded-full text-white md:text-lg">{date}</Badge>
            </div>

            <div className="flex max-w-[400px] flex-col justify-between gap-2">
              <Text className="font-semibold dark:text-white">{title}</Text>
              <div className="flex flex-col gap-1">
                {description.map((s, i) => (
                  <div
                    className="*:text-foreground/70 dark:*:text-blue-gray *:text-xs"
                    key={i}
                    dangerouslySetInnerHTML={{ __html: marked(s) }}
                  />
                ))}
              </div>
              {!!references?.length && (
                <div className="flex flex-col">
                  <Text
                    variant="small"
                    intensity="faded"
                    className="dark:text-blue-gray font-semibold"
                  >
                    References:
                  </Text>
                  <div className="flex flex-col gap-1">
                    {references.map((r, i) => (
                      <a
                        href={r}
                        target="_blank"
                        className="text-foreground/70 dark:text-blue-gray text-xs underline"
                        key={i}
                      >
                        {r}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;

export interface TimelineItem {
  title: string;
  date: string;
  description: string[];
  references?: string[];
  icon: "job" | "education";
}
