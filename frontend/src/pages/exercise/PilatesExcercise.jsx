import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css"; // Assuming you create a separate CSS file for custom styles

const PilatesExcercise = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const diseases = [
    "Arabesque",
    "Bicycle",
    "Bird Dog",
    "Boomerang",
    "Bridges",
    "Clam Shells",
    "Control Balance",
    "Corkscrew",
    "Crab",
    "Criss Cross",
    "Double Leg Kick",
    "Double Leg Stretch",
    "Elephant",
    "Hip Circles",
    "Hundred",
    "Jackknife",
    "Kneeling Side Kicks",
    "Leg Pull Back",
    "Leg Pull Front",
    "Lower Lift (Double Straight Leg Stretch)",
    "Mermaid",
    "Mountain Climber",
    "Neck Pull",
    "Open Leg Rocker",
    "Pendulum",
    "Pilates Push-Up",
    "Plank",
    "Push-Up",
    "Rocking",
    "Roll Over",
    "Rolling Like a Ball to Teaser",
    "Rolling Like a Ball",
    "Roll-Up",
    "Saw",
    "Scissors (Single Straight Leg Stretch)",
    "Seal",
    "Shoulder Bridge",
    "Side Bend",
    "Side Kick Series",
    "Side Plank",
    "Single Leg Circle",
    "Single Leg Kick",
    "Single Leg Stretch",
    "Spine Stretch Forward",
    "Spine Twist",
    "Spiral",
    "Swan",
    "Swimming",
    "Teaser",
    "Tendon Stretch",
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
      <h1 className="text-primary text-center mb-3">Pilates Exercise</h1>
      <p className="text-center text-muted mb-4">
        Enhance your core strength, flexibility, and posture with Pilates
        exercises. Explore effective routines that promote body alignment,
        balance, and overall physical wellness.
      </p>
      <div className="card p-4 shadow-sm custom-height">
        <h3 className="text-primary mb-4"> Exercise of Pilate</h3>

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
                    state={{ value: index + 1, name: "pilate" }}
                    to="/displayPilate"
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

export default PilatesExcercise;
