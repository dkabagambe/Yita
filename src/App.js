import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Component Imports
import Header from "./component/sections/Header/Header";
import Footer from "./component/sections/Footer/Footer";
import ScrollToTop from "./scroll";
import WhatsApp from "./component/WhatsApp/WhatsApp";
import Main from "./component/sections/Main/Main";

// Page Imports
import Contact from "./component/Page/Contact/Contact";
import Service from "./component/Page/Services/Service";
import About from "./component/Page/AboutUs/About";
import Appoint from "./component/Appointment/Appoint";
import Reciept from "./component/Reciept/Reciept";
import ImageUpload from "./component/Upload/Upload";
import Dashboard from "./component/Panel/Dashboard";
import Panel from "./component/Panel/Panel";
import Activity from "./component/Page/Activities/Activity";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <ScrollToTop>
        <Header />
        <Routes>
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Services" element={<Service />} />
          <Route path="/AboutUS" element={<About />} />
          <Route path="/Appointment" element={<Appoint />} />
          <Route path="/Reciept" element={<Reciept />} />
          <Route path="/Up" element={<ImageUpload />} />
          <Route
            path="/Admin"
            element={
              localStorage.getItem("logged") === "true" ? (
                <Dashboard />
              ) : (
                <Panel />
              )
            }
          />
          <Route path="/" element={<Main />} />
          <Route path="/Activity" element={<Activity />} />
        </Routes>
        <Footer />
        <WhatsApp />
      </ScrollToTop>
    </Router>
  );
}

export default App;
