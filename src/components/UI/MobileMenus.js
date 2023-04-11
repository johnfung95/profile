import React, { useState } from "react";
import { FaAddressCard } from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";
import Profile from "../Profile";

const MobileMenus = ({ clickPage, currentPage, closeModal }) => {
  const buttonHandler = (e) => {
    clickPage(e.target.dataset.name);
    closeModal();
  };

  return (
    <div className="fixed w-3/4 h-full bg-slate-800 z-20 opacity-100">
      <div>
        <img
          className="w-44 h-44 bg-slate-900 mx-auto border-none rounded-full contain enlarge md:my-8"
          src="/profile-pic.png"
          alt="my logo"
        />
      </div>
      <ul>
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
    </div>
  );
};

export default MobileMenus;
