import React from 'react';
import { Sphere } from "@react-three/drei";

const Sun = ({ position }) => {
    return (
        <mesh position={position}>
            <Sphere args={[3, 32, 32]}> {/* Sun radius is larger */}
                <meshStandardMaterial attach="material" color="yellow" />
            </Sphere>
        </mesh>
    );
};

export default Sun;