// RefresHandler.jsx
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RefresHandler = ({ setIsAuthenticated }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      if (
        location.pathname === "/login" ||
        location.pathname === "/brcomponent/signup"
      ) {
        navigate("/", { replace: true }); // Redirect authenticated users to home
      }
    } else {
      setIsAuthenticated(false);
      if (
        location.pathname !== "/login" &&
        location.pathname !== "/brcomponent/signup"
      ) {
        navigate("/login", { replace: true }); // Redirect unauthenticated users to login
      }
    }
  }, [location, navigate, setIsAuthenticated]);

  return null;
};

export default RefresHandler;
