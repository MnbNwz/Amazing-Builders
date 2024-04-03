import React from "react";
import "./Partners.css";
import Common from "../../Common";
import picture from "../../Assets/projects.png";
import ComponentHeader from "../ComponentHeader/ComponentHeader";

const Partners = () => {
  return (
    <div className="partners-container">
      <ComponentHeader text={Common.partners} />
      <div className="container img-container">
        <div className="row justify-content-center">
          <div className="col-9">
            <img src={picture} className="partner-image" alt="Projects" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
