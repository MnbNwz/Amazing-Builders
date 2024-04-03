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
  return (
    <div>
      <Header />
      <Intro />
      <Services />
      <AboutUs />
      <RecentProjects />
      <Partners />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
