import React from "react";
import TitleStyle from "../UI/TitleStyle";
import ExpCard from "./ExpCard";

const dummyData = [
  {
    toyear: "2017",
    fromyear: "2016",
    company: "ICO Limited",
    title: "Good Programmer",
    description: "Fucked up!!!!!",
    icon: null,
  },
  {
    toyear: "2016",
    fromyear: "2015",
    company: "Company",
    title: "Good Programmer",
    description: "Fucked up!!!!!",
    icon: null,
  },
  {
    toyear: "2015",
    fromyear: "2014",
    company: "Company",
    title: "Good Programmer",
    description: "Fucked up!!!!!",
    icon: null,
  },

  {
    toyear: "2014",
    fromyear: "2013",
    company: "Company",
    title: "Good Programmer",
    description: "Fucked up!!!!!",
    icon: null,
  },
];

const Work = () => {
  return (
    <React.Fragment>
      <TitleStyle title={"Working Experiences"} />
      <div className="my-8 grid grid-cols-1 place-items-center gap-4">
        {dummyData.map((data) => {
          return (
            <ExpCard
              toyear={data.toyear}
              fromyear={data.fromyear}
              company={data.company}
              title={data.title}
              description={data.description}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Work;
