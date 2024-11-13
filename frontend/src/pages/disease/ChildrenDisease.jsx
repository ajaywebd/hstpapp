import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css"; // Assuming you create a separate CSS file for custom styles
import dataFile from "../../doc/Acne.htm";
import dataFile1 from "../../doc/Addison's Disease in Children.htm";
import dataFile2 from "../../doc/ADHD.htm";
import dataFile3 from "../../doc/Albinism.htm";
import dataFile4 from "../../doc/Allergic Rhinitis.htm";
import dataFile5 from "../../doc/Anemia.htm";
import dataFile6 from "../../doc/Appendicitis.htm";
import dataFile7 from "../../doc/Arrhythmia.htm";
import dataFile8 from "../../doc/Asthma Flare -Ups.htm";
import dataFile9 from "../../doc/Asthma in children.htm";
import dataFile10 from "../../doc/Athlete's Foot.htm";
import dataFile11 from "../../doc/Atrial Septal Defect.htm";
import dataFile12 from "../../doc/Autism Spectrum Disorder.htm";
import dataFile13 from "../../doc/Bad breath.htm";
import dataFile14 from "../../doc/Bed-wetting.htm";
import dataFile15 from "../../doc/Bell's Palsy.htm";
import dataFile16 from "../../doc/Blindness.htm";
import dataFile17 from "../../doc/Blisters.htm";
import dataFile18 from "../../doc/Bone Tumors.htm";
import dataFile19 from "../../doc/Botulism.htm";
import dataFile20 from "../../doc/Bronchitis and bronchiolitis.htm";
import dataFile21 from "../../doc/Canker sores (Aphthous Ulcers).htm";
import dataFile22 from "../../doc/Cardiomyopathy.htm";
import dataFile23 from "../../doc/Celiac Disease.htm";
import dataFile24 from "../../doc/Cellulitis.htm";
import dataFile25 from "../../doc/Chickenpox.htm";
import dataFile26 from "../../doc/Childhood fears and Anxieties.htm";
import dataFile27 from "../../doc/Chronic Kidney Disease.htm";
import dataFile28 from "../../doc/Cleft Lip and Cleft Palate.htm";
import dataFile29 from "../../doc/Clubfoot.htm";
import dataFile30 from "../../doc/Cold Sores.htm";
import dataFile31 from "../../doc/common cold.htm";
import dataFile32 from "../../doc/Concussions.htm";
import dataFile33 from "../../doc/Congenital heart defects.htm";
import dataFile34 from "../../doc/Congenital Heart Disease.htm";
import dataFile35 from "../../doc/Constipation.htm";
import dataFile36 from "../../doc/Corneal abrasions.htm";
import dataFile37 from "../../doc/Crohn's Disease in Children.htm";
import dataFile38 from "../../doc/Cystic Fibrosis.htm";
import dataFile39 from "../../doc/Down Syndrome.htm";
import dataFile40 from "../../doc/Dwarfism.htm";
import dataFile41 from "../../doc/Dyslexia.htm";
import dataFile42 from "../../doc/E.Coli infection.htm";
import dataFile43 from "../../doc/Eating Disorders.htm";
import dataFile44 from "../../doc/Ebola.htm";
import dataFile45 from "../../doc/Eczema.htm";
import dataFile46 from "../../doc/Enlarged adenoids.htm";
import dataFile47 from "../../doc/Epilepsy.htm";
import dataFile48 from "../../doc/Induced Asthma.htm";
import dataFile49 from "../../doc/Febrile Seizure.htm";
import dataFile50 from "../../doc/Food Allergy.htm";

const ChildrenDisease = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [htmlContent, setHtmlContent] = useState("");

  const diseasesData = [
    { name: "Acne", file: dataFile },
    { name: "Addison's Disease in Children", file: dataFile1 },
    { name: "ADHD", file: dataFile2 },
    { name: "Albinism", file: dataFile3 },
    { name: "Allergic Rhinitis", file: dataFile4 },
    { name: "Anemia", file: dataFile5 },
    { name: "Appendicitis", file: dataFile6 },
    { name: "Arrhythmia", file: dataFile7 },
    { name: "Asthma Flare-Ups", file: dataFile8 },
    { name: "Asthma in children", file: dataFile9 },
    { name: "Athlete's Foot", file: dataFile10 },
    { name: "Atrial Septal Defect (ASD)", file: dataFile11 },
    { name: "Autism Spectrum Disorder", file: dataFile12 },
    { name: "Bad breath", file: dataFile13 },
    { name: "Bed-wetting", file: dataFile14 },
    { name: "Bell's Palsy", file: dataFile15 },
    { name: "Blindness", file: dataFile16 },
    { name: "Blisters", file: dataFile17 },
    { name: "Bone Tumors", file: dataFile18 },
    { name: "Botulism", file: dataFile19 },
    { name: "Bronchitis and bronchiolitis", file: dataFile20 },
    { name: "Canker sores (Aphthous Ulcers)", file: dataFile21 },
    { name: "Cardiomyopathy", file: dataFile22 },
    { name: "Celiac Disease", file: dataFile23 },
    { name: "Cellulitis", file: dataFile24 },
    { name: "Chickenpox", file: dataFile25 },
    { name: "Childhood fears and Anxieties", file: dataFile26 },
    { name: "Chronic Kidney Disease", file: dataFile27 },
    { name: "Cleft Lip and Cleft Palate", file: dataFile28 },
    { name: "Clubfoot", file: dataFile29 },
    { name: "Cold Sores", file: dataFile30 },
    { name: "common cold", file: dataFile31 },
    { name: "Concussions", file: dataFile32 },
    { name: "Congenital heart defects", file: dataFile33 },
    { name: "Congenital Heart Disease", file: dataFile34 },
    { name: "Constipation", file: dataFile35 },
    { name: "Corneal abrasions", file: dataFile36 },
    { name: "Crohn's Disease in Children", file: dataFile37 },
    { name: "Cystic Fibrosis", file: dataFile38 },
    { name: "Down Syndrome", file: dataFile39 },
    { name: "Dwarfism", file: dataFile40 },
    { name: "Dyslexia", file: dataFile41 },
    { name: "E.Coli infection", file: dataFile42 },
    { name: "Eating Disorders", file: dataFile43 },
    { name: "Ebola", file: dataFile44 },
    { name: "Eczema", file: dataFile45 },
    { name: "Enlarged adenoids", file: dataFile46 },
    { name: "Epilepsy", file: dataFile47 },
    { name: "Induced Asthma", file: dataFile48 },
    { name: "Febrile Seizure", file: dataFile49 },
    { name: "Food Allergy", file: dataFile50 },
  ];

  useEffect(() => {
    fetch("/pdf/Acne.htm")
      .then((response) => response.text())
      .then((text) => setHtmlContent(text))
      .catch((err) => console.error("Error loading HTML file:", err));
  }, []);

  // Sort diseases and files based on the sortOrder
  const sortedDiseases = [...diseasesData].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  // Filter the diseases based on the search term
  const filteredDiseases = sortedDiseases.filter((disease) =>
    disease.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container my-5">
      <h1 className="text-primary text-center mb-3">Children's Health</h1>
      <p className="text-center text-muted mb-4">
        Keeping kids healthy is a big job! Read up on common conditions and
        illnesses, body basics, caring for children, and much more.
      </p>
      <div className="card p-4 shadow-sm custom-height">
        <h3 className="text-primary mb-4">
          Abdominal pain, Acne & many more...
        </h3>

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
                  <Link to={disease.file} target="_blank">
                    {disease.name}
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

export default ChildrenDisease;
