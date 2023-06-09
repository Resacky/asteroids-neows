import React, { useRef } from 'react';
import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";

const Moon = () => {
    const moonRef = useRef();
    
    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        moonRef.current.position.x = Math.sin(elapsedTime) * 2;
        moonRef.current.position.z = Math.cos(elapsedTime) * 2;
    });
    
    return (
        <mesh ref={moonRef} position={[0,0,0]}>
            <Sphere args={[0.1, 32, 32]}> {/* Moon radius is smaller */}
                <meshStandardMaterial attach="material" color="gray" />
            </Sphere>
        </mesh>
    );
};

export default Moon;