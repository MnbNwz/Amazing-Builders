import React from "react";

const Card = ({ imgURL, title, text }) => {
  return (
    <div style={{ backgroundColor: "#f7f7f7", height: "35em" }}>
      <div className="row">
        <div className="col-12">
          <div>
            <img
              src={imgURL}
              alt={title}
              style={{ width: "20em", height: "10em" }}
            />
          </div>
          <div className="row" style={{}}>
            <div className="col-12" style={{ justifyContent: "center" }}>
              <h4
                style={{
                  margin: "30px 32px 20px 32px",
                  fontSize: "1.6em",
                  color: "#3d5975",
                }}
              >
                {title}
              </h4>
              <p style={{ margin: "0 32px 30px 32px", color: "#3b3a3a" }}>
                {text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
