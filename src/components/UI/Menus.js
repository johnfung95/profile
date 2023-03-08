import React from "react";

const Menus = ({ clickPage, currentPage }) => {
  const buttonHandler = (e) => {
    console.log(e.target.dataset.name);
    clickPage(e.target.dataset.name);
  };

  return (
    <header className="p-2 hidden md:block">
      <nav>
        <ul className="md:flex md:flex-col">
          <li
            className={`md:p-2 md:rounded-full md:bg-zinc-900 z-10 my-4 hover:text-orange-300 ${
              currentPage === "aboutme" ? "text-orange-300" : ""
            }`}
          >
            <div
              className="text-center hover:cursor-pointer"
              data-name="aboutme"
              onClick={buttonHandler}
            >
              <i
                className="fa fa-address-card-o"
                style={{
                  fontSize: "1.2rem",
                }}
                data-name="aboutme"
                onClick={buttonHandler}
              ></i>
              <p data-name="aboutme" onClick={buttonHandler}>
                About Me
              </p>
            </div>
          </li>
          <li
            className={`md:p-2 md:rounded-full md:bg-zinc-900 my-4 hover:text-orange-300 ${
              currentPage === "exp" ? "text-orange-300" : ""
            }`}
          >
            <div
              className="text-center hover:cursor-pointer"
              data-name="exp"
              onClick={buttonHandler}
            >
              <i
                className="fa fa-handshake-o"
                style={{ fontSize: "1.2rem" }}
                data-name="exp"
                onClick={buttonHandler}
              ></i>
              <p data-name="exp" onClick={buttonHandler}>
                Exp
              </p>
            </div>
          </li>
          <li
            className={`md:p-2 md:rounded-full md:bg-zinc-900 my-4 hover:text-orange-300 ${
              currentPage === "contacts" ? "text-orange-300" : ""
            }`}
          >
            <div
              className="text-center hover:cursor-pointer"
              data-name="contacts"
              onClick={buttonHandler}
            >
              <i
                className="fa fa-phone-square"
                style={{ fontSize: "1.2rem" }}
                data-name="contacts"
                onClick={buttonHandler}
              ></i>
              <p data-name="contacts" onClick={buttonHandler}>
                Contacts
              </p>
            </div>
          </li>
          <li
            className={`md:p-2 md:rounded-full md:bg-zinc-900 my-4 hover:text-orange-300 ${
              currentPage === "comments" ? "text-orange-300" : ""
            }`}
          >
            <div
              className="text-center hover:cursor-pointer"
              data-name="comments"
              onClick={buttonHandler}
            >
              <i
                className="fa fa-commenting-o menubtn"
                style={{ fontSize: "1.2rem" }}
                data-name="comments"
                onClick={buttonHandler}
              ></i>
              <p data-name="comments" onClick={buttonHandler}>
                Comments
              </p>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menus;
