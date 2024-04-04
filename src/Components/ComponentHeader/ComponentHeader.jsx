import React from "react";
import "./ComponentHeader.css";

const ComponentHeader = ({ side, text }) => {
  return (
    <div
      className={
        side
          ? `col-9 component-header-container`
          : "col-9 aligning-container component-header-container"
      }
    >
      <h2 className="component-heading">{text}</h2>
      <div className="component-heading-dash-div" />
    </div>
  );
};

export default ComponentHeader;
