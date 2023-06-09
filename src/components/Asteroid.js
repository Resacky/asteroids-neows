import { useThree, useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei"; // Sphere component is part of drei package
import React, { useRef } from 'react';

const Asteroid = ({position, size, speed}) => {
  // this reference will give us direct access to the mesh
  const mesh = useRef();

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += speed));

  return (
    <mesh position={position} ref={mesh}>
      <Sphere args={[size, 32, 32]}>
        <meshStandardMaterial attach="material" color="gray" />
      </Sphere>
    </mesh>
  );
}

export default Asteroid;