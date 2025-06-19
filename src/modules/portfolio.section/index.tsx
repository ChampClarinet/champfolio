"use client";

import { type FC } from "react";

import Section from "@/components/molecules/section";
import { Text } from "@/components/ui/text";
import { fadeIn } from "@/config/animations";
import { motion } from "motion/react";

const PortfolioSection: FC = () => {
  return (
    <motion.div initial="hidden" variants={fadeIn} whileInView="visible" viewport={{ once: true }}>
      <Section name="portfolio">
        <div className="flex w-full flex-col items-center justify-center gap-2">
          <Text variant="heading">portfolio</Text>
          <Text>here's some of live project(s)</Text>
        </div>
      </Section>
    </motion.div>
  );
};

export default PortfolioSection;
