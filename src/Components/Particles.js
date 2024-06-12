import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const AnimatedParticles = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // Setup the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    // Create particles
    const particleCount = 65; // Keeping the same number of particles
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const speeds = new Float32Array(particleCount);

    const colorPalette = [
      new THREE.Color(0xff7f50), // Coral
      new THREE.Color(0xffd700), // Gold
      new THREE.Color(0x7fff00), // Chartreuse
      new THREE.Color(0x1e90ff), // DodgerBlue
      new THREE.Color(0xff69b4)  // HotPink
    ];

    const width = window.innerWidth;
    const height = window.innerHeight;

    function initializeParticle(index) {
      const x = (Math.random() - 0.5) * width;
      const y = (Math.random() - 0.5) * height;
      const z = (Math.random() - 0.5) * 600; // Depth distribution

      positions[index] = x;
      positions[index + 1] = y;
      positions[index + 2] = z;

      speeds[index / 3] = 0.5 + Math.random() * 0.5;  // Random speed for each particle

      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[index] = color.r;
      colors[index + 1] = color.g;
      colors[index + 2] = color.b;
    }

    for (let i = 0; i < particleCount * 3; i += 3) {
      initializeParticle(i);
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 3.0,  // Keeping the same size for visibility
      vertexColors: true,
      map: new THREE.TextureLoader().load('https://threejs.org/examples/textures/sprites/circle.png'), // Circle texture
      transparent: true,
      opacity: 0.7,  // Opacity for visibility
      blending: THREE.AdditiveBlending,  // Additive blending for a blur effect
      depthTest: false
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    camera.position.z = 300;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      for (let i = 0; i < particleCount * 3; i += 3) {
        const speed = speeds[i / 3];
        const direction = new THREE.Vector3(positions[i], positions[i + 1], positions[i + 2]).normalize();

        positions[i] -= direction.x * speed;
        positions[i + 1] -= direction.y * speed;
        positions[i + 2] -= direction.z * speed;

        // Reset particle if it reaches the center
        const distanceFromCenter = Math.sqrt(
          positions[i] * positions[i] +
          positions[i + 1] * positions[i + 1] +
          positions[i + 2] * positions[i + 2]
        );

        if (distanceFromCenter < 10) {  // Reset when close to the center
          initializeParticle(i);
        }
      }

      particles.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />;
};

export default AnimatedParticles;
