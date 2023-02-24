import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <React.Fragment>
      <header>
        <nav>
          <ul>
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
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Header;
