import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { FadingImageDisplacement } from "./components/FadingImageDisplacement";
import { Billboard, Text } from "@react-three/drei";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Blog } from "./Blog";
import { KateHome } from "./KateHome";
import { Cube } from "./components/Cube";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<KateHome />} />
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/kate" element={<Home />} />
        <Route path="/cube" element={<Cube />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
