import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { handleError, handleSuccess } from "../utils";

const Signup = () => {
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo({
      ...signupInfo,
      [name]: value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
      return handleError("Name, email, and password are required");
    }
    try {
      const url = "https://hstpapp-api.vercel.app/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupInfo),
      });
      const result = await response.json();
      const { success, message, error } = result;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else if (error) {
        const details = error?.details[0]?.message;
        handleError(details || "An error occurred");
      } else if (!success) {
        handleError(message);
      }
    } catch (error) {
      handleError(error.message || "Error during signup");
    }
  };

  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
      }}>
      <div className="row justify-content-center w-100">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-lg border-0">
            <div
              className="card-body"
              style={{
                background: "#ffffff",
                borderRadius: "10px",
              }}>
              <h3 className="text-center text-primary  mb-4">Sign Up</h3>
              <form onSubmit={handleSignup}>
                <div className="form-group mb-3">
                  <label htmlFor="name" className="text-muted">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control shadow-sm"
                    id="name"
                    placeholder="Enter your name"
                    name="name"
                    onChange={handleChange}
                    value={signupInfo.name}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="email" className="text-muted">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control shadow-sm"
                    id="email"
                    placeholder="Enter your email"
                    name="email"
                    onChange={handleChange}
                    value={signupInfo.email}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password" className="text-muted">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control shadow-sm"
                    id="password"
                    placeholder="Enter your password"
                    name="password"
                    onChange={handleChange}
                    value={signupInfo.password}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-success btn-block w-100 shadow"
                  style={{ borderRadius: "30px" }}>
                  Sign Up
                </button>
              </form>
              <div className="text-center mt-3">
                <p>
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-primary fw-bold"
                    style={{ textDecoration: "none" }}>
                    Log In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
