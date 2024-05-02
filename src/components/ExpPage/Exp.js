import React from "react";
import SlideAnimate from "../UI/SlideAnimate";
import WorkTimeLine from "./WorkTimeLine";
import TitleStyle from "../UI/TitleStyle";

const Exp = () => {
  return (
    <SlideAnimate>
      <TitleStyle title={"Working Experiences"} />
      <WorkTimeLine />
    </SlideAnimate>
  );
};

export default Exp;
