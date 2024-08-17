import React, { useContext } from "react";
import { user } from "../../../Context/userContext";
import { Navigate, Outlet } from "react-router-dom";

export default function RequireAuth() {
  const User = useContext(user);
  return User.auth.userData ? <Outlet /> : <Navigate to="/login" />;
}
