import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
const Error404 = () => {
  const navigate = useNavigate();

  const Home = () => {
    navigate("/");
  };

  return (
    <div className="nf">
      <h1 className="nf404">404 Not Found</h1>
      <p className="nf404p">
      Your visited page not found. You may go home page.
      </p>

      <Button variant="contained" type="submit" onClick={Home} disableElevation id="nf404-btn">
            Back to Home Page
          </Button>
    </div>
  );
};

export default Error404;
