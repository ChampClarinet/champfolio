import type { FC, PropsWithChildren } from "react";

import { cn } from "@/utils/utils";
import NextLink from "next/link";

export interface BaseProps {
  link?: string;
  name?: string;
  className?: string;
}
const Link: FC<PropsWithChildren<BaseProps>> = ({ children, link, name, className }) => {
  if (!link) return children;
  return (
    <NextLink
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      className={cn(
        "focus-visible:ring-ring/50 cursor-pointer rounded-sm focus-visible:ring-3 focus-visible:outline-none",
        className,
      )}
    >
      {children}
    </NextLink>
  );
};

export default Link;
