import UserDeshbord from "./user/UserDeshbord";
import AdminDeshbord from "./admin/AdminDeshbord.jsx";
import LandingPage from "./landing/LandingPage.jsx";
import ComapneyDeshbord from "./company/CompanyDeshbord.jsx";
import RegisterPage from "./auth/Register.jsx";
import { useState } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CheckUserPage from "./CheckUserPage.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Main Route */}
        <Route path="/" element={<CheckUserPage />} />

        {/* Auth Routes */}
        <Route path="/register" element={<RegisterPage />} />

        {/* Landing Page Routes */}
        {/* User Routes */}
        {/* Company Routes */}
        {/* Admin Routes */}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{
  /* "" -> Landing Page 
    "User" -> Job seeker
    "Admin" -> Admin
    "Companey" -> Companey "*/
}
