import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css"; // Assuming you create a separate CSS file for custom styles

const MaleDisease = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const diseases = [
    "Abdominal pain",
    "Acne",
    "Allergies",
    "Anxiety",
    "Athlete's foot",
    "Back pain",
    "Bacterial vaginosis",
    "Bad breath (halitosis)",
    "Blisters",
    "Bloating",
    "Body odor",
    "Brittle nails",
    "Bruises",
    "Canker sores",
    "Cellulite",
    "Chafing",
    "Chapped lips",
    "Chronic fatigue syndrome (CFS)",
    "Cold sores (herpes simplex)",
    "Colic",
    "Common Cold",
    "Concentration issues",
    "Constipation",
    "Cough",
    "Dandruff",
    "Dark circles under eyes",
    "Diarrhea",
    "Dry eyes",
    "Dry skin",
    "Dull hair",
    "Ear infections",
    "Eczema (atopic dermatitis)",
    "Excessive sweating",
    "Eyelid swelling",
    "Fatigue",
    "Fibromyalgia",
    "Gallbladder issues (minor)",
    "Gas",
    "Gum disease (gingivitis)",
    "Hair loss (non-severe)",
    "Hangnails",
    "Hay fever",
    "Headaches",
    "Heartburn (acid reflux)",
    "Hemorrhoids",
    "Hives (urticaria)",
    "Hot flashes",
    "Indigestion",
    "Insect bites and stings",
    "Insomnia",
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
      <h1 className="text-primary text-center mb-3">Women's Health</h1>
      <p className="text-center text-muted mb-4">
        Explore important information on women's health, including common
        conditions, reproductive health, preventive care, and tips for
        maintaining overall well-being.
      </p>
      <div className="card p-4 shadow-sm custom-height">
        <h3 className="text-primary mb-4">Common disease in womens</h3>

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
                    state={{ value: index + 1, name: "female" }}
                    to="/displayDisease"
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

export default MaleDisease;
