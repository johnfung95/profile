import React from "react";

const SkillCard = ({ name, imgPath }) => {
  return (
    <div className="w-40 h-full my-4">
      <img className="w-full h-24 m-auto" src={imgPath} alt={name} />
      <p className="bold m-2 text-lg capitalize tracking-wide">{name}</p>
    </div>
  );
};

export default SkillCard;
