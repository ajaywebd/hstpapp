import React from "react";
import "./YogaDisplay.css";
import { Link, useLocation } from "react-router-dom"; // Import Link for navigation
import Yoga_Exercise from "../data/Yoga_Exercise";

const YogaDisplay = () => {
  const location = useLocation();
  const { value } = location.state || {};
  let selectedData = Yoga_Exercise.find((exercise) => exercise.id === value);

  // If no data is found, return a message
  if (!selectedData) {
    return (
      <div className="container exercise-container mt-4">
        <h1 className="exercise-title">
          No data found for the selected exercise
        </h1>
        <Link to="/exercise/yogaExercise" className="btn btn-primary mt-4">
          Back to All Exercises
        </Link>
      </div>
    );
  }

  return (
    <div className="container exercise-container mt-4">
      <h1 className="exercise-title">{selectedData.title}</h1>
      <p className="exercise-description">{selectedData.description}</p>

      {/* Sections Rendering */}
      {selectedData.sections &&
        selectedData.sections.map((section, sectionIndex) => (
          <section key={sectionIndex}>
            <h3 className="section-title">{section.heading}</h3>
            {section.subheadings && (
              <ul className="list-group">
                {section.subheadings.map((subheading, subIndex) => (
                  <li key={subIndex} className="list-group-item">
                    <strong>{subheading.subheading}:</strong>{" "}
                    {subheading.content}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

      <Link to="/exercise/yogaExercise" className="btn btn-primary mt-4">
        Back to All Exercises
      </Link>
    </div>
  );
};

export default YogaDisplay;
