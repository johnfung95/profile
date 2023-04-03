import React, { useState, useEffect } from "react";
import TitleStyle from "../UI/TitleStyle";
import SkillCard from "./SkillCard";
import { fetchSkillsRecords } from "../../utils/firebase";

const Skills = () => {
  const [skillData, setSkillData] = useState([]);

  useEffect(() => {
    const getRecs = async () => {
      const data = await fetchSkillsRecords();
      console.log(data);
      setSkillData(data);
    };

    getRecs();
  }, []);

  return (
    <div>
      <TitleStyle title={"Skills"} />
      <div className="mt-8 m-auto place-items-center text-center grid grid-cols-2">
        {skillData.map((data) => {
          return <SkillCard name={data.name} imgPath={data.img} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
