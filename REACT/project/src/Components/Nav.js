import React from "react";
import { Badge, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "../logo.jpg";

const Nav = () => {
  const navigation = useNavigate();
  return (
    <div class="row justify-content-center">
      <h1 className="col">
        <img
          onClick={() => navigation("/")}
          height={"70px"}
          width={"70px"}
          src={logo}
          style={{
            cursor: "pointer",
          }}
        />
      </h1>
      <a className="col" href="/login">
        <Badge>Login</Badge>
      </a>

      <a className="col" href="/dashboard">
        <Badge>Dashboard</Badge>
      </a>
      {/* <Button onClick={() => navigation("/")}>HOME</Button> */}
    </div>
  );
};

export default Nav;
