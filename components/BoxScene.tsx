import { OrthographicCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React from "react";
import { Dimensions } from "@/types/Dimensions";
import Box from "@/components/Box";
import * as THREE from "three";

const DiagonalView = () => {
  const vec = new THREE.Vector3();

  useFrame((state) => {
    const x = 10;
    const y = 10;
    const z = 10;

    state.camera.position.lerp(vec.set(x, y, z), 1);
    state.camera.lookAt(0, 0, 0);
    state.camera.updateProjectionMatrix();
  });

  return null;
};

const BoxScene = ({ dimensions }: { dimensions: Dimensions }) => {
  return (
    <Canvas style={{ height: 300 }}>
      <ambientLight />
      <directionalLight intensity={2} position={[5, 10, 0]} />
      <OrthographicCamera makeDefault zoom={10} />
      {/*<gridHelper args={[100, 100, `white`, `gray`]} />*/}
      <mesh position={[0, 1, 0]}>
        <Box dimensions={dimensions} />
        <meshNormalMaterial attach="material" />
      </mesh>
      <DiagonalView />
    </Canvas>
  );
};

export default BoxScene;
