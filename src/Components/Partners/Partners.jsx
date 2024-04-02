import React from "react";
import "./Partners.css";
import Common from "../../Common";
import picture from "../../Assets/projects.png";

const Partners = () => {
  return (
    <div style={{ backgroundColor: "#f7f7f7", color: "black" }}>
      <div
        className="col-12"
        style={{
          paddingTop: "50px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            letterSpacing: "0.05em",
            fontWeight: "900",
            fontSize: "xxx-large",
          }}
        >
          {Common.partners}
        </h2>
        <div
          style={{
            height: "10px",
            width: "120px",
            backgroundColor: "#edcd1f",
            margin: "10px 0 20px 0",
          }}
        />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-9">
            <img src={picture} alt="Projects" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
