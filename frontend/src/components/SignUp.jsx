import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import signuplogin from "../images/signuplogin.png";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "client",
    imageUrl: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

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
      const response = await axios.post(
        "http://localhost:3000/api/user/register",
        formData
      );
      setSuccessMessage("Sign up successful! Redirecting to login...");
      setErrorMessage("");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      setErrorMessage(error.response.data.message);
      setSuccessMessage("");
    }
  };

  return (
    <div className="full-signup">
      <div className="image-container">
        <img src={signuplogin} alt="" />
      </div>

      <div className="signup-container">
        <h2>Create an account</h2>
        <h3>Enter your details below</h3>
        {successMessage && (
          <p className="message success-message">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="message error-message">{errorMessage}</p>
        )}
        <form onSubmit={handleSubmit}>
          <div>
            <TextField
              id="username"
              name="username"
              label="Name"
              variant="standard"
              fullWidth
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <TextField
              id="email"
              name="email"
              label="Email"
              variant="standard"
              fullWidth
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              variant="standard"
              fullWidth
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div id="roleDiv">
            {/* <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="client">Client</option>
            <option value="seller">Seller</option>
          </select> */}

            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="roleLabel">Role</InputLabel>
              <Select
                labelId="role"
                name="role"
                id="role"
                value={formData.role}
                label="role"
                onChange={handleChange}
              >
                <MenuItem value="client">Client</MenuItem>
                <MenuItem value="seller">Seller</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div>
            <label htmlFor="imageUrl">Profile Image URL:</label>
            <input
              type="url"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
            />
          </div>
          <Button variant="contained" type="submit" disableElevation>
            Create Account
          </Button>
        </form>
        <br />
        <p className="haveAccount">
          Already have account?
          <span
            className="haveAccount"
            id="haveAccountLogIn"
            onClick={() => {
              navigate("/login");
            }}
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
