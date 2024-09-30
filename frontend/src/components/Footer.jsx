import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaDribbble,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#1c2a39", color: "#fff", padding: "40px 0" }}>
      <Container>
        <Row>
          <Col xs={12} md={4} className="mb-4 text-center text-md-start">
            <h5 className="mb-3">
              <img
                src="https://cdn.pixabay.com/photo/2017/10/04/09/56/laboratory-2815641_1280.jpg"
                alt="Medi Logo"
                style={{ width: "40px" }}
              />{" "}
              HSTP
            </h5>
            <p>Automated AI based Theraputic Treatment Planning Tool.</p>
            <div className="d-flex justify-content-center justify-content-md-start">
              <a href="#" className="text-white me-3">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white me-3">
                <FaTwitter />
              </a>
              <a href="#" className="text-white me-3">
                <FaDribbble />
              </a>
              <a href="#" className="text-white">
                <FaInstagram />
              </a>
            </div>
          </Col>
          <Col xs={12} md={4} className="mb-4 text-center text-md-start">
            <h5 className="mb-3">Our Departments</h5>
            <Row>
              <Col xs={6}>
                <ul className="list-unstyled">
                  <li>Births</li>
                  <li>Cardiology</li>
                  <li>Traumatology</li>
                  <li>Nuclear</li>
                  <li>Pregnancy</li>
                  <li>X-ray</li>
                </ul>
              </Col>
              <Col xs={6}>
                <ul className="list-unstyled">
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
          <Col xs={12} md={4} className="mb-4 text-center text-md-start">
            <h5 className="mb-3">We're Available</h5>
            <ul className="list-unstyled">
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
