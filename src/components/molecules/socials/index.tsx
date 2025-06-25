"use client";

import { type FC } from "react";

import FacebookIcon from "./facebook.icon";
import GithubIcon from "./github.icon";
import LineIcon from "./line.icon";
import LinkedInIcon from "./linkedin.icon";
import MailIcon from "./mail.icon";

export interface SocialsProps {
  size?: number;
}
const Socials: FC<SocialsProps> = ({ size = 40 }) => {
  return (
    <div className="flex flex-wrap" style={{ gap: size }}>
      <FacebookIcon size={size} />
      <LinkedInIcon size={size} />
      <GithubIcon size={size} />
      <MailIcon size={size} />
      <LineIcon size={size} />
    </div>
  );
};

export default Socials;
