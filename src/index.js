import React from "react";
import App from "./components/App";
import ReactDOM from "react-dom/client";
import Background from "./components/UI/Background";
import { MenuContextProvider } from "./context/menucontext";
import "./styles/global.css";
import "./styles/menus.css";
import "./styles/btns.css";
import "./styles/contents.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Background />
    <MenuContextProvider>
      <App />
    </MenuContextProvider>
  </React.StrictMode>
);
