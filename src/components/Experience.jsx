import { OrbitControls } from "@react-three/drei";
import { FadingImageDisplacement } from "./FadingImageDisplacement";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <FadingImageDisplacement
        position-x={1.5}
        position-z={-2}
        img1="img5.jpg"
        img2="img6.jpg"
        displacementimg="14.jpg"
      />
      <FadingImageDisplacement
        position-x={-2.5}
        position-z={1}
        img1="img2.jpg"
        img2="img3.jpg"
        displacementimg="11.jpg"
      />
    </>
  );
};
