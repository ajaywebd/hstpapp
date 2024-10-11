import React from "react";
import "./DisplayAerobic.css";
import { Link, useLocation } from "react-router-dom";
import Aerobic_Exercise from "../data/Aerobic_Exercise";

const DisplayExercise = () => {
  const location = useLocation();
  const { value } = location.state || {};
  const selectedData = Aerobic_Exercise.find(
    (exercise) => exercise.id == value
  );

  console.log(selectedData);

  // If no data is found, return a message
  if (!selectedData) {
    return (
      <div className="container exercise-container mt-4">
        <h1 className="exercise-title">
          No data found for the selected exercise
        </h1>
        <Link to="/exercise/aerobicExercise" className="btn btn-primary mt-4">
          Back to All Exercises
        </Link>
      </div>
    );
  }

  return (
    <div className="container exercise-container mt-4">
      <h1 className="exercise-title">{selectedData.title}</h1>
      <p className="exercise-description">{selectedData.description}</p>

      {/* Benefits Section */}
      {selectedData.benefits && (
        <section>
          <h3 className="section-title">Benefits:</h3>
          <ul className="list-group">
            {selectedData.benefits.map((benefit, index) =>
              typeof benefit === "string" ? (
                <li key={index} className="list-group-item">
                  <strong>{benefit.split(":")[0]}</strong>:{" "}
                  {benefit.split(":")[1]}
                </li>
              ) : (
                <li key={index} className="list-group-item">
                  {benefit}
                </li>
              )
            )}
          </ul>
        </section>
      )}

      {/* Starting Position Section */}
      {selectedData.starting_position && (
        <section>
          <h3 className="section-title">Starting Position:</h3>
          {selectedData.starting_position.warm_up && (
            <p>
              <strong>Warm-Up:</strong> {selectedData.starting_position.warm_up}
            </p>
          )}
          {selectedData.starting_position.posture && (
            <p>
              <strong>Posture:</strong> {selectedData.starting_position.posture}
            </p>
          )}
          {selectedData.starting_position.core_engagement && (
            <p>
              <strong>Core Engagement:</strong>{" "}
              {selectedData.starting_position.core_engagement}
            </p>
          )}
        </section>
      )}

      {/* Common Exercises Section */}
      {selectedData.common_exercises && (
        <section>
          <h3 className="section-title">Common Exercises:</h3>
          {selectedData.common_exercises.map((exercise, index) => (
            <div key={index} className="exercise-item">
              <h4>{exercise.name}</h4>
              <p>
                <strong>Starting Position:</strong> {exercise.starting_position}
              </p>
              <p>
                <strong>Movement:</strong> {exercise.movement}
              </p>
              <p>
                <strong>Repetitions:</strong> {exercise.repetitions}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Steps Section */}
      {selectedData.steps && (
        <section>
          <h3 className="section-title">Steps:</h3>
          {selectedData.steps.map((step, index) => (
            <div key={index} className="step-item">
              <h4>{step.name}</h4>
              <p>{step.movement}</p>
            </div>
          ))}
        </section>
      )}

      {/* Tips Section */}
      {selectedData.tips && (
        <section>
          <h3 className="section-title">Tips:</h3>
          <ul className="list-group">
            {selectedData.tips.map((tip, index) =>
              typeof tip === "string" ? (
                <li key={index} className="list-group-item">
                  <strong>{tip.split(":")[0]}</strong>: {tip.split(":")[1]}
                </li>
              ) : (
                <li key={index} className="list-group-item">
                  {tip}
                </li>
              )
            )}
          </ul>
        </section>
      )}

      {/* Modifications Section */}
      {selectedData.modifications && (
        <section>
          <h3 className="section-title">Modifications:</h3>
          {selectedData.modifications.map((modification, index) => (
            <div key={index} className="modification-item">
              <h4>For {modification.for}:</h4>
              <p>{modification.description}</p>
            </div>
          ))}
        </section>
      )}

      {/* Safety Tips Section */}
      {selectedData.safety_tips && (
        <section>
          <h3 className="section-title">Safety Tips:</h3>
          <ul className="list-group">
            {selectedData.safety_tips.map((safetyTip, index) =>
              typeof safetyTip === "string" ? (
                <li key={index} className="list-group-item">
                  <strong>{safetyTip.split(":")[0]}</strong>:{" "}
                  {safetyTip.split(":")[1]}
                </li>
              ) : (
                <li key={index} className="list-group-item">
                  {safetyTip}
                </li>
              )
            )}
          </ul>
        </section>
      )}

      <Link to="/exercise/aerobicExercise" className="btn btn-success mt-4">
        Back to All Exercises
      </Link>
    </div>
  );
};

export default DisplayExercise;
