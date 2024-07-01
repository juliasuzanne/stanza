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
        position-z={getRandomNum(-20, -10)}
        position-y={getRandomNum(0, 2)}
        img1="img5.jpg"
        img2="img6.jpg"
        address="/blog"
        displacementimg="14.jpg"
      />
      <FadingImageDisplacement
        position-x={getRandomNum(0, 2)}
        position-z={getRandomNum(-20, -10)}
        position-y={getRandomNum(-3, 3)}
        img1="img2.jpg"
        img2="img3.jpg"
        address="/blog"
        displacementimg="13.jpg"
      />
      <FadingImageDisplacement
        position-x={getRandomNum(-20, 0)}
        position-z={getRandomNum(-20, -10)}
        position-y={getRandomNum(0, 20)}
        img1="img5.jpg"
        img2="img6.jpg"
        address="/blog"
        displacementimg="14.jpg"
      />
      <FadingImageDisplacement
        position-x={getRandomNum(-2, 10)}
        position-z={getRandomNum(-20, -10)}
        position-y={getRandomNum(0, 1)}
        img1="img5.jpg"
        img2="img6.jpg"
        address="/blog"
        displacementimg="14.jpg"
      />
      <FadingImageDisplacement
        position-x={getRandomNum(0, 2)}
        position-z={getRandomNum(-20, -10)}
        position-y={getRandomNum(-1, 5)}
        img1="img4.jpg"
        img2="img7.jpg"
        address="/blog"
        displacementimg="13.jpg"
      />
      <FadingImageDisplacement
        position-x={getRandomNum(0, 2)}
        position-z={getRandomNum(-20, -10)}
        position-y={getRandomNum(-3, 0)}
        img1="img8.jpg"
        img2="img9.jpg"
        address="/blog"
        displacementimg="13.jpg"
      />
    </>
  );
};
