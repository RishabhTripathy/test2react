// src/components/MobileView.js
import React from "react";
import Player from "./player";

const MobileView = ({ projects }) => {
  return (
    <div className="flex flex-col bg-black px-4  pt-32 space-y-4">
      {projects.map((project) => (
        <div key={project.id} className="">
          <Player
            title={project.title}
            description={project.description}
            url={project.link}
          />
        </div>
      ))}
    </div>
  );
};

export default MobileView;
