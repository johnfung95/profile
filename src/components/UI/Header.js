import React from "react";

const Header = () => {
  return (
    <nav className="w-full inline-flex">
      <div className="flex-1 p-1">icon</div>
      <div className="flex-1 p-1">
        <ul className="flex items-center justify-around">
          <li>
            <a href="/">Testing</a>
          </li>
          <li>
            <a href="/">still Testing</a>
          </li>
          <li>
            <a href="/">another Testing</a>
          </li>
          <li>
            <a href="/">last Testing</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
