import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Modal from "./components/Modal";
import Signup from "./components/Signup";
import HomePage from "./pages/HomePage/index";

const WebRoutes = () => {


  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element ={<Modal open={true}><Signup /><h5 style={{color: "#6610f2"}}>The password you have selected in not valid</h5></Modal>} />
      <Route path="/login" element ={<Modal open={true}><Login /><h5 style={{color: "#6610f2"}}>Invalid credentials</h5></Modal>} />
    </Routes>
  );
};
export default WebRoutes;
