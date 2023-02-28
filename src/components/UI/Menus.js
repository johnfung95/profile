import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Menus = () => {
  const location = useLocation();

  return (
    <header>
      <nav>
        <ul>
          <li className="my-4 border-slate-700">
            <Link to={location.pathname === "/me" ? location.pathname : "/me"}>
              <img src="/logo192.png" alt="pic" className="w-16 h-16 m-auto" />
            </Link>
          </li>
          <li className="my-4">
            <NavLink
              to="/me"
              style={({ isActive, isPending }) => {
                return { color: isActive ? "red" : "inherit" };
              }}
            >
              <div className="text-center">
                <i
                  class="fa fa-address-card-o"
                  style={{ fontSize: "1.2rem" }}
                ></i>
                <p>About Me</p>
              </div>
            </NavLink>
          </li>
          <li className="my-4">
            <NavLink
              to="/exp"
              style={({ isActive, isPending }) => {
                return { color: isActive ? "red" : "inherit" };
              }}
            >
              <div className="text-center">
                <i class="fa fa-handshake-o" style={{ fontSize: "1.2rem" }}></i>
                <p>Exp</p>
              </div>
            </NavLink>
          </li>
          <li className="my-4">
            <NavLink
              to="/contacts"
              style={({ isActive, isPending }) => {
                return { color: isActive ? "red" : "inherit" };
              }}
            >
              <div className="text-center">
                <i
                  class="fa fa-phone-square"
                  style={{ fontSize: "1.2rem" }}
                ></i>
                <p>Contact</p>
              </div>
            </NavLink>
          </li>
          <li className="my-4">
            <NavLink
              to="/comments"
              style={({ isActive, isPending }) => {
                return { color: isActive ? "red" : "inherit" };
              }}
            >
              <div className="text-center">
                <i
                  class="fa fa-commenting-o"
                  style={{ fontSize: "1.2rem" }}
                ></i>
                <p>Comments</p>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menus;
