import React from "react";
import SignUpForm from "./signupform.jsx";
import SignInForm from "./loginform.jsx";
import TogglePanel from "./Toggle.jsx";
import { useState } from "react";

function Signin_Signup() {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };
  return (
    <div className={`container ${isActive ? "active" : ""}`} id="container">
      <SignUpForm />
      <SignInForm />
      <TogglePanel
        onRegisterClick={handleRegisterClick}
        onLoginClick={handleLoginClick}
      />
    </div>
  );
}

export default Signin_Signup;
