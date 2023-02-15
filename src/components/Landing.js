import React from "react";

const Landing = () => {
  return (
    <div className="h-full w-full flex flex-nowrap items-center justify-center text-white relative">
      <div className="w-full flex justify-end items-center">
        <img src="/logo512.png" alt="pic" className="w-full sticky"></img>
      </div>
      <div className="w-full text-left pl-16">
        <h1 className="motto ellipsis">My Motto....</h1>
        <div className="pl-16">
          <p>My description</p>
          <p>Demo Paragraph Many Words.................</p>
          <p>Demo Paragraph Many Words.................</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
