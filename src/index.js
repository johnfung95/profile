import React from "react";
import App from "./components/App";
import ReactDOM from "react-dom/client";
import Background from "./components/UI/Background";
import "./styles/global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Background />
    <App />
  </React.StrictMode>
);
