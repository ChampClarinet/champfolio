import { type FC, type PropsWithChildren, Suspense } from "react";

import MainLayout from "./main-layout";

const Global: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MainLayout>{children}</MainLayout>
    </Suspense>
  );
};

export default Global;
