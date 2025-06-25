"use client";

import { type FC, type PropsWithChildren, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { scrollToTop } from "@/utils/utils";
import { ArrowUpIcon } from "lucide-react";

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
      {!onTopPosition && (
        <div className="fixed right-5 bottom-5">
          <Button
            className="flex h-10 w-10 items-center justify-center rounded-full !p-0"
            onClick={scrollToTop}
          >
            <ArrowUpIcon />
          </Button>
        </div>
      )}
    </div>
  );
};

export default MainLayout;
