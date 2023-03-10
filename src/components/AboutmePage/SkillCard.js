import React from "react";

const skillsData = [
  {
    name: "React",
    imgPath: "logo192.png",
  },
  {
    name: "React Native",
    imgPath: "logo192.png",
  },
  {
    name: "React",
    imgPath: "logo192.png",
  },
  {
    name: "React Native",
    imgPath: "logo192.png",
  },
];

const SkillCard = () => {
  const contents = skillsData.map((skill) => {
    return (
      <li className="flex flex-col justify-center items-center my-4 md:w-24">
        <img className="w-12 md:w-20" src={skill.imgPath} alt="" />
        <p>{skill.name}</p>
      </li>
    );
  });

  return <ul className="grid grid-cols-2 place-items-center">{contents}</ul>;
};

export default SkillCard;
