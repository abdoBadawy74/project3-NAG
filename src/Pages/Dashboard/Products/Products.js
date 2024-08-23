import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import "./Users.css";
import { user } from "../../../Context/userContext";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const context = useContext(user);
  const token = context.auth.token;

  //   get Products
  useEffect(() => {
    document.title = "Products";
    axios
      .get("http://127.0.0.1:8000/api/product/show", {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      })

      .then((data) => setProducts(data.data))
      .catch((error) => console.log(error));
  }, [loading]);

  //   delete Product
  function deleteProduct(id) {
    axios
      .delete(`http://127.0.0.1:8000/api/product/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      })
      .then((res) => {
        setLoading(!loading);
      });
  }

  return (
    <div className="p-4">
      <table className="">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>
                <Link to={`${product.id}`}>
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
                  onClick={() => deleteProduct(product.id)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
