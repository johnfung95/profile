import React, { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import CommentCard from "./CommentCard";
import TitleStyle from "../UI/TitleStyle";
import { fetchInitialRecords, fetchMoreRecords } from "../../utils/firebase";
import InfiniteScroll from "react-infinite-scroll-component";
import CommentList from "./CommentList";

const Comments = () => {
  return (
    <div className="mb-4 text-base">
      <TitleStyle title={"Comment Section"} />
      <CommentForm />
      <div className="border-b-2 border-y-zinc-800"></div>
      <CommentList />
    </div>
  );
};

export default Comments;
