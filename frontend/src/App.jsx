import React, { useState } from "react";
import "../style/App.css";
import { Routes, Route } from "react-router-dom";
import Signin_Signup from "./components/Login&SignUp/Signin_Signup.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin-signup" element={<Signin_Signup />} />
      </Routes>
    </>
  );
};

export default App;
