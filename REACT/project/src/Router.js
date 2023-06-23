import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import CreateUsers from "./pages/Dashboard/Users/CreateUsers";
import { ViewUsers } from "./pages/Dashboard/Users/ViewUsers";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "createUsers",
          element: <CreateUsers />,
        },
        {
          path: "viewUsers",
          element: <ViewUsers />,
        },
      ],
    },
  ]);
};

export default Router;
