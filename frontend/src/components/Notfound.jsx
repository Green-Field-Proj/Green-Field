import React from "react";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();

  const Home = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>404 Not Found</h1>
      <p>
        The page you are looking for does not exist. You may go back to the home
        page.
      </p>
      <button onClick={Home}>Back to Home Page</button>
    </div>
  );
};

export default Error404;
