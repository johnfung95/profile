import React, { useState, useEffect } from "react";
import TitleStyle from "../UI/TitleStyle";
import SkillCard from "./SkillCard";
import SlideAnimate from "../UI/SlideAnimate";
import SoftSkills from "./SoftSkills";
import { fetchSkillsRecords } from "../../utils/firebase";

const Skills = () => {
  const [skillData, setSkillData] = useState([]);

  useEffect(() => {
    const getRecs = async () => {
      const data = await fetchSkillsRecords();
      setSkillData(data);
    };

    getRecs();
  }, []);

  return (
    <SlideAnimate>
      <SoftSkills />
      <div>
        <TitleStyle title={"Technical Skills"} />
        <div className="mt-2 m-auto flex flex-col justify-center items-center text-center md:mt-8 md:grid md:grid-cols-2 md:place-items-center">
          {skillData.map((data) => {
            return (
              <SkillCard key={data.name} name={data.name} imgPath={data.img} />
            );
          })}
        </div>
      </div>
    </SlideAnimate>
  );
};

export default Skills;
