import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div
      className="side-bar border"
      style={{
        width: "15%",
        height: "100vh",
      }}
    >
      <Link to="/dashboard/users" className="item-link link-dark text-decoration-none d-block fs-3 px-3 border-bottom">
        Users
      </Link>
    </div>
  );
}
