import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/signin-signup">Signin</Link>
    </nav>
  );
}

export default Navbar;
