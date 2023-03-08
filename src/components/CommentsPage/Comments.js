import React from "react";
import CommentForm from "./CommentForm";

const Comments = () => {
  return (
    <div className="mb-4 text-base">
      <h1 className="md:pl-4">Feel Free to leave me any comment~</h1>
      <div>
        <div>
          <CommentForm />
        </div>
        <div className="mb-4 md:pl-4">
          <h1>Existing Comments Section</h1>
          <p>Contents...</p>
          <p>Contents...</p>
          <p>Contents...</p>
          <p>Contents...</p>
          <p>Contents...</p>
          <p>Contents...</p>
          <p>Contents...</p>
          <p>Contents...</p>
          <p>Contents...</p>
          <p>Contents...</p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
