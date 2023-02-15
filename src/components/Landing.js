import { Link } from "react-router-dom";
import React from "react";

const Landing = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center text-white md:flex-row flex-nowrap  ">
      <div className="w-full flex justify-center md:justify-end items-center">
        <img src="/logo512.png" alt="pic" className="w-3/4"></img>
      </div>
      <div className="w-full text-center mt-8 md:mt-0">
        <h1 className="motto ellipsis text-center text-5xl md:text-7xl">
          My Motto....
        </h1>
        <div className="mt-8">
          <p>My description</p>
          <p>Demo Paragraph Many Words.................</p>
          <p>Demo Paragraph Many Words.................</p>
          <div className="text-center">
            <button className="half rounded-2xl italic w-32 h-8 mt-8">
              <Link to="main">Enter</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
