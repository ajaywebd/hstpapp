import React from "react";
import "./DisplayPilate.css";
import { Link, useLocation } from "react-router-dom";
import Pilate_Exercise from "./../data/Pilate_Exercise";

const DisplayPilate = () => {
  const location = useLocation();
  const { value } = location.state || {};
  let selectedData = Pilate_Exercise.find((exercise) => exercise.id === value);

  // If no data is found, return a message
  if (!selectedData) {
    return (
      <div className="container exercise-container mt-4">
        <h1 className="exercise-title">
          No data found for the selected exercise
        </h1>
        <Link to="/exercise/pilateExercise" className="btn btn-primary mt-4">
          Back to All Exercises
        </Link>
      </div>
    );
  }

  return (
    <div className="container exercise-container mt-4">
      <h1 className="exercise-title">{selectedData.title}</h1>
      <p className="exercise-description">{selectedData.description}</p>

      {/* Starting Position Section */}
      {selectedData.starting_position && (
        <section>
          <h3 className="section-title">Starting Position:</h3>
          <ul className="list-group">
            {Object.entries(selectedData.starting_position).map(
              ([key, value], index) => (
                <li key={index} className="list-group-item">
                  <strong>{key.replace(/_/g, " ").toUpperCase()}:</strong>{" "}
                  {value}
                </li>
              )
            )}
          </ul>
        </section>
      )}

      {/* Steps Section */}
      {selectedData.steps && (
        <section>
          <h3 className="section-title">Steps:</h3>
          <ol>
            {selectedData.steps.map((step, index) => (
              <li key={index}>
                {Object.entries(step).map(([key, value]) => (
                  <p key={key}>
                    <strong>{key.replace(/_/g, " ").toUpperCase()}:</strong>{" "}
                    {value}
                  </p>
                ))}
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* Repetitions Section */}
      {selectedData.repetitions && (
        <section>
          <h3 className="section-title">Repetitions:</h3>
          <p>{selectedData.repetitions}</p>
        </section>
      )}

      {/* Benefits Section */}
      {selectedData.benefits && (
        <section>
          <h3 className="section-title">Benefits:</h3>
          <ul className="list-group">
            {selectedData.benefits.map((benefit, index) => (
              <li key={index} className="list-group-item">
                {index + 1}. {benefit}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Tips Section */}
      {selectedData.tips && (
        <section>
          <h3 className="section-title">Tips:</h3>
          <ul className="list-group">
            {selectedData.tips.map((tip, index) => (
              <li key={index} className="list-group-item">
                {index + 1}. {tip}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Modifications Section */}
      {selectedData.modifications && (
        <section>
          <h3 className="section-title">Modifications:</h3>
          <ul className="list-group">
            {selectedData.modifications.map((modification, index) => (
              <li key={index} className="list-group-item">
                <strong>For {modification.for}:</strong>{" "}
                {modification.description}
              </li>
            ))}
          </ul>
        </section>
      )}

      <Link to="/exercise/pilateExercise" className="btn btn-primary mt-4">
        Back to All Exercises
      </Link>
    </div>
  );
};

export default DisplayPilate;
