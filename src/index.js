import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Background from "./components/UI/Background";
import Root from "./pages/Root";
import Main from "./components/Main";
import Error from "./pages/Error";
import "./styles/global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
  },
  {
    path: "/me",
    element: <Main />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Background />
    <RouterProvider router={router} />
  </React.StrictMode>
);
