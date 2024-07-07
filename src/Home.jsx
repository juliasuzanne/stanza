import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

export function Home() {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
        <color attach="background" args={["#ececec"]} />
        <Experience />
      </Canvas>
    </>
  );
}
