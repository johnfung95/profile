import React from "react";
import ContentCard from "../UI/ContentCard";
import Header from "../UI/Header";
import ExpTimeline from "./ExpTimeline";

const Exp = () => {
  return (
    <React.Fragment>
      <Header />
      <ContentCard>
        <ExpTimeline />
      </ContentCard>
    </React.Fragment>
  );
};

export default Exp;
