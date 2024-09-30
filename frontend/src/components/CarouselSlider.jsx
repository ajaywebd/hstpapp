import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CarouselSlider.css"; // Import the custom CSS file
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";

const CarouselSlider = () => {
  return (
    <div className="txtContainer">
      <Carousel interval={2000} className="carousel-container">
        {/* Change interval to 2 seconds */}
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={img1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={img2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={img3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={img4}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={img5}
            alt="Fifth slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="txtStyle">
        <h1>HSTP</h1>
        <p>
          Automated AI based <br /> Theraputic Treatment Planning Tool.
        </p>
      </div>
    </div>
  );
};

export default CarouselSlider;
