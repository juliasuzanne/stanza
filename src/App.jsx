import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { FadingImageDisplacement } from "./components/FadingImageDisplacement";
import { Billboard, Text } from "@react-three/drei";

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 5], fov: 80 }}>
      <color attach="background" args={["#ececec"]} />
      <Experience />
    </Canvas>
  );
}

export default App;
