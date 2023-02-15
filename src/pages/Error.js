import React from "react";
import ErrorPage from "../components/ErrorPage";
import Header from "../components/UI/Header";
import ContentCard from "../components/UI/ContentCard";

const Error = () => {
  return (
    <React.Fragment>
      <Header />
      <ContentCard>
        <ErrorPage />
      </ContentCard>
    </React.Fragment>
  );
};

export default Error;
