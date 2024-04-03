import React from "react";
import ProjectsCount from "./ProjectsCount";
import ComponentHeader from "../ComponentHeader/ComponentHeader";
import Common from "../../Common";

const Recent_Projects = () => {
  return (
    <>
      <ProjectsCount />
      <ComponentHeader text={Common.recentProjects} />
    </>
  );
};

export default Recent_Projects;
