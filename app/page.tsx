"use client";

import DimensionsForm from "@/components/DimensionsForm";
import { Dimensions } from "@/types/Dimensions";
import { useState } from "react";
import WrappingResult from "@/components/WrappingResult";

export default function Home() {
  const [dimensions, setDimensions] = useState<Dimensions>({} as Dimensions);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-orange-100">
      <div className="container max-w-[800px]">
        <div className="pt-12 pb-16 px-16 h-full bg-white shadow-md rounded-lg">
          <h1 className="mb-8 text-center text-3xl font-medium">Gift Wrapping Paper Calculator</h1>
          <DimensionsForm onSubmit={(dimensions) => setDimensions(dimensions)} />
          <WrappingResult dimensions={dimensions} />
        </div>
      </div>
    </main>
  );
}
