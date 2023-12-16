import { Dimensions } from "@/types/Dimensions";

interface WrappingResultProps {
  dimensions: Dimensions;
}

const WrappingResult = ({ dimensions }: WrappingResultProps) => {
  return (
    <div className="flex flex-col mt-10">
      <h2 className="font-medium text-xl mb-3">Wrapping paper dimensions</h2>
      <WrappingResultMessage dimensions={dimensions} />
    </div>
  );
};

const WrappingResultMessage = ({ dimensions }: { dimensions: Dimensions }) => {
  const { length, width, height } = dimensions;

  const hasValidDimensions = length > 0 && width > 0 && height > 0;

  const overlap: number = 2; // cm

  const wrappingPaperLength = 2 * width + 2 * height + overlap;
  const wrappingPaperWidth = length + height + 2 * overlap;

  if (!hasValidDimensions) {
    return <p className="text-red-500">Please fill all dimensions</p>;
  }

  return (
    <p className="text-lg">
      {wrappingPaperLength}cm &times; {wrappingPaperWidth}cm
    </p>
  );
};

export default WrappingResult;
