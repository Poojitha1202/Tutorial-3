// src/RegistrationPage.js
import React, { useState } from "react";
import "./RegistrationPage.css";
import { useNavigate } from "react-router-dom";

function RegistrationPage({ onUserUpdate }) {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form Data Validations
    if (
      !/^[A-Za-z]+$/.test(userData.firstName) ||
      !/^[A-Za-z]+$/.test(userData.lastName)
    ) {
      alert("First Name and Last Name should contain only letters.");
      return;
    }
    if (
      userData.password.length < 8 ||
      userData.password !== userData.confirmPassword
    ) {
      alert("Passwords must be at least 8 characters and should match.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(userData.email)) {
      alert("Email must be a valid email address.");
      return;
    }

    // Updating user state and navigating to profile page upon validation success
    onUserUpdate(userData);
    navigate("/profile");
  };

  return (
    <div className="registration-container">
      <div className="form-container">
        <h2 className="form-title">Sign Up</h2>
        <form onSubmit={handleSubmit} className="registration-form">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={userData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={userData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={userData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={userData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={userData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationPage;
