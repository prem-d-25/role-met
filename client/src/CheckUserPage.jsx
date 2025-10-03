import UserDeshbord from "./user/UserDeshbord";
import AdminDeshbord from "./admin/AdminDeshbord.jsx";
import LandingPage from "./landing/LandingPage.jsx";
import ComapneyDeshbord from "./company/CompanyDeshbord.jsx";
import { useState } from "react";

function CheckUserPage() {
  const [userType, setUserType] = useState("");

  return userType == "" ? (
    <LandingPage />
  ) : userType == "User" ? (
    <UserDeshbord />
  ) : userType == "Admin" ? (
    <AdminDeshbord />
  ) : (
    <ComapneyDeshbord />
  );
}

export default CheckUserPage;
