import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TextField, Button } from "@mui/material";
import signuplogin from "../images/signuplogin.png"


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      setSuccessMessage("Login successful!");
      setErrorMessage("");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      setErrorMessage("Login failed. Please try again.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="full-login">
      <div className="image-container">
    <img src={signuplogin} alt="" />
    </div>
    <div className="login-form">
      <h2>Log in to Exclusive</h2>
      <h3>Enter your details below</h3>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        {/* <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div> */}

<div>
          <TextField
            id="email"
            name="email" 
            label="Email"
            variant="standard"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Log In</button>
        <p id="forgotPass">Forget Password?</p>
      </form>
    </div>
    </div>
  );
}

export default Login;
