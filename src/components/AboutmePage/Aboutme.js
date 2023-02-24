import React from "react";
import ContentCard from "../UI/ContentCard";
import Header from "../UI/Header";
import Background from "../UI/Background";
import Typewriter from "typewriter-effect";

const Aboutme = () => {
  return (
    <React.Fragment>
      <Background />
      <Header />
      <ContentCard>
        <main className="w-3/5 h-3/5 grid grid-columns-4 grid-flow-col shadow-2xl shadow-orange-900 my-8">
          <div className="text-center m-auto col-start-1">
            <div className="w-full">
              <img
                className="w-36 h-36 mx-auto my-8 border-4 border-white-500 rounded-full contain"
                src="/chick.png"
                alt="my logo"
              />
            </div>
            <div className="w-full">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Programmer")
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString("Software Engineer")
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString("Tech Enthusiast")
                    .pauseFor(2500)
                    .deleteAll()
                    .start();
                }}
                options={{ autoStart: true, loop: true }}
              />
            </div>
          </div>
          <div className="m-auto ">
            <h1 className="text-3xl my-2">Description of what I do ...</h1>
            <div>
              <p>Blah blah blah...</p>
              <p>Blah blah blah...</p>
            </div>
          </div>
        </main>
      </ContentCard>
    </React.Fragment>
  );
};

export default Aboutme;
