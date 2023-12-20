"use client";

import Form from "@/components/Form";
import Result from "@/components/Result";
import React, { useState } from "react";
import { Dimensions } from "@/types/Dimensions";
import GiftScene from "@/components/GiftScene";
import Header from "@/components/Header";
import { DEFAULT_DIMENSIONS } from "@/types/constants";

const MainCard = () => {
  const [dimensions, setDimensions] = useState<Dimensions>(DEFAULT_DIMENSIONS);

  return (
    <div className="container max-w-[800px]">
      <div className="px-6 pt-8 pb-10 lg:px-16 lg:p-16 lg:pb-18 lg:pt-12 h-full bg-white shadow-md rounded-lg">
        <h1 className="mb-4 lg:mb-8 text-center text-3xl font-extrabold">Gift Wrap Calculator</h1>
        <div className="mb-4">
          <GiftScene dimensions={dimensions} />
        </div>
        <Form onSubmit={(dimensions: Dimensions) => setDimensions(dimensions)} />
        <div className="flex flex-col mt-10">
          <h2 className="font-bold text-xl mb-3">You will need</h2>
          <Result dimensions={dimensions} />
        </div>
        <GiftScene dimensions={dimensions} />
        <Form initialValues={DEFAULT_DIMENSIONS} onSubmit={(dimensions: Dimensions) => setDimensions(dimensions)} />
        <Result dimensions={dimensions} />
      </div>
    </div>
  );
};

export default MainCard;
