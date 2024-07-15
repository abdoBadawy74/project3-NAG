import React from "react";
import TopBar from "./Components/TopBar";
import SideBar from "./Components/SideBar";
import Users from "./Users";

export default function Dashboard() {
  return (
    <div>
      <TopBar></TopBar>
      <div className="d-flex">
        <SideBar></SideBar>
        <div className="content">
          <Users />
        </div>
      </div>
    </div>
  );
}
