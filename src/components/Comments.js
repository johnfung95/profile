import React from "react";
import ContentCard from "./UI/ContentCard";
import Header from "./UI/Header";
import Background from "./UI/Background";

const Comments = () => {
  return (
    <React.Fragment>
      <Background />
      <Header />
      <main className="h-full w-full">
        <ContentCard>
          <div>
            <p>Testing Comments ...</p>
          </div>
        </ContentCard>
      </main>
    </React.Fragment>
  );
};

export default Comments;
