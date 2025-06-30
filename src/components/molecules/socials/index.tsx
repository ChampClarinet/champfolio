"use client";

import { type FC } from "react";

import FacebookIcon from "./facebook.icon";
import GithubIcon from "./github.icon";
import LineIcon from "./line.icon";
import LinkedInIcon from "./linkedin.icon";
import MailIcon from "./mail.icon";
import MediumIcon from "./medium.icon";

export interface SocialsProps {
  size?: number;
}
const Socials: FC<SocialsProps> = ({ size = 40 }) => {
  return (
    <div className="flex flex-wrap" style={{ gap: size }}>
      <LinkedInIcon size={size} />
      <GithubIcon size={size} />
      <MediumIcon size={size} />
      <MailIcon size={size} />
      <LineIcon size={size} />
      <FacebookIcon size={size} />
    </div>
  );
};

export default Socials;
