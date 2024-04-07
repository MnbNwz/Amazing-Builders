import React from "react";
import ComponentHeader from "../ComponentHeader/ComponentHeader";
import Common from "../../Common";
import Card from "./Card";
import Preconstruction from "./../../Assets/Preconstruction Planning.jpg";
import arch from "./../../Assets/Architecture Modeling.jpg";
import construction from "./../../Assets/Contruction Management.png";
import "./Services.css";

const Services = () => {
  const {
    preconstructionPlanning,
    preconstructionPlanningText,
    architectureModeling,
    architectureModelingText,
    contructionManagement,
    contructionManagementText,
  } = Common.servicesText;
  const { services, servicesImg1, servicesImg2, servicesImg3 } = Common;
  return (
    <div className="service-main-container">
      <ComponentHeader text={services} />
      <div className="col-12">
        <div className="row service-mob center-service-container">
          <div className="col-9">
            <div className="row card-row-container">
              <Card
                mob={false}
                imgURL={Preconstruction}
                title={preconstructionPlanning}
                text={preconstructionPlanningText}
              />
              <Card
                mob={false}
                imgURL={arch}
                title={architectureModeling}
                text={architectureModelingText}
              />
              <Card
                mob={false}
                imgURL={construction}
                title={contructionManagement}
                text={contructionManagementText}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="row service-mob1 center-service-container">
          <div className="col-9">
            <div className="row">
              <Card
                mob={true}
                imgURL={Preconstruction}
                title={preconstructionPlanning}
                text={preconstructionPlanningText}
              />
            </div>
            <div className="row ">
              <Card
                mob={true}
                imgURL={arch}
                title={architectureModeling}
                text={architectureModelingText}
              />
            </div>
            <div className="row ">
              <Card
                mob={true}
                imgURL={construction}
                title={contructionManagement}
                text={contructionManagementText}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
