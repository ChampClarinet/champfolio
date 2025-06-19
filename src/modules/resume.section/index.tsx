import { type FC } from "react";

import { Text } from "@/components/ui/text";

import Education from "./components/education";
import Labs from "./components/labs";
import Languages from "./components/languages";
import NonDevSkills from "./components/non-dev";
import Pets from "./components/pets";
import Skills from "./components/skills";
import Works from "./components/works";

const ResumeSection: FC = () => {
  return (
    <section
      id="resume"
      className="resume-section flex min-h-[calc(100vh_-_80px)] shrink items-center justify-center py-5"
    >
      <div className="@container flex w-full max-w-[1440px] flex-col gap-5 p-5">
        <div className="flex w-full items-center justify-center">
          <Text variant="heading">resume</Text>
        </div>

        <div className="flex flex-col gap-8">
          <Works />
          <Skills />
          <Languages />
          <NonDevSkills />
          <Education />
          <Labs />
          <Pets />
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
