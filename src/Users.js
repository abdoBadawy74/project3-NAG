import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  //   get users
  useEffect(() => {
    document.title = "Users";
    fetch("http://127.0.0.1:8000/api/user/show")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, [loading]);

  //   delete user
  function deleteUser(id) {
    axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`).then((res) => {
      setLoading(!loading);
    });
  }

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
    </div>
  );
}
