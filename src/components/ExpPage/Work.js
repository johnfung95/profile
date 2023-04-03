import React, { useState, useEffect } from "react";
import TitleStyle from "../UI/TitleStyle";
import ExpCard from "./ExpCard";
import { fetchWorkRecords } from "../../utils/firebase";

const Work = () => {
  const [expData, setExpData] = useState([]);

  useEffect(() => {
    const getRecs = async () => {
      const data = await fetchWorkRecords();
      setExpData(data);
    };

    getRecs();
  }, []);

  return (
    <React.Fragment>
      <TitleStyle title={"Working Experiences"} />
      <div className="my-8 grid grid-cols-1 place-items-center gap-4">
        {expData.map((data) => {
          return (
            <ExpCard
              key={data.company}
              toyear={data.toyear}
              fromyear={data.fromyear}
              company={data.company}
              secon={data.secon}
              secon_company={data["secon_company"]}
              title={data.title}
              imgPath={data.img}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Work;
