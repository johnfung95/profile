import React from "react";
import TitleStyle from "../UI/TitleStyle";
import ExpCard from "./ExpCard";

const dummyData = [
  {
    year: "2017",
    company: "ICO Limited",
    title: "Good Programmer",
    description: "Fucked up!!!!!",
    icon: null,
  },
  {
    year: "2016",
    company: "Company",
    title: "Good Programmer",
    description: "Fucked up!!!!!",
    icon: null,
  },
  {
    year: "2015",
    company: "Company",
    title: "Good Programmer",
    description: "Fucked up!!!!!",
    icon: null,
  },

  {
    year: "2014",
    company: "Company",
    title: "Good Programmer",
    description: "Fucked up!!!!!",
    icon: null,
  },
];
const Exp = () => {
  return (
    <div className="relative">
      <TitleStyle title={"Working Experiences"} />
      <div className="my-8 grid grid-cols-1 place-items-center gap-4">
        {dummyData.map((data) => {
          return (
            <ExpCard
              year={data.year}
              company={data.company}
              title={data.title}
              description={data.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Exp;
