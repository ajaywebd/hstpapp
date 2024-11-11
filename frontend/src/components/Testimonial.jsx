import React from "react";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonial.css"; // Custom CSS

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <section id="testimonials" className="testimonials py-5">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8 text-center">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="text-muted">
              Hear from our satisfied customers who have enjoyed our services.
            </p>
          </div>
        </div>

        <Slider {...settings}>
          <div className="testimonial-item p-4">
            <div className="testimonial-content">
              <p>
                This is the best service I have ever used. The team 
               and the results were fantastic.
              </p>
            </div>
            <div className="testimonial-author mt-4">
              <h5>Ajay Maurya</h5>
            </div>
          </div>

          <div className="testimonial-item p-4">
            <div className="testimonial-content">
              <p>
                I was thoroughly impressed with the level of service and the
                quality of the final product.
              </p>
            </div>
            <div className="testimonial-author mt-4">
              <h5>Abhishek Sharma</h5>
            </div>
          </div>

          <div className="testimonial-item p-4">
            <div className="testimonial-content">
              <p>
                Highly recommend this company for anyone looking for top-notch
                service and results.
              </p>
            </div>
            <div className="testimonial-author mt-4">
              <h5>Ankit Jauhari</h5>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
