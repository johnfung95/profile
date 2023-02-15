import React, { useState } from "react";
import Landing from "./components/Landing";
import Header from "./components/Header";
import Background from "./components/Background";

function App() {
  const [isEnter, setEnter] = useState(false);

  const enterSiteHandler = () => {
    setEnter(true);
  };

  return (
    <main className="h-screen w-full">
      {isEnter && <Header />}
      {!isEnter && <Landing enterSite={enterSiteHandler} />}
      <Background />
    </main>
  );
}

export default App;
