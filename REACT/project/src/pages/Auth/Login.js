import React, { useState } from "react";
import Nav from "../../Components/Nav";
import { BaseUrl, backend, setToken } from "../../Controller/config";
import base64 from "base-64";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";

const Login = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  console.log(userName, password);

  // const Login = () => {
  //   fetch(`${BaseUrl}/api/service/rest/user/getCurrentUser`, {
  //     headers: {
  //       Authorization: "Basic " + base64.encode(userName + ":" + password),
  //     },
  //   })
  //     // .then((response) => response.json())
  //     .then((response) => {
  //       if (response.status === 200) {
  //         console.log(response);
  //         navigate("/dashboard");
  //       } else {
  //         alert("Invalif User Name or Password");
  //       }
  //     })
  //     .catch((e) => console.log(e));
  // };
  const Login = async () => {
    try {
      const response = await backend.get(
        `/api/service/rest/user/getCurrentUser`,
        {
          headers: {
            Authorization: "Basic " + base64.encode(userName + ":" + password),
          },
        }
      );
      if (response.status === 200) {
        setToken(response.headers["x-auth-token"]);
        sessionStorage.setItem("userData", JSON.stringify(response.data));
        sessionStorage.setItem("token", response.headers["x-auth-token"]);
        localStorage.setItem("userData", JSON.stringify(response.data));
        cookies.set("data", response.data);
        // sessionStorage.setItem("userData", JSON.stringify(response.data));
        navigate("/dashboard");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="container">
      <Nav />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          Login();
          console.log("form submiteed");
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
          }}
        >
          <h1>This is a login screen</h1>
          <label>User Name</label>
          <input
            type="email"
            value={userName}
            onChange={(val) => setUserName(val.target.value)}
          />
          <br />
          <label>password</label>
          <input
            type="password"
            value={password}
            onChange={(val) => setPassword(val.target.value)}
          />
          <br />
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Login;
