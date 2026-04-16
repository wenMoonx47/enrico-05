"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function hasWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") || canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    return !!gl;
  } catch {
    return false;
  }
}

function Particles({ count = 1500 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.02;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.03;

    const posArray = mesh.current.geometry.attributes.position
      .array as Float32Array;
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      posArray[i3 + 1] +=
        Math.sin(state.clock.elapsedTime * 0.3 + i * 0.1) * 0.001;
    }
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  const geom = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, [positions]);

  return (
    <points ref={mesh} geometry={geom}>
      <pointsMaterial
        size={0.03}
        color="#6366f1"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function FloatingGeometry() {
  const torusRef = useRef<THREE.Mesh>(null);
  const octaRef = useRef<THREE.Mesh>(null);
  const icoRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.2;
      torusRef.current.rotation.y = t * 0.3;
      torusRef.current.position.y = Math.sin(t * 0.5) * 0.3;
    }
    if (octaRef.current) {
      octaRef.current.rotation.x = t * 0.3;
      octaRef.current.rotation.z = t * 0.2;
      octaRef.current.position.y = Math.sin(t * 0.4 + 1) * 0.4;
    }
    if (icoRef.current) {
      icoRef.current.rotation.y = t * 0.25;
      icoRef.current.rotation.z = t * 0.15;
      icoRef.current.position.y = Math.sin(t * 0.6 + 2) * 0.3;
    }
  });

  return (
    <>
      <mesh ref={torusRef} position={[-4, 1, -3]}>
        <torusGeometry args={[0.6, 0.2, 16, 32]} />
        <meshBasicMaterial
          color="#6366f1"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>
      <mesh ref={octaRef} position={[4.5, -1, -4]}>
        <octahedronGeometry args={[0.7]} />
        <meshBasicMaterial
          color="#8b5cf6"
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>
      <mesh ref={icoRef} position={[3, 2, -5]}>
        <icosahedronGeometry args={[0.5]} />
        <meshBasicMaterial
          color="#a855f7"
          wireframe
          transparent
          opacity={0.1}
        />
      </mesh>
    </>
  );
}

/** CSS-only fallback when WebGL is unavailable */
function CSSParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-indigo-500/30 animate-pulse"
          style={{
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function ParticleField() {
  const [webglAvailable, setWebglAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    setWebglAvailable(hasWebGL());
  }, []);

  // Still loading the check
  if (webglAvailable === null) return null;

  // No WebGL — use CSS fallback
  if (!webglAvailable) return <CSSParticles />;

  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 1.5]}
        style={{ background: "transparent" }}
      >
        <Particles />
        <FloatingGeometry />
      </Canvas>
    </div>
  );
}
