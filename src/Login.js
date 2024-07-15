import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accept, setAccept] = useState(false);
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    if (emailError) {
      console.log("Email Error:", emailError);
    }
  }, [emailError]);

  async function submit(e) {
    let flag = true;

    e.preventDefault();
    setAccept(true);

    if (email === "" || password.length < 8) {
      flag = false;
    } else {
      flag = true;
    }

    try {
      if (flag) {
        let res = await axios.post("http://127.0.0.1:8000/api/login", {
          email: email,
          password: password,
        });
        if(res.status === 200){
          window.localStorage.setItem("email", email);
          window.location.pathname = "/";
        }
      }
    } catch (err) {
      setEmailError(err.response.status);
      console.log(emailError);
    }
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <form
        onSubmit={submit}
        className="d-flex flex-column w-50 shadow p-4 mb-5 bg-white rounded"
      >
        <div className="mb-2">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {email === "" && accept && (
            <small className="text-danger">email is required</small>
          )}

          {emailError === 422 && accept && (
            <small className="text-danger">email is already taken</small>
          )}
        </div>
        <div className="mb-2">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {password.length < 8 && accept && (
            <small className="text-danger">
              password must be more than 8 characters
            </small>
          )}
        </div>

        <button type="submit" className="btn btn-primary m-auto fw-900">
          Log In
        </button>
      </form>
    </div>
  );
}
