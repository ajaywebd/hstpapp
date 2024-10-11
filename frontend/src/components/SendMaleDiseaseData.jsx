import React from "react";
import axios from "axios";

const SendMaleDiseaseData = () => {
  // Male_Disease data to send
  const Male_Disease = [
    {
      id: 1,
      title: "Home Remedies for Abdominal Pain in Men",
      description:
        "Abdominal pain can be caused by a variety of factors including indigestion, gas, constipation, stomach infections, or more serious conditions. While some causes of abdominal pain may require medical attention, many mild cases can be managed at home with various remedies and supportive care. Here are some effective strategies along with precautions to ensure their safe use.",
      remedies: [
        {
          name: "Ginger",
          remedy:
            "Drink ginger tea or chew on small pieces of fresh ginger. Ginger has natural anti-inflammatory and digestive properties that can help soothe abdominal pain.",
          precaution:
            "Consult your doctor before taking ginger supplements, especially if you have any medical conditions.",
        },
        {
          name: "Peppermint",
          remedy:
            "Drink peppermint tea or suck on peppermint candies. Peppermint can help relax the digestive tract and alleviate pain caused by gas and bloating.",
          precaution:
            "Avoid peppermint if you have gastroesophageal reflux disease (GERD) as it can exacerbate symptoms.",
        },
        {
          name: "Chamomile Tea",
          remedy:
            "Drink chamomile tea to help relax the digestive muscles and reduce inflammation. Chamomile has soothing properties that can help relieve abdominal pain.",
          precaution:
            "Ensure the tea is not too hot to avoid further irritation.",
        },
        {
          name: "Warm Compress",
          remedy:
            "Apply a warm compress or heating pad to your abdomen for 15-20 minutes. This can help relax muscles and alleviate pain.",
          precaution: "Ensure the compress is not too hot to avoid burns.",
        },
        {
          name: "Apple Cider Vinegar",
          remedy:
            "Mix one to two tablespoons of apple cider vinegar in a glass of warm water and drink it before meals. Apple cider vinegar can help improve digestion and reduce pain.",
          precaution:
            "Ensure proper dilution to avoid stomach irritation. Test on a small amount first.",
        },
        {
          name: "Fennel Seeds",
          remedy:
            "Chew on fennel seeds or drink fennel tea. Fennel can help relieve bloating and gas associated with abdominal pain.",
          precaution:
            "Consume in moderation to avoid potential digestive upset.",
        },
        {
          name: "Probiotics",
          remedy:
            "Consume probiotic-rich foods like yogurt, kefir, sauerkraut, and kimchi to restore the balance of good bacteria in your gut and improve digestion.",
          precaution:
            "Choose plain, unsweetened varieties to avoid added sugars.",
        },
        {
          name: "Hydration",
          remedy:
            "Drink plenty of water throughout the day to stay hydrated and support digestion. Dehydration can worsen abdominal pain.",
          precaution:
            "Avoid caffeinated, alcoholic, and sugary beverages as they can irritate the digestive system.",
        },
        {
          name: "Bland Diet",
          remedy:
            "Follow a bland diet consisting of foods like bananas, rice, applesauce, and toast (BRAT diet) to reduce irritation in the digestive tract.",
          precaution:
            "Gradually reintroduce other foods as your symptoms improve to ensure a balanced diet.",
        },
        {
          name: "Exercise",
          remedy:
            "Engage in light physical activity such as walking or gentle yoga to help stimulate digestion and reduce gas and bloating.",
          precaution: "Avoid strenuous exercise which can exacerbate symptoms.",
        },
      ],
      preventive_measures: [
        {
          measure: "Eat Smaller Frequent Meals",
          description:
            "Eating smaller meals more frequently can help prevent overeating and reduce the risk of abdominal pain.",
        },
        {
          measure: "Chew Food Thoroughly",
          description:
            "Chewing food thoroughly aids digestion and reduces the likelihood of swallowing air which can cause bloating and gas.",
        },
        {
          measure: "Avoid Trigger Foods",
          description:
            "Identify and avoid foods that cause abdominal pain such as fatty, spicy, or acidic foods, and those high in fiber if you have a sensitive stomach.",
        },
        {
          measure: "Good Posture",
          description:
            "Maintain good posture while eating and after meals to reduce pressure on the abdomen and promote digestion.",
        },
        {
          measure: "Manage Stress",
          description:
            "Practice stress-reducing techniques such as yoga, meditation, or deep breathing exercises as stress can affect digestion and contribute to abdominal pain.",
        },
      ],
      notes: [
        {
          subheading:
            "While home remedies can help manage and alleviate abdominal pain, it’s important to consult a healthcare professional if:",
          points: [
            "Pain persists for more than a few days despite home treatment.",
            "You experience severe or sharp abdominal pain.",
            "You have symptoms such as high fever, vomiting, blood in your stools, or signs of dehydration (such as dark urine, dizziness, or confusion).",
            "You have a history of gastrointestinal issues or other medical conditions that may require specialized care.",
          ],
        },
      ],
    },
  ];

  // Function to handle sending data to the backend
  const sendData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/male_disease",
        Male_Disease
      );
      console.log("Data sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div>
      <h1>Send Male Disease Data</h1>
      <button onClick={sendData}>Send Data to Backend</button>
    </div>
  );
};

export default SendMaleDiseaseData;
