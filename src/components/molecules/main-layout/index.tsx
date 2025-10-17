"use client";

import { type FC, type PropsWithChildren, useEffect, useState } from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";

import BuyMeACoffeeButton from "../buy-me-a-coffee";
import ScrollToTopButton from "../scroll-to-top.button";
import Appbar from "./appbar";
import Footer from "./footer";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  const [onTopPosition, setOnTopPosition] = useState(true);
  const mainEl = typeof window == "undefined" ? null : document.querySelector("#main > div");

  useEffect(() => {
    if (mainEl) {
      const handleScrollChange = () => {
        const pos = mainEl.scrollTop;
        setOnTopPosition(pos < 20);
      };
      mainEl.addEventListener("scroll", handleScrollChange);
      return () => {
        mainEl.removeEventListener("scroll", handleScrollChange);
      };
    }
  }, [mainEl]);
  return (
    <div className="flex flex-col">
      <Appbar />
      <ScrollArea id="main" className="mt-20 h-[calc(100vh_-_80px)]">
        <main className="flex flex-col pb-20">{children}</main>
        <Footer />
      </ScrollArea>
      <div className="fixed right-5 bottom-5">
        <LayoutGroup id="fab">
          <motion.div
            className="flex flex-col items-end gap-4"
            layoutRoot
            transition={{ layout: { type: "spring", stiffness: 340, damping: 30 } }}
          >
            <BuyMeACoffeeButton onTop={onTopPosition} />
            <AnimatePresence initial={false} mode="popLayout">
              {!onTopPosition && <ScrollToTopButton />}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </div>
  );
};

export default MainLayout;
