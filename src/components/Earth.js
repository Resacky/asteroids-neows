import { Sphere } from "@react-three/drei";
import React from 'react';

const Earth = () => {
  return (
    <mesh position={[0, 0, 0]}>
      <Sphere args={[2, 64, 64]}>
        <meshStandardMaterial attach="material" color="blue" />
      </Sphere>
    </mesh>
  );
}

export default Earth;