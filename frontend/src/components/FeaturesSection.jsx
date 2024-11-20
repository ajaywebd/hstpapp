import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartbeat,
  faRunning,
  faAppleAlt,
  faSpa,
  faSmile,
  faTooth,
  faStethoscope,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import "./FeaturesSection.css"; // Custom CSS file

const FeaturesSection = () => {
  return (
    <Container fluid className="features-section  text-center my-5">
      <h6 className="text-muted">WHY CHOOSE US?</h6>
      <h2 className="mb-5">Offer for you</h2>
      <Row className="features-row">
        <Col
          xs={12}
          sm={6}
          lg={3}
          className="mb-4 d-flex justify-content-center">
          <div className="feature-card">
            <FontAwesomeIcon
              icon={faHeartbeat}
              size="3x"
              className="mb-3 icon-color"
            />
            <h5 className="mt-3">Diseases</h5>
            <p className="text-muted">
              Comprehensive information on a wide range of diseases and
              conditions, helping you stay informed about your health.
            </p>
          </div>
        </Col>
        <Col
          xs={12}
          sm={6}
          lg={3}
          className="mb-4 d-flex justify-content-center">
          <div className="feature-card">
            <FontAwesomeIcon
              icon={faRunning}
              size="3x"
              className="mb-3 icon-color"
            />
            <h5 className="mt-3">Exercise & Yoga</h5>
            <p className="text-muted">
              Discover tailored exercise and yoga routines to improve your
              physical and mental well-being, suitable for all fitness levels.
            </p>
          </div>
        </Col>
        <Col
          xs={12}
          sm={6}
          lg={3}
          className="mb-4 d-flex justify-content-center">
          <div className="feature-card">
            <FontAwesomeIcon
              icon={faAppleAlt}
              size="3x"
              className="mb-3 icon-color"
            />
            <h5 className="mt-3">Nutrition</h5>
            <p className="text-muted">
              Expert nutrition advice to guide your diet and boost your overall
              health, from meal planning to dietary supplements.
            </p>
          </div>
        </Col>

        <Col
          xs={12}
          sm={6}
          lg={3}
          className="mb-4 d-flex justify-content-center">
          <div className="feature-card">
            <FontAwesomeIcon
              icon={faSpa}
              size="3x"
              className="mb-3 icon-color"
            />
            <h5 className="mt-3">Skin Care & Beauty</h5>
            <p className="text-muted">
              Keep your skin healthy and radiant with our professional skincare
              tips and beauty treatments designed for all skin types.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FeaturesSection;
