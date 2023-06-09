import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const AsteroidField = ({ data }) => {
  const asteroidFieldRef = useRef();

  useEffect(() => {
    // Create the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    // Append renderer to component
    asteroidFieldRef.current.appendChild(renderer.domElement);

    // Add light
    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(10, 10, 10);
    scene.add(light);

    // Add Earth
    const earthGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const earthMaterial = new THREE.MeshPhongMaterial({ color: 0x2233ff, emissive: 0x112244 });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earth);

    // Add asteroids
    if (data) {
      data.forEach(asteroid => {
        // Create a new 3D object for each asteroid here
        // Don't forget to scale the actual distances
        // ...
      });
    }

    // Animate scene
    const animate = function () {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();
  }, [data]);

  return <div ref={asteroidFieldRef} />;
};

export default AsteroidField;