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

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_VALUE":
      return action.payload;
    default:
      return state;
  }
};

const App = () => {
  const componentRefs = {
    home: useRef(null),
    IntroToService: useRef(null),
    aboutUs: useRef(null),
    recentProjects: useRef(null),
    contactForm: useRef(null),
    componentRef: useRef(null),
  };

  const [currentComponent, dispatch] = useReducer(reducer, "");

  useEffect(() => {
    Object.entries(componentRefs).forEach(([key, ref]) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              dispatch({ type: "UPDATE_VALUE", payload: key });
            }
          });
        },
        { threshold: 0.5 }
      ); // Trigger when 30% of the component is visible

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    });
  }, [currentComponent]);

  const handleScrollToColumn = (ref) => {
    if (ref.current) {
      const yOffset = -95;
      const element = ref.current;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      smoothScrollTo(y);
    }
  };
  const smoothScrollTo = (targetPosition) => {
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 2000;
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

  function ComponentWrapper({ children, forwardedRef }) {
    return <div ref={forwardedRef}>{children}</div>;
  }

  return (
    <div>
      <ComponentWrapper forwardedRef={componentRefs.home}>
        <Header
          currentComponent={currentComponent}
          scrollToComponent2={(ref) => handleScrollToColumn(ref)}
          componentRefs={componentRefs}
        />
      </ComponentWrapper>
      <Intro
        scrollToComponent2={() =>
          handleScrollToColumn(componentRefs.IntroToService)
        }
      />

      <ComponentWrapper forwardedRef={componentRefs.IntroToService}>
        <Services />
      </ComponentWrapper>
      <ComponentWrapper forwardedRef={componentRefs.aboutUs}>
        <AboutUs />
      </ComponentWrapper>
      <Partners />
      <ComponentWrapper forwardedRef={componentRefs.recentProjects}>
        <RecentProjects />
      </ComponentWrapper>
      <ComponentWrapper forwardedRef={componentRefs.contactForm}>
        <ContactForm />
      </ComponentWrapper>
      <ComponentWrapper forwardedRef={componentRefs.footer}>
        <Footer />
      </ComponentWrapper>
    </div>
  );
};

export default App;
