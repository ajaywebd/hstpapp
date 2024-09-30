import React, { useState, useEffect } from "react";
import "./StatsComponent.css"; // Custom CSS for styles

const StatsComponent = () => {
  const [medicalExperts, setMedicalExperts] = useState(1);
  const [modernRooms, setModernRooms] = useState(1);
  const [healthTreatments, setHealthTreatments] = useState(1);
  const [surgeriesYear, setSurgeriesYear] = useState(1);

  // Function to animate count up for a specific number
  const animateCount = (target, setter, duration) => {
    let start = 1;
    const increment = Math.ceil(target / duration); // Calculate increment based on duration

    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setter(target); // Stop at target number
        clearInterval(interval);
      } else {
        setter(start);
      }
    }, 20); // Set interval speed (20ms for smoother animation)
  };

  // Animate all counts when component mounts
  useEffect(() => {
    animateCount(22, setMedicalExperts, 100); // animate to 22
    animateCount(146, setModernRooms, 100); // animate to 146
    animateCount(388, setHealthTreatments, 100); // animate to 388
    animateCount(1280, setSurgeriesYear, 100); // animate to 1280
  }, []);

  return (
    <div className="stats-container text-center py-5">
      <div className="overlay">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-3">
              <h2 className="stat-number">{medicalExperts}</h2>
              <div className="stat-label">Medical Experts</div>
            </div>
            <div className="col-6 col-md-3">
              <h2 className="stat-number">{modernRooms}</h2>
              <div className="stat-label">Modern Rooms</div>
            </div>
            <div className="col-6 col-md-3">
              <h2 className="stat-number">{healthTreatments}</h2>
              <div className="stat-label">Health Treatments</div>
            </div>
            <div className="col-6 col-md-3">
              <h2 className="stat-number">{surgeriesYear}</h2>
              <div className="stat-label">Surgeries a Year</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsComponent;
