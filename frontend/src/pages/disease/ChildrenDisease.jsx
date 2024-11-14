// ChildrenDisease.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const ChildrenDisease = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // List of diseases with file names as strings
  const diseasesData = [
    { name: "Acne", file: "Acne" },
    {
      name: "Addison's Disease in Children",
      file: "Addison's Disease in Children",
    },
    { name: "ADHD", file: "ADHD" },
    { name: "Albinism", file: "Albinism" },
    { name: "Allergic Rhinitis", file: "Allergic Rhinitis" },
    { name: "Anemia", file: "Anemia" },
    { name: "Appendicitis", file: "Appendicitis" },
    { name: "Arrhythmia", file: "Arrhythmia" },
    { name: "Asthma Flare -Ups", file: "Asthma Flare -Ups" },
    { name: "Asthma in children", file: "Asthma in children" },
    { name: "Athlete's Foot", file: "Athlete's Foot" },
    { name: "Atrial Septal Defect", file: "Atrial Septal Defect" },
    { name: "Autism Spectrum Disorder", file: "Autism Spectrum Disorder" },
    { name: "Bad breath", file: "Bad breath" },
    { name: "Bed-wetting", file: "Bed-wetting" },
    { name: "Bell's Palsy", file: "Bell's Palsy" },
    { name: "Blindness", file: "Blindness" },
    { name: "Blisters", file: "Blisters" },
    { name: "Bone Tumors", file: "Bone Tumors" },
    { name: "Botulism", file: "Botulism" },
    {
      name: "Bronchitis and bronchiolitis",
      file: "Bronchitis and bronchiolitis",
    },
    {
      name: "Canker sores (Aphthous Ulcers)",
      file: "Canker sores (Aphthous Ulcers)",
    },
    { name: "Cardiomyopathy", file: "Cardiomyopathy" },
    { name: "Celiac Disease", file: "Celiac Disease" },
    { name: "Cellulitis", file: "Cellulitis" },
    { name: "Cerebral Palsy", file: "Cerebral Palsy" },
    { name: "Chickenpox", file: "Chickenpox" },
    {
      name: "Childhood fears and Anxieties",
      file: "Childhood fears and Anxieties",
    },
    { name: "Chronic Kidney Disease", file: "Chronic Kidney Disease" },
    { name: "Cleft Lip and Cleft Palate", file: "Cleft Lip and Cleft Palate" },
    { name: "Clubfoot", file: "Clubfoot" },
    { name: "Cold Sores", file: "Cold Sores" },
    { name: "common cold", file: "common cold" },
    { name: "Concussions", file: "Concussions" },
    { name: "Congenital heart defects", file: "Congenital heart defects" },
    { name: "Congenital Heart Disease", file: "Congenital Heart Disease" },
    { name: "Constipation", file: "Constipation" },
    { name: "Corneal abrasions", file: "Corneal abrasions" },
    {
      name: "Crohn's Disease in Children",
      file: "Crohn's Disease in Children",
    },
    { name: "Cystic Fibrosis", file: "Cystic Fibrosis" },
    { name: "Down Syndrome", file: "Down Syndrome" },
    { name: "Dwarfism", file: "Dwarfism" },
    { name: "Dyslexia", file: "Dyslexia" },
    { name: "E.Coli infection", file: "E.Coli infection" },
    { name: "Eating Disorders", file: "Eating Disorders" },
    { name: "Ebola", file: "Ebola" },
    { name: "Eczema", file: "Eczema" },
    { name: "Enlarged adenoids", file: "Enlarged adenoids" },
    { name: "Epilepsy", file: "Epilepsy" },
    { name: "Febrile Seizure", file: "Febrile Seizure" },
    { name: "Food Allergy", file: "Food Allergy" },
    { name: "Induced Asthma", file: "Induced Asthma" },
  ];

  // Sort and filter diseases
  const sortedDiseases = [...diseasesData].sort((a, b) => {
    return sortOrder === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });

  const filteredDiseases = sortedDiseases.filter((disease) =>
    disease.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container my-5">
      <h1 className="text-primary text-center mb-3">Children's Health</h1>
      <p className="text-center text-muted mb-4">
        Keeping kids healthy is a big job! Read up on common conditions and
        illnesses.
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
                  {/* Link to the DisplayHtmlContent component with the file name as a parameter */}
                  <Link to={`/disease/${disease.file}`}>{disease.name}</Link>
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
