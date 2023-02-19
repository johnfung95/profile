import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";
import Background from "./UI/Background";

const Landing = () => {
  return (
    <React.Fragment>
      <Background />
      <div className="flex flex-col items-center justify-center md:flex-row flex-nowrap  ">
        <motion.div
          className="w-full flex justify-center md:justify-end items-center"
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
        <div className="w-full pl-24 mt-8 animate-fadeIn md:mt-0">
          <h1 className="motto ellipsis text-5xl md:text-7xl">My Motto....</h1>
          <div className="pl-8 mt-8">
            <p>My description</p>
            <p>Demo Paragraph Many Words.................</p>
            <p>Demo Paragraph Many Words.................</p>
            <Link to="me">
              <button className="half rounded-2xl italic w-32 h-8 mt-8">
                Enter
              </button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Landing;
