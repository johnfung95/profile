import React from "react";

const SkillCard = ({ name, imgPath }) => {
  return (
    <div className="w-48 h-full my-4">
      <img
        className="w-fit h-24 p-2 bg-zinc-700 m-auto rounded-lg"
        src={imgPath}
        alt={name}
      />
      <p className="bold m-2 text-lg capitalize tracking-wide">{name}</p>
    </div>
  );
};

export default SkillCard;
