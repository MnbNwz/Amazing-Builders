import React from "react";
import ProjectsCount from "./ProjectsCount";
import ComponentHeader from "../ComponentHeader/ComponentHeader";
import Common from "../../Common";
import hartLand from "./../../Assets/hartLand_Img.jpg";
import grazing from "./../../Assets/grazing_Img.jpg";
import restFull from "./../../Assets/restFull_Img.jpg";
import sandyGate from "./../../Assets/sandyGate_Img.jpg";
import ProjectImage from "./ProjectImage";

const Recent_Projects = () => {
  return (
    <>
      <ProjectsCount />
      <ComponentHeader text={Common.recentProjects} />
      <div className="col-12 project-container">
        <div className="col-6">
          <div className="row">
            <div className="project-image-container">
              <ProjectImage
                src={hartLand}
                alt="Image 1"
                overlayText="Image 1"
              />
              <ProjectImage src={grazing} alt="Image 2" overlayText="Image 2" />
              <ProjectImage
                src={restFull}
                alt="Image 1"
                overlayText="Image 1"
              />
              <ProjectImage
                src={sandyGate}
                alt="Image 2"
                overlayText="Image 2"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recent_Projects;
