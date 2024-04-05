import React from "react";
import ProjectsCount from "./ProjectsCount";
import ComponentHeader from "../ComponentHeader/ComponentHeader";
import Common from "../../Common";
import hartLand from "./../../Assets/hartLand_Img.jpg";
import grazing from "./../../Assets/grazing_Img.jpg";
import restFull from "./../../Assets/restFull_Img.jpg";
import sandyGate from "./../../Assets/sandyGate_Img.jpg";
import homeLogo from "./../../Assets/home_icon.png";
import { useNavigate } from "react-router-dom";

const Recent_Projects = () => {
  const navigate = useNavigate();
  const ProjectImage = (src, alt, overlayText) => {
    // console.log(ProjectRouting(alt));
    return (
      <div
        onClick={() =>
          navigate(`/projects/${ProjectRouting(alt)}`, {
            state: ProjectRouting(alt),
          })
        }
        className="project-image"
      >
        <img src={src} alt={alt} />
        <div className="project-overlay">
          <span className="overlay-text-proj">{overlayText}</span>
        </div>
      </div>
    );
  };

  const ProjectRouting = (text) => text.replace(" ", "_");

  const projectsFunc = (text, num) => {
    console.log(ProjectRouting(text));
    return (
      <div
        onClick={() =>
          navigate(`/projects/${ProjectRouting(text)}`, {
            state: ProjectRouting(text),
          })
        }
        className="allprojects-container"
      >
        <div className="allprojects-div">
          <img src={homeLogo} className="home-logo" alt="Home Icon" />
        </div>
        <p className="project-title">{`Project  - ${num} ${text}`}</p>
      </div>
    );
  };

  const { HarlandText, SandyGateText, RestfulText, GrazingText } = Common;
  return (
    <>
      <ProjectsCount />
      <ComponentHeader text={Common.recentProjects} />
      <div className="col-12 project-container">
        <div className="col-6">
          <div className="row" style={{ justifyContent: "end" }}>
            {ProjectImage(hartLand, HarlandText, HarlandText)}
          </div>
        </div>
        <div className="col-6">
          <div className="row" style={{ justifyContent: "start" }}>
            {ProjectImage(sandyGate, SandyGateText, SandyGateText)}
          </div>
        </div>
      </div>
      <div className="col-12 project-container">
        <div className="col-6">
          <div className="row" style={{ justifyContent: "end" }}>
            {ProjectImage(restFull, RestfulText, RestfulText)}
          </div>
        </div>
        <div className="col-6">
          <div className="row" style={{ justifyContent: "start" }}>
            {ProjectImage(grazing, GrazingText, GrazingText)}
          </div>
        </div>
      </div>

      <div className="proj-text">
        <div className="project-con">
          {projectsFunc(HarlandText, 1)}
          {projectsFunc(SandyGateText, 2)}
          {projectsFunc(RestfulText, 3)}
          {projectsFunc(GrazingText, 4)}
        </div>
      </div>
    </>
  );
};

export default Recent_Projects;
