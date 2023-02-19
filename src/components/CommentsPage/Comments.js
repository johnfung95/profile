import React from "react";
import ContentCard from "../UI/ContentCard";
import Header from "../UI/Header";
import Background from "../UI/Background";

const Comments = () => {
  return (
    <React.Fragment>
      <Background />
      <Header />
      <ContentCard>
        <main>
          <div>
            <p>Testing Comments ...</p>
          </div>
        </main>
      </ContentCard>
    </React.Fragment>
  );
};

export default Comments;
