"use client";

import { BuilderComponent, builder } from "@builder.io/react";
import React, { useEffect, useState } from "react";

// Replace with your Public API Key.
builder.init("ab325a55add849b19d3eb273505408e0");

export default function Page() {
  const [homepage, setHomepage] = useState(null);

  useEffect(() => {
    void builder
      .get("ecoassets")
      .toPromise()
      .then((homepageData) => setHomepage(homepageData));
  }, []);

  return (
    <>
      <div className="w-full min-h-[calc(100vh-64px)]">
        <button>Hello</button>
        {homepage && <BuilderComponent model="ecoassets" content={homepage} />}
      </div>
    </>
  );
}
