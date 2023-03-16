import React, { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import CommentCard from "./CommentCard";
import TitleStyle from "../UI/TitleStyle";
import { fetchInitialRecords, fetchMoreRecords } from "../../utils/firebase";
import InfiniteScroll from "react-infinite-scroll-component";

const Comments = () => {
  const [comments, setComments] = useState(null);
  const [lastDocKey, setLastDocKey] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchFirstBatchComments();
  }, []);

  const fetchFirstBatchComments = async () => {
    const { arr, lastKey } = await fetchInitialRecords();
    setComments(arr);
    setLastDocKey(lastKey);
  };

  const fetchMoreComments = () => {
    if (lastDocKey > 0) {
      setIsLoading(true);
      setTimeout(async () => {
        const { arr, newLastKey } = await fetchMoreRecords(lastDocKey);
        console.log(arr, newLastKey);
        setComments(comments.concat(arr));
        setLastDocKey(newLastKey);
        setIsLoading(false);
      }, 1000);
    }
  };

  const getCommentsHandler = (newComments) => {
    setComments(newComments);
  };

  return (
    <div className="mb-4 text-base">
      <TitleStyle title={"Comment Section"} />
      <div>
        <div>
          <CommentForm getComments={getCommentsHandler} />
        </div>
        {comments && (
          <InfiniteScroll
            className="overflow-auto"
            dataLength={comments.length}
            next={fetchMoreComments}
            loader={isLoading && <div>Loading...</div>}
            endMessage={"No more."}
            hasMore={true}
            scrollableTarget="stage"
          >
            {comments.map((comment) => {
              return (
                <CommentCard
                  key={comment.id}
                  avatar={comment.avatar}
                  name={comment.name}
                  comment={comment.comment}
                  createdAt={comment.creationDate.toString()}
                />
              );
            })}
          </InfiniteScroll>
        )}
      </div>
    </div>
  );
};

export default Comments;
