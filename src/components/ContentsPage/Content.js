import React from "react";
import Profile from "../ProfilePage/Profile";
import Stage from "../UI/Stage";
import Menus from "../MenuPage/Menus";

const Content = () => {
  return (
    <React.Fragment>
      <main className="w-full h-full">
        <section className="background-black sm:flex-wrap md:w-full md:h-full md:flex md:justify-center md:items-center md:flex-nowrap">
          <div className="md:-mr-12">
            <Menus />
          </div>
          <div className="w-full h-full md:m-4 md:shadow-lg md:shadow-orange-300 md:w-4/5 md:h-4/5 md:grid md:grid-cols-3 md:grid-rows-1 md:grid-flow-col">
            <Profile />
            <Stage />
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Content;
