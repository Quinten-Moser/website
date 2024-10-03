"use client";

import React, { Fragment } from "react";
import { Paragraph, XStack } from "tamagui";

import { FadeInYStack } from "@/layouts";

function Header() {
  return (
    <XStack width="100%" justifyContent="space-between" alignItems="center">
      <Paragraph size="$8" ta="start" col="$color1">
        Quinten Moser
      </Paragraph>
    </XStack>
  );
}

function Description() {
  return (
    <Fragment>
      <Paragraph marginTop={10} size="$4" col="$color6" ta="start">
        Quinten Moser is a software company.
      </Paragraph>
    </Fragment>
  );
}

export default function Home() {
  return (
    <FadeInYStack>
      {/* name and description */}
      <Header />
      <Description />
    </FadeInYStack>
  );
}
