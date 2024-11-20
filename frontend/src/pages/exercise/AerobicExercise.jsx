import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css"; // Assuming you create a separate CSS file for custom styles

const AerobicExercise = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const diseases = [
    "Aerobic Classes",
    "Agility Drills Exercise",
    "Aqua Aerobics Exercise",
    "Badminton Exercise",
    "Basketball Exercise",
    "Battle Ropes Exercise",
    "Bear Crawls Exercise",
    "Boxing Exercise",
    "Burpees Exercise",
    "Butt Kicks Exercise",
    "Cardio Kickboxing Exercise",
    "Circuit Training Exercise",
    "Cross-Country Skiing Exercise",
    "Cycling Exercise",
    "Dancing Exercise",
    "Elliptical Trainer Exercise",
    "Fencing Exercise",
    "Handball Exercise",
    "High Knees Exercise",
    "Hiking Exercise",
    "Hula Hooping Exercise",
    "Jump Squats Exercise",
    "Jumping Jacks Exercise",
    "Jumping Rope Exercise",
    "Kickboxing Exercise",
    "Martial Arts Exercise",
    "Mountain Climbers Exercise",
    "Plyometric Exercises",
    "Power Walking Exercise",
  ];

  // Sort the diseases alphabetically based on the sortOrder
  const sortedDiseases = diseases.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.localeCompare(b);
    } else {
      return b.localeCompare(a);
    }
  });

  // Filter the diseases based on the search term
  const filteredDiseases = sortedDiseases.filter((disease) =>
    disease.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds a smooth scrolling effect
    });
  };
  return (
    <div className="container my-5">
      <h1 className="text-primary text-center mb-3">Aerobic Exercise</h1>
      <p className="text-center text-muted mb-4">
        Discover the benefits of aerobic exercises, improve cardiovascular
        health, build endurance, and learn the best practices for incorporating
        aerobic activities into your routine.
      </p>
      <div className="card p-4 shadow-sm custom-height">
        <h3 className="text-primary mb-4">Exercises of Aerobic</h3>

        {/* Search Input and Sorting Dropdown */}
        <div className="mb-4 d-flex justify-content-between align-items-center">
          <input
            type="text"
            className="form-control me-3"
            placeholder="Search for a disease..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ maxWidth: "300px" }}
          />
          <select
            className="form-select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            style={{ maxWidth: "150px" }}>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
        </div>

        <div className="disease-list-container">
          <ul className="list-unstyled custom-scroll">
            {filteredDiseases.length > 0 ? (
              filteredDiseases.map((disease, index) => (
                <li key={index} className="mb-2">
                  <Link
                    state={{ value: index + 1, name: "aerobic" }}
                    to="/displayAerobic"
                    className="custom-link"
                    onClick={handleScrollToTop} // Scroll to top when clicked
                  >
                    {disease}
                  </Link>
                </li>
              ))
            ) : (
              <li className="text-muted">No diseases found</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AerobicExercise;
