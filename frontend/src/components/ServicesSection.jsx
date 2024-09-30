import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const ServicesSection = () => {
  const backgroundImageUrl =
    "https://cdn.pixabay.com/photo/2015/02/26/15/40/doctor-650534_1280.jpg"; // Use your correct image path here

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "50px 0",
        position: "relative",
      }}>
      {/* Black background with opacity */}
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)", // Black background with opacity
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
        }}></div>

      <Container style={{ position: "relative", zIndex: 2 }}>
        <div className="text-center mb-5 text-white">
          <h6 className="text-primary">OUR SERVICES</h6>
          <h2>Offer for you</h2>
        </div>
        <Row>
          <Col xs={12} md={6} className="mb-4">
            <Card
              className="h-100 shadow-sm"
              style={{ backgroundColor: "white" }}>
              <Card.Body className="d-flex align-items-center">
                <img
                  src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg"
                  alt="Body procedures"
                  className="me-3"
                  style={{ width: "50px" }}
                />
                <div>
                  <Card.Title>Body procedures</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor aliqua.
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} className="mb-4">
            <Card
              className="h-100 shadow-sm"
              style={{ backgroundColor: "white" }}>
              <Card.Body className="d-flex align-items-center">
                <img
                  src="https://media.istockphoto.com/id/1494044119/photo/confident-mature-woman.jpg?s=1024x1024&w=is&k=20&c=D8IdyyXhU1vsWYZamifg8MWXrxHKTyNiI2jSv-Husys="
                  alt="Facial Procedures"
                  className="me-3"
                  style={{ width: "50px" }}
                />
                <div>
                  <Card.Title>Facial Procedures</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor aliqua.
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} className="mb-4">
            <Card
              className="h-100 shadow-sm"
              style={{ backgroundColor: "white" }}>
              <Card.Body className="d-flex align-items-center">
                <img
                  src="https://media.istockphoto.com/id/1651049276/photo/portrait-senior-woman-smiling.jpg?s=1024x1024&w=is&k=20&c=2pMZsANQ7qgCt6usc8PhIMU9hj6I9gMxXE9DgqsyAeI="
                  alt="Breast procedures"
                  className="me-3"
                  style={{ width: "50px" }}
                />
                <div>
                  <Card.Title>Breast procedures</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor aliqua.
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} className="mb-4">
            <Card
              className="h-100 shadow-sm"
              style={{ backgroundColor: "white" }}>
              <Card.Body className="d-flex align-items-center">
                <img
                  src="https://media.istockphoto.com/id/1919265357/photo/close-up-portrait-of-confident-businessman-standing-in-office.jpg?s=1024x1024&w=is&k=20&c=EpLEZWEw-pZhhhknmmxUubZK_UL7EuXzMe202LEu3SA="
                  alt="Skin care & Beauty"
                  className="me-3"
                  style={{ width: "50px" }}
                />
                <div>
                  <Card.Title>Skin care & Beauty</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor aliqua.
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServicesSection;
