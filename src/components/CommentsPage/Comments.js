import React from "react";
import CommentForm from "./CommentForm";
import TitleStyle from "../UI/TitleStyle";
import CommentList from "./CommentList";
import SlideAnimate from "../UI/SlideAnimate";

const Comments = () => {
  return (
    <SlideAnimate>
      <TitleStyle title={"Comment Section"} />
      <CommentForm />
      <div className="border-b-2 border-y-zinc-800"></div>
      <CommentList />
    </SlideAnimate>
  );
};

export default Comments;
