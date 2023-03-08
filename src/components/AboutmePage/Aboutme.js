import React from "react";
import Description from "./Description";
import Skills from "./Skills";

const Aboutme = () => {
  console.log("aboutme");
  return (
    <div className="text-base mx-4 mb-2">
      <Description />
      <div className="border-b-2 border-y-zinc-800"></div>
      <Skills />
    </div>
  );
};

export default Aboutme;
