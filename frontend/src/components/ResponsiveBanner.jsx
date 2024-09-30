import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ResponsiveBanner.css";
import { Link } from "react-router-dom";

const ResponsiveBanner = () => {
  const [clickValues, setClickValues] = useState([]); // State to hold all click values

  const clickHandler = (value) => {
    setClickValues((prevValues) => [...prevValues, Number(value)]); // Append the clicked value
  };

  return (
    <div
      className="container-fluid p-0"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://cdn.pixabay.com/photo/2015/02/26/15/40/doctor-650534_1280.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        position: "relative",
      }}>
      <h1 className="text-center mt-2 text-bg-primary">Choose Your Disease</h1>
      <div
        className="text-center d-flex flex-wrap align-items-center justify-content-center gap-4"
        style={{
          maxHeight: "90vh",
          overflowY: "auto",
          padding: "1rem",
        }}>
        {/* Buttons */}
        <Link
          to="homeRemedies"
          className="btn btn-success mb-3"
          onClick={() => clickHandler("1")}>
          Abdominal pain
        </Link>
        <button
          className="btn btn-danger mb-3"
          onClick={() => clickHandler("2")}>
          Acne
        </button>
        <button
          className="btn btn-warning mb-3"
          onClick={() => clickHandler("3")}>
          Allergies
        </button>
        <button
          className="btn btn-warning mb-3"
          onClick={() => clickHandler("4")}>
          Athlete's foot
        </button>
        <button
          className="btn btn-warning mb-3"
          onClick={() => clickHandler("5")}>
          Back pain
        </button>
        {/* Add more buttons as needed */}
      </div>

      {/* Display clicked values */}
      <div className="text-white text-center mt-4">
        <h4>Clicked Values:</h4>
        {clickValues.length > 0 ? (
          <ul>
            {clickValues.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        ) : (
          <p>No values clicked yet.</p>
        )}
      </div>
    </div>
  );
};

export default ResponsiveBanner;
