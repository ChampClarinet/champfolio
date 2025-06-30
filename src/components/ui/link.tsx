import type { FC, PropsWithChildren } from "react";

import NextLink from "next/link";

export interface BaseProps {
  link?: string;
  name?: string;
}
const Link: FC<PropsWithChildren<BaseProps>> = ({ children, link, name }) => {
  if (!link) return children;
  return (
    <NextLink
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      className="cursor-pointer"
    >
      {children}
    </NextLink>
  );
};

export default Link;
