import type { FC, PropsWithChildren } from "react";

import { ScrollArea } from "@/components/ui/scroll-area";

import Appbar from "./appbar";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Appbar />
      <ScrollArea id="main" className="mt-20 h-[calc(100vh_-_80px)]">
        <main className="flex flex-col pb-20">{children}</main>
      </ScrollArea>
    </div>
  );
};

export default MainLayout;
