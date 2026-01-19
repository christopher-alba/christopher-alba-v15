import { Canvas, useFrame } from "@react-three/fiber";
import { CameraControls, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "../contexts/ThemeContext";

function Building({ url }: { url: string }) {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF(url);
  const { theme } = useTheme();

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.06;
    }
  });

  useEffect(() => {
    scene.traverse((obj) => {
      if ((obj as THREE.Mesh).isMesh) {
        const mesh = obj as THREE.Mesh;

        mesh.castShadow = true;
        mesh.receiveShadow = true;

        if (Array.isArray(mesh.material)) {
          mesh.material = mesh.material.map((mat) =>
            replaceGlassMaterial(mat, theme),
          );
        } else {
          mesh.material = replaceGlassMaterial(mesh.material, theme);
        }
      }
    });
  }, [scene, theme]);

  return (
    <primitive ref={group} object={scene} scale={0.5} position={[0, -1, 0]} />
  );
}
function hashString(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0; // 32-bit
  }
  return Math.abs(hash);
}
const DARK_GLASS_PALETTE = ["#8998AC", "#9EAFAB", "#B0BF9B"];
const LIGHT_GLASS_PALETTE = ["#e6e6e6", "#dcdcdc", "#f0f0f0"];
function replaceGlassMaterial(
  material: THREE.Material,
  theme: "light" | "dark",
) {
  if (
    !(material instanceof THREE.MeshStandardMaterial) ||
    (!material.name.toLowerCase().includes("glass") &&
      !material.name.toLowerCase().includes("grass"))
  ) {
    return material;
  }

  if (material.name.toLowerCase().includes("glass")) {
    const palette = theme === "dark" ? DARK_GLASS_PALETTE : LIGHT_GLASS_PALETTE;

    const index = hashString(material.name) % palette.length;
    const color = new THREE.Color(palette[index]);

    const mat = material.clone();
    mat.color.copy(color);

    mat.metalness = 0.35;
    mat.roughness = 0.25;
    mat.transparent = false;
    mat.opacity = 0.9;

    if (theme === "dark") {
      // 🌙 Night glow — subtle, believable
      mat.emissive.copy(color);
      mat.emissiveIntensity = 1;
    } else {
      mat.emissive.set("#000000");
      mat.emissiveIntensity = 0;
    }

    return mat;
  } else if (material.name.toLowerCase().includes("grass")) {
    const mat = material.clone();
    mat.color.set(theme === "dark" ? "#ffffff" : "#ffffff");
    mat.metalness = 1; // slightly less than 1
    mat.roughness = 1; // super smooth

    return mat;
  } else {
    return material;
  }
}

export default function BuildingScene() {
  const { theme } = useTheme();
  return (
    <Canvas
      camera={{ position: [20, 0, 10], fov: 80 }}
      gl={{ antialias: true }}
      shadows
    >
      <CameraControls
        enabled={true} // enable the controls
        zoom={false} // disable zoom
        truck={false} // disable pan (lateral movement)
        minDistance={5} // optional: limits for rotation distance
        maxDistance={20}
        maxPolarAngle={Math.PI / 2}
      />
      {/* Lighting */}
      {/* Soft global lift */}
      <ambientLight intensity={0.01} />

      {/* Sky / ground bounce */}
      <hemisphereLight color="#e6f4ff" groundColor="#0b1020" intensity={0.4} />

      <directionalLight
        castShadow
        position={[10, 15, 10]}
        intensity={theme === "dark" ? 0.3 : 5}
        shadow-bias={-0.0005}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={1}
        shadow-camera-far={50}
        shadow-camera-left={-15}
        shadow-camera-right={15}
        shadow-camera-top={15}
        shadow-camera-bottom={-15}
      />

      {/* Model */}
      <Building url="/models/building.glb" />
    </Canvas>
  );
}

/* Preload for better UX */
useGLTF.preload("/models/building.glb");
