import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css"; // Assuming you create a separate CSS file for custom styles

const YogaExercise = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const diseases = [
    "Adho Mukha Svanasana (Downward Facing Dog)",
    "Anantasana (Vishnu's Couch Pose)",
    "Ardha Chandrasana (Half Moon Pose)",
    "Ardha Matsyendrasana (Half Lord of the Fishes Pose)",
    "Ardha Uttanasana (Half Forward Bend)",
    "Baddha Konasana (Bound Angle Pose)",
    "Bakasana (Crow Pose)",
    "Balasana (Child's Pose)",
    "Bharadvajasana (Bharadvaja's Twist)",
    "Bhujangasana (Cobra Pose)",
    "Chaturanga Dandasana (Four-Limbed Staff Pose)",
    "Dhanurasana (Bow Pose)",
    "Eka Pada Rajakapotasana (One-Legged King Pigeon Pose)",
    "Garudasana (Eagle Pose)",
    "Gomukhasana (Cow Face Pose)",
    "Halasana (Plow Pose)",
    "Janu Sirsasana (Head-to-Knee Pose)",
    "Kakasana (Crane Pose)",
    "Malasana (Garland Pose)",
    "Marichyasana (Marichi's Pose)",
    "Matsyasana (Fish Pose)",
    "Natarajasana (Dancer Pose)",
    "Padangusthasana (Big Toe Pose)",
    "Parivrtta Trikonasana (Revolved Triangle Pose)",
    "Parsvottanasana (Pyramid Pose)",
    "Paschimottanasana (Seated Forward Bend)",
    "Prasarita Padottanasana (Wide-Legged Forward Bend)",
    "Purvottanasana (Upward Plank Pose)",
    "Salabhasana (Locust Pose)",
    "Sarvangasana (Shoulder Stand)",
    "Savasana (Corpse Pose)",
    "Setu Bandhasana (Bridge Pose)",
    "Sirsasana (Headstand)",
    "Sukhasana (Easy Pose)",
    "Supta Baddha Konasana (Reclining Bound Angle Pose)",
    "Supta Padangusthasana (Reclining Hand-to-Big-Toe Pose)",
    "Tadasana (Mountain Pose)",
    "Trikonasana (Triangle Pose)",
    "Upavistha Konasana (Wide-Angle Seated Forward Bend)",
    "Urdhva Dhanurasana (Wheel Pose)",
    "Urdhva Mukha Svanasana (Upward Facing Dog)",
    "Utkatasana (Chair Pose)",
    "Uttanasana (Standing Forward Bend)",
    "Utthita Hasta Padangusthasana (Extended Hand-to-Big-Toe Pose)",
    "Utthita Parsvakonasana (Extended Side Angle Pose)",
    "Vasisthasana (Side Plank Pose)",
    "Virabhadrasana I (Warrior I)",
    "Virabhadrasana II (Warrior II)",
    "Virabhadrasana III (Warrior III)",
    "Vrikshasana (Tree Pose)",
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
      <h1 className="text-primary text-center mb-3">Yoga Asanas</h1>
      <p className="text-center text-muted mb-4">
        Explore the world of Yoga Asanas to improve flexibility, strength, and
        mental clarity. Learn various poses designed to enhance physical and
        emotional well-being through mindful practice.
      </p>
      <div className="card p-4 shadow-sm custom-height">
        <h3 className="text-primary mb-4">Common 50 Yoga Asans</h3>

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
                    state={{ value: index + 1 }}
                    to="/yogaDisplay"
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

export default YogaExercise;
