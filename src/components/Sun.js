import React from 'react';
import { Sphere } from "@react-three/drei";

const Sun = () => {
    return (
        <mesh position={[100,100,100]}>
            <Sphere args={[10, 32, 32]}> {/* Sun radius is larger */}
                <meshStandardMaterial attach="material" color="yellow" />
            </Sphere>
        </mesh>
    );
};

export default Sun;