import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  //   get users
  useEffect(() => {
    document.title = "Users";
    fetch("http://127.0.0.1:8000/api/user/show")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, [users]);

  //   delete user
  function deleteUser(id) {
    axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`).then((res) => {
      console.log("user deleted successfully");
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
                <i
                  className="fa-solid fa-pen-to-square px-2"
                  style={{
                    color: "#74afb9",
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                ></i>
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
