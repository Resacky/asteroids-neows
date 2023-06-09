import React, { useRef } from 'react';
import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";

const Moon = ({position}) => {
    const moonRef = useRef();
    
    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        moonRef.current.position.x = Math.sin(elapsedTime) * 5;
        moonRef.current.position.z = Math.cos(elapsedTime) * 5;
    });
    
    return (
        <mesh ref={moonRef} position={position}>
            <Sphere args={[1, 32, 32]}> {/* Moon radius is smaller */}
                <meshStandardMaterial attach="material" color="gray" />
            </Sphere>
        </mesh>
    );
};

export default Moon;