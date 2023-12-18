import React from "react";
import { Dimensions } from "@/types/Dimensions";
import { getWrappingPaperNeeded } from "@/util/calculate";

interface WrappingResultProps {
  dimensions: Dimensions;
}

const Result = ({ dimensions }: WrappingResultProps) => {
  const [paperLength, paperWidth] = getWrappingPaperNeeded(dimensions);

  const hasValidDimensions = paperLength !== null && paperWidth !== null;

  if (!hasValidDimensions) {
    return <p className="text-lg font-medium text-gray-500">Enter dimensions above...</p>;
  }

  return (
    <p className="text-lg">
      {paperLength}cm &times; {paperWidth}cm of paper
    </p>
  );
};
export default Result;
