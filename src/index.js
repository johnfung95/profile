import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Error from "./components/UI/Error";
import Aboutme from "./components/AboutmePage/Aboutme";
import Exp from "./components/ExpPage/Exp";
import Contacts from "./components/ContactsPage/Contacts";
import Comments from "./components/CommentsPage/Comments";
import "./styles/global.css";
import Landing from "./components/Landing";

const router = createBrowserRouter([
  { path: "/", element: <Landing />, errorElement: <Error /> },
  {
    path: "/me",
    element: <Aboutme />,
    errorElement: <Error />,
  },
  {
    path: "/exp",
    element: <Exp />,
    errorElement: <Error />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
    errorElement: <Error />,
  },
  {
    path: "/comments",
    element: <Comments />,
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
