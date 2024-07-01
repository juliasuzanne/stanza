import { OrbitControls } from "@react-three/drei";
import { FadingImageDisplacement } from "./FadingImageDisplacement";

export const Experience = () => {
  function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
  }

  return (
    <>
      <OrbitControls />
      <FadingImageDisplacement
        position-x={getRandomNum(-2, 0)}
        position-z={getRandomNum(-2, 2)}
        img1="img5.jpg"
        img2="img6.jpg"
        address="/blog"
        displacementimg="14.jpg"
      />
      <FadingImageDisplacement
        position-x={getRandomNum(0, 2)}
        position-z={getRandomNum(1, 2)}
        img1="img2.jpg"
        img2="img3.jpg"
        address="/blog"
        displacementimg="13.jpg"
      />
    </>
  );
};
