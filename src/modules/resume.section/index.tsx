"use client";

import { type FC } from "react";

import Section from "@/components/molecules/section";
import { Text } from "@/components/ui/text";
import { type Variants, motion } from "motion/react";

import Education from "./components/education";
import Labs from "./components/labs";
import Languages from "./components/languages";
import NonDevSkills from "./components/non-dev";
import Pets from "./components/pets";
import Skills from "./components/skills";
import Works from "./components/works";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ResumeSection: FC = () => {
  return (
    <Section name="resume">
      <div className="flex w-full items-center justify-center">
        <Text variant="heading">resume</Text>
      </div>

      <div className="grid gap-8 @3xl:grid-cols-2 @5xl:grid-cols-3">
        {/* 🧑‍💼 Works */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-[500px] @3xl:col-span-2 @5xl:col-span-3"
        >
          <Works />
        </motion.div>

        {/* 🧑‍🎓 Education */}
        <div className="max-w-[500px]">
          <Education />
        </div>

        {/* 🧪 Labs */}
        <div className="max-w-[500px]">
          <Labs />
        </div>

        {/* 💻 Skills */}
        <div className="w-full">
          <Skills />
        </div>

        {/* 🌐 Languages */}
        <div className="max-w-[300px]">
          <Languages />
        </div>

        {/* 🎨 NonDevSkills */}
        <div className="max-w-[300px] @3xl:col-span-2">
          <NonDevSkills />
        </div>

        {/* 🐾 Pets */}
        <div className="w-full @3xl:col-span-2 @5xl:col-span-3">
          <Pets />
        </div>
      </div>
    </Section>
  );
};

export default ResumeSection;
