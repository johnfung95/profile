import React, { useContext } from "react";
import Aboutme from "../AboutmePage/Aboutme";
import Comments from "../CommentsPage/Comments";
import Contacts from "../ContactsPage/Contacts";
import Exp from "../ExpPage/Exp";
import MenuContext from "../../context/menucontext";

const Stage = () => {
  const ctx = useContext(MenuContext);

  let text = null;
  if (ctx.currentPage === "aboutme") {
    text = <Aboutme />;
  } else if (ctx.currentPage === "exp") {
    text = <Exp />;
  } else if (ctx.currentPage === "contacts") {
    text = <Contacts />;
  } else if (ctx.currentPage === "comments") {
    return (
      <div
        id="scrollableDiv"
        className="overflow-y-scroll scrollbar h-screen md:row-start-auto md:h-full md:w-full md:col-span-2"
      >
        <Comments />
      </div>
    );
  }

  return (
    <div
      id="stage"
      className="text-base md:p-2 md:h-full md:scrollbar md:overflow-y-auto md:row-start-auto md:col-span-2 md:mx-0"
    >
      {text}
    </div>
  );
};

export default Stage;
