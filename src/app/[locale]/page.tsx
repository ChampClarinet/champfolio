import { Suspense, lazy } from "react";

const HeroSection = lazy(() => import("@/modules/hero.section"));
const AboutSection = lazy(() => import("@/modules/about.section"));
const ResumeSection = lazy(() => import("@/modules/resume.section"));

const HomePage = () => {
  return (
    <Suspense fallback={<>loading...</>}>
      <HeroSection />
      <AboutSection />
      <ResumeSection />
    </Suspense>
  );
};

export default HomePage;
