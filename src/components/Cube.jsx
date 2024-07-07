import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { shaderMaterial, useTexture } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { easing, geometry } from "maath";

export function Cube({ url }) {
  const texture = useTexture(url);
  return (
    <>
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
        <color attach="background" args={["#ececec"]} />
        <OrbitControls />
        <mesh>
          <meshBasicMaterial />
          <boxGeometry />
        </mesh>
      </Canvas>
    </>
  );
}

<Cube url="https://res.cloudinary.com/dygjz8yhp/image/upload/v1689350461/3.6b_7b_gvdywh.jpg" />;
