import React from "react";
import TitleStyle from "../UI/TitleStyle";
import QuoteCard from "./QuoteCard";

const Quotes = () => {
  return (
    <React.Fragment>
      <TitleStyle title={"Quotes"} />
      <div className="h-100">
        <QuoteCard />
      </div>
    </React.Fragment>
  );
};

export default Quotes;
