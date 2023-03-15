import React, { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import CommentCard from "./CommentCard";
import TitleStyle from "../UI/TitleStyle";
import { getComments } from "../../utils/firebase";

const Comments = () => {
  const [allComments, setAllComments] = useState(null);

  const getAllCommentsHandler = (newComments) => {
    setAllComments(newComments);
  };

  useEffect(() => {
    getComments().then((data) => {
      setAllComments(data);
    });
  }, []);

  return (
    <div className="mb-4 text-base">
      <TitleStyle title={"Comment Section"} />
      <div>
        <div>
          <CommentForm getAllComments={getAllCommentsHandler} />
        </div>
        <div className="mb-4 md:pl-4">
          {allComments &&
            allComments.map((comment) => {
              return (
                <CommentCard
                  id={comment.id}
                  name={comment.name}
                  comment={comment.comment}
                  createdAt={comment.creationDate.toString()}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Comments;
