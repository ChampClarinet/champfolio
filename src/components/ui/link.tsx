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
      className={cn("cursor-pointer", className)}
    >
      {children}
    </NextLink>
  );
};

export default Link;
