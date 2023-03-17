import React from "react";
import { FaAddressCard } from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";

const Menus = ({ clickPage, currentPage }) => {
  const buttonHandler = (e) => {
    clickPage(e.target.dataset.name);
  };

  return (
    <header className="p-2 hidden md:block">
      <nav>
        <ul className="md:flex md:flex-col justify-around">
          <li
            className={`menuBtn md:p-2 md:rounded-r-lg md:bg-zinc-900 z-10 my-2 hover:text-orange-300 hover:menuBtn ${
              currentPage === "aboutme" ? "text-orange-300 translate-x-3" : ""
            }`}
          >
            <div
              className="text-center hover:cursor-pointer"
              data-name="aboutme"
              onClick={buttonHandler}
            >
              <div onClick={buttonHandler} data-name="aboutme">
                <FaAddressCard
                  style={{
                    margin: "auto",
                    fontSize: "1.3rem",
                  }}
                ></FaAddressCard>
              </div>

              <p data-name="aboutme" onClick={buttonHandler}>
                About Me
              </p>
            </div>
          </li>
          <li
            className={`menuBtn md:p-2 md:rounded-r-lg md:bg-zinc-900 my-2 hover:text-orange-300 hover:menuBtn ${
              currentPage === "exp" ? "text-orange-300 translate-x-3" : ""
            }`}
          >
            <div
              className="text-center hover:cursor-pointer"
              data-name="exp"
              onClick={buttonHandler}
            >
              <div onClick={buttonHandler} data-name="exp">
                <MdOutlineWorkOutline
                  style={{ margin: "auto", fontSize: "1.3rem" }}
                ></MdOutlineWorkOutline>
              </div>
              <p data-name="exp" onClick={buttonHandler}>
                Experience
              </p>
            </div>
          </li>
          <li
            className={`menuBtn md:p-2 md:rounded-r-lg md:bg-zinc-900 my-2 hover:text-orange-300 hover:menuBtn ${
              currentPage === "contacts" ? "text-orange-300 translate-x-3" : ""
            }`}
          >
            <div
              className="text-center hover:cursor-pointer"
              data-name="contacts"
              onClick={buttonHandler}
            >
              <div onClick={buttonHandler} data-name="contacts">
                <FiPhone
                  style={{ margin: "auto", fontSize: "1.3rem" }}
                ></FiPhone>
              </div>
              <p data-name="contacts" onClick={buttonHandler}>
                Contacts
              </p>
            </div>
          </li>
          <li
            className={`menuBtn md:p-2 md:rounded-r-lg md:bg-zinc-900 my-2 hover:text-orange-300 hover:menuBtn ${
              currentPage === "comments" ? "text-orange-300 translate-x-3" : ""
            }`}
          >
            <div
              className="text-center hover:cursor-pointer"
              data-name="comments"
              onClick={buttonHandler}
            >
              <div onClick={buttonHandler} data-name="comments">
                <AiOutlineMessage
                  style={{ margin: "auto", fontSize: "1.3rem" }}
                ></AiOutlineMessage>
              </div>
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
