import React from "react";
import "./DisplayChildren.css";
import { Link, useLocation } from "react-router-dom"; // Import Link for navigation
import Children_Exercise from "./../data/Children_Exercise"; // Assuming the data is in Children_Exercise

const DisplayChildren = () => {
  const location = useLocation();
  const { value } = location.state || {};
  let selectedData = Children_Exercise.find(
    (exercise) => exercise.id === value
  );

  // If no data is found, return a message
  if (!selectedData) {
    return (
      <div className="container exercise-container mt-4">
        <h1 className="exercise-title">
          No data found for the selected exercise
        </h1>
        <Link to="/exercise/childrenExercise" className="btn btn-primary mt-4">
          Back to All Exercises
        </Link>
      </div>
    );
  }

  return (
    <div className="container exercise-container mt-4">
      <h1 className="exercise-title">{selectedData.title}</h1>
      <p className="exercise-description">{selectedData.description}</p>

      {/* Section rendering */}
      {selectedData.sections &&
        selectedData.sections.map((section, index) => (
          <section key={index}>
            <h3 className="section-title">{section.heading}</h3>

            {/* Subheadings rendering */}
            {section.subheadings &&
              section.subheadings.map((sub, subIndex) => (
                <div key={subIndex} className="subheading-item">
                  <h4>{sub.subheading} :</h4>
                  <p>{sub.content}</p>
                </div>
              ))}
          </section>
        ))}

      <Link to="/exercise/childrenExercise" className="btn btn-success mt-4">
        Back to All Exercises
      </Link>
    </div>
  );
};

export default DisplayChildren;
