import { Dimensions } from "@/types/Dimensions";

const Box = ({ dimensions }: { dimensions: Dimensions }) => {
  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[dimensions.length, dimensions.width, dimensions.height]} />
      <meshStandardMaterial attach="material" color={"orange"} />
    </mesh>
  );
};

export default Box;
