import React from "react";

const Header = () => {
  return (
    <nav className="z-10 w-full inline-flex sticky">
      <div className="flex-1 p-3 text-white ">icon</div>
      <div className="flex-1 p-3 text-white">
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
