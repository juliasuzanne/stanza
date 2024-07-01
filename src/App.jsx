import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { FadingImageDisplacement } from "./components/FadingImageDisplacement";
import { Billboard, Text } from "@react-three/drei";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Blog } from "./Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
