import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Asteroid = ({ position, size }) => {
  const ref = useRef();
  useFrame(({ clock }) => {
    ref.current.rotation.x = clock.getElapsedTime();
    ref.current.rotation.y = clock.getElapsedTime();
  });

  return (
    <mesh ref={ref} position={position} scale={[size * 1000, size * 1000, size * 1000]}> {/* Multiply size by 1000 */}
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" color="gray" />
    </mesh>
  );
};

export default Asteroid;