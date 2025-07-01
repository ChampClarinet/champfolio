"use client";

import { type FC } from "react";

import { GoogleAnalytics } from "nextjs-google-analytics";

// eslint-disable-next-line no-undef
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_ID;

const GAScript: FC = () => {
  if (gaMeasurementId == null) {
    console.warn("No GA Id found");
    return <></>;
  }
  return (
    <>
      <GoogleAnalytics trackPageViews gaMeasurementId={gaMeasurementId} />
    </>
  );
};

export default GAScript;
