import React from "react";
import ContentCard from "../UI/ContentCard";
import Header from "../UI/Header";
import Background from "../UI/Background";
import ExpTimeline from "./ExpTimeline";

const Exp = () => {
  return (
    <React.Fragment>
      <Background />
      <Header />
      <ContentCard>
        <ExpTimeline />
      </ContentCard>
    </React.Fragment>
  );
};

export default Exp;
