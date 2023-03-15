import React from "react";
import CommentForm from "./CommentForm";
import { useState, useEffect } from "react";
import { useCallback } from "react";
import CommentCard from "./CommentCard";
import { getComments } from "../../utils/firebase";

const Comments = () => {
  const [allComments, setAllComments] = useState(null);

  const getDataFromFirestore = useCallback(async () => {
    const comments = await getComments();
    setAllComments(comments);
  }, []);

  useEffect(() => {
    getDataFromFirestore();
  }, [getDataFromFirestore]);

  return (
    <div className="mb-4 text-base">
      <h1 className="md:pl-4">Feel Free to leave me any comment~</h1>
      <div>
        <div>
          <CommentForm />
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
