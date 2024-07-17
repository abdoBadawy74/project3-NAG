import React from "react";
import TopBar from "../../Components/TopBar";
import SideBar from "../../Components/SideBar/SideBar";
import Users from "./Users/ShowUsers/Users";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <TopBar></TopBar>
      <div className="d-flex">
        <SideBar></SideBar>
        <div
          className="content"
          style={{
            width: "85%",
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}
