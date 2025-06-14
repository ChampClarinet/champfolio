"use client";

import { type FC } from "react";

import ArrowDownIcon from "@/assets/scrolldown.svg";
import Socials from "@/components/molecules/socials";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Text } from "@/components/ui/text";
import { bun, django, flutter, nextjs, nodejs, react, synapes, typescript } from "@/config/links";
import { useBreakpoint } from "@cantabile/hooks";
import { useTranslations } from "next-intl";
import Image from "next/image";

const HeroSection: FC = () => {
  const t = useTranslations("Hero");

  const goTo = (url: string) => window.open(url, "_blank", "noreferrer");

  const handleGoDown = () => {
    //TODO
  };

  const isMobile = useBreakpoint(768);
  return (
    <section className="flex min-h-[calc(100vh_-_80px)] shrink flex-col items-center justify-around py-5">
      <div className="@container flex w-full flex-col items-center p-5 md:max-w-[min(80%,_850px)] portrait:gap-14 landscape:gap-10">
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
      </div>
      <Image
        src={ArrowDownIcon}
        alt="down"
        className="my-5 cursor-pointer"
        onClick={handleGoDown}
      />
    </section>
  );
};

export default HeroSection;
