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
    mount.appendChild(renderer.domElement);

    // Create particles
    const particleCount = 50;  // Reduced number of particles
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const speeds = new Float32Array(particleCount * 3);

    const colorPalette = [
      new THREE.Color(0xff7f50), // Coral
      new THREE.Color(0xffd700), // Gold
      new THREE.Color(0x7fff00), // Chartreuse
      new THREE.Color(0x1e90ff), // DodgerBlue
      new THREE.Color(0xff69b4)  // HotPink
    ];

    function initializeParticle(index) {
      const radius = 300;  // Initial distance from the center
      const angle = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 100;

      positions[index] = Math.cos(angle) * radius;
      positions[index + 1] = y;
      positions[index + 2] = Math.sin(angle) * radius;

      speeds[index] = positions[index] * -0.001;  // Slower speed for inward movement
      speeds[index + 1] = positions[index + 1] * -0.001;  // Slower speed for inward movement
      speeds[index + 2] = positions[index + 2] * -0.001;  // Slower speed for inward movement

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
      size: 1.0,  // Size to match the video
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
        positions[i] += speeds[i];
        positions[i + 1] += speeds[i + 1];
        positions[i + 2] += speeds[i + 2];

        // Reset particle if it moves past the camera view
        if (Math.abs(positions[i]) < 1 && Math.abs(positions[i + 1]) < 1 && Math.abs(positions[i + 2]) < 1) {
          initializeParticle(i);
        }
      }

      particles.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
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
