// NavigationBar.jsx
import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavigationBar.css"; // Import the custom CSS file
import { ToastContainer } from "react-toastify";
import { handleSuccess } from "../utils";

const NavigationBar = ({ handleLogout }) => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate(); // Use navigate to programmatically redirect

  // Function to toggle the navbar state
  const handleToggle = () => {
    setExpanded((prevExpanded) => !prevExpanded); // Toggle the expanded state
  };

  // Function to handle menu item click and collapse navbar for mobile/tablet
  const handleMenuClick = () => {
    setExpanded(false); // Collapse the navbar on mobile and tablet after clicking a non-dropdown item
  };

  const onLogoutClick = () => {
    handleLogout();
    navigate("/login"); // Navigate to login after logout
  };

  return (
    <>
      <Navbar bg="light" expand="lg" className="py-3" expanded={expanded}>
        <Container>
          <Navbar.Brand as={Link} to="/" className="text-primary brand-logo">
            HSTP
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleToggle}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                as={Link}
                to="/"
                className="nav-item"
                onClick={handleMenuClick}>
                Home
              </Nav.Link>

              {/* Dropdown for Diseases */}
              <NavDropdown
                title="Disease"
                id="basic-nav-dropdown"
                className="nav-item"
                onClick={(e) => e.preventDefault()} // Prevent collapse on dropdown click
              >
                <NavDropdown.Item
                  as={Link}
                  to="/disease/maleDisease"
                  onClick={handleMenuClick}>
                  Male Disease
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/disease/femaleDisease"
                  onClick={handleMenuClick}>
                  Female Disease
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/disease/childrenDisease"
                  onClick={handleMenuClick}>
                  Children Disease
                </NavDropdown.Item>
              </NavDropdown>

              {/* Dropdown for Exercises & Yoga */}
              <NavDropdown
                title="Exercises & Yoga"
                id="basic-nav-dropdown"
                className="nav-item"
                onClick={(e) => e.preventDefault()} // Prevent collapse on dropdown click
              >
                <NavDropdown.Item
                  as={Link}
                  to="/exercise/aerobicExercise"
                  onClick={handleMenuClick}>
                  Aerobic Exercise
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/exercise/pilateExercise"
                  onClick={handleMenuClick}>
                  Pilates Exercise
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/exercise/childrenExercise"
                  onClick={handleMenuClick}>
                  Children Exercise
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/exercise/yogaExercise"
                  onClick={handleMenuClick}>
                  Yoga Asans
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
                as={Link}
                to="/nutrition"
                className="nav-item"
                onClick={handleMenuClick}>
                Nutrition
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/calculateBMI"
                className="nav-item"
                onClick={handleMenuClick}>
                Calculate BMI
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contact"
                className="nav-item"
                onClick={handleMenuClick}>
                Contact
              </Nav.Link>

              <NavDropdown
                title="Login/Logout"
                id="basic-nav-dropdown"
                className="nav-item"
                onClick={(e) => e.preventDefault()} // Prevent collapse on dropdown click
              >
                <NavDropdown.Item
                  as={Link}
                  to="/login"
                  onClick={handleMenuClick}>
                  Login
                </NavDropdown.Item>
                <NavDropdown.Item onClick={onLogoutClick}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ToastContainer />
    </>
  );
};

export default NavigationBar;
