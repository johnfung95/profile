import React from "react";
import ErrorPage from "../ErrorPage/ErrorPage";
import ContentCard from "./ContentCard";

const Error = () => {
  return (
    <React.Fragment>
      <ContentCard>
        <ErrorPage />
      </ContentCard>
    </React.Fragment>
  );
};

export default Error;
