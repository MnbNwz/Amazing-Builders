import "./App.css";
import ContactForm from "./Components/Contact_Us/ContactForm.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Header from "./Components/Header/Header.jsx";
import Partners from "./Components/Partners/Partners.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <Partners />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
