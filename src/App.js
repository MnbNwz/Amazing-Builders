import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage.jsx";
import HartLand from "./Components/RecentProjects/RoutProjects/HartLand.jsx";
import Grazing from "./Components/RecentProjects/RoutProjects/Grazing.jsx";
import SandyGate from "./Components/RecentProjects/RoutProjects/SandyGate.jsx";
import Restfull from "./Components/RecentProjects/RoutProjects/Restfull.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/restful" element={<Restfull />} />
        <Route path="/sandygate" element={<SandyGate />} />
        <Route path="/grazing" element={<Grazing />} />
        <Route path="/hartland" element={<HartLand />} />
      </Routes>
    </Router>
  );
};

export default App;
