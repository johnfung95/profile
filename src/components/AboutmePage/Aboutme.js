import React from "react";
import Description from "./Description";
import Quotes from "./Quotes";
import Hobbies from "./Hobbies";
import SlideAnimate from "../UI/SlideAnimate";

const Aboutme = () => {
  return (
    <SlideAnimate
      className="text-base mx-4 mb-2"
      layout
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        default: {
          ease: "easeOut",
          duration: 0.8,
        },
      }}
    >
      <Description />
      <div className="border-b-2 border-y-zinc-800"></div>
      <Quotes />
      <div className="border-b-2 border-y-zinc-800"></div>
      <Hobbies />
    </SlideAnimate>
  );
};

export default Aboutme;
