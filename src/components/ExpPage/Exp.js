import React from "react";
import Quotes from "./Quotes";
import Work from "./Work";
import SlideAnimate from "../UI/SlideAnimate";

const Exp = () => {
  return (
    <SlideAnimate>
      <Work />
      <div className="border-b-2 border-y-zinc-800"></div>
      <Quotes />
    </SlideAnimate>
  );
};

export default Exp;
