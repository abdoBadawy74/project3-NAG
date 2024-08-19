import axios from "axios";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

export default function Header() {
  const cookie = new Cookies();
  const token = cookie.get("Bearer");

 async function handleLogout() {
   await axios.post("http://127.0.0.1:8000/api/logout", null,  {
    headers:{
      Authorization: `Bearer ${token}`
    }
   }).then(res => {
     cookie.remove("Bearer");
     window.location.href = "/";
   }).catch(err => console.log(err))
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
          {token ? (
            <>
              <Link
                to="/dashboard"
                className="btn btn-primary fw-900"
                style={{
                  fontSize: "14px",
                }}
              >
                Dashboard
              </Link>
              <div className="btn btn-danger" onClick={handleLogout}>
                Log out
              </div>
            </>
          ) : (
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
            </>
          )}
        </>
      </div>
    </nav>
  );
}
