import React from "react";
import "../../style/App.css";

const TogglePanel = ({ onRegisterClick, onLoginClick }) => {
  return (
    <div className="toggle-container">
      <div className="toggle">
        <div className="toggle-panel toggle-left">
          <h1>Welcome Back!</h1>
          <p>Enter your personal details to use all of the site's features.</p>
          <button className="hidden" id="login" onClick={onLoginClick}>
            Sign In
          </button>
        </div>

        <div className="toggle-panel toggle-right">
          <h1>Hello, Subscriber!</h1>
          <p>
            Register with your personal details to use all of the site's
            features.
          </p>
          <button className="hidden" id="register" onClick={onRegisterClick}>
            login
          </button>
        </div>
      </div>
    </div>
  );
};

export default TogglePanel;
