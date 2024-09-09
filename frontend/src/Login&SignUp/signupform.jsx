import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebookF,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const SignUpForm = () => {
  return (
    <div className="form-container sign-up">
      <form action="#">
        <h1>Create Account</h1>
        <div className="social-icons">
          <a href="#" className="icon">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a href="#" className="icon">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="icon">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="#" className="icon">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
        <span>or use your email for register</span>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
