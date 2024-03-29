import React, { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import TitleStyle from "../UI/TitleStyle";
import CommentList from "./CommentList";
import SlideAnimate from "../UI/SlideAnimate";
import { fetchInitialRecords } from "../../utils/firebase";

const Comments = () => {
  const [firstComments, setFirstComments] = useState([]);
  const [firstLastDocKey, setFirstLastDocKey] = useState(null);

  const updateLastCommentHandler = async () => {
    const { arr, lastKey } = await fetchInitialRecords();
    setFirstComments(arr);
    setFirstLastDocKey(lastKey);
  };

  useEffect(() => {
    fetchFirstBatchComments();
  }, []);

  const fetchFirstBatchComments = async () => {
    const { arr, lastKey } = await fetchInitialRecords();
    setFirstComments(arr);
    setFirstLastDocKey(lastKey);
  };

  return (
    <SlideAnimate>
      <TitleStyle title={"Comment Section"} />
      <CommentForm updateLastComment={updateLastCommentHandler} />
      <div className="border-b-2 border-y-zinc-800"></div>
      <CommentList firstComments={firstComments} lastKey={firstLastDocKey} />
    </SlideAnimate>
  );
};

export default Comments;
