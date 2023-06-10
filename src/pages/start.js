import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, Stars } from "@react-three/drei";
import Earth from '../components/Earth';
import Sun from '../components/Sun';
import Moon from '../components/Moon';
import Asteroid from '../components/Asteroid';
import axios from 'axios';

import '../styles/start.css';

const AppStart = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('https://www.neowsapp.com/rest/v1/feed/today')
            .then(response => {
                setData(response.data);
            })
            .catch(error => console.error(`Error: ${error}`));
    }, []);

    // Get today's date
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    let todayFormatted = yyyy + '-' + mm + '-' + dd;
    /* for debugging */
    //console.log("Today's date: " + todayFormatted);     

    return (
        <div className="App">
            <Canvas camera={{ position: [0, 0, 200], fov: 40 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
                <Suspense fallback={null}>
                    <Earth />
                    <Sun position={[-150, 0, 0]} />
                    <Moon position={[2.5, 0, 0]} />
                    {data && data.near_earth_objects[`${todayFormatted}`].map((asteroid) => (
                        <Asteroid 
                            key={asteroid.id} 
                            position={[
                                asteroid.close_approach_data[0].miss_distance.kilometers / 1000000, /* Convert to model units */
                                (Math.random() - 0.5) * 50, /* Random y between -25 and 25 */
                                (Math.random() - 0.5) * 50  /* Random z between -25 and 25 */
                            ]}
                            size={asteroid.estimated_diameter.meters.estimated_diameter_max / 1000000} /* Convert to model units */
                        />
                    ))}
                </Suspense>
                <OrbitControls />
            </Canvas>
        </div>
    );
};

export default AppStart;