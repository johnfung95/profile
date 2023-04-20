import React, { useContext } from "react";
import { FaAddressCard } from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";
import MenuContext from "../../context/menucontext";

const MenuList = ({ mobile = false, closeModal = null }) => {
  const ctx = useContext(MenuContext);

  const buttonHandler = (e) => {
    ctx.clickPage(e.target.dataset.name);
    if (mobile) {
      closeModal();
    }
  };

  const itemTranslation = mobile ? "" : "translate-x-3";

  return (
    <ul
      className={
        mobile
          ? "my-4"
          : "hidden md:block md:flex md:flex-col md:justify-around"
      }
    >
      <li
        className={`menuBtn hover:menuBtn ${
          ctx.currentPage === "aboutme"
            ? `text-orange-300 ${itemTranslation}`
            : ""
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
        className={`menuBtn hover:menuBtn ${
          ctx.currentPage === "exp" ? `text-orange-300 ${itemTranslation}` : ""
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
        className={`menuBtn hover:menuBtn ${
          ctx.currentPage === "contacts"
            ? `text-orange-300 ${itemTranslation}`
            : ""
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
        className={`menuBtn hover:menuBtn ${
          ctx.currentPage === "comments"
            ? `text-orange-300 ${itemTranslation}`
            : ""
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
  );
};

export default MenuList;
