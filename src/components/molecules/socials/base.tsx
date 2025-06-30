import type { FC, PropsWithChildren } from "react";

import Link from "next/link";

export interface BaseProps {
  link: string;
  name: string;
}
const Base: FC<PropsWithChildren<BaseProps>> = ({ children, link, name }) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      className="cursor-pointer"
    >
      {children}
    </Link>
  );
};

export default Base;
