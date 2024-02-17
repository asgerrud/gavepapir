import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Dimensions } from "@/types/Dimensions";
import Gift from "@/components/Gift";
import { PLACEHOLDER_DIMENSIONS } from "@/types/constants";

const GiftScene = ({ dimensions }: { dimensions: Dimensions }) => {
  const hasValidDimensions = Object.values(dimensions).find((dimension: number) => dimension !== 0);

  return (
    <div className="h-[225px] lg:h-[300px]">
      <Canvas>
        <ambientLight />
        <directionalLight intensity={4} position={[4, 8, 2]} />
        <OrbitControls enableDamping={false} />
        <OrthographicCamera makeDefault zoom={200} position={[1, 1, 1]} />
        <Gift dimensions={hasValidDimensions ? dimensions : PLACEHOLDER_DIMENSIONS} />
      </Canvas>
    </div>
  );
};

export default GiftScene;
