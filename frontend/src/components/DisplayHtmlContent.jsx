import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./DisplayHtmlContent.css";

const DisplayHtmlContent = () => {
  const { fileName } = useParams();
  const navigate = useNavigate();
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    // Scroll to the top when the component is rendered
    window.scrollTo(0, 0);

    // Fetch the HTML file content based on the URL parameter
    fetch(`/doc/${fileName}.htm`)
      .then((response) => response.text())
      .then((text) => setHtmlContent(text))
      .catch((err) => console.error("Error loading HTML file:", err));
  }, [fileName]);

  return (
    <div className="content-container">
      <div
        className="html-content"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
      <button
        onClick={() => {
          window.scrollTo(0, 0); // Scroll to the top
          navigate("/disease/childrenDisease"); // Navigate back
        }}
        className="btn btn-secondary back-button">
        Go Back to Children Disease
      </button>
    </div>
  );
};

export default DisplayHtmlContent;

// =========*********=========

// // DisplayHtmlContent.js
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const DisplayHtmlContent = () => {
//   const { fileName } = useParams();
//   const [htmlContent, setHtmlContent] = useState("");

//   useEffect(() => {
//     // Fetch the HTML file content based on the URL parameter
//     fetch(`/doc/${fileName}.htm`)
//       .then((response) => response.text())
//       .then((text) => setHtmlContent(text))
//       .catch((err) => console.error("Error loading HTML file:", err));
//   }, [fileName]);

//   return (
//     <div
//       className="html-content"
//       dangerouslySetInnerHTML={{ __html: htmlContent }}
//     />
//   );
// };

// export default DisplayHtmlContent;
