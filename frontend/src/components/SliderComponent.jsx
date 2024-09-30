import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons
import "../styles/slider.css"; // Custom CSS file

const SliderComponent = () => {
  const settings = {
    dots: true, // Enabled dots for navigation
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true, // Enable auto sliding
    autoplaySpeed: 2000, // Set auto sliding delay to 2000ms (2 seconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container my-5">
      <Slider {...settings}>
        <div className="text-center text-center1 p-4 bg-teal text-white rounded shadow">
          <i className="bi bi-headset fs-1 text-warning"></i>
          <p className="mt-3">100+ Service Centers</p>
        </div>
        <div className="text-center text-center1 p-4 bg-teal text-white rounded shadow">
          <i className="bi bi-calendar4-week fs-1 text-success"></i>
          <p className="mt-3">40+ Yrs of Legacy</p>
        </div>
        <div className="text-center text-center1 p-4 bg-teal text-white rounded shadow">
          <i className="bi bi-lightbulb fs-1 text-info"></i>
          <p className="mt-3">Cutting-Edge Innovation</p>
        </div>
        <div className="text-center text-center1 p-4 bg-teal text-white rounded shadow">
          <i className="bi bi-globe fs-1 text-light"></i>
          <p className="mt-3">Global Recognition</p>
        </div>
        <div className="text-center text-center1 p-4 bg-teal text-white rounded shadow">
          <i className="bi bi-patch-check fs-1 text-danger"></i>
          <p className="mt-3">ISO & ISI Certified</p>
        </div>
        <div className="text-center text-center1 p-4 bg-teal text-white rounded shadow">
          <i className="bi bi-map fs-1 text-warning"></i>
          <p className="mt-3">Nationwide Distribution</p>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
