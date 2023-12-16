import { Dimensions } from "@/types/Dimensions";
import { Centimeter } from "@/types/Centimeter";

export const getWrappingPaperNeeded = (dimension: Dimensions): [length: Centimeter, width: Centimeter] => {
  const { width, height, length } = dimension;

  if (!width || !height || !length) {
    return [null, null];
  }

  const OVERLAP: Centimeter = 2;

  const wrappingPaperLength: Centimeter = 2 * width + 2 * height + OVERLAP;
  const wrappingPaperWidth: Centimeter = length + height + 2 * OVERLAP;

  return [wrappingPaperLength, wrappingPaperWidth];
};
