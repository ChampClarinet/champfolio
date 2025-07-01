import type { FC, PropsWithChildren, ReactNode } from "react";

import { cn } from "@/utils/utils";

export interface SectionProps {
  name: string;
  mainContainerClass?: string;
  afterMainContainer?: ReactNode;
  shouldFit?: boolean;
}
const Section: FC<PropsWithChildren<SectionProps>> = ({
  name,
  children,
  afterMainContainer,
  mainContainerClass,
  shouldFit = false,
}) => {
  return (
    <section
      id={name}
      className={cn(
        `${name}-section`,
        "flex shrink flex-col items-center justify-center py-5",
        shouldFit ? "h-[calc(100vh_-_80px)] max-h-[800px]" : "min-h-fit",
      )}
    >
      <div
        className={cn(
          "@container flex w-full max-w-[1440px] flex-col gap-5 p-5 md:px-20",
          mainContainerClass,
        )}
      >
        {children}
      </div>
      {afterMainContainer}
    </section>
  );
};

export default Section;
