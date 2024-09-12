import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { TextField, Button } from "@mui/material";
import { login } from "../features/AuthSlice";
function Profile() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
    profilePicture: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(user, "user");
    setFormData({
      userName: user.userName || "",
      email: user.email || "",
      profilePicture: user.profilePicture || "",
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "http://localhost:3000/api/user/update",
        formData,
        { withCredentials: true }
      );
      setSuccessMessage("Profile updated successfully!");
      setErrorMessage("");

      dispatch(
        login(formData.userName, formData.email, formData.profilePicture)
      );
    } catch (error) {
      setErrorMessage(error.response.data.message || "An error occurred");
      setSuccessMessage("");
    }
  };

  return (
    <div className="profile-container">
      <h2>Manage My Account</h2>
      <h3>Edit Your Profile</h3>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Profile Picture URL"
          name="profilePicture"
          value={formData.profilePicture}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <h3>Password Changes</h3>
        <TextField
          label="Current Password"
          name="currentPassword"
          type="password"
          value={formData.currentPassword}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="New Password"
          name="newPassword"
          type="password"
          value={formData.newPassword}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Confirm New Password"
          name="confirmNewPassword"
          type="password"
          value={formData.confirmNewPassword}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <div className="button-group">
          <Button
            variant="outlined"
            onClick={() =>
              setFormData({
                userName: user.userName,
                email: user.email,
                profilePicture: user.profilePicture,
                currentPassword: "",
                newPassword: "",
                confirmNewPassword: "",
              })
            }
          >
            Cancel
          </Button>
          <Button variant="contained" type="submit" color="primary">
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Profile;
