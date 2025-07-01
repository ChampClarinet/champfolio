"use client";

import { type FC } from "react";

import Socials from "@/components/molecules/socials";
import Link from "@/components/ui/link";
import { Text } from "@/components/ui/text";
import { version } from "@/config";
import { fadeIn } from "@/config/animations";
import { thisRepo } from "@/config/links";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

const FooterSection: FC = () => {
  const t = useTranslations("General");
  const copyright = `© ${new Date().getFullYear()} ${t("name")}. All rights reserved.`;
  return (
    <motion.div initial="hidden" variants={fadeIn} whileInView="visible" viewport={{ once: true }}>
      <footer
        id="footer"
        className="bg-primary/10 flex shrink flex-col items-center justify-center gap-8 px-5 py-5 dark:bg-white/10"
      >
        <Text variant="title" className="text-center">
          {t("name")}
        </Text>
        <div className="mb-4 flex justify-center gap-6">
          <Socials />
        </div>

        <Text className="text-center">
          {copyright}{" "}
          <Link link={`${thisRepo}/releases/tag/${version}`} className="underline">
            version {version}
          </Link>
        </Text>
      </footer>
    </motion.div>
  );
};

export default FooterSection;
