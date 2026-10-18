"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function NetworkGlobe3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // 1. Buat Scene & Camera terlebih dahulu
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;

    let renderer: THREE.WebGLRenderer;

    // 2. Bungkus WebGLRenderer dengan try-catch
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(renderer.domElement);
    } catch (e) {
      console.warn("WebGL tidak didukung atau dimatikan pada browser ini:", e);
      setHasWebGL(false);
      return; // Hentikan eksekusi T
    }

    const networkGroup = new THREE.Group();
    scene.add(networkGroup);

    // Globe Mesh Wireframe
    const sphereGeo = new THREE.IcosahedronGeometry(2.3, 3);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const globeMesh = new THREE.Mesh(sphereGeo, sphereMat);
    networkGroup.add(globeMesh);

    // Particle Nodes
    const particleCount = 180;
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.3;
      posArray[i] = r * Math.sin(phi) * Math.cos(theta);
      posArray[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      posArray[i + 2] = r * Math.cos(phi);
    }
    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3),
    );
    const particlesMat = new THREE.PointsMaterial({
      size: 0.045,
      color: 0xc084fc,
      transparent: true,
      opacity: 0.8,
    });
    const particlePoints = new THREE.Points(particlesGeo, particlesMat);
    networkGroup.add(particlePoints);

    // Orbit Rings
    const createRing = (
      radius: number,
      color: number,
      rotX: number,
      rotY: number,
    ) => {
      const ringGeo = new THREE.RingGeometry(radius, radius + 0.02, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.4,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = rotX;
      ring.rotation.y = rotY;
      return ring;
    };

    const ring1 = createRing(2.8, 0x7c3aed, Math.PI / 3, Math.PI / 6);
    const ring2 = createRing(3.2, 0x06b6d4, -Math.PI / 4, Math.PI / 3);
    networkGroup.add(ring1);
    networkGroup.add(ring2);

    if (width > 1024) networkGroup.position.x = 1.8;

    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.5;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.5;
    };
    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      globeMesh.rotation.y = elapsedTime * 0.08;
      particlePoints.rotation.y = elapsedTime * 0.08;
      ring1.rotation.z = elapsedTime * 0.1;
      ring2.rotation.z = -elapsedTime * 0.15;

      networkGroup.rotation.x += (mouseY - networkGroup.rotation.x) * 0.05;
      networkGroup.rotation.y += (mouseX - networkGroup.rotation.y) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      if (renderer) {
        renderer.setSize(w, h);
      }
      networkGroup.position.x = w > 1024 ? 1.8 : 0;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  // Jika WebGL tidak didukung oleh browser, tampilkan visualisasi fallback CSS
  if (!hasWebGL) {
    return (
      <div className="absolute inset-0 z-0 flex items-center justify-end pr-12 lg:pr-24 pointer-events-none opacity-60">
        <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full border border-cyan-500/30 bg-linear-to-tr from-purple-600/10 to-cyan-500/10 flex items-center justify-center animate-pulse">
          <div className="w-56 h-56 rounded-full border border-purple-500/40 animate-ping opacity-30" />
          <div className="absolute w-full h-full rounded-full border-2 border-dashed border-cyan-400/20 animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-auto"
    />
  );
}
