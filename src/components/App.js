import React, { useState } from "react";
import Landing from "./ContentsPage/Landing";
import Content from "./ContentsPage/Content";

const App = () => {
  const [isEnterSite, setIsEnterSite] = useState(false);

  const enterSiteHandler = (newVal) => {
    setIsEnterSite(newVal);
  };

  return (
    <React.Fragment>
      {!isEnterSite && <Landing enterSite={enterSiteHandler} />}
      {isEnterSite && <Content />}
    </React.Fragment>
  );
};

export default App;
