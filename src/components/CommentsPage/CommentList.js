import React, { useState, useEffect } from "react";
import CommentCard from "./CommentCard";
import { fetchMoreRecords } from "../../utils/firebase";
import { motion } from "framer-motion";
import InfiniteScroll from "react-infinite-scroll-component";

const CommentList = ({ firstComments, lastKey }) => {
  const [lastDocKey, setLastDocKey] = useState(0);
  const [moreComments, setMoreComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (firstComments) {
      setMoreComments(firstComments);
      setLastDocKey(lastKey);
    }
  }, [firstComments, lastKey]);

  const fetchMoreComments = () => {
    if (lastDocKey > 0) {
      setIsLoading(true);
      setTimeout(async () => {
        const { arr, newLastKey } = await fetchMoreRecords(lastDocKey);
        setMoreComments(moreComments.concat(arr));
        setLastDocKey(newLastKey);
        setIsLoading(false);
      }, 1000);
    }
  };

  if (moreComments) {
    return (
      <InfiniteScroll
        className="overflow-auto"
        dataLength={moreComments.length}
        next={fetchMoreComments}
        loader={isLoading && <div>Loading...</div>}
        endMessage={"No more."}
        hasMore={true}
        scrollableTarget="stage"
      >
        {moreComments.map((comment) => {
          return (
            <motion.div
              key={comment.id}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 10 }}
            >
              <CommentCard
                id={comment.id}
                avatar={comment.avatar}
                name={comment.name}
                comment={comment.comment}
                createdAt={comment.creationDate.toString()}
              />
            </motion.div>
          );
        })}
      </InfiniteScroll>
    );
  }
};

export default CommentList;
