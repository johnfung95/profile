import React from "react";

const Menus = ({ clickPage, currentPage }) => {
  return (
    <header className="p-2">
      <nav>
        <ul>
          <li className="my-4">
            <img src="/logo192.png" alt="pic" className="w-16 h-16 m-auto" />
          </li>
          <li
            className={`my-4 hover:text-orange-300 ${
              currentPage === "aboutme" ? "text-orange-300" : ""
            }`}
          >
            <div
              className="text-center hover:cursor-pointer"
              onClick={clickPage}
            >
              <i
                class="fa fa-address-card-o"
                style={{
                  fontSize: "1.2rem",
                }}
              ></i>
              <p>About Me</p>
            </div>
          </li>
          <li
            className={`my-4 hover:text-orange-300 ${
              currentPage === "exp" ? "text-orange-300" : ""
            }`}
          >
            <div className="text-center hover:cursor-pointer">
              <i class="fa fa-handshake-o" style={{ fontSize: "1.2rem" }}></i>
              <p>Exp</p>
            </div>
          </li>
          <li
            className={`my-4 hover:text-orange-300 ${
              currentPage === "contacts" ? "text-orange-300" : ""
            }`}
          >
            <div className="text-center hover:cursor-pointer">
              <i class="fa fa-phone-square" style={{ fontSize: "1.2rem" }}></i>
              <p>Contacts</p>
            </div>
          </li>
          <li
            className={`my-4 hover:text-orange-300 ${
              currentPage === "comments" ? "text-orange-300" : ""
            }`}
          >
            <div className="text-center hover:cursor-pointer">
              <i class="fa fa-commenting-o" style={{ fontSize: "1.2rem" }}></i>
              <p>Comments</p>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menus;
