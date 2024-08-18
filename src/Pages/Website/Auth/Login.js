import Header from "../../../Components/Header";
import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { user } from "../../../Context/userContext";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [accept, setAccept] = useState(false);
  const [emailError, setEmailError] = useState("");

  const nav = useNavigate();

  // Cookie
  const cookie = new Cookies();
   

  const User = useContext(user);
  console.log(User);

  useEffect(() => {
    if (emailError) {
      console.log("Email Error:", emailError);
    }
  }, [emailError]);

  async function submit(e) {
    e.preventDefault();

    try {
      let res = await axios.post(`http://127.0.0.1:8000/api/login`, {
        email: email,
        password: password,
      });
      const token = res.data.data.token;
      cookie.set("Bearer", token);
      const userData = res.data.data.user;
      User.setAuth({ token, userData });
      nav("/dashboard");
    } catch (err) {
      if (err.response.status === 401) {
        setEmailError(true);
      }
      setAccept(true);
    }
  }
  return (
    <>
      <Header />
      <div
        className={`${"container d-flex justify-content-center align-items-center"}`}
        style={{ minHeight: "100vh" }}
      >
        <form
          onSubmit={submit}
          className={`${"d-flex flex-column w-50 shadow p-4 mb-5 bg-white rounded"}`}
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
          {emailError && accept && (
            <small className="text-danger"> Password or Email not right </small>
          )}
          <button
            type="submit"
            className={`${"btn btn-primary m-auto fw-900"}`}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}
