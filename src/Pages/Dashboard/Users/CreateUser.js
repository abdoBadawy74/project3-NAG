
import axios from "axios";
import React, { useEffect, useState, useContext } from "react";

export default function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeat, setRepeat] = useState("");
  const [emailError, setEmailError] = useState("");
  const [accept, setAccept] = useState(false);

  async function submit(e) {
    e.preventDefault();

    try {
      let res = await axios.post(`http://127.0.0.1:8000/api/user/create`, {
        name: name,
        email: email,
        password: password,
        password_confirmation: repeat,
      });
      console.log(res);
    } catch (err) {
      setEmailError(err.response.status);
    }
  }
  return (
    <>
      <h1 className="mt-4 mx-4">New User</h1>
      <div className={`${"container "}`} style={{ minHeight: "100vh" }}>
        <form onSubmit={submit} className={`${" p-4"}`}>
          <div className="mb-2">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {name?.length < 3 && accept && (
              <small className="text-danger">
                name must be more than 3 characters
              </small>
            )}
          </div>
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
          <div className="mb-2">
            <label htmlFor="confirm-password" className="form-label">
              Repeat Password
            </label>
            <input
              type="password"
              id="repeat"
              className="form-control"
              placeholder="Repeat password..."
              value={repeat}
              onChange={(e) => setRepeat(e.target.value)}
            />
            {password !== repeat && accept && (
              <small className="text-danger">passwords do not match</small>
            )}
          </div>
          <button
            type="submit"
            className={`${"my-2 w-100 btn btn-primary m-auto fw-900"}`}
          >
            Create User
          </button>
        </form>
      </div>
    </>
  );
}
