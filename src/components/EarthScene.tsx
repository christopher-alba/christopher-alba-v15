import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Group, MeshStandardMaterial } from "three";
import { a, SpringValue, useSpring } from "@react-spring/three";

/* -------------------------------------------------------
   Marker
------------------------------------------------------- */

type PinMarkerProps = {
  position: [number, number, number];
  scale?: number;
  hoverOffset?: number;
  baseColor?: string;
  hoverColor?: string;
  isHovered?: boolean;
};

export function PinMarker({
  position,
  scale = 0.03,
  hoverOffset = 0.05,
  baseColor = "#30b3ff",
  hoverColor = "#69ffad",
  isHovered = false,
}: PinMarkerProps) {
  const { scene } = useGLTF("/models/marker.glb");
  const ref = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  // Compute normalized radial direction
  const dir = new THREE.Vector3(...position).normalize();

  // Animate scale, offset, and color
  const spring = useSpring({
    scale: hovered ? scale * 1.5 : scale,
    offset: hovered ? hoverOffset : 0,
    color: hovered ? hoverColor : baseColor,
    config: { mass: 1, tension: 210, friction: 20 },
  });

  // Store reference to animated color
  const color = spring.color as SpringValue<string>;

  // Radial rotation: point tip toward Earth center
  useFrame(() => {
    if (ref.current) {
      const up = new THREE.Vector3(1, 0, 0);
      const quat = new THREE.Quaternion().setFromUnitVectors(
        up,
        dir.clone().negate()
      );
      ref.current.setRotationFromQuaternion(quat);
    }
  });

  //Set hover state from props
  useEffect(() => {
    setHovered(isHovered);
  }, [isHovered]);

  // Traverse once and clone all mesh materials
  useEffect(() => {
    scene.traverse((child: THREE.Object3D) => {
      if ((child as THREE.Mesh).isMesh && (child as THREE.Mesh).material) {
        (child as THREE.Mesh).material = (
          (child as THREE.Mesh).material as THREE.MeshStandardMaterial
        ).clone();
      }
    });
  }, [scene]);

  // Update material color every frame using the animated spring value
  useFrame(() => {
    const currentColor = new THREE.Color(color.get()); // get current color
    scene.traverse((child: THREE.Object3D) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const mat = mesh.material as THREE.MeshStandardMaterial;
        mat.color.copy(currentColor);
      }
    });
  });

  // Compute animated position and scale
  const animatedPosition = spring.offset.to((v) => [
    position[0] + dir.x * v,
    position[1] + dir.y * v,
    position[2] + dir.z * v,
  ]) as any;

  const animatedScale = spring.scale.to((v) => [v, v, v]) as any;

  return (
    <a.group
      ref={ref}
      position={animatedPosition}
      scale={animatedScale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <primitive object={scene} />
      {/* Point light that appears only on hover */}
      <a.pointLight
        color="#69ffad"
        intensity={hovered ? 1 : 0} // animate intensity
        distance={3} // radius of illumination
        decay={2} // falloff
        position={[0, 0, 0]} // relative to the pin
      />
    </a.group>
  );
}
/* -------------------------------------------------------
   Model
------------------------------------------------------- */
type EarthProps = {
  hovered?: boolean;
  scale?: number;
  targetRotationY?: number; // optional rotation override
};

function Earth({ scale = 1.5, targetRotationY, hovered = false }: EarthProps) {
  const ref = useRef<Group>(null);
  const { scene, materials } = useGLTF("/models/earth.glb");

  // Rotate Earth each frame
  useFrame((_, delta) => {
    if (ref.current) {
      const rotationSpeed = 0.15;
      if (typeof targetRotationY === "number") {
        // Smoothly rotate towards target
        // Compute the shortest delta angle between current and target rotation
        let deltaY = targetRotationY - ref.current.rotation.y;

        // Wrap delta to [-π, π]
        deltaY = ((deltaY + Math.PI) % (2 * Math.PI)) - Math.PI;

        //convert deltaY to shortest angle
        deltaY =
          Math.abs(deltaY) > Math.PI
            ? -Math.sign(deltaY) * (2 * Math.PI - Math.abs(deltaY))
            : deltaY;

        // Smoothly apply a fraction
        ref.current.rotation.y += deltaY * 0.05;
      } else {
        // Default rotation
        ref.current.rotation.y += delta * rotationSpeed;
      }
    }
  });

  // Materials
  const land = materials["Land"] as MeshStandardMaterial;
  const nz = materials["NZ"] as MeshStandardMaterial;
  const water = materials["water"] as MeshStandardMaterial;

  // 🌱 Land
  land.color.set("#2F6B4F");
  land.roughness = 0.65;
  land.metalness = 0.05;

  // 🇳🇿 Highlight
  nz.color.set("#00ff4c");
  nz.roughness = 0.4;
  nz.metalness = 0.1;

  // 🌊 Water
  water.color.set("#0E3A5D");
  water.roughness = 0.25;
  water.metalness = 0.6;

  // NZ approximate lat/lon: -41° lat, 174° lon
  const radius = 1.5; // match your Earth scale
  const offset = -0.4; // lift above surface
  const lat = -20 * (Math.PI / 180);
  const lon = 174 * (Math.PI / 180);

  const x = (radius + offset) * Math.cos(lat) * Math.sin(lon);
  const y = (radius + offset) * Math.sin(lat);
  const z = (radius + offset) * Math.cos(lat) * Math.cos(lon);

  const nzPosition: [number, number, number] = [x, y, z];

  return (
    <group ref={ref} scale={scale} rotation={[0, Math.PI * 0.25, 0]}>
      <primitive object={scene} />
      <PinMarker position={nzPosition} isHovered={hovered} />
    </group>
  );
}

/* -------------------------------------------------------
   Scene
------------------------------------------------------- */
type EarthSceneProps = {
  hovered?: boolean;
};

export default function EarthScene({ hovered }: EarthSceneProps) {
  const lat = -20 * (Math.PI / 180); // NZ latitude
  const lon = 174 * (Math.PI / 180); // NZ longitude

  // Compute x/z angle from sphere center to NZ for rotation.y
  const targetRotationY = Math.atan2(
    Math.sin(lon) * Math.cos(lat),
    Math.cos(lon) * Math.cos(lat)
  );

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.5;
      }}
      style={{ width: "100%", height: "100vh" }}
    >
      {/* Soft global lift */}
      <ambientLight intensity={0.35} />

      {/* Sky / ground bounce */}
      <hemisphereLight color="#e6f4ff" groundColor="#0b1020" intensity={3} />

      {/* Sun */}
      <directionalLight position={[8, 4, 6]} intensity={14} />

      <Suspense fallback={null}>
        <Earth
          hovered={hovered}
          targetRotationY={hovered ? targetRotationY : undefined}
        />
      </Suspense>
    </Canvas>
  );
}

/* -------------------------------------------------------
   Preload
------------------------------------------------------- */

useGLTF.preload("/models/earth.glb");
useGLTF.preload("/models/marker.glb");
