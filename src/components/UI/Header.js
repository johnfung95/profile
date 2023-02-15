import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <nav className="flex w-full relative pt-4">
      <div className="flex-1 p-3">
        <ul className="flex items-center justify-around">
          <li>
            <Link to={location.pathname === "/me" ? location.pathname : "/me"}>
              <img src="/logo192.png" alt="pic" className="w-16 h-16"></img>
            </Link>
          </li>
          <li>
            <Link to="new1">Testing</Link>
          </li>
          <li>
            <Link to="new2">still Testing</Link>
          </li>
          <li>
            <Link to="new3">another Testing</Link>
          </li>
          <li>
            <Link to="new4">last Testing</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
