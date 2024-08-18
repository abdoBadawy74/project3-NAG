import React from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.css";

export default function SideBar() {
  return (
    <div
      className="side-bar border"
      style={{
        width: "15%",
        height: "100vh",
      }}
    >
      <NavLink
        to="/dashboard/users"
        className="item-link link-dark text-decoration-none d-block fs-4 px-3 border-bottom py-2 mt-4"
      >
        <i className="fa-solid fa-users fs-5 mx-1 text-muted"></i>
        Users
      </NavLink>

      <NavLink
        to="/dashboard/user/create"
        className="item-link link-dark text-decoration-none d-block fs-4 px-3 border-bottom py-2"
      >
        <i class="fa-solid fa-user-plus mx-1 fs-5 text-muted"></i>
        New User
      </NavLink>
    </div>
  );
}
