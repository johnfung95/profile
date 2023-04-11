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
    <header className="p-2">
      <nav className="">
        <ul className="hidden md:block md:flex md:flex-col md:justify-around">
          <li
            className={`menuBtn md:p-2 md:rounded-r-lg md:bg-zinc-900 z-10 my-2 hover:text-orange-300 hover:menuBtn ${
              currentPage === "aboutme" ? "text-orange-300 translate-x-3" : ""
            }`}
          >
            <div className="text-center hover:cursor-pointer">
              <FaAddressCard
                onClick={buttonHandler}
                data-name="aboutme"
                style={{
                  width: "100%",
                  margin: "auto",
                  fontSize: "1.3rem",
                }}
              ></FaAddressCard>
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
            <div className="text-center hover:cursor-pointer">
              <MdOutlineWorkOutline
                onClick={buttonHandler}
                data-name="exp"
                style={{ width: "100%", margin: "auto", fontSize: "1.3rem" }}
              ></MdOutlineWorkOutline>
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
            <div className="text-center hover:cursor-pointer">
              <FiPhone
                onClick={buttonHandler}
                data-name="contacts"
                style={{ width: "100%", margin: "auto", fontSize: "1.3rem" }}
              ></FiPhone>

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
            <div className="text-center hover:cursor-pointer">
              <AiOutlineMessage
                onClick={buttonHandler}
                data-name="comments"
                style={{ width: "100%", margin: "auto", fontSize: "1.3rem" }}
              ></AiOutlineMessage>
              <p
                className={{ width: "100%" }}
                data-name="comments"
                onClick={buttonHandler}
              >
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
