import React, { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    document.title = "Users";
    fetch("http://127.0.0.1:8000/api/user/show")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="p-4">
      <table className="">
        <thead>
          <tr>
            <th>Id</th>
            <th>User</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
