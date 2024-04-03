import React from "react";
import ComponentHeader from "../ComponentHeader/ComponentHeader";
import Common from "../../Common";
import Card from "./Card";

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
    <div style={{ marginBottom: "150px" }}>
      <ComponentHeader text={services} />
      <div className="container">
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-9">
            <div
              className="row"
              style={{
                gap: "20px",
                alignItems: "flex-start",
              }}
            >
              <Card
                imgURL={servicesImg1}
                title={preconstructionPlanning}
                text={preconstructionPlanningText}
              />
              <Card
                imgURL={servicesImg2}
                title={architectureModeling}
                text={architectureModelingText}
              />
              <Card
                imgURL={servicesImg3}
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
