import React, { useState } from "react";
import Aboutme from "./AboutmePage/Aboutme";
import Landing from "./Landing";
import ContentCard from "./UI/ContentCard";

const App = () => {
  const [isEnterSite, setIsEnterSite] = useState(false);

  const enterSiteHandler = () => {
    setIsEnterSite(true);
  };

  return (
    <React.Fragment>
      {!isEnterSite && <Landing enter={enterSiteHandler} />}
      {isEnterSite && <ContentCard /> && <Aboutme />}
    </React.Fragment>
  );
};

export default App;
