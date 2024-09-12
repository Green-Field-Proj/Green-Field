import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import Home from "./components/Home.jsx";
import TopHeader from "./components/TopHeader.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ContactUs from "./components/ContactUs.jsx";
import OurStory from "./components/OurStory.jsx";
import AdminDashboard from "./components/AdminDashboard.jsx";
import NotFound from "./components/NotFound.jsx";
import { useSelector } from "react-redux";

const App = () => {
  const role = useSelector((state) => state.auth.role);
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
        {role === "admin" && (
          <Route path="/admin" element={<AdminDashboard />} />
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
