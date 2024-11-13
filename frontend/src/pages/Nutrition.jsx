import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Nutrition.css";

const Nutrition = () => {
  const [selectedBMI, setSelectedBMI] = useState("");
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

  // Age and BMI options arrays
  const ageOptions = [
    { eventKey: "3", label: "0-3" },
    { eventKey: "6", label: "3-6" },
    { eventKey: "9", label: "6-9" },
    { eventKey: "12", label: "9-12" },
    { eventKey: "15", label: "12-15" },
    { eventKey: "18", label: "15-18" },
    { eventKey: "21", label: "18-21" },
    { eventKey: "24", label: "21-24" },
    { eventKey: "27", label: "24-27" },
    { eventKey: "30", label: "27-30" },
    { eventKey: "33", label: "30-33" },
    { eventKey: "36", label: "33-36" },
    { eventKey: "39", label: "36-39" },
    { eventKey: "42", label: "39-42" },
    { eventKey: "45", label: "42-45" },
    { eventKey: "48", label: "45-48" },
    { eventKey: "51", label: "48-51" },
    { eventKey: "54", label: "51-54" },
    { eventKey: "57", label: "54-57" },
    { eventKey: "60", label: "57-60" },
    { eventKey: "63", label: "60-63" },
    { eventKey: "66", label: "63-66" },
    { eventKey: "69", label: "66-69" },
    { eventKey: "72", label: "69-72" },
    { eventKey: "75", label: "72-75" },
  ];

  const bmiOptions = [
    { eventKey: "16", label: "14-16" },
    { eventKey: "18", label: "16-18" },
    { eventKey: "20", label: "18-20" },
    { eventKey: "22", label: "20-22" },
    { eventKey: "24", label: "22-24" },
    { eventKey: "26", label: "24-26" },
    { eventKey: "28", label: "26-28" },
    { eventKey: "30", label: "28-30" },
  ];

  const handleSelect = (e) => setSelectedBMI(e);
  const handleSelectAge = (e) => setSelectedAge(e);
  const clickHandler = (e) => setSelectedGender(e.target.value);

  return (
    <>
      <section
        id="nutrition-hero"
        className="d-flex align-items-center justify-content-center bg-light py-5">
        <div className="container">
          {/* Calculate BMI button at top left */}
          <div className="calculate-bmi-button">
            <Link to="/calculateBMI" className="btn btn-danger">
              Calculate BMI
            </Link>
          </div>

          {/* Centered heading and paragraph */}
          <div className="row justify-content-center text-center mb-5">
            <div className="col-12">
              <h1 className="text-dark">
                The Most Valuable Thing is Your Health
              </h1>
              <p className="text-dark">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
          <div className="row justify-content-between">
            {/* Left side: Data collection form */}
            <div className="col-lg-5 col-md-6 col-12 mb-4">
              <div className="row mb-3">
                <div className="col-md-12">
                  <Dropdown onSelect={handleSelectAge}>
                    <Dropdown.Toggle
                      variant="light"
                      id="dropdown-age"
                      className="btn-lg w-100">
                      Select Your Range of Age
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="w-100">
                      {ageOptions.map((option) => (
                        <Dropdown.Item
                          eventKey={option.eventKey}
                          key={option.eventKey}>
                          {option.label}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>

                <div className="col-md-12 mt-3">
                  <Dropdown onSelect={handleSelect}>
                    <Dropdown.Toggle
                      variant="light"
                      id="dropdown-bmi"
                      className="btn-lg w-100">
                      Select Your Range of BMI
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="w-100">
                      {bmiOptions.map((option) => (
                        <Dropdown.Item
                          eventKey={option.eventKey}
                          key={option.eventKey}>
                          {option.label}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-12 d-flex justify-content-center">
                  <span className="text-dark me-3">Gender:</span>
                  <div className="form-check form-check-inline">
                    <input
                      onClick={clickHandler}
                      type="radio"
                      name="gender"
                      value="male"
                      id="gender-male"
                      className="form-check-input"
                    />
                    <label
                      className="form-check-label text-dark"
                      htmlFor="gender-male">
                      Male
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      onClick={clickHandler}
                      type="radio"
                      name="gender"
                      value="female"
                      id="gender-female"
                      className="form-check-input"
                    />
                    <label
                      className="form-check-label text-dark"
                      htmlFor="gender-female">
                      Female
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Display selected data */}
            <div className="col-lg-5 col-md-6 col-12 d-flex flex-column justify-content-center align-items-start mb-4">
              <h3>Selected Data</h3>
              <p className="mb-1">
                {selectedAge
                  ? `Selected range of Age: ${selectedAge - 3}-${selectedAge}`
                  : "Selected range of Age:"}
              </p>

              <p className="mb-1">
                {selectedBMI
                  ? `Selected range of BMI: ${selectedBMI - 2}-${selectedBMI}`
                  : "Selected range of BMI:"}
              </p>
              <p className="mb-1">Selected Gender: {selectedGender}</p>
            </div>
          </div>
          {/* Button centered below */}
          <div className="row justify-content-center mt-5">
            <div className="col-lg-4 col-md-6 col-8 text-center">
              <Link
                state={{ selectedAge, selectedBMI, selectedGender }}
                to="/displayBMI"
                className="btn btn-success btn-lg w-100">
                Get Nutrition
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nutrition;
