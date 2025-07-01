import { Suspense, lazy } from "react";

const HeroSection = lazy(() => import("@/modules/hero.section"));
const AboutSection = lazy(() => import("@/modules/about.section"));
const SkillsSection = lazy(() => import("@/modules/skills.section"));
const ResumeSection = lazy(() => import("@/modules/resume.section"));
const PortfolioSection = lazy(() => import("@/modules/portfolio.section"));

const HomePage = () => {
  return (
    <Suspense fallback={<>loading...</>}>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ResumeSection />
      <PortfolioSection />
    </Suspense>
  );
};

export default HomePage;
