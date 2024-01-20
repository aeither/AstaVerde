"use client";

import { Builder } from "@builder.io/react";

import BatchCard from "./components/BatchCard";

Builder.registerComponent(BatchCard, {
  name: "BatchCard",
  inputs: [
    {
      name: "batch",
      type: "string",
      required: true,
    },
  ],
});
