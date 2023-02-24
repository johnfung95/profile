import React from "react";
import ContentCard from "../UI/ContentCard";
import Typewriter from "typewriter-effect";

const Aboutme = () => {
  return (
    <React.Fragment>
      <ContentCard>
        <div className="w-3/5 h-3/5 grid grid-flow-col shadow-2xl shadow-orange-900">
          <div className="text-center m-auto">
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
          <div className="m-auto">
            <div className="my-8">
              <h1 className="text-3xl my-2">Description of what I do ...</h1>
              <p>Blah blah blah...</p>
              <p>Blah blah blah...</p>
            </div>
            <div className="my-8">
              <h1 className="text-3xl my-2">My Hobbies ...</h1>
              <p>Blah blah blah...</p>
              <p>Blah blah blah...</p>
            </div>
          </div>
        </div>
      </ContentCard>
    </React.Fragment>
  );
};

export default Aboutme;
