import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import "./NewsSection.css"; // Custom CSS file

const NewsSection = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="news-section">
      <Container className="my-5">
        <Row className="justify-content-between align-items-center mb-4">
          <Col xs={12} md={8}>
            <h6 className="text-muted text-start">OUR NEWS</h6>
            <h2 className="text-start">Skin Care Tips</h2>
          </Col>
          <Col xs={12} md={4} className="text-md-end text-center">
            <Button variant="outline-primary">View All News</Button>
          </Col>
        </Row>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          indicators={false}
          className="news-carousel">
          <Carousel.Item>
            <Row>
              {newsItems.map((item, idx) => (
                <Col xs={12} sm={12} md={4} className="mb-4" key={idx}>
                  <Card className="h-100 d-flex flex-column">
                    <Card.Body className="flex-grow-1 d-flex flex-column">
                      <Card.Title className="text-start">
                        {item.title}
                      </Card.Title>
                      <Card.Text className="text-start">
                        {item.description}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="mt-auto d-flex justify-content-between align-items-center">
                      <small className="text-muted">{item.date}</small>
                      <div className="d-flex justify-content-center w-100">
                        <Button
                          variant="primary"
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="custom-button">
                          Read More...
                        </Button>
                      </div>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

// Mock data to display multiple news items
const newsItems = [
  {
    title: "Here’s how you can get a natural glow this party season",
    description:
      "For a natural glow this party season, focus on hydration—both inside and out. Drink plenty of water throughout the day to keep your skin hydrated and apply a moisturizing serum or cream that locks in moisture. This combination will leave your skin looking plump, radiant, and ready for any event.",
    date: "Sep 07, 2024",
    link: "https://example.com/natural-glow",
  },
  {
    title: "Get better skin with these top 10 tips for skin care",
    description: (
      <>
        <strong>Stay Hydrated:</strong> Drink plenty of water throughout the day
        to keep your skin hydrated from the inside. Aim for 8 glasses daily to
        flush out toxins and maintain a healthy glow. <br />
        <strong>Cleanse Gently:</strong> Use a mild, pH-balanced cleanser twice
        a day to remove dirt, oil, and makeup without stripping the skin of its
        natural oils.
      </>
    ),
    date: "Sep 07, 2024",
    link: "https://example.com/skin-care-tips",
  },
  {
    title: "8 Ways to Save Your Skin if You Exercise Outside This Winter",
    description: (
      <>
        <strong>Apply a Moisturizing Sunscreen:</strong> Even in winter, UV rays
        can damage your skin. Use a broad-spectrum sunscreen with at least SPF
        30, and ensure it has hydrating ingredients to prevent dryness. <br />
        <strong>Moisturize Before and After:</strong> Cold air can strip your
        skin of moisture. Apply a rich, oil-based moisturizer before heading out
        and after your workout to help your skin retain moisture and prevent
        flakiness.
      </>
    ),
    date: "Sep 07, 2024",
    link: "https://example.com/winter-skin-care",
  },
];

export default NewsSection;
