import React from "react";

export default function SignUp() {
  return (
    <div
  className="d-flex justify-content-center align-items-center"
  style={{ height: "100vh" }}
>
  <form className="d-flex flex-column w-50 shadow-lg p-4 mb-5 bg-white rounded">
    <div className="mb-3">
      <label htmlFor="name" className="form-label">Name</label>
      <input type="text" id="name" className="form-control" placeholder="name..." />
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email</label>
      <input type="email" id="email" className="form-control" placeholder="email..." />
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">Password</label>
      <input type="password" id="password" className="form-control" placeholder="password..." />
    </div>
    <div className="mb-3">
      <label htmlFor="confirm-password" className="form-label">Repeat Password</label>
      <input type="password" id="repeat" className="form-control" placeholder="Repeat password..." />
    </div>
    <button type="submit" className="btn btn-primary w-25 m-auto fw-900">Register</button>
  </form>
</div>

  );
}
