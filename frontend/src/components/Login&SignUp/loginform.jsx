import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebookF,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const SignInForm = () => {
  return (
    <div className="form-container sign-in">
      <form action="#">
        <h1>Sign In</h1>
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
        <span>or use your email and password</span>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <a href="#">Forgot Password?</a>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignInForm;
