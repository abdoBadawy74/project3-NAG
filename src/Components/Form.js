import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Forms(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeat, setRepeat] = useState("");
  const [accept, setAccept] = useState(false);
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    setName(props.name);
    setEmail(props.email);
  }, [props.name, props.email]);

  useEffect(() => {
    if (emailError) {
      console.log("Email Error:", emailError);
    }
  }, [emailError]);

  async function submit(e) {
    let flag = true;

    e.preventDefault();
    setAccept(true);

    if (
      name.length < 3 ||
      email === "" ||
      password.length < 8 ||
      password !== repeat
    ) {
      flag = false;
    } else {
      flag = true;
    }

    try {
      if (flag) {
        let res = await axios.post(
          `http://127.0.0.1:8000/api/${props.endPoint}`,
          {
            name: name,
            email: email,
            password: password,
            password_confirmation: repeat,
          }
        );
        if (res.status === 200) {
          props.IsLocalStorage && window.localStorage.setItem("email", email);
          // window.location.href = "/";
          window.location.pathname = `/${props.navigate}`; // what is the difference between this and the above line?
        }
      }
    } catch (err) {
      setEmailError(err.response.status);
      console.log(emailError);
    }
  }

  return (
    <>
      <div
        className={`${
          props.isUpdate
            ? "container "
            : "container d-flex justify-content-center align-items-center"
        }`}
        style={{ minHeight: "100vh" }}
      >
        <form
          onSubmit={submit}
          className={`${
            props.isUpdate
              ? " p-4"
              : "d-flex flex-column w-50 shadow p-4 mb-5 bg-white rounded"
          }`}
        >
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
            className={`${
              props.isUpdate
                ? "my-2 w-100 btn btn-primary m-auto fw-900"
                : "btn btn-primary m-auto fw-900"
            }`}
          >
            {props.button}
          </button>
        </form>
      </div>
    </>
  );
}
