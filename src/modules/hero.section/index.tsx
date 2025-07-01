"use client";

import { type FC } from "react";

import ArrowDownIcon from "@/assets/scrolldown.svg";
import Section from "@/components/molecules/section";
import Socials from "@/components/molecules/socials";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Text } from "@/components/ui/text";
import { fadeIn } from "@/config/animations";
import { bun, django, flutter, nextjs, nodejs, react, synapes, typescript } from "@/config/links";
import { slideToSection } from "@/utils/utils";
import { useBreakpoint } from "@cantabile/hooks";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const HeroSection: FC = () => {
  const t = useTranslations("Hero");

  const goTo = (url: string) => window.open(url, "_blank", "noreferrer");

  const handleGoDown = () => {
    slideToSection("about");
  };

  const isMobile = useBreakpoint(768);
  return (
    <motion.div initial="hidden" variants={fadeIn} whileInView="visible" viewport={{ once: true }}>
      <Section
        name="hero"
        mainContainerClass="items-center md:max-w-[min(80%,_850px)] portrait:gap-14 landscape:gap-10"
        shouldFit
        afterMainContainer={
          <Image
            src={ArrowDownIcon}
            alt="down"
            className="my-5 cursor-pointer"
            onClick={handleGoDown}
          />
        }
      >
        <Avatar className="border-blue-medium h-[200px] w-[200px] shrink border-8 border-solid shadow-xl">
          <AvatarImage src="/images/me.jpg" alt="Wallop Opasakhun" />
        </Avatar>

        <Text variant="title" className="text-center">
          {t.rich("hello", { u: (chunks) => <u className="text-primary underline">{chunks}</u> })}
        </Text>
        <Text
          intensity="faded"
          variant="subtitle"
          className="text-center [&_a]:underline [&_a]:hover:brightness-110"
        >
          {t.rich("introduce", {
            synapes: (c) => <a onClick={() => goTo(synapes)}>{c}</a>,
            react: (c) => <a onClick={() => goTo(react)}>{c}</a>,
            nextjs: (c) => <a onClick={() => goTo(nextjs)}>{c}</a>,
            ts: (c) => <a onClick={() => goTo(typescript)}>{c}</a>,
            bun: (c) => <a onClick={() => goTo(bun)}>{c}</a>,
            flutter: (c) => <a onClick={() => goTo(flutter)}>{c}</a>,
            django: (c) => <a onClick={() => goTo(django)}>{c}</a>,
            node: (c) => <a onClick={() => goTo(nodejs)}>{c}</a>,
          })}
        </Text>

        <Socials size={isMobile ? 25 : 40} />
      </Section>
    </motion.div>
  );
};

export default HeroSection;
