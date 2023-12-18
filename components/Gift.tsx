import { Dimensions } from "@/types/Dimensions";

const Gift = ({ dimensions }: { dimensions: Dimensions }) => {
  function getNormalizedDimensions(): [width: number, height: number, depth: number] {
    const { length, width, height } = dimensions;
    const vectorLength = Math.sqrt(length * length + width * width + height * height);
    return [width / vectorLength, height / vectorLength, length / vectorLength];
  }

  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={getNormalizedDimensions()} />
      <meshStandardMaterial attach="material" color={"#D68C33"} />
    </mesh>
  );
};

export default Gift;
