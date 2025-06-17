import { Suspense, lazy } from "react";

import AboutSection from "@/modules/about.section";

const HeroSection = lazy(() => import("@/modules/hero.section"));

const HomePage = () => {
  return (
    <Suspense fallback={<>loading...</>}>
      <HeroSection />
      <AboutSection />
    </Suspense>
  );
};

export default HomePage;
