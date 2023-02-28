import React from "react";
import ContentCard from "../UI/ContentCard";
import ProfileInfo from "./ProfileInfo";
import Description from "./Description";

const Aboutme = () => {
  return (
    <React.Fragment>
      <ContentCard>
        <div className="relative m-4 w-full h-full grid grid-rows-2 grid-cols-1 grid-flow-row shadow-2xl shadow-orange-900 md:w-4/5 md:h-4/5 md:grid-cols-2 md:grid-rows-1 md:grid-flow-col">
          <ProfileInfo />
          <Description />
        </div>
      </ContentCard>
    </React.Fragment>
  );
};

export default Aboutme;
