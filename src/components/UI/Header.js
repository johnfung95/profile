import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  if (location.pathname !== "/main") {
  }

  return (
    <nav className="z-10 w-full inline-flex relative">
      <div className="flex-1 p-3 text-white">
        <Link to={location.pathname === "/main" ? location.pathname : "/main"}>
          <img src="/logo192.png" alt="pic" className="w-12"></img>
        </Link>
      </div>
      <div className="flex-1 p-3 text-white">
        <ul className="flex items-center justify-around">
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
