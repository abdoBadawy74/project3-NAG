import React, { useContext } from "react";
import { user } from "../../../Context/userContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function RequireAuth() {
  const User = useContext(user);
  const location = useLocation();
  return User.auth.userData ? (
    <Outlet />
  ) : (
    <Navigate state={{ from: location }} replace to="/login" />
  );
}
