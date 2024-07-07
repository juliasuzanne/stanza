import { OrbitControls } from "@react-three/drei";
import { ImageKate } from "./ImageKate";
import { useState, useEffect } from "react";
import { Modal } from "../Modal";
import React from "react";
import { useTexture } from "@react-three/drei";
import { ImageJulia } from "./ImageJulia";

export const KateExperience = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [currentDescription, setCurrentDescription] = useState("");

  function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
  }

  const handleShowModal = () => {
    console.log("show modal");
    setIsModalVisible(true);
  };

  const handleSetCurrentImage = (image) => {
    setCurrentImage(image);
  };
  const handleSetCurrentDescription = (description) => {
    setCurrentDescription(description);
  };

  const handleHideModal = () => {
    console.log("Hide modal");
    setIsModalVisible(false);
  };

  return (
    <>
      {/* <ImageKate
        position-x={getRandomNum(-2, 10)}
        position-z={getRandomNum(-20, -10)}
        position-y={getRandomNum(0, 1)}
        img1="https://res.cloudinary.com/dygjz8yhp/image/upload/v1689350461/3.6b_7b_gvdywh.jpg"
        img2="https://res.cloudinary.com/dygjz8yhp/image/upload/v1689350461/3.6b_7b_gvdywh.jpg"
        address="/blog"
        displacementimg="https://res.cloudinary.com/dygjz8yhp/image/upload/v1689350461/3.6b_7b_gvdywh.jpg"
      /> */}
      {/* <FadingImageDisplacement
        position-x={getRandomNum(-2, 0)}
        position-z={getRandomNum(-20, -10)}
        position-y={getRandomNum(0, 2)}
        img1="https://res.cloudinary.com/dygjz8yhp/image/upload/v1689350461/3.6b_7b_gvdywh.jpg"
        img2="https://res.cloudinary.com/dygjz8yhp/image/upload/v1689350461/3.6b_7b_gvdywh.jpg"
        address="/"
        displacementimg="https://res.cloudinary.com/dygjz8yhp/image/upload/v1689350461/3.6b_7b_gvdywh.jpg"
      /> */}
      <OrbitControls></OrbitControls>

      {props.drawings.slice(0, 100).map((drawing) => (
        <ImageKate
          key={drawing.id}
          speed={getRandomNum(-2, 2)}
          position-x={getRandomNum(-50, 100)}
          position-z={getRandomNum(-20, 20)}
          position-y={getRandomNum(-20, 40)}
          img1={drawing.url}
          img2={drawing.url}
          // address={drawing.tag[0]}
          displacementimg={drawing.url}
        />
      ))}

      {props.photos.slice(0, 50).map((drawing) => (
        <ImageJulia
          key={drawing.id}
          speed={getRandomNum(-2, 2)}
          position-x={getRandomNum(-100, 50)}
          position-z={getRandomNum(-20, 20)}
          position-y={getRandomNum(-40, 20)}
          img1={drawing.url}
          img2={drawing.url}
          // address={drawing.tag[0]}
          displacementimg={drawing.url}
        />
      ))}
    </>
  );
};
