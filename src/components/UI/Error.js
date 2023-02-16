import React from "react";
import ErrorPage from "../ErrorPage/ErrorPage";
import Header from "./Header";
import ContentCard from "./ContentCard";

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
