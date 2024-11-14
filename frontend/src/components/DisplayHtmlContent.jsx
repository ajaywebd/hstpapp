// DisplayHtmlContent.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DisplayHtmlContent = () => {
  const { fileName } = useParams();
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    // Fetch the HTML file content based on the URL parameter
    fetch(`/doc/${fileName}.htm`)
      .then((response) => response.text())
      .then((text) => setHtmlContent(text))
      .catch((err) => console.error("Error loading HTML file:", err));
  }, [fileName]);

  return (
    <div
      className="html-content"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default DisplayHtmlContent;
