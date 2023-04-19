import React from "react";
import TitleStyle from "../UI/TitleStyle";
import HobbyCard from "./HobbyCard";

const Hobbies = () => {
  return (
    <React.Fragment>
      <TitleStyle title={"Hobbies and Interests"} />
      <HobbyCard />
    </React.Fragment>
  );
};

export default Hobbies;
