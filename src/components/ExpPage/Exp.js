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
      <main className="h-full w-full">
        <ContentCard>
          <ExpTimeline />
        </ContentCard>
      </main>
    </React.Fragment>
  );
};

export default Exp;
