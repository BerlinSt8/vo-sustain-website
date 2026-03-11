"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Network({ paused }: { paused: boolean }) {
  const groupRef = useRef<THREE.Group>(null!);

  const { nodeGeo, edgeGeo } = useMemo(() => {
    const rng = (lo: number, hi: number) => lo + Math.random() * (hi - lo);
    const nodes: [number, number, number][] = Array.from({ length: 32 }, () => [
      rng(-3.8, 3.8),
      rng(-1.8, 1.8),
      rng(-2.2, 2.2),
    ]);

    // Node geometry
    const nodeGeo = new THREE.BufferGeometry();
    nodeGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(nodes.flat()), 3)
    );

    // Edge geometry — connect nearby nodes
    const edgeVerts: number[] = [];
    const THRESH = 2.6;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const [x1, y1, z1] = nodes[i];
        const [x2, y2, z2] = nodes[j];
        const d = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2 + (z1 - z2) ** 2);
        if (d < THRESH) {
          edgeVerts.push(...nodes[i], ...nodes[j]);
        }
      }
    }
    const edgeGeo = new THREE.BufferGeometry();
    edgeGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(edgeVerts), 3)
    );

    return { nodeGeo, edgeGeo };
  }, []);

  useFrame((_, delta) => {
    if (!paused && groupRef.current) {
      groupRef.current.rotation.y += delta * 0.09;
      groupRef.current.rotation.x += delta * 0.013;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Connection lines */}
      <lineSegments geometry={edgeGeo}>
        <lineBasicMaterial color="#27AE60" transparent opacity={0.22} />
      </lineSegments>
      {/* Nodes */}
      <points geometry={nodeGeo}>
        <pointsMaterial
          color="#2ECC71"
          size={0.1}
          sizeAttenuation
          transparent
          opacity={0.95}
        />
      </points>
    </group>
  );
}

export default function NetworkScene3D() {
  const [paused, setPaused] = useState(false);
  const [height, setHeight] = useState("50vh");

  useEffect(() => {
    // Reduced motion
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPaused(mq.matches);
    const onMq = (e: MediaQueryListEvent) => setPaused(e.matches);
    mq.addEventListener("change", onMq);

    // Responsive height
    const onResize = () => setHeight(window.innerWidth < 768 ? "35vh" : "50vh");
    onResize();
    window.addEventListener("resize", onResize);

    return () => {
      mq.removeEventListener("change", onMq);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height,
        background: "linear-gradient(to bottom, #f8f8f8 0%, #0B1622 100%)",
        position: "relative",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 55 }}
        gl={{ alpha: true, antialias: true }}
        style={{ width: "100%", height: "100%" }}
      >
        <Network paused={paused} />
      </Canvas>
    </div>
  );
}
