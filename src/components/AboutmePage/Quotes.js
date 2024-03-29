import React from "react";
import TitleStyle from "../UI/TitleStyle";
import QuoteCard from "./QuoteCard";

const Quotes = () => {
  return (
    <React.Fragment>
      <TitleStyle title={"Favorite Quotes"} />
      <QuoteCard />
    </React.Fragment>
  );
};

export default Quotes;
