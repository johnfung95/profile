import React from "react";
import Quotes from "./Quotes";
import Work from "./Work";

const Exp = () => {
  return (
    <div className="relative">
      <Work />
      <div className="border-b-2 border-y-zinc-800"></div>
      <Quotes />
    </div>
  );
};

export default Exp;
