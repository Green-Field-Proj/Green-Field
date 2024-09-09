import React, { useState } from "react";
import "../style/App.css";
import SignUpForm from "../src/Login&SignUp/loginform.jsx";
import SignInForm from "../src/Login&SignUp/signupform.jsx";
import TogglePanel from "../src/Login&SignUp/Toggle.jsx";

const App = () => {
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
};

export default App;
