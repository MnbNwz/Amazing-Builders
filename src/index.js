import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HartLand from "./Components/RecentProjects/RoutProjects/HartLand.jsx";
import Grazing from "./Components/RecentProjects/RoutProjects/Grazing.jsx";
import SandyGate from "./Components/RecentProjects/RoutProjects/SandyGate.jsx";
import Restfull from "./Components/RecentProjects/RoutProjects/Restfull.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/restful" element={<Restfull />} />
        <Route path="/sandygate" element={<SandyGate />} />
        <Route path="/grazing" element={<Grazing />} />
        <Route path="/hartland" element={<HartLand />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
