import React from "react";
import { useLocation } from "react-router";

const ApiResponsePage = () => {
  const location = useLocation();
  console.log(location);

  return <div>{location.state}</div>;
};

export default ApiResponsePage;
