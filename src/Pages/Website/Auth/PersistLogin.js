import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { user } from "../../../Context/userContext";
import axios from "axios";
import Loading from "../../../Components/Loading/Loading";
import Cookies from "universal-cookie";

export default function PersistLogin() {
  const context = useContext(user);
  const token = context.auth.token;
  const [loading, setLoading] = useState(true);

  //   cookie
  const cookie = new Cookies();
  const getToken = cookie.get("Bearer");

  useEffect(() => {
    async function refresh() {
      try {
        await axios
          .post("http://127.0.0.1:8000/api/refresh", null, {
            headers: {
              Authorization: `Bearer ${getToken}`,
            },
          })
          .then((res) => {
            context.setAuth({
              userData: res.data.user,
              token: res.data.token,
            });
            cookie.set("Bearer", res.data.token);
            console.log(res);
          });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    !token ? refresh() : setLoading(false);
  }, []);
  return loading ? <Loading /> : <Outlet />;
}
