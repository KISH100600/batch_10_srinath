import React, { useEffect, useState } from "react";
import { Button, Badge } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { setToken } from "../../Controller/config";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const data = JSON.parse(sessionStorage.getItem("userData"));
  const cookies = new Cookies();
  const names = cookies.get("data");

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("userData"));
    const token = sessionStorage.getItem("token");
    if (data?.name) {
      setLoading(true);
      setToken(token);
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      {loading ? (
        <>
          <div
            className="firstRow"
            style={{
              height: "100px",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              background: "red",
            }}
          >
            <h1>{`Hi ${data.name}, Welcome to the Dashboard`}</h1>
            <h1>{`Your Reoles are ${data.roles}`}</h1>
          </div>
          <div
            className="firstRow"
            style={{ height: "50px", width: "100%", display: "flex" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "200px",
                justifyContent: "space-evenly",
                width: "20%",
                alignItems: "center",
              }}
            >
              <Button onClick={() => navigate("createUsers")}>
                <Badge>Create Users</Badge>
              </Button>
              <Button onClick={() => navigate("viewUsers")}>
                <Badge>View Users</Badge>
              </Button>
              <a onClick={() => sessionStorage.removeItem("userData")} href="/">
                <Badge>Logout</Badge>
              </a>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "80%",
                height: "80vh",
                background: "skyblue",
              }}
            >
              <Outlet />
            </div>
          </div>
        </>
      ) : (
        <h1>Loading.....</h1>
      )}
    </div>
  );
};

export default Dashboard;
