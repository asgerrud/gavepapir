import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Dimensions } from "@/types/Dimensions";
import Gift from "@/components/Gift";

const GiftScene = ({ dimensions }: { dimensions: Dimensions }) => {
  return (
    <div className="h-[225px] lg:h-[300px]">
      <Canvas>
        <ambientLight />
        <directionalLight intensity={4} position={[4, 8, 2]} />
        <OrbitControls enableDamping={false} />
        <OrthographicCamera makeDefault zoom={200} position={[1, 1, 1]} />
        <Gift dimensions={dimensions} />
      </Canvas>
    </div>
  );
};

export default GiftScene;
