import React from "react";
import TitleStyle from "../UI/TitleStyle";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div>
      <TitleStyle title={"Skills"} />
      {/* <div className="flex justify-around">
        <div className="my-4 text-center flex flex-col justify-center items-center">
          <img className="w-10 md:w-16" src="logo192.png" alt="" />
          <p className="">React</p>
        </div>
        <div className="my-4 text-center flex flex-col contents-center items-center">
          <img className="w-10 md:w-16" src="logo192.png" alt="" />
          <p>React Native</p>
        </div>
      </div>
      <div className="flex justify-around">
        <div className="my-4 text-center flex flex-col justify-center items-center">
          <img className="w-10 md:w-16" src="logo192.png" alt="" />
          <p className="">React</p>
        </div>
        <div className="my-4 text-center flex flex-col contents-center items-center">
          <img className="w-10 md:w-16" src="logo192.png" alt="" />
          <p>React Native</p>
        </div>
      </div>
      <div className="flex justify-around">
        <div className="my-4 text-center flex flex-col justify-center items-center">
          <img className="w-10 md:w-16" src="logo192.png" alt="" />
          <p className="">React</p>
        </div>
        <div className="my-4 text-center flex flex-col contents-center items-center">
          <img className="w-10 md:w-16" src="logo192.png" alt="" />
          <p>React Native</p>
        </div>
      </div>
      <div className="flex justify-around">
        <div className="my-4 text-center flex flex-col justify-center items-center">
          <img className="w-10 md:w-16" src="logo192.png" alt="" />
          <p className="">React</p>
        </div>
        <div className="my-4 text-center flex flex-col contents-center items-center">
          <img className="w-10 md:w-16" src="logo192.png" alt="" />
          <p>React Native</p>
        </div>
      </div> */}
      <SkillCard />
    </div>
  );
};

export default Skills;
