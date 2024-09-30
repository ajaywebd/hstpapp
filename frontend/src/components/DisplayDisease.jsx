import React from "react";
import { Link, useLocation } from "react-router-dom";
import Male_Disease from "../data/Male_Disease.jsx"; // Importing the JSON data
// import Children_Disease from "../data/Children_Disease.jsx"; // Importing the JSON data
import Female_Disease from "../data/Female_Disease.jsx"; // Importing the JSON data
import "./DisplayDisease.css"; // Import the updated CSS file

const DisplayDisease = () => {
  const location = useLocation();
  const { value, name } = location.state || {}; // Retrieve the passed value from state
  let selectedData;

  // Determine which dataset to use based on the "name" value
  if (name === "female") {
    selectedData = Female_Disease.find((disease) => disease.id === value);
  } else if (name === "male") {
    selectedData = Male_Disease.find((disease) => disease.id === value);
  }

  return (
    <div className="container disease-container">
      {selectedData ? (
        <>
          <div className="row">
            <div className="col-md-12">
              <h1 className="disease-title">{selectedData.title}</h1>
              <p className="disease-description">{selectedData.description}</p>
            </div>
          </div>

          {/* Displaying Remedies */}
          <div className="row">
            <div className="col-md-12">
              <h2 className="section-title">Remedies:</h2>
              {selectedData.remedies.map((item, index) => (
                <div key={index} className="remedy-item">
                  <h3 className="remedy-name">
                    {index + 1}. {item.name}
                  </h3>
                  <p>
                    <strong>Remedy:</strong> {item.remedy}
                  </p>
                  <p>
                    <strong>Precaution:</strong> {item.precaution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Conditionally Displaying Preventive Measures */}
          {selectedData.preventive_measures &&
            selectedData.preventive_measures.length > 0 && (
              <div className="row">
                <div className="col-md-12">
                  <h2 className="section-title">Preventive Measures:</h2>
                  <ul className="preventive-list">
                    {selectedData.preventive_measures.map((measure, index) => (
                      <li key={index}>
                        <strong>{measure.measure}:</strong>{" "}
                        {measure.description}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

          {/* Displaying Notes */}
          <div className="row">
            <div className="col-md-12">
              <h2 className="section-title">Note:</h2>
              {selectedData.notes.map((note, index) => (
                <div key={index} className="note-item">
                  {note.subheading ? (
                    <>
                      <h6>{note.subheading}</h6>
                      <ul>
                        {note.points.map((point, pointIndex) => (
                          <li key={pointIndex}>{point}</li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <ul>
                      <li>{note}</li>
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Back Button */}
          <div className="row mt-4">
            <div className="col text-center">
              <Link to={`/disease/${name}Disease`} className="btn btn-success">
                Back to All Diseases
              </Link>
            </div>
          </div>
        </>
      ) : (
        <p>No data found for the selected ID.</p>
      )}
    </div>
  );
};

export default DisplayDisease;
