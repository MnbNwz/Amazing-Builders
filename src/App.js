import { useEffect, useReducer, useRef, useState } from "react";
import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs.jsx";
import ContactForm from "./Components/Contact_Us/ContactForm.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Header from "./Components/Header/Header.jsx";
import Intro from "./Components/Intro/Intro.jsx";
import Partners from "./Components/Partners/Partners.jsx";
import RecentProjects from "./Components/RecentProjects/RecentProjects.jsx";
import Services from "./Components/Services/Services.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<RecentProjects />} />
      </Routes>
    </Router>
  );
};
// };

// export default App;

export default App;
