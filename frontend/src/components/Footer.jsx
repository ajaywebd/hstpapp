import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaDribbble,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const hstpRef = useRef(null);

  const quickLinksLeft = [
    { text: "Men Disease", path: "/disease/maleDisease" },
    { text: "Women Disease", path: "/disease/femaleDisease" },
    { text: "Children Disease", path: "/disease/childrenDisease" },
    { text: "Aerobic Exercise", path: "/exercise/aerobicExercise" },
  ];

  const quickLinksRight = [
    { text: "Pilate Exercise", path: "/exercise/pilateExercise" },
    { text: "Children Exercise", path: "/exercise/childrenExercise" },
    { text: "Yoga Asans", path: "/exercise/yogaExercise" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
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
        <Row className="d-flex justify-content-between align-items-start">
          {/* HSTP Section */}
          <Col xs={12} md={3} className="mb-4">
            <div ref={hstpRef}>
              <h5 className="text-warning">HSTP</h5>
            </div>
            <p>Automated AI-based Therapeutic Treatment Planning Tool.</p>
            <div className="social-icons d-flex">
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

          {/* Quick Links Section */}
          <Col xs={12} md={3} className="mb-4">
            <h5 className="text-warning">Quick Links</h5>
            <Row>
              <Col xs={6}>
                <ul>
                  {quickLinksLeft.map((link, index) => (
                    <li key={index}>
                      <Link to={link.path}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              </Col>
              <Col xs={6}>
                <ul>
                  {quickLinksRight.map((link, index) => (
                    <li key={index}>
                      <Link to={link.path}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Col>

          {/* Contact Info Section */}
          <Col xs={12} md={3} className="mb-4">
            <h5 className="text-warning">Contact Info</h5>
            <ul>
              <li>Toll Free No. 1800 212 4669</li>
              <li>sales@brbiomedical.com</li>
              <li>D-71, Malviya Nagar, New Delhi-110017 (INDIA)</li>
            </ul>
          </Col>

          {/* Availability Section */}
          <Col xs={12} md={3} className="mb-4">
            <h5 className="text-warning">We are Available</h5>
            <ul>
              <li>Monday - Friday: 9.00 - 18.00</li>
              <li>Saturday: 11.00 - 16.00</li>
              <li>Sunday: Close</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
