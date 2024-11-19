import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CalculateBMI.css";
import { Button, Tab, Tabs, Form } from "react-bootstrap";

const CalculateBMI = () => {
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState("");
  const [unit, setUnit] = useState("US");

  const calculateBMI = (e) => {
    e.preventDefault();
    let calculatedBMI;

    if (unit === "US") {
      // Height in inches, weight in kg (UK Standard)
      const heightInInches = parseInt(feet) * 12 + parseInt(inches);
      calculatedBMI = Math.round((weight / heightInInches ** 2) * 703);
    } else {
      // Height in cm, weight in lbs (US Standard)
      const heightInMeters = parseInt(feet) / 100;
      const weightInLbs = parseFloat(weight);
      const weightInKg = weightInLbs / 2.205; // Convert to kg for accuracy
      calculatedBMI = Math.round(weightInKg / heightInMeters ** 2);
    }

    setBmi(calculatedBMI);
    determineBMICategory(calculatedBMI);
  };

  const determineBMICategory = (bmi) => {
    if (bmi < 18.5) {
      setBmiCategory("Underweight");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setBmiCategory("Normal");
    } else if (bmi >= 25 && bmi <= 29.9) {
      setBmiCategory("Overweight");
    } else {
      setBmiCategory("Obesity");
    }
  };

  const handleUnitChange = (selectedTab) => {
    setUnit(selectedTab);
    setFeet("");
    setInches("");
    setWeight("");
    setBmi(null);
    setBmiCategory("");
  };

  return (
    <div className="bmi-calculator">
      <div className="bmi-form">
        <Tabs
          id="unit-tabs"
          activeKey={unit}
          onSelect={handleUnitChange}
          className="mb-4">
          <Tab eventKey="US" title="UK Standard">
            <Form onSubmit={calculateBMI}>
              <Form.Group controlId="formHeightFeet" className="mb-3">
                <Form.Label>Your Height:</Form.Label>
                <div className="d-flex">
                  <Form.Control
                    type="number"
                    value={feet}
                    onChange={(e) => setFeet(e.target.value)}
                    placeholder="feet"
                    className="me-2"
                  />
                  <Form.Control
                    type="number"
                    value={inches}
                    onChange={(e) => setInches(e.target.value)}
                    placeholder="inches"
                  />
                </div>
              </Form.Group>

              <Form.Group controlId="formWeight" className="mb-4">
                <Form.Label>Your Weight (kg)</Form.Label>
                <Form.Control
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="kg"
                />
              </Form.Group>

              <Button type="submit" className="calculate-btn w-100 mb-3">
                Compute BMI
              </Button>
            </Form>
          </Tab>

          <Tab eventKey="Metric" title="US Standard">
            <Form onSubmit={calculateBMI}>
              <Form.Group controlId="formHeightMetric" className="mb-3">
                <Form.Label>Your Height (cm)</Form.Label>
                <Form.Control
                  type="number"
                  value={feet}
                  onChange={(e) => setFeet(e.target.value)}
                  placeholder="cm"
                />
              </Form.Group>

              <Form.Group controlId="formWeightMetric" className="mb-4">
                <Form.Label>Your Weight (lbs)</Form.Label>
                <Form.Control
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="lbs"
                />
              </Form.Group>

              <Button type="submit" className="calculate-btn w-100 mb-3">
                Compute BMI
              </Button>
            </Form>
          </Tab>
        </Tabs>

        {bmi && (
          <div className="bmi-result text-center">
            <h4>Your BMI:</h4>
            <p>
              {bmi} kg/m<sup>2</sup>
            </p>
            <p>
              Category: <strong>{bmiCategory}</strong>
            </p>
          </div>
        )}
      </div>

      <div className="bmi-categories">
        <h5>BMI Categories:</h5>
        <ul>
          <li>Underweight: Less than 18.5</li>
          <li>Normal: 18.5 - 24.9</li>
          <li>Overweight: 25 - 29.9</li>
          <li>Obesity: 30 or more</li>
        </ul>
        <div className="bmi-next-steps">
          <h5>What Next? Take Action Towards Better Health:</h5>
          <ul>
            <li>
              <Link to="/nutrition">Maintain a Healthy Weight</Link>
            </li>
            <li>
              Maintaining a healthy weight is important for your heart health.
            </li>
            <li>
              <a href="#">Learn more about overweight and obesity</a>
            </li>
            <li>
              <a href="#">Increase Physical Activity</a>
            </li>
            <li>Moving more can lower your risk factors for heart disease.</li>
            <li>
              <Link to="/nutrition">Eat a Heart-Healthy Diet</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CalculateBMI;
