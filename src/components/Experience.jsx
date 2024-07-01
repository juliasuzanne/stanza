import { OrbitControls } from "@react-three/drei";
import { FadingImageDisplacement } from "./FadingImageDisplacement";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <FadingImageDisplacement img1="img5.jpg" img2="img6.jpg" displacementimg="10.jpg" />
      {/* <FadingImageDisplacement img1="img2.jpg" img2="img3.jpg" displacementimg="11.jpg" /> */}
    </>
  );
};
