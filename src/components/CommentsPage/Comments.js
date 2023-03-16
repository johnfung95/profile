import React, { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import CommentCard from "./CommentCard";
import TitleStyle from "../UI/TitleStyle";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchEightRecords, fetchMoreRecords } from "../../utils/firebase";

const Comments = () => {
  const [comments, setComments] = useState(null);
  const [lastDocKey, setLastDocKey] = useState(null);

  const getCommentsHandler = (newComments) => {
    setComments(newComments);
  };

  const fetchMoreComments = async () => {
    console.log(lastDocKey);
    if (lastDocKey.length > 0) {
      const { arr, newLastKey } = await fetchMoreRecords(lastDocKey);
      console.log(arr, newLastKey);
      setComments(comments.concat(arr));
      setLastDocKey(newLastKey);
    }
  };

  const fetchFirstBatchComments = async () => {
    const { arr, lastKey } = await fetchEightRecords();
    setComments(arr);
    setLastDocKey(lastKey);
  };

  useEffect(() => {
    fetchFirstBatchComments();
  }, []);

  return (
    <div className="mb-4 text-base">
      <TitleStyle title={"Comment Section"} />
      <div>
        <div>
          <CommentForm getComments={getCommentsHandler} />
        </div>
        {comments && (
          <InfiniteScroll
            className="mb-4 md:pl-4"
            dataLength={comments.length}
            next={async () => {
              const { arr, newLastKey } = await fetchMoreRecords(lastDocKey);
              console.log(arr, newLastKey);
              setComments(comments.concat(arr));
              setLastDocKey(newLastKey);
            }}
            hasMore={true}
            loader={<p>Loading...</p>}
          >
            {comments.length > 0 &&
              comments.map((comment) => (
                <CommentCard
                  key={comment.id}
                  avatar={comment.avatar}
                  name={comment.name}
                  comment={comment.comment}
                  createdAt={comment.creationDate.toString()}
                />
              ))}
          </InfiniteScroll>
        )}
      </div>
    </div>
  );
};

export default Comments;
