import React, { useState } from "react";
import Profile from "./Profile";
import Menus from "./UI/Menus";
import Stage from "./UI/Stage";

const ContentCard = ({ children }) => {
  const [type, setType] = useState("aboutme");

  const changePageHandler = (newType) => {
    setType(newType);
  };

  return (
    <React.Fragment>
      <main className="w-screen h-screen">
        <section className="background-black sm:flex-wrap md:w-full md:h-full md:flex md:justify-center md:items-center md:flex-nowrap">
          <div className="-mr-12">
            <Menus clickPage={changePageHandler} currentPage={type} />
          </div>
          <div className="w-full h-full my-4 md:m-4 md:shadow-lg md:shadow-orange-300 md:w-4/5 md:h-4/5 md:grid md:grid-cols-3 md:grid-rows-1 md:grid-flow-col">
            <Profile />
            <Stage content={type} />
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default ContentCard;
