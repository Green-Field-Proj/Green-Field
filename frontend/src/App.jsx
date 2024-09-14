import React, { useEffect } from "react";
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
import NotFound from "./components/Notfound.jsx"
import { useDispatch, useSelector } from "react-redux";
import Profile from "./components/Profile.jsx";
import { checkStatus } from "./features/AuthSlice.js";
import SellerDashboard from "./components/SellerDashboard.jsx";

const App = () => {
  const { role } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkStatus());
  }, [dispatch]);

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
        {role && <Route path="/profile" element={<Profile />} />}
        {role === "seller" && (
          <Route path="/seller" element={<SellerDashboard />} />
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
