import React from "react";
import Description from "./Description";
import Quotes from "./Quotes";
import Hobbies from "./Hobbies";
import SlideAnimate from "../UI/SlideAnimate";

const Aboutme = () => {
  return (
    <SlideAnimate>
      <Description />
      <div className="border-b-2 border-y-zinc-800"></div>
      <Quotes />
      <div className="border-b-2 border-y-zinc-800"></div>
      <Hobbies />
    </SlideAnimate>
  );
};

export default Aboutme;
