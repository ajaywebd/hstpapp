import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css"; // Assuming you create a separate CSS file for custom styles

const femaleDisease = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const diseases = [
    "Abdominal pain",
    "Acne",
    "Allergies",
    "Athlete's foot",
    "Back pain",
    "Bloating",
    "Bruises",
    "Canker sores",
    "Chapped lips",
    "Cold sores (herpes simplex)",
    "Colic",
    "Common Cold",
    "Constipation",
    "Cough",
    "Dandruff",
    "Diarrhea",
    "Dry skin",
    "Ear infections",
    "Eczema (atopic dermatitis)",
    "Gallbladder issues (minor)",
    "Gas",
    "Hay fever",
    "Headaches",
    "Heartburn (acid reflux)",
    "Hemorrhoids",
    "Hives (urticaria)",
    "Indigestion",
    "Insect bites and stings",
    "Irritable bowel syndrome (IBS)",
    "Joint pain",
    "Migraines",
    "Mild arthritis",
    "Mild asthma",
    "Mild dehydration",
    "Mild fever",
    "Mild gastroenteritis",
    "Minor burns",
    "Morning sickness",
    "Mouth ulcers",
    "Muscle aches",
    "Nail fungus",
    "Nausea",
    "Pink eye (conjunctivitis)",
    "Psoriasis",
    "Ringworm (tinea)",
    "Rosacea",
    "Sinusitis",
    "Sore throat",
    "Sunburn",
    "Warts",
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

  return (
    <div className="container my-5">
      <h1 className="text-primary text-center mb-3">Men's Health</h1>
      <p className="text-center text-muted mb-4">
        Stay informed on men's health concerns, including common conditions,
        preventative care, and tips for leading a healthy lifestyle.
      </p>
      <div className="card p-4 shadow-sm custom-height">
        <h3 className="text-primary mb-4">Common 50 disease in men</h3>

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
                    state={{ value: index + 1, name: "male" }}
                    to="/displayDisease"
                    className="custom-link">
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

export default femaleDisease;
