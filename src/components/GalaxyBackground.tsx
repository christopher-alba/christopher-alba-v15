import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useMemo, useEffect } from "react";
import { cssVar } from "../helpers/styles";
import { useTheme } from "../contexts/ThemeContext";

// This component lives inside <Canvas>
function GalaxyPoints({
  count = 1000,
  radius = 20,
}: {
  count?: number;
  radius?: number;
}) {
  const { theme } = useTheme(); // 👈 shared theme source

  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.PointsMaterial>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = radius * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
    }
    return pos;
  }, [count, radius]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.01;
      pointsRef.current.rotation.x += delta * 0.002;
    }
  });

  // 🔥 Theme → material sync (THIS is the important part)
  useEffect(() => {
    if (!materialRef.current) return;

    materialRef.current.color.set(cssVar("--galaxy-stars-color"));
  }, [theme]);

  return (
    <Points
      ref={pointsRef}
      positions={positions}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        ref={materialRef}
        size={0.05}
        sizeAttenuation
        transparent
        depthWrite={false}
      />
    </Points>
  );
}

export default function GalaxyBackground({ count = 1000, radius = 20 }) {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
      camera={{ position: [0, 0, 10], fov: 60 }}
    >
      <ambientLight intensity={0.3} />
      <GalaxyPoints count={count} radius={radius} />
    </Canvas>
  );
}
