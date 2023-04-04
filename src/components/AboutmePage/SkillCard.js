import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ name, imgPath }) => {
  return (
    <div className="w-48 h-full my-2">
      <motion.div
        className="w-full h-fit bg-zinc-700 rounded-lg"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{
          ease: "linear",
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <img className="w-fit h-24 p-2 m-auto " src={imgPath} alt={name} />
      </motion.div>
      <p className="bold m-2 text-lg capitalize tracking-wide">{name}</p>
    </div>
  );
};

export default SkillCard;
