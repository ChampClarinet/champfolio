"use client";

import { type FC } from "react";

import Section from "@/components/molecules/section";
import { Text } from "@/components/ui/text";
import { fadeIn } from "@/config/animations";
import { motion } from "motion/react";

import Education from "./components/education";
import Labs from "./components/labs";
import Languages from "./components/languages";
import NonDevSkills from "./components/non-dev";
import Pets from "./components/pets";
import Works from "./components/works";

const ResumeSection: FC = () => {
  return (
    <Section name="resume">
      <div className="flex w-full items-center justify-center">
        <Text variant="heading">resume</Text>
      </div>

      <div className="grid gap-8 @3xl:grid-cols-2">
        {/* 🧑‍💼 Works */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full @3xl:col-span-2"
        >
          <Works />
        </motion.div>

        {/* 🧑‍🎓 Education */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-[500px]"
        >
          <Education />
        </motion.div>

        {/* 🧪 Labs */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-[500px]"
        >
          <Labs />
        </motion.div>

        {/* 🌐 Languages */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full"
        >
          <Languages />
        </motion.div>

        {/* 🎨 NonDevSkills */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full"
        >
          <NonDevSkills />
        </motion.div>

        {/* 🐾 Pets */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full"
        >
          <Pets />
        </motion.div>
      </div>
    </Section>
  );
};

export default ResumeSection;
