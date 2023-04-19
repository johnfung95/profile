import React from "react";
import Skills from "./Skills";
import Work from "./Work";
import SlideAnimate from "../UI/SlideAnimate";

const Exp = () => {
  return (
    <SlideAnimate>
      <Work />
      <div className="border-b-2 border-y-zinc-800"></div>
      <Skills />
    </SlideAnimate>
  );
};

export default Exp;
