"use client";

import { type FC } from "react";

import ArrowDownIcon from "@/assets/scrolldown.svg";
import Section from "@/components/molecules/section";
import Socials from "@/components/molecules/socials";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "@/components/ui/link";
import { textVariants } from "@/components/ui/text";
import { fadeIn } from "@/config/animations";
import {
  bun,
  cv,
  django,
  flutter,
  nextjs,
  nodejs,
  react,
  synapes,
  typescript,
} from "@/config/links";
import { cn, slideToSection } from "@/utils/utils";
import { useBreakpoint } from "@cantabile/hooks";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const HeroSection: FC = () => {
  const t = useTranslations("Hero");
  const tAbout = useTranslations("About");

  const handleGoDown = () => {
    slideToSection("about");
  };

  const isMobile = useBreakpoint(768);
  return (
    <motion.div initial="hidden" variants={fadeIn} whileInView="visible" viewport={{ once: true }}>
      <Section
        name="hero"
        mainContainerClass="max-w-6xl items-center gap-8 md:grid md:grid-cols-[minmax(0,1fr)_auto] md:gap-14"
        shouldFit
        afterMainContainer={
          <button
            type="button"
            aria-label="Scroll to the about section"
            className="focus-visible:ring-ring/50 my-5 cursor-pointer rounded-full p-2 transition-transform hover:translate-y-1 focus-visible:ring-3 focus-visible:outline-none"
            onClick={handleGoDown}
          >
            <Image src={ArrowDownIcon} alt="" aria-hidden="true" />
          </button>
        }
      >
        <Avatar className="border-blue-medium size-44 shrink border-8 border-solid shadow-xl md:order-2 md:size-64 lg:size-72">
          <AvatarImage src="/images/me.jpg" alt="Wallop Opasakhun" />
        </Avatar>

        <div className="flex max-w-3xl flex-col items-center gap-6 text-center md:order-1 md:items-start md:text-left">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase">
            {t("tagline")}
          </p>
          <h1
            className={cn(
              textVariants({ variant: "title" }),
              "text-4xl leading-tight text-balance md:text-5xl",
            )}
          >
            {t.rich("hello", {
              u: (chunks) => <span className="text-primary">{chunks}</span>,
            })}
          </h1>
          <p
            className={cn(
              textVariants({ variant: "subtitle", intensity: "faded" }),
              "max-w-2xl text-pretty [&_a]:font-medium [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:brightness-110",
            )}
          >
            {t.rich("introduce", {
              synapes: (chunks) => <Link link={synapes}>{chunks}</Link>,
              react: (chunks) => <Link link={react}>{chunks}</Link>,
              nextjs: (chunks) => <Link link={nextjs}>{chunks}</Link>,
              ts: (chunks) => <Link link={typescript}>{chunks}</Link>,
              bun: (chunks) => <Link link={bun}>{chunks}</Link>,
              flutter: (chunks) => <Link link={flutter}>{chunks}</Link>,
              django: (chunks) => <Link link={django}>{chunks}</Link>,
              node: (chunks) => <Link link={nodejs}>{chunks}</Link>,
            })}
          </p>

          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
            <Button type="button" onClick={() => slideToSection("portfolio")}>
              {t("viewPortfolio")}
            </Button>
            <Button variant="outline" asChild>
              <a href={cv} target="_blank" rel="noopener noreferrer">
                {tAbout("downloadcv")}
              </a>
            </Button>
          </div>

          <Socials size={isMobile ? 28 : 36} />
        </div>
      </Section>
    </motion.div>
  );
};

export default HeroSection;
