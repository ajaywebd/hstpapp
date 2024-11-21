import React, { useState } from "react";
import styles from "./AllNews.module.css"; // Import the CSS module

const AllNews = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const newsData = [
    {
      title: "1. Acne",
      causes: [
        "Excess oil production by sebaceous glands.",
        "Clogged hair follicles with oil and dead skin cells.",
        "Bacterial growth (Propionibacterium acnes).",
        "Hormonal changes during puberty or menstrual cycle.",
      ],
      remedies: [
        "Cleanse your face twice daily with a mild, non-comedogenic cleanser.",
        "Use topical treatments containing benzoyl peroxide or salicylic acid.",
        "Avoid picking or squeezing pimples to prevent scarring.",
        "Maintain a balanced diet and reduce intake of high-glycemic foods.",
      ],
    },
    {
      title: "2. Dry Skin",
      causes: [
        "Cold or dry weather conditions.",
        "Hot showers or baths that strip natural oils.",
        "Using harsh soaps or detergents.",
        "Aging and reduced oil production in the skin.",
      ],
      remedies: [
        "Moisturize regularly using a cream or ointment with hyaluronic acid or glycerin.",
        "Avoid long hot showers and use lukewarm water instead.",
        "Use a humidifier to maintain indoor humidity.",
        "Wear protective gloves when using cleaning agents.",
      ],
    },
    {
      title: "3. Hyperpigmentation",
      causes: [
        "Excess melanin production due to sun exposure.",
        "Hormonal changes such as melasma during pregnancy.",
        "Skin inflammation or injury leading to post-inflammatory hyperpigmentation.",
      ],
      remedies: [
        "Apply sunscreen daily with SPF 30 or higher.",
        "Use brightening agents like vitamin C, niacinamide, or kojic acid.",
        "Consider professional treatments like chemical peels or laser therapy.",
        "Avoid picking at dark spots or scars to prevent worsening.",
      ],
    },
    {
      title: "4. Eczema",
      causes: [
        "Genetic predisposition to sensitive skin.",
        "Exposure to irritants such as detergents or allergens.",
        "Environmental factors like cold weather.",
        "Stress or hormonal fluctuations.",
      ],
      remedies: [
        "Apply fragrance-free moisturizers or emollients after bathing.",
        "Use steroid creams or antihistamines as prescribed by a dermatologist.",
        "Avoid known triggers such as harsh soaps or specific allergens.",
        "Wear soft, breathable fabrics to reduce skin irritation.",
      ],
    },
    {
      title: "5. Psoriasis",
      causes: [
        "Autoimmune condition causing rapid skin cell turnover.",
        "Genetic factors and family history.",
        "Triggers like stress, infections, or certain medications.",
      ],
      remedies: [
        "Use moisturizers specifically designed for psoriasis-prone skin.",
        "Apply topical treatments containing salicylic acid or coal tar.",
        "Consider light therapy (UVB) under medical supervision.",
        "Manage stress through relaxation techniques like yoga or meditation.",
      ],
    },
    {
      title: "6. Sunburn",
      causes: [
        "Prolonged exposure to UV rays without sunscreen.",
        "Lack of protective clothing like hats or long sleeves.",
        "Being outdoors during peak sun hours (10 a.m. to 4 p.m.).",
      ],
      remedies: [
        "Apply aloe vera gel or a soothing moisturizer with cooling properties.",
        "Take cool showers and avoid further sun exposure.",
        "Use over-the-counter hydrocortisone cream to reduce inflammation.",
        "Stay hydrated to support skin recovery.",
      ],
    },
    {
      title: "7. Rosacea",
      causes: [
        "Abnormal immune response causing redness and visible blood vessels.",
        "Triggers such as alcohol, spicy foods, or hot drinks.",
        "Stress or exposure to extreme temperatures.",
        "Genetic predisposition.",
      ],
      remedies: [
        "Avoid triggers like hot beverages and spicy foods.",
        "Use gentle skincare products without fragrances or irritants.",
        "Apply a green-tinted primer to neutralize redness.",
        "Consult a dermatologist for laser treatments or topical medications.",
      ],
    },
    {
      title: "8. Blackheads and Whiteheads",
      causes: [
        "Clogged pores due to oil and dead skin buildup.",
        "Hormonal changes that increase oil production.",
        "Use of greasy skincare or makeup products.",
      ],
      remedies: [
        "Exfoliate gently using products with salicylic acid.",
        "Apply a clay or charcoal mask to absorb excess oil.",
        "Use retinoids to prevent clogged pores.",
        "Avoid touching or squeezing blackheads to prevent infection.",
      ],
    },
    {
      title: "9. Stretch Marks",
      causes: [
        "Rapid weight gain or loss causing skin stretching.",
        "Hormonal changes during puberty or pregnancy.",
        "Reduced collagen production in the skin.",
      ],
      remedies: [
        "Use creams or oils with cocoa butter, shea butter, or vitamin E.",
        "Consider professional treatments like microneedling or laser therapy.",
        "Stay hydrated and maintain a stable weight to prevent further marks.",
        "Massage affected areas to improve circulation.",
      ],
    },
    {
      title: "10. Wrinkles and Fine Lines",
      causes: [
        "Aging and loss of collagen and elastin.",
        "Repeated facial expressions over time.",
        "Sun exposure causing photoaging.",
        "Smoking or a diet lacking antioxidants.",
      ],
      remedies: [
        "Use sunscreen with broad-spectrum protection daily.",
        "Apply anti-aging creams containing retinoids or peptides.",
        "Stay hydrated and eat foods rich in antioxidants like berries and spinach.",
        "Avoid smoking and reduce alcohol intake.",
      ],
    },
  ];

  const filteredNews = newsData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Common Skin Problems and Their Remedies</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search Skin Problems..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          fontSize: "1rem",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      {/* News Cards */}
      {filteredNews.length > 0 ? (
        filteredNews.map((item, index) => (
          <div key={index} className={styles.card}>
            <h2 className={styles.title}>{item.title}</h2>
            <h3 className={styles.subheading}>Causes:</h3>
            <ul className={styles.list}>
              {item.causes.map((cause, i) => (
                <li key={i} className={styles["list-item"]}>
                  {cause}
                </li>
              ))}
            </ul>
            <h3 className={styles.subheading}>Remedies:</h3>
            <ul className={styles.list}>
              {item.remedies.map((remedy, i) => (
                <li key={i} className={styles["list-item"]}>
                  {remedy}
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p style={{ textAlign: "center", color: "#666" }}>No results found.</p>
      )}
    </div>
  );
};

export default AllNews;
