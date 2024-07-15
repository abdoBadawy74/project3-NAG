import React from "react";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <div className="d-flex justify-content-between align-items-center contianer shadow-sm">
      <h1>Store</h1>
      <Link to={"/"} className="btn btn-outline-info">
        {" "}
        Go To Website
      </Link>
    </div>
  );
}
