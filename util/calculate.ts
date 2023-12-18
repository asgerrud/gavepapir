import { Dimensions } from "@/types/Dimensions";
import { Centimeter } from "@/types/Centimeter";

export const getWrappingPaperNeeded = (dimension: Dimensions): [length: Centimeter, width: Centimeter] => {
  const { width, height, length } = dimension;

  if (!width || !height || !length) {
    return [null, null];
  }

  const OVERLAP: Centimeter = 2;

  // Sort the dimensions to ensure length >= width >= height
  const [x, y, z] = [length, width, height].sort((a, b) => b - a);

  const wrappingPaperLength: Centimeter = 2 * y + 2 * z + OVERLAP;
  const wrappingPaperWidth: Centimeter = x + z + 2 * OVERLAP;

  return [wrappingPaperLength, wrappingPaperWidth];
};
