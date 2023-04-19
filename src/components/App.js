import React, { useState } from "react";
import Landing from "./Contents/Landing";
import ContentCard from "./Contents/ContentCard";

const App = () => {
  const [isEnterSite, setIsEnterSite] = useState(false);

  const enterSiteHandler = (newVal) => {
    setIsEnterSite(newVal);
  };

  return (
    <React.Fragment>
      {!isEnterSite && <Landing enterSite={enterSiteHandler} />}
      {isEnterSite && <ContentCard />}
    </React.Fragment>
  );
};

export default App;
