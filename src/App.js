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
  };

  const [currentComponent, dispatch] = useReducer(reducer, "");

  const updateCurrentComponent = (newValue) => {
    dispatch({ type: "UPDATE_VALUE", payload: newValue });
  };

  useEffect(() => {
    Object.entries(componentRefs).forEach(([key, ref]) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              updateCurrentComponent(key);
            }
          });
        },
        { threshold: [0.35] }
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
      const startPosition = window.scrollY;
      const distance = y - startPosition;
      const duration = 2000;
      let start = null;

      const easeInOut = (start, distance, progress, duration) => {
        progress /= duration / 2;
        if (progress < 1) return (distance / 2) * progress * progress + start;
        progress--;
        return (-distance / 2) * (progress * (progress - 2) - 1) + start;
      };

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
    }
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

      {/* <ComponentWrapper forwardedRef={componentRefs.IntroToService}>
        <Services />
      </ComponentWrapper> */}
      <ComponentWrapper forwardedRef={componentRefs.aboutUs}>
        <AboutUs />
      </ComponentWrapper>
      <ComponentWrapper forwardedRef={componentRefs.recentProjects}>
        <RecentProjects />
      </ComponentWrapper>
      <Partners />

      <ComponentWrapper forwardedRef={componentRefs.contactForm}>
        <ContactForm />
      </ComponentWrapper>

      <Footer />
    </div>
  );
};

export default App;
