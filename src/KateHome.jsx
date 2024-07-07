import axios from "axios";
import { useState, useEffect } from "react";
import { Experience } from "./components/Experience";
import { Canvas } from "@react-three/fiber";
import { KateExperience } from "./components/KateExperience";
import { DrawingsIndex } from "./DrawingsIndex";
import { OrbitControls } from "@react-three/drei";

import { FadingImageDisplacement } from "./components/FadingImageDisplacement";

export function KateHome() {
  const [drawings, setDrawings] = useState([]);
  const [photos, setPhotos] = useState([]);

  const [drawingUrls, setDrawingUrls] = useState([]);

  const handleIndexDrawings = () => {
    console.log("handleIndexDrawings");
    axios.get("https://kate.fly.dev/drawings.json").then((response) => {
      console.log(response.data);
      setDrawings(response.data);
    });
    const newArray = [];
    drawings.forEach((drawing) => newArray.push(drawing.url));
    setDrawingUrls(newArray);
    console.log(drawingUrls);
  };

  const handleIndexPhotos = () => {
    console.log("handleIndexPhotos");
    axios.get("https://thesisblog.fly.dev/photos.json").then((response) => {
      console.log(response.data);
      setPhotos(response.data);
    });
  };

  useEffect(handleIndexDrawings, []);
  useEffect(handleIndexPhotos, []);

  return (
    <>
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
        <color attach="background" args={["#d15e75"]} />
        <KateExperience drawings={drawings} photos={photos} drawingUrls={drawingUrls} />
      </Canvas>
    </>
  );
}
