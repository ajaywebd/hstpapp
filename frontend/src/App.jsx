import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import ChildrenDisease from "./pages/disease/ChildrenDisease";
import FemaleDisease from "./pages/disease/FemaleDisease";
import MaleDisease from "./pages/disease/MaleDisease";
import DisplayDisease from "./components/DisplayDisease";
import Nutrition from "./pages/Nutrition";
import AerobicExercise from "./pages/exercise/AerobicExercise";
import PilatesExercise from "./pages/exercise/PilatesExcercise";
import ChildrenExercise from "./pages/exercise/ChildrenExercise";
import YogaExercise from "./pages/exercise/YogaExercise";
import DisplayNutrition from "./components/DisplayNutrition";
import DisplayChildren from "./components/DisplayChildren";
import DisplayAerobic from "./components/DisplayAerobic";
import DisplayPilate from "./components/DisplayPilate";
import CalculateBMI from "./components/CalculateBMI";
import TopHeader from "./components/TopHeader";
import YogaDisplay from "./components/YogaDisplay";
import Signup from "./components/Signup";
import Login from "./pages/Login";
import RefresHandler from "./RefresHandler";
import PrivateRoute from "./PrivateRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Always sync the isAuthenticated state with localStorage token on page load or refresh
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); // Set true if token exists, false otherwise
  }, []);

  // Logout function to remove token and update isAuthenticated state
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    setIsAuthenticated(false); // Update state
  };

  return (
    <Router>
      <RefresHandler setIsAuthenticated={setIsAuthenticated} />

      {/* Only show Navbar, Footer, and Routes when authenticated */}
      {isAuthenticated && <TopHeader />}
      {isAuthenticated && <NavigationBar handleLogout={handleLogout} />}

      <Routes>
        {/* Public routes (login and signup) */}
        <Route path="/login" element={<Login />} />
        <Route path="/brcomponent/signup" element={<Signup />} />

        {/* Protected routes */}
        <Route
          path="/"
          element={
            <PrivateRoute
              element={<Home />}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <PrivateRoute
              element={<Contact />}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path="/disease/maleDisease"
          element={
            <PrivateRoute
              element={<MaleDisease />}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path="/disease/femaleDisease"
          element={
            <PrivateRoute
              element={<FemaleDisease />}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path="/disease/childrenDisease"
          element={
            <PrivateRoute
              element={<ChildrenDisease />}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path="/exercise/aerobicExercise"
          element={
            <PrivateRoute
              element={<AerobicExercise />}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path="/exercise/childrenExercise"
          element={
            <PrivateRoute
              element={<ChildrenExercise />}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path="/exercise/pilateExercise"
          element={
            <PrivateRoute
              element={<PilatesExercise />}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path="/exercise/yogaExercise"
          element={
            <PrivateRoute
              element={<YogaExercise />}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path="/nutrition"
          element={
            <PrivateRoute
              element={<Nutrition />}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path="/displayDisease"
          element={
            <PrivateRoute
              element={<DisplayDisease />}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path="/displayPilate"
          element={
            <PrivateRoute
              element={<DisplayPilate />}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path="/displayAerobic"
          element={
            <PrivateRoute
              element={<DisplayAerobic />}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path="/yogaDisplay"
          element={
            <PrivateRoute
              element={<YogaDisplay />}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path="/displayChildren"
          element={
            <PrivateRoute
              element={<DisplayChildren />}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path="/displayBMI"
          element={
            <PrivateRoute
              element={<DisplayNutrition />}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path="/calculateBMI"
          element={
            <PrivateRoute
              element={<CalculateBMI />}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>

      {/* Only show footer when authenticated */}
      {isAuthenticated && <Footer />}
    </Router>
  );
}

export default App;
