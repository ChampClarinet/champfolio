import { Suspense, lazy } from "react";

import { setRequestLocale } from "next-intl/server";

const HeroSection = lazy(() => import("@/modules/hero.section"));
const AboutSection = lazy(() => import("@/modules/about.section"));
const SkillsSection = lazy(() => import("@/modules/skills.section"));
const ResumeSection = lazy(() => import("@/modules/resume.section"));
const PortfolioSection = lazy(() => import("@/modules/portfolio.section"));

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

const HomePage = async ({ params }: HomePageProps) => {
  const { locale } = await params;
  setRequestLocale(locale);

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
