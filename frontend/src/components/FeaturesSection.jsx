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

        <Col
          xs={12}
          sm={6}
          lg={3}
          className="mb-4 d-flex justify-content-center">
          <div className="feature-card">
            <FontAwesomeIcon
              icon={faSmile}
              size="3x"
              className="mb-3 icon-color"
            />
            <h5 className="mt-3">Facial Procedures</h5>
            <p className="text-muted">
              Enhance your appearance with safe and effective facial procedures,
              ensuring you look your best at every stage of life.
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
              icon={faTooth}
              size="3x"
              className="mb-3 icon-color"
            />
            <h5 className="mt-3">Dental Procedures</h5>
            <p className="text-muted">
              Providing advanced dental care from routine cleanings to complex
              procedures, ensuring a healthy and beautiful smile.
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
              icon={faStethoscope}
              size="3x"
              className="mb-3 icon-color"
            />
            <h5 className="mt-3">Breast Procedures</h5>
            <p className="text-muted">
              Offering a range of breast procedures to enhance, reconstruct, or
              maintain your body’s natural beauty and health.
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
              icon={faEye}
              size="3x"
              className="mb-3 icon-color"
            />
            <h5 className="mt-3">Eye Procedures</h5>
            <p className="text-muted">
              Specialized treatments and surgeries to improve your vision and
              eye health, ensuring long-term care for your eyes.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FeaturesSection;
