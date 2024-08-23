import Header from "../../Components/Header";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import "./Users.css";
import { user } from "../../Context/userContext";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const context = useContext(user);
  const token = context.auth.token;

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

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          {products.map((product, index) => (
            <div key={index} className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <img
                    src={product.image}
                    alt={product.title}
                    width={"100%"}
                    height="350px"
                    style={{
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                  <h5>{product.title}</h5>
                </div>
                <div className="card-body">
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
