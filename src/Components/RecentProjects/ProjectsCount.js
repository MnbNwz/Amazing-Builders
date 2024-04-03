import React from "react";
import "./RecentProjects.css";

const ProjectsCount = () => {
  return (
    <div className="col-12" style={{ backgroundColor: "black" }}>
      <div className="row">
        <div className="col-12">
          <div className="row row-container">
            <div>
              <h1 className="heading-1 headings">2019</h1>
              <h2 className="heading-2 headings">
                Year <br /> Established
              </h2>
            </div>
            <div className="project-dash" />
            <div style={{ display: "block" }}>
              <h1 className="heading-1 headings">+50</h1>
              <h2 className="heading-2 headings">
                Projects <br /> Completed
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCount;
