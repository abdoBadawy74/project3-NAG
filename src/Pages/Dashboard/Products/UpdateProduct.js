import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

export default function UpdateProduct() {
  const id = window.location.pathname.split("/").slice(-1)[0];
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const [accept, setAccept] = useState(false);

  const cookie = new Cookies();
  const token = cookie.get("Bearer");
  const nav = useNavigate();

  async function submit(e) {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("image", image);
      let res = await axios
        .post(
          `http://127.0.0.1:8000/api/product/update/${id}`,

          formData,

          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
            },
          }
        )
        .then((data) => {
          console.log(data);
          nav("/dashboard/products");
        });
    } catch (err) {
      console.log(err);
      setAccept(true);
    }
  }
  //   get Products
  useEffect(() => {
    document.title = "Products";
    axios
      .get(`http://127.0.0.1:8000/api/product/showbyid/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      })

      .then((data) => {
        setTitle(data.data[0]?.title);
        setDescription(data.data[0]?.description);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <h1 className="mt-4 mx-4">Update Product</h1>
      <div className={`${"container "}`} style={{ minHeight: "100vh" }}>
        <form onSubmit={submit} className={`${" p-4"}`}>
          <div className="mb-2">
            <label htmlFor="name" className="form-label">
              Title
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {title?.length < 3 && accept && (
              <small className="text-danger">
                name must be more than 3 characters
              </small>
            )}
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="form-label">
              Description
            </label>
            <input
              type="text"
              id="email"
              className="form-control"
              placeholder="Description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            {/* {emailError === 422 && accept && (
              <small className="text-danger">email is already taken</small>
            )} */}
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="form-label">
              Image
            </label>
            <input
              type="file"
              id="password"
              className="form-control"
              placeholder="file..."
              onChange={(e) => setImage(e.target.files.item(0))}
            />
            {/* {password.length < 8 && accept && (
              <small className="text-danger">
                password must be more than 8 characters
              </small>
            )} */}
          </div>

          <button
            type="submit"
            className={`${"my-2 w-100 btn btn-primary m-auto fw-900"}`}
          >
            Edit Product
          </button>
        </form>
      </div>
    </>
  );
}
