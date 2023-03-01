import React, { useState } from "react";
import Landing from "./UI/Landing";
import ContentCard from "./ContentCard";

const App = () => {
  const [isEnterSite, setIsEnterSite] = useState(false);

  const enterSiteHandler = (newVal) => {
    console.log(newVal);
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
