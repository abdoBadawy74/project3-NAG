import React from "react";
import { Link } from "react-router-dom";
import Dashboard from './../Pages/Dashboard/Dashboard';

export default function Header() {
  function handleLogout() {
    window.localStorage.removeItem("email");
    window.location.pathname = "/";
  }
  return (
    <nav className="contianer d-flex align-items-center justify-content-between shadow-sm p-2">
      <div className="d-flex justify-content-between align-items-center ">
        <Link
          to="/"
          style={{
            cursor: "pointer",
            marginRight: "20px",
            textDecoration: "none",
          }}
        >
          Home
        </Link>
        <Link
          to="/about"
          style={{
            cursor: "pointer",
            marginRight: "20px",
            textDecoration: "none",
          }}
        >
          About
        </Link>
      </div>

      <div className="d-flex gap-3 py-2">

          <>
            <Link
              to="/signup"
              className="btn btn-primary fw-900 mx-2"
              style={{
                fontSize: "14px",
              }}
            >
              Register
            </Link>
            <Link
              to="/login"
              className="btn btn-primary fw-900"
              style={{
                fontSize: "14px",
              }}
            >
              Login
            </Link>
            <Link
              to="/dashboard"
              className="btn btn-primary fw-900"
              style={{
                fontSize: "14px",
              }}
            >
              Dashboard
            </Link>
          </>
    
          {/* <div className="btn btn-danger" onClick={handleLogout}>
            Log out
          </div>
         */}
      </div>
    </nav>
  );
}
