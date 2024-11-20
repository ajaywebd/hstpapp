import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css"; // Assuming you create a separate CSS file for custom styles

const ChildrenExercise = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const diseases = [
    "Animal Walks",
    "Arm Circles",
    "Balancing on One Foot",
    "Ball Toss",
    "Balloon Volleyball",
    "Basketball Drills",
    "Bear Crawls",
    "Bowling with Plastic Bottles",
    "Bubble Chasing",
    "Bunny Hops",
    "Butt Kicks",
    "Charades",
    "Cone Drills",
    "Crab Walks",
    "Dance Party",
    "Duck, Duck, Goose",
    "Follow the Leader",
    "Freeze Dance",
    "Frog Jumps",
    "Heel Raises",
    "Hide and Seek",
    "High Knees",
    "Hopscotch",
    "Hula Hooping",
    "Jump Rope",
    "Jumping Jacks",
    "Lunges",
    "Mountain Climbers",
    "Obstacle Course",
    "Paper Plate Skating",
    "Parachute Games",
    "Plank",
    "Push-Ups",
    "Red Light, Green Light",
    "Relay Races",
    "Scavenger Hunt",
    "Side Plank",
    "Simon Says",
    "Sit-Ups",
    "Skipping Rope Games",
    "Skipping",
    "Snow Angels",
    "Soccer Drills",
    "Squats",
    "Star Jumps",
    "Tag",
    "Torso Twists",
    "Tug of War",
    "Wheelbarrow Race",
    "Yoga for Kids",
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
      <h1 className="text-primary text-center mb-3">Children's Exercise</h1>
      <p className="text-center text-muted mb-4">
        Help children stay active and healthy with fun and engaging exercises.
        Learn age-appropriate activities that promote strength, flexibility, and
        coordination for growing bodies.
      </p>
      <div className="card p-4 shadow-sm custom-height">
        <h3 className="text-primary mb-4"> Exercise of Children</h3>

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
                    state={{ value: index + 1, name: "child" }}
                    to="/displayChildren"
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

export default ChildrenExercise;
