import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, Stars } from "@react-three/drei";
import Earth from '../components/Earth';
import Asteroid from '../components/Asteroid';
import Sun from '../components/Sun';
import Moon from '../components/Moon';

import '../styles/start.css';

const AppStart = () => {
    // An example list of asteroid positions
    const asteroidPositions = [
        [3, 0, 0],
        [-3, 0, 0],
        [0, 3, 0],
        [0, -3, 0],
        [0, 0, 3],
        [0, 0, -3]
    ];

    return (
        <div className="App">
            <Canvas camera={{ position: [0, 0, 10], fov: 40 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
                <Suspense fallback={null}>
                    <Earth />
                    <Moon />
                    {asteroidPositions.map((position, index) => (
                        <Asteroid key={index} position={position} />
                    ))}
                </Suspense>
                <Sun />
                <OrbitControls />
            </Canvas>
        </div>
    );
};

export default AppStart;