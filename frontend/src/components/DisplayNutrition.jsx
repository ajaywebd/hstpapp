import React, { useEffect, useState } from "react";
import "./DisplayNutrition.css"; // Assuming this file contains custom styles
import { Link, useLocation } from "react-router-dom";
import bmiData1 from "../data/BmiOne.jsx";
import bmiData2 from "../data/BmiTwo.jsx";
import bmiData3 from "../data/BmiThree.jsx";
import bmiData4 from "../data/BmiFour.jsx";
import bmiData5 from "../data/BmiFive.jsx";
import bmiData6 from "../data/BmiSix.jsx";

const DisplayNutrition = () => {
  const [data1, setData1] = useState(bmiData1);
  const [data2, setData2] = useState(bmiData2);
  const [data3, setData3] = useState(bmiData3);
  const [data4, setData4] = useState(bmiData4);
  const [data5, setData5] = useState(bmiData5);
  const [data6, setData6] = useState(bmiData6);
  const bmiData = [...data1, ...data2, ...data3, ...data4, ...data5, ...data6];

  const location = useLocation();
  const { selectedAge, selectedBMI, selectedGender } = location.state || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Find the unique data that matches selectedAge, selectedBMI, and selectedGender
  const selectedData = bmiData.find(
    (data) =>
      data.age == selectedAge && // Match for age
      data.bmi == selectedBMI && // Match for BMI
      data.gender == selectedGender // Match for gender
  );

  return (
    <>
      <div className="container-fluid disease-container">
        {selectedData ? (
          <>
            {/* Display Title */}
            <h1 className="text-center disease-title mb-4">
              Nutrition Plan for a {selectedAge}-year {selectedGender} with BMI{" "}
              {selectedBMI}
            </h1>

            {/* Iterate through each meal type (breakfast, lunch, etc.) */}
            {Object.keys(selectedData.diet).map((mealType, index) => (
              <div key={index} className="meal-section mb-5">
                {/* Display meal type (Breakfast, Lunch, etc.) */}
                <h3 className="section-title text-primary">{mealType}</h3>

                {/* Display time slot */}
                <p className="meal-time text-muted">
                  Time: {selectedData.diet[mealType].time_slot}
                </p>

                {/* Iterate through meal options */}
                <div className="row">
                  {selectedData.diet[mealType].options.map(
                    (option, optionIndex) => (
                      <div
                        key={optionIndex}
                        className="col-lg-4 col-md-6 col-sm-12 meal-option mb-4">
                        <div className="card h-100">
                          <div className="card-body">
                            <h4 className="card-title text-start">
                              Option {option.option}
                            </h4>
                            <p className="card-text text-start">
                              <strong>Meal:</strong> {option.meal}
                            </p>
                            <p className="card-text text-start">
                              <strong>Quantity:</strong> {option.quantity}
                            </p>
                            <p className="card-text text-start">
                              <strong>Calories:</strong> {option.calories} kcal
                            </p>
                            <p className="card-text text-start">
                              <strong>Carbohydrates:</strong>{" "}
                              {option.carbohydrates}
                            </p>
                            <p className="card-text text-start">
                              <strong>Proteins:</strong> {option.proteins}
                            </p>
                            <p className="card-text text-start">
                              <strong>Fats:</strong> {option.fats}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
          </>
        ) : (
          <p>No data available for this selection.</p>
        )}
        <div className="text-center">
          <Link to="/nutrition" className="btn btn-primary mt-4">
            Back to Nutrition
          </Link>
        </div>
      </div>
    </>
  );
};

export default DisplayNutrition;
