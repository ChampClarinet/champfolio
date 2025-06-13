import type { FC, PropsWithChildren } from "react";

import Appbar from "./appbar";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Appbar />
      <main className="mt-20 flex flex-col">{children}</main>
    </div>
  );
};

export default MainLayout;
