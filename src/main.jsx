import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Roots from "./components/Roots.jsx";
import AuthProvider from "./provider/AuthProvider";
import Profile from "./components/Profile";
import Orders from "./components/Orders";
import PrivateRoutes from "./privateRoute/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
      {
        path: "/orders",
        element: (
          <PrivateRoutes>
            <Orders />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
