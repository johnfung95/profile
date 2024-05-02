import React from "react";

const ProjectCard = ({ name, desc, url, pic }) => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <img
        alt={name}
        src={pic}
        className="h-32 w-40 enlarge md:h-48 md:w-60 hover:cursor-zoom-in"
      />
      <h1>{name}</h1>
      <a href={url} className="contact text-sm hover: cursor">
        {url}
      </a>
      {/* <p className="italic text-sm">{desc}</p> */}
    </div>
  );
};

export default ProjectCard;
