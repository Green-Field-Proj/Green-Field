import React, { useState, useEffect } from "react";

import { TextField, Button } from "@mui/material";
import signuplogin from "../images/signuplogin.png";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/AuthSlice";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { isLoading, error, successMessage, role } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (successMessage || role) {
      navigate("/");
    }
  }, [successMessage, role]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div className="full-login">
      <div className="image-container">
        <img src={signuplogin} alt="" />
      </div>
      <div className="login-form">
        <h2>Log in to Exclusive</h2>
        <h3>Enter your details below</h3>
        {isLoading && <p className="loading-message">Loading...</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        {error && <p className="error-message">{error.message}</p>}
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
