import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import Home from "./components/Home.jsx";
import Search from "./components/Search.jsx";
import ContactUs from "./components/ContactUs.jsx";
import TopHeader from "./components/TopHeader.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import OurStory from "./components/OurStory.jsx";
import AdminDashboard from "./components/AdminDashboard.jsx";
const App = () => {
  return (
    <>
      <TopHeader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<OurStory />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
