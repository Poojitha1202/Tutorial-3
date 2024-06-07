// src/ProfilePage.js
import React, { useState, useEffect } from "react";
import profilePicture from "./avatar1.png"; // Import the image
import "./ProfilePage.css";

function ProfilePage({ user }) {
  const [editMode, setEditMode] = useState(false);
  const [userEdit, setUserEdit] = useState({ ...user });

  useEffect(() => {
    setUserEdit({ ...user });
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserEdit({ ...userEdit, [name]: value });
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const saveChanges = () => {
    console.log("User saved:", userEdit);
    setEditMode(false);
  };

  return (
    <div className="registration-container">
      <div className="form-container">
        <h2 className="form-title">User Profile</h2>
        <div className="profile-content">
          <div className="avatar-container">
            <img src={profilePicture} alt="Avatar" className="avatar" />
          </div>
          <div className="profile-info">
            <div className="field-container">
              <label>First Name: </label>
              {editMode ? (
                <input
                  type="text"
                  name="firstName"
                  value={userEdit.firstName}
                  onChange={handleInputChange}
                />
              ) : (
                <span>{userEdit.firstName}</span>
              )}
            </div>
            <div className="field-container">
              <label>Last Name: </label>
              {editMode ? (
                <input
                  type="text"
                  name="lastName"
                  value={userEdit.lastName}
                  onChange={handleInputChange}
                />
              ) : (
                <span>{userEdit.lastName}</span>
              )}
            </div>
            <div className="field-container">
              <label>Email: </label>
              {editMode ? (
                <input
                  type="email"
                  name="email"
                  value={userEdit.email}
                  onChange={handleInputChange}
                />
              ) : (
                <span>{userEdit.email}</span>
              )}
            </div>
            <div className="button-container">
              {editMode ? (
                <button className="save-button" onClick={saveChanges}>
                  Save
                </button>
              ) : (
                <button className="edit-button" onClick={handleEdit}>
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
