import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import SlideAnimate from "../UI/SlideAnimate";
import TitleStyle from "../UI/TitleStyle";
import { fetchProjectsRecords } from "../../utils/firebase";

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    const getRecs = async () => {
      const data = await fetchProjectsRecords();
      setProjectsData(data);
    };

    getRecs();
  }, []);

  return (
    <SlideAnimate>
      <TitleStyle title="Personal Projects" />
      <br />
      <div className="grid md:grid-cols-2 gap-5 items-center justify-center h-full w-full">
        {projectsData.map((pj) => {
          return (
            <ProjectCard
              key={pj.name}
              name={pj.name}
              desc={pj.desc}
              url={pj.url}
              pic={pj.pic}
            />
          );
        })}
      </div>
    </SlideAnimate>
  );
};

export default Projects;
