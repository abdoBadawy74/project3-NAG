import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Users.css";
import { user } from "../../../../Context/userContext";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const context = useContext(user);
  const token = context.auth.token;

  //   get users
  useEffect(() => {
    document.title = "Users";
    axios
      .get("http://127.0.0.1:8000/api/user/show", {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      })

      .then((data) => setUsers(data.data))
      .catch((error) => console.log(error));
  }, [loading]);

  //   delete user
  function deleteUser(id) {
    axios
      .delete(`http://127.0.0.1:8000/api/user/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      })
      .then((res) => {
        setLoading(!loading);
      });
  }
  async function refresh() {
    try {
      await axios
        .post("http://127.0.0.1:8000/api/refresh", null, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          context.setAuth((prev) => {
            return {
              ...prev,
              token: res.data.token,
            };
          });
          console.log(res.date.token);
        });
    } catch (error) {
      console.log(error);
    }
  }

  console.log(context);

  return (
    <div className="p-4">
      <table className="">
        <thead>
          <tr>
            <th>Id</th>
            <th>User</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`${user.id}`}>
                  <i
                    className="fa-solid fa-pen-to-square px-2"
                    style={{
                      color: "#74afb9",
                      fontSize: "20px",
                      cursor: "pointer",
                    }}
                  ></i>
                </Link>
                <i
                  className="fa-solid fa-trash"
                  style={{
                    color: "red",
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                  onClick={() => deleteUser(user.id)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary mt-4" onClick={refresh}>
        Refresh token{" "}
      </button>
    </div>
  );
}
