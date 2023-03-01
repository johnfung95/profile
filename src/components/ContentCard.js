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
      <main className="md:w-screen h-screen">
        <section className="background-black sm:flex-wrap md:w-full h-full flex justify-center items-center flex-nowrap">
          <div className="-mr-12">
            <Menus clickPage={changePageHandler} currentPage={type} />
          </div>
          <div className="relative m-4 w-full h-full grid grid-rows-2 grid-cols-1 grid-flow-row shadow-lg shadow-orange-300 md:w-4/5 md:h-4/5 md:grid-cols-2 md:grid-rows-1 md:grid-flow-col">
            <Profile />
            <Stage content={type} />
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default ContentCard;
