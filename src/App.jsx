import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { FadingImageDisplacement } from "./components/FadingImageDisplacement";

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 5], fov: 80 }}>
      <color attach="background" args={["#ececec"]} />
      <Experience />
    </Canvas>
  );
}

export default App;
