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
        <Header />
        <GiftScene dimensions={dimensions} />
        <Form initialValues={DEFAULT_DIMENSIONS} onChange={(dimensions: Dimensions) => setDimensions(dimensions)} />
        <Result dimensions={dimensions} />
      </div>
    </div>
  );
};

export default MainCard;
