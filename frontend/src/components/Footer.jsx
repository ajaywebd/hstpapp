import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaDribbble,
} from "react-icons/fa";
import "./Footer.css"; // Import the custom CSS

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const hstpRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Start animation when visible
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (hstpRef.current) {
      observer.observe(hstpRef.current);
    }

    return () => {
      if (hstpRef.current) {
        observer.unobserve(hstpRef.current);
      }
    };
  }, []);

  return (
    <footer>
      <Container>
        <Row>
          <Col xs={12} md={4} className="mb-4 text-md-start">
            <div ref={hstpRef}>
              <h3 className={isVisible ? "hstp-animated" : ""}>HSTP</h3>
            </div>
            <p>Automated AI based Therapeutic Treatment Planning Tool.</p>
            <div className="social-icons d-flex justify-content-md-start">
              <a href="#" className="me-3">
                <FaFacebookF />
              </a>
              <a href="#" className="me-3">
                <FaTwitter />
              </a>
              <a href="#" className="me-3">
                <FaDribbble />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
            </div>
          </Col>
          <Col xs={12} md={4} className="mb-4 text-md-start">
            <h5 style={{ color: "#f39c12" }}>Our Departments</h5>
            <Row>
              <Col xs={6}>
                <ul>
                  <li>Births</li>
                  <li>Cardiology</li>
                  <li>Traumatology</li>
                  <li>Nuclear</li>
                  <li>Pregnancy</li>
                  <li>X-ray</li>
                </ul>
              </Col>
              <Col xs={6}>
                <ul>
                  <li>Pulmonary</li>
                  <li>Neurology</li>
                  <li>Dental</li>
                  <li>Magnetic</li>
                  <li>For Disabled</li>
                  <li>Prostheses</li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={4} className="mb-4 text-md-start">
            <h5 style={{ color: "#f39c12" }}>We are Available</h5>
            <ul>
              <li>Monday - Friday: 8.00 - 18.00</li>
              <li>Saturday: 8.00 - 18.00</li>
              <li>Sunday: 8.00 - 13.00</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
