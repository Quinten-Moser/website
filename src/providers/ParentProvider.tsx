"use client";

import { PostHogProvider } from "posthog-js/react";
import { NextTamaguiProvider, ReactQueryProvider } from "./";

const apiKey = "phc_i5hMAQU2CszpiwCq3i1gGoI2JJrEZaUBH1xDirL1aaH";
const options = {
  api_host: "https://app.posthog.com",
};

type Props = {
  children: React.ReactNode;
};

export function ParentProvider({ children }: Props) {
  return (
    <ReactQueryProvider>
      <PostHogProvider apiKey={apiKey} options={options}>
        <NextTamaguiProvider>{children}</NextTamaguiProvider>
      </PostHogProvider>
    </ReactQueryProvider>
  );
}
