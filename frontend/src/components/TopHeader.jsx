import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome
import "./TopHeader.css"; // Import custom CSS

const TopHeader = () => {
  return (
    <footer className="footer-container d-flex d-flex justify-content-center">
      <div className="container">
        <div className="row align-items-center text-md-start text-center">
          <div className="col-md-4 d-flex align-items-center justify-content-center justify-content-md-start mb-3 mb-md-0">
            <i className="fas fa-map-marker-alt me-2"></i>
            <p className="mb-0">D71, Malviya Nagar, New Delhi, India</p>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-center justify-content-md-start mb-3 mb-md-0">
            <i className="fas fa-phone-alt me-2"></i>
            <a
              href="tel:18002124669"
              className="mb-0 text-white text-decoration-none">
              18002124669
            </a>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-center justify-content-md-start">
            <i className="fas fa-envelope me-2"></i>
            <a
              href="mailto:customersupport@brbiomedical.com"
              className="mb-0 text-white text-decoration-none">
              customersupport@brbiomedical.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TopHeader;
