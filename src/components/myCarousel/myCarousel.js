import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../assets/img/carousal/slide1.webp";
import "./myCarousel.css";

import ScrollDown from "../scrollDown/scroll";
const MyCarousel = () => {
  return (
    <div id="home">
      <Carousel controls={false} indicators={false}>
        <Carousel.Item>
          <img className=" w-100 custom-img" src={Slide1} alt="First slide" />
        </Carousel.Item>
      </Carousel>


    </div>
  );
};

export default MyCarousel;
