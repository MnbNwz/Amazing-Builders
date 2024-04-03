import { useRef } from "react";
import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs.jsx";
import ContactForm from "./Components/Contact_Us/ContactForm.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Header from "./Components/Header/Header.jsx";
import Intro from "./Components/Intro/Intro.jsx";
import Partners from "./Components/Partners/Partners.jsx";
import RecentProjects from "./Components/RecentProjects/RecentProjects.jsx";
import Services from "./Components/Services/Services.jsx";

const App = () => {
  const IntroToService = useRef(null);

  const handleScrollToColumn = () => {
    if (IntroToService.current) {
      const yOffset = -95;
      const element = IntroToService.current;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      smoothScrollTo(y);
    }
  };
  const smoothScrollTo = (targetPosition) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; // Adjust this value to change the duration of smooth scrolling
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      window.scrollTo(
        0,
        easeInOut(startPosition, distance, progress, duration)
      );

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  const easeInOut = (start, change, currentTime, duration) => {
    currentTime /= duration / 2;
    if (currentTime < 1)
      return (change / 2) * currentTime * currentTime + start;
    currentTime--;
    return (-change / 2) * (currentTime * (currentTime - 2) - 1) + start;
  };
  return (
    <div>
      <Header />
      <Intro scrollToComponent2={handleScrollToColumn} />
      <div ref={IntroToService}>
        <Services />
      </div>
      <AboutUs />
      <RecentProjects />
      <Partners />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
