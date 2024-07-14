import React from "react";

export default function Header() {
  return (
    <nav className="d-flex align-items-center justify-content-between">
      <div className="d-flex justify-content-between align-items-center">
        <h6>Home</h6>
        <h6>About</h6>
      </div>

      <div className="d-flex gap-3 py-2">
        <div
          className="btn btn-primary fw-900 mx-2"
          style={{
            fontSize: "14px",
          }}
        >
          Register
        </div>
        <div
          className="btn btn-primary fw-900"
          style={{
            fontSize: "14px",
          }}
        >
          Login
        </div>
      </div>
    </nav>
  );
}
