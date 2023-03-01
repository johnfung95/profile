import React from "react";
import { motion } from "framer-motion";

const Landing = ({ enterSite }) => {
  const buttonHandler = (e) => {
    e.preventDefault();
    if (enterSite) {
      enterSite(true);
    }
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center md:flex-row">
      <motion.div
        className="w-3/5 flex justify-center md:w-full md:justify-end items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          default: {
            duration: 0.8,
            ease: [0, 0.85, 0.75, 1.03],
          },
          scale: {
            type: "spring",
            damping: 3,
            stiffness: 50,
            restDelta: 0.001,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 5,
          },
        }}
      >
        <img src="/logo512.png" alt="pic" className="w-3/4"></img>
      </motion.div>
      <div className="w-full text-center mt-8 animate-fadeIn md:pl-24 md:mt-0 md:text-left">
        <h1 className="motto ellipsis text-5xl md:text-7xl">My Motto....</h1>
        <div className="mt-8 md:pl-8">
          <p>My description</p>
          <p>Demo Paragraph Many Words.................</p>
          <p>Demo Paragraph Many Words.................</p>
          <button
            type="sumbit"
            className="half rounded-2xl italic w-32 h-8 mt-8"
            onClick={buttonHandler}
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
