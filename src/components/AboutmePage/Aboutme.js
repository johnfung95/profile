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
        <main>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Hello World!")
                .pauseFor(2500)
                .deleteAll()
                .typeString("Another Text!")
                .pauseFor(2500)
                .deleteAll()
                .typeString("Howdy!")
                .pauseFor(2500)
                .deleteAll()
                .typeString("Whats up")
                .pauseFor(2500)
                .deleteAll()
                .start();
            }}
            options={{ autoStart: true, loop: true }}
          />
        </main>
      </ContentCard>
    </React.Fragment>
  );
};

export default Aboutme;
