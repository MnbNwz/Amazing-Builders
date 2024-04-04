import React from "react";
import ProjectsCount from "./ProjectsCount";
import ComponentHeader from "../ComponentHeader/ComponentHeader";
import Common from "../../Common";
import hartLand from "./../../Assets/hartLand_Img.jpg";
import grazing from "./../../Assets/grazing_Img.jpg";
import restFull from "./../../Assets/restFull_Img.jpg";
import sandyGate from "./../../Assets/sandyGate_Img.jpg";
import homeLogo from "./../../Assets/home_icon.png";

const Recent_Projects = () => {
  const ProjectImage = (src, alt, overlayText) => (
    <div className="project-image" onClick={() => ProjectRouting(alt)}>
      <img src={src} alt={alt} />
      <div className="project-overlay">
        <span className="overlay-text-proj">{overlayText}</span>
      </div>
    </div>
  );

  const ProjectRouting = (text) => {
    console.log(text.split(" ")[0]);
  };

  const projectsFunc = (text) => (
    <div className="allprojects-container">
      <div className="allprojects-div">
        <img src={homeLogo} className="home-logo" alt="Home Icon" />
      </div>
      <p className="project-title">{text}</p>
    </div>
  );

  const {
    HarlandText,
    SandyGateText,
    RestfulText,
    GrazingText,
    projectHarlandText,
    projectGrazingText,
    projectRestfulText,
    projectSandyGateText,
  } = Common;
  return (
    <>
      <ProjectsCount />
      <ComponentHeader text={Common.recentProjects} />
      <div className="col-12 project-container">
        <div className="col-6">
          <div className="row">
            <div className="project-image-container">
              {ProjectImage(hartLand, HarlandText, HarlandText)}
              {ProjectImage(grazing, GrazingText, GrazingText)}

              {ProjectImage(restFull, RestfulText, RestfulText)}
              {ProjectImage(sandyGate, SandyGateText, SandyGateText)}

              <div className="project-con">
                {projectsFunc(projectHarlandText)}
                {projectsFunc(projectGrazingText)}
                {projectsFunc(projectRestfulText)}
                {projectsFunc(projectSandyGateText)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recent_Projects;
