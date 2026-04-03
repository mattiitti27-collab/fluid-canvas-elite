import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function GeometricShape({ position, rotation, scale, color, speed = 1, geometry }: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  color: string;
  speed?: number;
  geometry: "icosahedron" | "octahedron" | "torus" | "dodecahedron";
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshPhysicalMaterial>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime * speed;
    meshRef.current.rotation.x = rotation[0] + t * 0.15;
    meshRef.current.rotation.y = rotation[1] + t * 0.1;
  });

  const geo = useMemo(() => {
    switch (geometry) {
      case "icosahedron": return <icosahedronGeometry args={[1, 0]} />;
      case "octahedron": return <octahedronGeometry args={[1, 0]} />;
      case "torus": return <torusGeometry args={[1, 0.4, 8, 16]} />;
      case "dodecahedron": return <dodecahedronGeometry args={[1, 0]} />;
    }
  }, [geometry]);

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {geo}
        <meshPhysicalMaterial
          ref={materialRef}
          color={color}
          transparent
          opacity={0.15}
          roughness={0.1}
          metalness={0.8}
          clearcoat={1}
          clearcoatRoughness={0.1}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function ScrollResponsiveGroup() {
  const groupRef = useRef<THREE.Group>(null);
  const scrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame(() => {
    if (!groupRef.current) return;
    const target = scrollY.current * 0.001;
    groupRef.current.rotation.y += (target - groupRef.current.rotation.y) * 0.02;
    groupRef.current.position.y += (-scrollY.current * 0.002 - groupRef.current.position.y) * 0.03;
  });

  const shapes = useMemo(() => [
    { position: [-4, 2, -5] as [number, number, number], rotation: [0, 0, 0] as [number, number, number], scale: 1.8, color: "#9D4EDD", speed: 0.5, geometry: "icosahedron" as const },
    { position: [4, -1, -8] as [number, number, number], rotation: [1, 0, 0] as [number, number, number], scale: 2.2, color: "#00F3FF", speed: 0.3, geometry: "octahedron" as const },
    { position: [0, 3, -12] as [number, number, number], rotation: [0, 1, 0] as [number, number, number], scale: 3, color: "#9D4EDD", speed: 0.2, geometry: "dodecahedron" as const },
    { position: [-6, -3, -10] as [number, number, number], rotation: [0.5, 0.5, 0] as [number, number, number], scale: 1.5, color: "#00F3FF", speed: 0.4, geometry: "torus" as const },
    { position: [6, 4, -15] as [number, number, number], rotation: [0, 0, 1] as [number, number, number], scale: 2.5, color: "#FFD700", speed: 0.15, geometry: "icosahedron" as const },
    { position: [-2, -4, -6] as [number, number, number], rotation: [1, 1, 0] as [number, number, number], scale: 1.2, color: "#9D4EDD", speed: 0.6, geometry: "octahedron" as const },
  ], []);

  return (
    <group ref={groupRef}>
      {shapes.map((props, i) => (
        <GeometricShape key={i} {...props} />
      ))}
    </group>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.15} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#9D4EDD" />
      <pointLight position={[-10, -5, 5]} intensity={0.3} color="#00F3FF" />
    </>
  );
}

export default function GeometricCanvas() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={isMobile ? 1 : Math.min(window.devicePixelRatio, 1.5)}
        gl={{ antialias: !isMobile, alpha: true, powerPreference: "low-power" }}
        style={{ background: "transparent" }}
        frameloop={isMobile ? "demand" : "always"}
      >
        <Lights />
        <ScrollResponsiveGroup />
      </Canvas>
    </div>
  );
}
