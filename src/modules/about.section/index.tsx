"use client";

import { type FC, Fragment } from "react";

import WorkingImage from "@/assets/working.png";
import Section from "@/components/molecules/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { fadeIn } from "@/config/animations";
import { cv } from "@/config/links";
import { useScopedTranslations } from "@/hooks/use-scope-translation";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const AboutSection: FC = () => {
  const t = useTranslations("About");
  const metadata = useScopedTranslations<{ key: string; value: string }[]>("About.meta");
  return (
    <motion.div initial="hidden" variants={fadeIn} whileInView="visible" viewport={{ once: true }}>
      <Section name="about" mainContainerClass="flex-col-reverse gap-5 p-5 sm:grid sm:grid-cols-2">
        <div className="picture-zone flex flex-col items-center justify-center gap-4">
          <Card className="bg-gray-card/5 border-blue-dark dark:border-blue-light hidden py-[20%] sm:block">
            <CardContent className="flex items-center justify-center">
              <Image
                src={WorkingImage}
                alt="working"
                width={230}
                height={230}
                className="aspect-1 object-contain"
              />
            </CardContent>
          </Card>
          <Button
            variant="outline"
            onClick={() => {
              window.open(cv);
            }}
          >
            {t("downloadcv")}
          </Button>
        </div>

        <div className="text-zone mx-auto flex max-w-[80vw] flex-col items-center gap-4 *:text-center sm:items-start *:sm:text-left">
          <Text variant="small-heading">about</Text>
          <Text className="text-primary text-4xl font-bold">{t("header")}</Text>
          <Text className="whitespace-pre-line" variant="small">
            {t("about")}
          </Text>

          <div className="metadata-table grid grid-cols-[auto_1fr] gap-2 *:text-left md:grid-cols-[150px_1fr]">
            {metadata.map((meta) => (
              <Fragment key={meta.key}>
                <Text className="font-medium capitalize dark:text-white">{meta.key}</Text>
                <Text className="text-foreground/70 dark:text-blue-light capitalize">{`: ${meta.value}`}</Text>
              </Fragment>
            ))}
          </div>
        </div>
      </Section>
    </motion.div>
  );
};

export default AboutSection;
