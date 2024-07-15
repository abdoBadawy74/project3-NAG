import React from "react";
import TopBar from "./Components/TopBar";
import SideBar from "./Components/SideBar";

export default function Dashboard() {
  return (
    <div>
      <TopBar></TopBar>
      <div className="d-flex">
        <SideBar></SideBar>
        <div className="content">
          <h1>Dashboard</h1>
          </div>
      </div>
    </div>
  );
}
