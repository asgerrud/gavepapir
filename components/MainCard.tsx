"use client";

import Form from "@/components/Form";
import Result from "@/components/Result";
import React, { useState } from "react";
import { Dimensions } from "@/types/Dimensions";

const MainCard = () => {
  const [dimensions, setDimensions] = useState<Dimensions>({} as Dimensions);

  return (
    <div className="container max-w-[800px]">
      <div className="pt-12 pb-16 px-16 h-full bg-white shadow-md rounded-lg">
        <h1 className="mb-8 text-center text-3xl font-extrabold">Gift Wrapping Paper Calculator</h1>
        <Form onSubmit={(dimensions) => setDimensions(dimensions)} />
        <div className="flex flex-col mt-10">
          <h2 className="font-bold text-xl mb-3">You will need</h2>
          <Result dimensions={dimensions} />
        </div>
      </div>
    </div>
  );
};

export default MainCard;
