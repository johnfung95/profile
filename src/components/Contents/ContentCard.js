import React, { useState } from "react";
import Profile from "../Profile/Profile";
import Menus from "../Menus/Menus";
import Stage from "../UI/Stage";

const ContentCard = () => {
  const [type, setType] = useState("aboutme");

  const changePageHandler = (newType) => {
    setType(newType);
  };

  return (
    <React.Fragment>
      <main className="w-full h-full">
        <section className="background-black sm:flex-wrap md:w-full md:h-full md:flex md:justify-center md:items-center md:flex-nowrap">
          <div className="md:-mr-12">
            <Menus clickPage={changePageHandler} currentPage={type} />
          </div>
          <div className="w-full h-full md:m-4 md:shadow-lg md:shadow-orange-300 md:w-4/5 md:h-4/5 md:grid md:grid-cols-3 md:grid-rows-1 md:grid-flow-col">
            <Profile />
            <Stage content={type} />
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default ContentCard;
