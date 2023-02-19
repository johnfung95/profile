import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Background from "./Background";

const Header = () => {
  const location = useLocation();

  return (
    <React.Fragment>
      <Background />
      <nav className="flex w-full absolute pt-4">
        <div className="flex-1 p-3">
          <ul className="flex items-center justify-around">
            <li>
              <Link
                to={location.pathname === "/me" ? location.pathname : "/me"}
              >
                <img src="/logo192.png" alt="pic" className="w-16 h-16"></img>
              </Link>
            </li>
            <li>
              <NavLink
                to="/me"
                style={({ isActive, isPending }) => {
                  return { color: isActive ? "red" : "inherit" };
                }}
              >
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/exp"
                style={({ isActive, isPending }) => {
                  return { color: isActive ? "red" : "inherit" };
                }}
              >
                Exp
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacts"
                style={({ isActive, isPending }) => {
                  return { color: isActive ? "red" : "inherit" };
                }}
              >
                Contacts
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/comments"
                style={({ isActive, isPending }) => {
                  return { color: isActive ? "red" : "inherit" };
                }}
              >
                Comments
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
