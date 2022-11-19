import React from "react";
import "./Carouserl.css";
import img from "../../img/board-361516_640.jpg";
import img2 from "../../img/board-2450236_1920.jpg";
import { useState } from "react";
import { useEffect } from "react";
const Carousel = () => {
  const Images = [img, img2];
  const [image, setimage] = useState(Images[0]);
  const [animate, setanimate] = useState("");
  useEffect(() => {
    let counter = 0;
    setInterval(() => {
      setanimate("animate");
      if (counter < Images.length - 1) {
        counter++;
      } else {
        counter = 0;
      }
      setTimeout(() => {
        setanimate("");
        setimage(Images[counter]);
      }, 500);
    }, 5000);
    // eslint-disable-next-line 
  }, []);
  return (
    <div className="main_carousel_container">
      <div className="image_holder">
        <img src={image} className={animate} alt="" />
      </div>
    </div>
  );
};

export default Carousel;
