import React from "react";
import { Dimensions } from "@/types/Dimensions";
import { getWrappingPaperNeeded } from "@/util/calculate";

interface WrappingResultProps {
  dimensions: Dimensions;
}

const Result = ({ dimensions }: WrappingResultProps) => {
  const [paperLength, paperWidth] = getWrappingPaperNeeded(dimensions);

  const hasValidDimensions = paperLength !== null && paperWidth !== null;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-xl mb-3">You will need</h2>
      {hasValidDimensions ? (
        <p className="text-lg">
          {paperLength}cm &times; {paperWidth}cm of paper
        </p>
      ) : (
        <p className="text-lg font-medium text-gray-500">Enter dimensions above...</p>
      )}
    </div>
  );
};
export default Result;
