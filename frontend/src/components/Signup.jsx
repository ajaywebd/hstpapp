import React, { useState } from "react";
import { json, Link, useNavigate } from "react-router-dom";
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
      const url = "http://localhost:8080/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Corrected key here
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
        const details = error?.details[0].message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
    } catch (error) {
      handleError(error.message || "Error during signup");
    }
  };

  return (
    <div className="container m-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="text-center">Sign Up</h3>
              <form onSubmit={handleSignup}>
                <div className="form-group mb-3">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                    name="name"
                    onChange={handleChange}
                    value={signupInfo.name}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                    onChange={handleChange}
                    value={signupInfo.email}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                    name="password"
                    onChange={handleChange}
                    value={signupInfo.password}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Sign Up
                </button>
              </form>
              <div className="text-center mt-3">
                <p>
                  Already have an account?{" "}
                  <Link
                    to={"/login"}
                    className="text-primary"
                    style={{ cursor: "pointer" }}>
                    Log In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Toast Container must be inside the component */}
      <ToastContainer />
    </div>
  );
};

export default Signup;
