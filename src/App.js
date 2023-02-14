import React from "react";
import Landing from "./components/Landing";
import Header from "./components/Header";
import Background from "./components/Background";

function App() {
  return (
    <main className="h-screen w-full">
      <Header />
      <Landing />
      <Background />
    </main>
  );
}

export default App;
